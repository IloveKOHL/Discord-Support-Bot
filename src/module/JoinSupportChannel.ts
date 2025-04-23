import { ChannelType, PermissionFlagsBits, VoiceState } from "discord.js";
import { SupChannelIdList } from "..";

export default async function joinSupportChannel(state: VoiceState) {
    // Create new channel
    if (state.member == null || process.env.SUPPORT_CATEGORY_ID == null || process.env.SUPPORT_ROLE_ID == null) return;
    

    const channel1 = await state.guild.channels.create({
        name: "Support - " + state.member.user.username,
        reason: "Support channel for " + state.member.user.username,
        type: ChannelType.GuildVoice,
        parent: process.env.SUPPORT_CATEGORY_ID,
        permissionOverwrites: [
            {
                id: state.member?.id,
                allow: [
                    PermissionFlagsBits.ViewChannel,
                    PermissionFlagsBits.Connect,
                    PermissionFlagsBits.Speak,
                ],
            },
            {
                id: process.env.SUPPORT_ROLE_ID,
                allow: [
                    PermissionFlagsBits.ViewChannel,
                    PermissionFlagsBits.Connect,
                    PermissionFlagsBits.Speak,
                ],
            },
            {
                id: state.guild.roles.everyone,
                deny: [
                    PermissionFlagsBits.ViewChannel,
                    PermissionFlagsBits.Connect,
                    PermissionFlagsBits.Speak,
                ],
            },
        ],
    });
    
    SupChannelIdList.push(channel1.id);
    await state.member.voice.setChannel(channel1.id);

}