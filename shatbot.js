const request = require("request-promise");
const cheerio = require("cheerio");
var columnify = require("columnify");
const Discord = require("discord.js");
var client = new Discord.Client();


// inside a command, event listener, etc.



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

function toLower(x) {
	return x.toLowerCase();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




client.on("message", async (message) => {
	
	if (!message.content.startsWith('steam') && !message.content.startsWith('twitch')) return;
	
	//var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	var args = message.content;
	const command = args.toLowerCase();



  

  
  if (command === 'steam popular' || command === 'Steam Popular') {

	 const result = await request.get("https://store.steampowered.com/stats/");
	 var $ = cheerio.load(result);
	 const title = [];
	 const current = [];
	 const peak = [];
	 $("#detailStats > table > tbody > tr:nth-child(3) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(3) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(3) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#detailStats > table > tbody > tr:nth-child(4) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(4) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(4) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#detailStats > table > tbody > tr:nth-child(5) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(5) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(5) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(6) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(6) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(6) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(7) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(7) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(7) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 

	 $("#detailStats > table > tbody > tr:nth-child(8) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(8) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(8) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(9) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(9) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(9) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(10) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(10) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(10) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(11) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(11) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(11) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(12) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(12) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(12) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(13) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(13) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(13) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#detailStats > table > tbody > tr:nth-child(14) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(14) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(14) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(15) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(15) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(15) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(16) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(16) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(16) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 
	 
	 $("#detailStats > table > tbody > tr:nth-child(17) > td:nth-child(4) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(17) > td:nth-child(1) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   current.push(c1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#detailStats > table > tbody > tr:nth-child(17) > td:nth-child(2) > span").each((index, element) => {
	   try {
		   const p1 = $(element).text();
		   peak.push(p1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
/*
	 const popEmbed = new Discord.MessageEmbed()
		.addFields(
			{ name: 'Current', value: '```prolog\n'+current[0]+'\n'+current[1]+'\n'+current[2]+'\n'+current[3]+'\n'+current[4]+'\n'+current[5]+'\n'+current[6]+'\n'+current[7]+'\n'+current[8]+'\n'+current[9]+'```', inline: true },
			{ name: 'Peak', value: '```prolog\n'+peak[0]+'\n'+peak[1]+'```', inline: true },
			{ name: 'Game', value: '```prolog\n'+title[0]+'\n'+title[1]+'```', inline: true }
		);
	 message.channel.send(popEmbed);
	 
	 message.channel.send('```prolog\n' + 'Current:   Peak:       Game: \n'
	 + current[0] + '    ' + peak[0] + '   ' + title[0] + '\n'
	 + current[1] + '    ' + peak[1] + '   ' + title[1] + '\n'
	 + '```'	 );
*/
	var columns = columnify([{
	  Current: current[0],
	  Peak: peak[0],
	  Game: title[0]
	}, {
	  Current: current[1],
	  Peak: peak[1],
	  Game: title[1]
	}, {
	  Current: current[2],
	  Peak: peak[2],
	  Game: title[2]
	}, {
	  Current: current[3],
	  Peak: peak[3],
	  Game: title[3]
	}, {
	  Current: current[4],
	  Peak: peak[4],
	  Game: title[4]
	}, {
	  Current: current[5],
	  Peak: peak[5],
	  Game: title[5]
	}, {
	  Current: current[6],
	  Peak: peak[6],
	  Game: title[6]
	}, {
	  Current: current[7],
	  Peak: peak[7],
	  Game: title[7]
	}, {
	  Current: current[8],
	  Peak: peak[8],
	  Game: title[8]
	}, {
	  Current: current[9],
	  Peak: peak[9],
	  Game: title[9]
	}, {
	  Current: current[10],
	  Peak: peak[10],
	  Game: title[10]
	}, {
	  Current: current[11],
	  Peak: peak[11],
	  Game: title[11]
	}, {
	  Current: current[12],
	  Peak: peak[12],
	  Game: title[12]
	}, {
	  Current: current[13],
	  Peak: peak[13],
	  Game: title[13]
	}, {
	  Current: current[14],
	  Peak: peak[14],
	  Game: title[14]
	}], {config: {Current: {align: 'right'}, Peak: {align: 'right'}}, columnSplitter: '   '} )

	message.channel.send('```prolog\n'+columns+'```');



  }
  
  if (command === 'twitch popular' || command === 'Twitch Popular') {

	 const result = await request.get("https://twitchtracker.com/games/live");
	 var $ = cheerio.load(result);
	 const title = [];
	 const current = [];

	 $("#content-wrapper > div.container.ranked-list > div:nth-child(4) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(4) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(5) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(5) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#content-wrapper > div.container.ranked-list > div:nth-child(6) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(6) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(7) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(7) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(8) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(8) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });


	 $("#content-wrapper > div.container.ranked-list > div:nth-child(9) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(9) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(10) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(10) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(11) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(11) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(12) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(12) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(13) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(13) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 const result2 = await request.get("https://twitchtracker.com/games/live?page=2");
	 $ = cheerio.load(result2);

	 $("#content-wrapper > div.container.ranked-list > div:nth-child(4) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(4) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#content-wrapper > div.container.ranked-list > div:nth-child(5) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(5) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#content-wrapper > div.container.ranked-list > div:nth-child(6) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(6) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#content-wrapper > div.container.ranked-list > div:nth-child(7) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(7) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(8) > div.ri-name > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#content-wrapper > div.container.ranked-list > div:nth-child(8) > div.ri-value > div").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });


	var columns = columnify([{
	  Current: current[0],
	  Game: title[0]
	}, {
	  Current: current[1],
	  Game: title[1]
	}, {
	  Current: current[2],
	  Game: title[2]
	}, {
	  Current: current[3],
	  Game: title[3]
	}, {
	  Current: current[4],
	  Game: title[4]
	}, {
	  Current: current[5],
	  Game: title[5]
	}, {
	  Current: current[6],
	  Game: title[6]
	}, {
	  Current: current[7],
	  Game: title[7]
	}, {
	  Current: current[8],
	  Game: title[8]
	}, {
	  Current: current[9],
	  Game: title[9]
	}, {
	  Current: current[10],
	  Game: title[10]
	}, {
	  Current: current[11],
	  Game: title[11]
	}, {
	  Current: current[12],
	  Game: title[12]
	}, {
	  Current: current[13],
	  Game: title[13]
	}, {
	  Current: current[14],
	  Game: title[14]
	}], {config: {Current: {align: 'right'}}, columnSplitter: '   '} )

	message.channel.send('```prolog\n'+columns+'```');



  }  
  if (command === 'twitch streamers' || command === 'twitch channels') {

	 var result = await request.get("https://twitchtracker.com/channels/live");
	 var $ = cheerio.load(result);
	 const title = [];
	 const current = [];
	 //message.channel.send('Downloading channels...');

	 $("#channels > tbody > tr:nth-child(1) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1); 
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(1) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 
	 $("#channels > tbody > tr:nth-child(2) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(2) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#channels > tbody > tr:nth-child(3) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(3) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#channels > tbody > tr:nth-child(4) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(4) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#channels > tbody > tr:nth-child(5) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(5) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#channels > tbody > tr:nth-child(6) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(6) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#channels > tbody > tr:nth-child(7) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(7) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#channels > tbody > tr:nth-child(8) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(8) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#channels > tbody > tr:nth-child(9) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(9) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#channels > tbody > tr:nth-child(10) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(10) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#channels > tbody > tr:nth-child(11) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(11) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#channels > tbody > tr:nth-child(12) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(12) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#channels > tbody > tr:nth-child(13) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(13) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });

	 $("#channels > tbody > tr:nth-child(14) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(14) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 
	 $("#channels > tbody > tr:nth-child(15) > td:nth-child(3) > a").each((index, element) => {
	   try {
		   const t1 = $(element).text();
		   title.push(t1);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });
	 $("#channels > tbody > tr:nth-child(15) > td:nth-child(5) > span").each((index, element) => {
	   try {
		   const c1 = $(element).text();
		   const cnum = Number(c1);
		   const ccom = numberWithCommas(cnum);
		   current.push(ccom);
	   } catch (error) {
		   message.channel.send('I have bath please wait 30 seconds');
	   }
	 });


	var columns = columnify([{
	  Current: current[0],
	  Name: title[0]
	}, {
	  Current: current[1],
	  Name: title[1]
	}, {
	  Current: current[2],
	  Name: title[2]
	}, {
	  Current: current[3],
	  Name: title[3]
	}, {
	  Current: current[4],
	  Name: title[4]
	}, {
	  Current: current[5],
	  Name: title[5]
	}, {
	  Current: current[6],
	  Name: title[6]
	}, {
	  Current: current[7],
	  Name: title[7]
	}, {
	  Current: current[8],
	  Name: title[8]
	}, {
	  Current: current[9],
	  Name: title[9]
	}, {
	  Current: current[10],
	  Name: title[10]
	}, {
	  Current: current[11],
	  Name: title[11]
	}, {
	  Current: current[12],
	  Name: title[12]
	}, {
	  Current: current[13],
	  Name: title[13]
	}, {
	  Current: current[14],
	  Name: title[14]
	}], {config: {Current: {align: 'right'}}, columnSplitter: '   '} )
	
	if (current.includes()) return;


	
	message.channel.send('```prolog\n'+columns+'```');



  }
	
});

let prefix = "gameroles_"; //BOT PREFIX

var roleGame = {
    "Warzone": {
        name: "warzone", //NAME ROLE TOLOWERCASE
        id: '769028267436015616' //ROLE ID
    },
    "Apex": {
        name: "apex",
        id: '705248411141668944'
    },
    "PUBG": {
        name: "pubg",
        id: '701519891655688212'
    },
    "World of Warcraft": {
        name: "world of warcraft",
        id: '797912768854491146'
    },
    "Valorant": {
        name: "valorant",
        id: '701517336590549053'
    },
    "Dota 2": {
        name: "dota 2",
        id: '797913309445357578'
    },
    "Overwatch": {
        name: "overwatch",
        id: '797913431813390347'
    },
    "Unreal Tournament": {
        name: "unreal tournament",
        id: '797913511949762600'
    },
    "Rust": {
        name: "rust",
        id: '797913715352928316'
    },
    "Other Games": {
        name: "other games",
        id: '797913813910814790'
    }
	

};


var blackListUsers = ["297153970613387264", "240482527695994880", "168331481024823296"]; //OTHER BOTS
var blackListWords = ["spotify", "custom", "status", "noxplayer"]; //BLACKLIST ROLES UPDATE


//var client = new Discord.Client();

function collectRoleIds() {
    client.guilds.cache.forEach(function(server) {
        server.roles.cache.forEach(function(role) {
            for (var gKey in roleGame) {
                if (prefix + gKey === role.name) {
                    roleGame[gKey]['id'] = role.id;
                }
            }
        });
    });
}

function registeredGame(game) {
    game.toString();
    for (var gKey in roleGame) {
        if ((game !== null && game !== undefined) && roleGame[gKey].name === game.toString().toLowerCase()) {
            return gKey;
        }
    }

    return false;
}

function removeWords(text) {
    var str2 = text.replace(/,/g, " ");
    var str3 = str2.toLowerCase();
    str = str3.split(" ");

    for (var i = 0; i < blackListWords.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j].toLowerCase() === blackListWords[i]) {
                str.splice(j, 1);
            }
        }
    }
    return text = str.join(" ");
}


client.on('presenceUpdate', (oldPresence, newPresence) => {
    //if (JSON.stringify(oldPresence) == 'undefined') {return};

    if (JSON.stringify(oldPresence) == undefined) {
        return
    };
    if (oldPresence == 'undefined') {
        return
    };
    if (oldPresence == null && newPresence == null) {
        return
    }
    if (oldPresence == 'undefined' && newPresence == 'undefined') {
        return
    }
    if (oldPresence.activities == 'undefined' && newPresence.activities == 'undefined') {
        return
    }

    //REMOVE BOTS UPDATE
    for (var ii in blackListUsers) {
        if (oldPresence.userID.includes(blackListUsers[ii].toLowerCase())) {
            return
        }
    }


    var oldActivities = oldPresence.activities.toString();
    var newActivities = newPresence.activities.toString();

    //REMOVE WORDS
    var oldActivities = removeWords(oldActivities);
    var newActivities = removeWords(newActivities);

    if (oldActivities == newActivities) {
        return
    };



    console.log('\n########################################################################################################################\n');
    console.log('Old activities: ' + oldActivities + '\nNew activities: ' + newActivities + '\nUser: ' + newPresence.member.displayName);

    var oldGame = registeredGame(oldActivities);
    if (oldGame) {
        newPresence.member.roles.remove(roleGame[oldGame].id).catch(e => {
            console.error(e)
        });
        console.log('Remove Role');
    }

    var gameId = registeredGame(newActivities);
    if (gameId) {
        newPresence.member.roles.add(roleGame[gameId].id).catch(e => {
            console.error(e)
        });
        console.log('Add Role');
    }


});

client.on('ready', () => {
    console.log('Bot serving. Setting status...');
    client.user.setStatus('online');

    collectRoleIds();
});


client.login(process.env.BOT_TOKEN);
