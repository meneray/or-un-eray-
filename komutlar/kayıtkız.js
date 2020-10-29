const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  member.removeRole('685593863930642468')
  member.addRole('681060329807020050')
const embed = new Discord.RichEmbed()


    .addField(`**🏷 Kız  Kayıt 🏷**`,
      `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\  /n **🔸️Verilen Rol:** @LADY
/n🔸️**🔸️🔸️Alınan Rol🔸️**: @register`)
.setTitle("@LADY")
.setDescription("Kayıt bilgileri Aşagıda Gösterlimektedir")
    .setFooter("🔸️VernoxNW Registery| kayıt sistemi")
    .setColor("BLUE")
.addField(`Destek Ol`, `[Tıkla](https://discord.gg/KZaf32)`, true)
.setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(` <a:left:647823440203612170> **Kaydınız Başarıyla Gerçekleşti! İyi Eğlenceler.**`)
        .setColor('00000')
        .setTimestamp()
  .setImage("https://cdn.discordapp.com/attachments/685855823154642986/686671417537724429/maxresdefault.png")
client.channels.get('685594331868168256').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [ "k"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "ArdaDemr Kayıt Sistemi",
  usage: "ArdaDemr Kayıt Sistemi"
};