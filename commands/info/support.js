const BaseCommand = require("../../assets/baseCmd");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = class Support extends BaseCommand {
    constructor(client) {
        super(client,{
            name: "support",
            aliases: [],
            cat: "info",
            args: false,
            desc: "Gives the support link for the bot support.",
            options: [],
            ownerOnly: false,
            usage: "",
            // voiceSettings: {}
        })
    }
    async run(message, args, prefix) {
        return await message.channel.send({
            embeds: [
                new EmbedBuilder().setColor(this.client.config.color).setDescription(`${this.client.emoji.info} Click on the Button below`)
            ],
            components: [
                new ActionRowBuilder().addComponents([
                    new ButtonBuilder().setLabel("Support").setStyle(ButtonStyle.Link).setURL(this.client.config.serverLink)
                ])
            ]
        });
    }
}