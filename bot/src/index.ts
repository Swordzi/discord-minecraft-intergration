import { Client, ClientOptions } from "discord.js";
const dotenv = require('dotenv');

import ready from "./listeners/ready";
import interaction from "./listeners/interaction";

dotenv.config();
const TOKEN = process.env.TOKEN;
console.log("Bot is starting...");

const client = new Client({
	intents: []
});
ready(client);
interaction(client);

client.login(TOKEN);
console.log(client);
