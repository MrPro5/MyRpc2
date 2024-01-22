const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Jakarta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1101664960372817940')
    .setType('STREAMING')
    .setURL('https://youtube.com/watch?v=xvFZjo5PgG0') //Must be a youtube video link 
    .setState('She is mine')
    .setName('Lol')
    .setDetails(`Lol [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/640889563463811104/1101665402234343456/majo-no-tabitabi-the-journey-of-elaina_2.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('She is mine lol') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/640889563463811104/1099239219261607946/verified-verificado.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Verified my waifu') //Text when you hover the Small image
    .addButton('Watch', 'https://youtube.com/watch?v=xvFZjo5PgG0')
    .addButton('Lol', 'https://youtube.com/watch?v=xvFZjo5PgG0');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Lol[${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
