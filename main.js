//const keepAlive = require("./server.js");
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const embeds = require("./embeds/help.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });
let spam = () => Math.floor(Math.random() * 400000)
let ra100 = () => Math.floor(Math.random() * 100);
let random = () => Math.floor(Math.random() * 100);

const alpha = [
	"arkinated-archive",
	"venerable-nemesis",
	"corrupted-cat",
	"boreal-travel",
	"cheese-world",
	"dry-underside",
	"shark-wanderer",
	"wolf-like-technician",
	"bread-winner",
	"stingray-game",
	"handsome-turtle",
	"arrythimatic-s",
	"social-class-broker",
	"fox-gamer",
	"tree-robotics",
	"diamond-trex",
	"best-profile-picture",
	"cleaning-master",
	"famous-splitter",
	"ukranian-wasp-or-bee"	
];

const beta = [
	"to be or to not be.",
	"humanity at its finest.",
	"the world and/or the cake is a lie.",
	"forwards and backwards.",
	"the arkine is sus. maybe. but who knows otherwise.",
	"illogical answers lead to chaos.",
	"who are you?"
];

const gamma = [
	"who are we?",
	"why are you visiting this channel?",
	"~~sus arkine~~",
	"the cake is a lie",
	"unforgivable",
	"the w",
	"the ultimate /j",
	"reddit",
	"скатsus",
	"zenith gaming",
	"when the nemesis is sus!",
	"smolkeys",
	"cha-cha real smooth",
	"slide to the left, slide to the right",
	"never gonna give you up",
	"endless",
	"delve into this sus chanmel",
	"mindustry",
	"the cursed cat",
	"programming",
	"stealth is optional",
	"crash course",
	"ping arkine 20 times for free admin",
	"rainbow corvus",
	"do the vela",
	"do not the vela",
	"boris might be sus",
	"what should i do",
	"memes",
	"ultimately cringe",
	"java java man gaming",
	"lost count",
	"napstaparrot",
	"the l",
	"the bite of '87",
	"spectral",
	"min",
	"try again",
	"more quotes",
	"fox technician"
];

const delta = [
	"boi",
	"the j",
	"the w"
];

const epilson = [
	"bingus pow",
	"amogsus",
	"bada bing bada bang",
	"shuma shuma to the left, shuma shuma to the right"
];

client.on('ready', async () =>{
	let interval = setInterval(() => {
		const alp = alpha[Math.floor(Math.random() * alpha.length)];
		const bet = beta[Math.floor(Math.random() * beta.length)];
		client.channels.cache.get("881787168392089633").setName("скат-" + alp);
        client.channels.cache.get("881789221445177357").setTopic("g: " + bet);
	}, 300000);
	let interval2 = setInterval(() => {
		const gam = gamma[Math.floor(Math.random() * gamma.length)];
		client.channels.cache.get("894843092396564510").send(gam)
	}, 1000);

});

client.on("messageCreate", async (message) => {
	const epil = epilson[Math.floor(Math.random() * epilson.length)];
	if(message.content == "a quote"){
		message.reply(epil)
	}
});

client.on('ready', async () =>{
	console.log("gaming")
});

/*
client.on("messageCreate", (logr) => {
      if(logr.channel == "886454660725080196"){
      	console.log("From moderation: " + logr.content + "\n")
      } else {
	    console.log("In: " + logr.channel.name + "\nBy: " + logr.member.user.tag + "\nMsg: " + logr.content + "\n")
     }
});

client.on("messageDelete", (dlogr) => {
      if(dlogr.channel == "886454660725080196"){
        console.log("Delete:\nFrom moderation: " + dlogr.content + "\n")
      } else {
        console.log("Delete:\nIn: " + dlogr.channel.name + "\nBy: " + dlogr.member.user.tag + "\nMsg: " + dlogr.content + "\n")
     }
});
*/
/*
client.on("messageCreate", (ping) => {
  if(ping.content == "pingtest" && message.author == "691650272166019164"){
       let time = 0;
       let interval = setInterval(() => {
        ping.channel
         .send("Bot is running.")
         .catch(console.error);
       }, 20000);
     } else {
     	ping.channel.send("Only SMOLKEYS can use this command.")
     }
});
*/


client.on('messageCreate', async (message) => {
  if((message.content.toLowerCase()).includes("ckat") || message.content.includes("скат")){
    message.react('<:ckat:881789465478193202>');
    } else if((message.content.toLowerCase()).includes("man")){
    	message.react("<:whatisthis:882795457644998656>")
    	.then(() => message.react("<:gun2:882869204687142943>"))
    }
}); 



client.on("messageCreate", async (message) => {
	if(message.content == "ping"){
		message.channel.send("pong!").then(message => console.log("Someone used ping"))
  } else if(message.content == "beep"){
  	message.channel.send("boop").then(message => console.log("Someone used beep"))
  } else if(message.content == "selfdie"){
  	message.channel.send("_dies_").then(message => console.log("Someone commited death"))
  } else if(message.content == "terminate"){
  	if(message.author == "691650272166019164"){
  		message.channel.send("Terminated").then(message => process.exit())
  	} else {
  	    message.channel.send("no")	
  	}
  } else if(message.content == "ckat bread"){
  	message.channel.send("b r e a d").then(message => client.user.setAvatar("https://media.discordapp.net/attachments/881865519446228992/892996008634638336/Toast-238.png"))
  } else if(message.content == "ckat unbread"){
  	message.channel.send("ono").then(message => client.user.setAvatar("https://images-ext-2.discordapp.net/external/h0_PV7vDZBIyqTA21PQudnv-ObYEUkk9Ee5VWl2n_Yw/%3Fsize%3D256/https/cdn.discordapp.com/avatars/892792633863340033/78e756ef21e80a0980207cdf48864159.png"))
  } else if(message.content == "sei"){
  	message.channel.send("seigus")
  } else if(message.content == "boris"){
  	message.channel.send("the borisgus")
  } else if(message.content == "random100"){
  	message.channel.send("" + ra100())
  } else if(message.content == "burn"){
  	message.channel.send("get sie flamenwerfer")
  } else if(message.content == "spam"){
  	client.channels.cache.get("881789841308782592").send("" + spam())
  } else if(message.content == "help"){
  	message.channel.send({ embeds: [embeds.help()] })
  } else if(message.content == "mydata"){
  	message.channel.send("User Name/Tag: " +  message.member.user.tag)
  	.then(message.channel.send("User ID: " + message.author))
  }
});

//keepAlive();
client.login();
