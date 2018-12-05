const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : The Empire`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : The Empire ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$') {
              message.channel.send('**الأمر $help**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'by') {
              message.channel.send(' @! ๖ۣۜℜIP⇝ℳℜ_ℳⅅℳℛ👑#0590 ');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$') {
              message.channel.send('**In Commands**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});


client.on('message', function(msg) {
    const prefix = '$'
    if(msg.content.startsWith (prefix  + 'info')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:**نوع السرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ اعضاء السرفر__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ الأونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__رومات الكتابه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ الرومات الصوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ اونر السيرفر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ اى دى السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تريخ انشاء السرفر__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});


client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("513267499803082752").send({embed:iiMo});
    }
});



client.on('message', message => {
     if (message.content === "$help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$clear** ' ,' **مسح الشات** ')
.addField('     **$bc**  ' ,' **نشر رساله للأعضاء** ')
.addField('     **$info**  ' ,' **معلومات السرفر** ')
.addField('     **$id**  ' ,' **حتى تعرف الاى دى حقق** ')
.addField('     **$bot**  ' ,' **معلومات البوت** ')
.addField('     **$mute**  ' ,' **لإعطاء شخص ميوت** ')
.addField('     **$unmute**  ' ,' **لفك من شخص ميوت** ')
.addField('     **$credit**  ' ,' **حتى تعرف الكريدت تبعك** ')
.addField('     **$credit @Server Bank#2413 Money **  ' ,' **حتى تتبرع بكريدت** ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '💎🙦⟪⦩chat⦨⟫💎');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' السيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("By @! ๖ۣۜℜIP⇝ℳℜ_ℳⅅℳℛ👑#0590 ")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
	
	
	const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});


client.on('ready', () => {
var x = client.channels.get("513390366272258108");
if (x) x.join();
});


client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "💎🙦⟪⦩chat⦨⟫💎");
    logChannel.send(`Invited by: < ${inviter} >`);
  });
});



client.on('message', message => {
    if (message.content.startsWith("$bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('``الاسم👑``' , `[ ${client.user.tag} ]` , true)
        .addField('``الايدي🆔``' , `[ ${client.user.id} ]` , true)
        .addField('``سرعة البوت📨``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``السيرفرات🌐``', [client.guilds.size], true)
            .addField('``المستخدمين👥``' ,`[ ${client.users.size} ]` , true)
        .addField('``الرومات💭``' , `[ ${client.channels.size} ]` , true)
                  .addField('``البرفكس✴️``' , `[ $ ]` , true)
                  .setFooter(' ￼ ')
    })
}
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '$bot') {
              message.channel.send('**  By:@! ๖ۣۜℜIP⇝ℳℜ_ℳⅅℳℛ👑#0590 **');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});


  const fs = require('fs'); // npm i fs
const ms = require('ms'); // npm i ms
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;

  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

  
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;

    var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  } 
  
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;

      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);

    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});






client.on('message', message => {
   if (message.content === "$id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});

   client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "$mute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
      
      if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
    
     if (message.guild.member(user).roles.has(muteRole.id)) {
   return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
   } else {
       message.guild.member(user).addRole(muteRole).then(() => {
   return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
   });
     }
   
   };
   
   });
   
      client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "$unmute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
     if (message.guild.member(user).removeRole(muteRole.id)) {
   return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
   } else {
       message.guild.member(user).removeRole(muteRole).then(() => {
   return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
   });
     }
   
   };
   
   });
   
   
   
   var prefix = "$"
   client.on('message', message => {
     if (message.author.x5bz) return;
     if (!message.content.startsWith(prefix)) return;
   
     let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
   
     let args = message.content.split(" ").slice(1);
   
     if (command == "kick") {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
            
     if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
     if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
     let user = message.mentions.users.first();
     let reason = message.content.split(" ").slice(2).join(" ");
     
   
     if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");
     if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
     if(!reason) return message.reply ("**اكتب سبب الطرد**");
     if (!message.guild.member(user)
     .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
   
     message.guild.member(user).kick();
   
     const kickembed = new Discord.RichEmbed()
     .setAuthor(`KICKED!`, user.displayAvatarURL)
     .setColor("RANDOM")
     .setTimestamp()
     .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
     .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
     .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     message.channel.send({
       embed : kickembed
     })
   }
   });
    
   
   
	 client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك الصلاحيه حتى تمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تم مسح الشات",
        color: 0x06DF00,
        description: "تم المسح„ ",
        footer: {
          text: "آ©Ghost"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 




  client.on('message' , async (message) => {
var prefix = "$"
    if(message.content.startsWith(prefix + "Inv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 5) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name",""))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 20) {
message.member.addRole(message.member.guild.roles.find("name","✼| 𝐌𝐕𝐏"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
 


client.on('message', message => {
if (message.content.split(' ')[0] == '-m')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("CONNECT"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});

//جميع الحقوق محفوظه لهيكس وخبز
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "$bc")) {
                         if (!message.member.hasPermission("CONNECT"))  return;
                            let embed4 = new Discord.RichEmbed()
             .setDescription("**:white_check_mark: | جاري ارسال البرودكاست**")
           .addField("مرسل البرودكاست" , message.author)
          .addField("نص البرودكاست" ,args.join("  "))
                            .addField("عدد الاعضاء المرسل لهم :busts_in_silhouette:" ,` **[${message.guild.memberCount}]**`,true)
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            
                          }
});
 
	
	
	client.on('message', message => {
var prefix = "$"
        if(message.content.startsWith(prefix + 'h')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });
	

client.login('TOKEN');