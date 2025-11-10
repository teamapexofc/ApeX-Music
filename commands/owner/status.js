
const { ActionRowBuilder, StringSelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, ActivityType } = require('discord.js');
const BaseCommand = require("../../assets/baseCmd");

module.exports = class Status extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "status",
            aliases: ["presence"],
            cat: "owner",
            desc: "Change the bot's status/presence using a form",
            ownerOnly: true,
            usage: "status"
        });
    }

    async run(message) {
        const activityRow = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('status-type')
                    .setPlaceholder('Select presence type')
                    .addOptions([
                        { label: 'Playing', value: 'PLAYING' },
                        { label: 'Watching', value: 'WATCHING' },
                        { label: 'Listening', value: 'LISTENING' },
                        { label: 'Streaming', value: 'STREAMING' },
                    ]),
            );

        const statusRow = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('status-state')
                    .setPlaceholder('Select status state')
                    .addOptions([
                        { label: 'Online', value: 'online' },
                        { label: 'Idle', value: 'idle' },
                        { label: 'Do Not Disturb', value: 'dnd' },
                        { label: 'Invisible', value: 'invisible' },
                    ]),
            );

        const msg = await message.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setColor(this.client.config.color)
                    .setDescription('Please select a presence type and status')
            ],
            components: [activityRow, statusRow]
        });

        let selectedActivity = null;
        let selectedStatus = 'online';

        const collector = msg.createMessageComponentCollector({
            time: 60000
        });

        collector.on('collect', async interaction => {
            if (interaction.customId === 'status-state') {
                selectedStatus = interaction.values[0];
                await interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(this.client.config.color)
                            .setDescription(`Status state set to: ${selectedStatus}`)
                    ],
                    ephemeral: true
                });
            }

            if (interaction.customId === 'status-type') {
                selectedActivity = interaction.values[0];
                const modal = new ModalBuilder()
                    .setCustomId('presence-modal')
                    .setTitle('Update Bot Presence');

                const statusInput = new TextInputBuilder()
                    .setCustomId('status-text')
                    .setLabel('Status Text')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(true);

                const urlInput = new TextInputBuilder()
                    .setCustomId('status-url')
                    .setLabel('Stream URL (only for streaming)')
                    .setStyle(TextInputStyle.Short)
                    .setRequired(false);

                const firstRow = new ActionRowBuilder().addComponents(statusInput);
                const secondRow = new ActionRowBuilder().addComponents(urlInput);

                modal.addComponents(firstRow, secondRow);
                await interaction.showModal(modal);

                const filter = i => i.customId === 'presence-modal';
                const modalResponse = await interaction.awaitModalSubmit({ filter, time: 60000 }).catch(() => null);

                if (modalResponse) {
                    const text = modalResponse.fields.getTextInputValue('status-text');
                    const url = modalResponse.fields.getTextInputValue('status-url');
                    const type = ActivityType[selectedActivity];

                    await this.client.db.presence.findOneAndUpdate({}, {
                        text,
                        type,
                        url: url || undefined,
                        status: selectedStatus
                    }, { upsert: true });

                    this.client.user.setPresence({
                        activities: [{
                            name: text,
                            type: type,
                            url: url || undefined
                        }],
                        status: selectedStatus
                    });

                    await modalResponse.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(this.client.config.color)
                                .setDescription(`${this.client.emoji.tick} Successfully updated presence!`)
                        ]
                    });
                }
            }
        });

        collector.on('end', () => {
            msg.edit({ components: [] }).catch(() => {});
        });
    }
};
