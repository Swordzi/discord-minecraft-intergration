import { CommandInteraction, Client, Interaction } from 'discord.js';

export default (client: Client): void => {
	client.on("interaction", async (interaction: Interaction) => {
		if (interaction.isCommand() || interaction.isContextMenuCommand()) {
			await handleSlashCommand(client, interaction);
		}
	});
};
const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {

};
