import { VoiceState } from "discord.js";
import { SupChannelIdList } from "..";

export default async function deleteOldSupportChannel(state: VoiceState) {
    // Delete old channel
    if (state.channel) {
        if (state.channel.members.size > 0) return;
        state.channel?.delete("Support channel closed").then(() => {
            if (state.channel) {
                SupChannelIdList.splice(SupChannelIdList.indexOf(state.channel.id), 1);
            }
        }).catch((err) => {
            console.error("Error deleting channel: " + err);
        });
    }
}