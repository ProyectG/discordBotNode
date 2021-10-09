const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Te devuelvo un pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
