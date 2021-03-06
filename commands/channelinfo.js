const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("channelinfo")
    .setDescription("What is this channel used for?"),
  async execute(interaction) {
    await interaction
      .reply({
        content: interaction.channel.topic
          ? interaction.channel.topic
          : "No channel info.",
        ephemeral: true,
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
