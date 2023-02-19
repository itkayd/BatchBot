const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: "All the commands this bot has!",
  showHelp: false,

  execute({ client, inter }) {
    const commands = client.commands.filter(x => x.showHelp !== false);

    const embed = new EmbedBuilder()
      .setColor('#ff0000')
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
      .setDescription('PreMade Batch Port Help. Use (/) and the list of cammands to appear')
      .addFields([{ name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') }])
      .setTimestamp()
      .setFooter({ text: 'Made By Batch *</code>', iconURL: inter.member.avatarURL({ dynamic: true }) });

    inter.reply({ embeds: [embed] });
  },
};