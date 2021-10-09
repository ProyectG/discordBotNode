const { SlashCommandBuilder } = require('@discordjs/builders');
const { domain } = require('../config.json');
const dns = require('dns');

ipDominio = "";
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('obtiene ip del momento.'),
    //.addStringOption(option => option.setName("dominio").setDescription("Dominio al cual obtener la ip")),
    async execute(interaction) {
        const getip = await getIp();
        return interaction.reply("La ip es " + ipDominio);
    },
};

function getIp() {
    return new Promise(resolve => {
        dns.lookup(domain, (err, address, family) => {
            if (err) throw err;
            this.ipDominio = address;
            resolve('resolved');
        });
    })

}