import { config } from 'dotenv';
config(); // Load environment variables from .env file

import { Client, Events, GatewayIntentBits } from 'discord.js';
import joinSupportChannel from './module/JoinSupportChannel';
import deleteOldSupportChannel from './module/DeleteOldSupportChannel';


export const SupChannelIdList: string[] = [];


const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageTyping

]});

client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});


// Member Join Voice Channel Event
client.on(Events.VoiceStateUpdate, (oldState, newState) => {

    if (newState.channelId != null) {
        if (newState.channelId == process.env.SUPPORT_CHANNEL_ID) {
            joinSupportChannel(newState);
        }
    }

    if (oldState.channelId != null) {
        if (SupChannelIdList.includes(oldState.channelId)) {
            deleteOldSupportChannel(oldState);
        }
    }

});


client.login(process.env.BOT_TOKEN);