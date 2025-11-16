const BaseCommand = require("../../assets/baseCmd");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = class Invite extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "invite",
            desc: "gets the user the ivnite link for the bot",
            aliases: ["inv"],
            args: false,
            cat: "info",
            options: [],
            ownerOnly: false,
        })
    }
    async run(message, args, prefix) {
        return await message.channel.send({
            embeds: [
                new EmbedBuilder().setColor(this.client.config.color)
                .setDescription(`${this.client.emoji.info} Click the button Below.`)
            ],
            components: [
                new ActionRowBuilder().addComponents([
                    new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel("Invite Encore (Main Bot)").setURL(this.client.config.inviteLink),
                    new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel("Source Code").setURL("https://github.com/teamapexofc/ApeX-Music")
                ])
            ]
        });
    }
}