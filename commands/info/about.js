
const BaseCommand = require("../../assets/baseCmd");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = class About extends BaseCommand {
    constructor(client) {
        super(client, {
            name: "about",
            aliases: ["info", "bot"],
            cat: "info",
            args: false,
            desc: "Learn about ApeX and Encore bots",
            options: [],
            ownerOnly: false,
            usage: "",
        })
    }
    async run(message, args, prefix) {
        const embed = new EmbedBuilder()
            .setColor(this.client.config.color)
            .setTitle("🎵 About ApeX & Encore")
            .setDescription(`
**ApeX** is the open-source version of the **Encore** music bot, created by **Alive**.

**🤖 ApeX (This Bot)**
• Open source Discord music bot
• Perfect for learning and development
• Community-driven improvements
• Educational purposes

**🎵 Encore (Main Bot)**
• Production-ready with premium features
• 24/7 uptime and reliability
• Dedicated support team
• Best user experience

**👨‍💻 Creator: Alive**
The mastermind behind both bots, sharing knowledge through open source.
            `)
            .addFields([
                {
                    name: "🔗 Links",
                    value: "• [Encore (Main Bot)](https://encorebot.me)\n• [Support Server](https://support.encorebot.me)\n• [Source Code](https://github.com/teamapexofc/ApeX-Music)",
                    inline: false
                },
                {
                    name: "🎯 Purpose",
                    value: "ApeX exists to help developers learn Discord bot development and contribute to the music bot ecosystem.",
                    inline: false
                }
            ])
            .setFooter({
                text: "Made with 💘 by Alive • Open Source Version",
                iconURL: this.client.user.displayAvatarURL()
            });

        const row = new ActionRowBuilder().addComponents([
            new ButtonBuilder()
                .setLabel("Invite Encore (Main)")
                .setStyle(ButtonStyle.Link)
                .setURL(this.client.config.inviteLink),
            new ButtonBuilder()
                .setLabel("Support Server")
                .setStyle(ButtonStyle.Link)
                .setURL(this.client.config.serverLink),
            new ButtonBuilder()
                .setLabel("Source Code")
                .setStyle(ButtonStyle.Link)
                .setURL("https://github.com/teamapexofc/ApeX-Music")
        ]);

        return await message.channel.send({
            embeds: [embed],
            components: [row]
        });
    }
}
