const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Nigeria."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348103061692" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103061692";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348103061692";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348103061692";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348103061692";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©𝕄𝕀𝕃𝕃𝕀𝔸ℕ-𝕄𝔻" , // ```『 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐌𝐈𝐋𝐋𝐈𝐀𝐍 』```", //*『ᴊᴏɪɴ • ᴍɪʟʟɪᴀɴ ɢᴄ』*\n https://chat.whatsapp.com/Elh56vn7nrb2SMq4PPBtOR
"),
 
  author : process.env.PACK_AUTHER|| "𝐌𝐈𝐋𝐋𝐈𝐀𝐍 𝐌𝐃",
  packname: process.env.PACK_NAME || "Millian",
  botname : process.env.BOT_NAME  || "𝐌𝐈𝐋𝐋𝐈𝐀𝐍-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "MILLIAN",

  sessionName:process.env.SESSION_ID || "SESSION_23_05_02_06_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0c1WW9yU3JBRmg1b2JtV0VJVjNTZUc0OTZJSXV1K2dFbXpVTEF6TG9tdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUpWRFFSUmlyWFgyc3JVTjQxek9KbjlJNERsT0VjTHh1bENuZHBDRGZ3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QVQvM2VMRlk3VmY1dmRWTDFJMnUwTGprbisvOWxvZG4xdHo3ODN5clgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMVpNL1hpWnlVTCtTaHBMYkFjWjVVRllyeVVHdGdJMnRmcS82cWlielN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNJdW1NT09qR1RrL1NiMXlWTXBjZ0d2U1Y2aHlRVGczZjNWSHB4bHhEMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ1MllsOFVoeFJvWmQzNW5zUmtvWlZhY1JOR1M1bEtUL2lyN3lScTIrMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURzY2hjWjMwZGh0TXlxZWtidndMWmF4a1gxQkVwcEdENTJpM3lkNS9YND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHFDdFcwdzVQc0hYR2NqTjlmS0xLTmVEZzM4MXltYTFGWEJyUjM4YkVUWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxpenQ4dEdlZm41c1RZaVp4ZkRvYW9Ba3FVL3gyc0RDaXhYVTVtT0lNdHBwbFdpQ3p5NTNHVk1ZNTRldEl3OGprdlJpZC8zTnFKVm11QzgyckIraEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiIvKzcySTd5eXl0Q0ZDUGFYemJvT2s5emVPVUc2RS9rUVlhTm9uS01kU1c4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuamhWZDZWY1JSR2pJMktacUVMX2ZBIiwicGhvbmVJZCI6IjdkYjEzMDI2LTU4NTUtNDViNC1iNTY0LWQwNDdiYjVlZGM2MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiaHZNcUlyY2NmaStSeUFuSlhxeGlybDBhamc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDN2UC9CMVQ5UmdYTFVrTG9zczZ2bENTZlBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJBMVJTTFRWIiwibWUiOnsiaWQiOiIyMzQ4MTAzMDYxNjkyOjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1JTExJQU4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BQdjVEWVFxL2FLcmdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBRK0ZOZHFOMzQ4M0E4UnoyUjk5aEkvR1JEQmd1RVhQczR1QjFXVzJpd0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJzV3kyajJaZnJud0I0U3ZJcWRsUS9UKzZvanJBN3dTUWNybUxreFpMWnVISUhOMUJMUEI0RDJXT0hKd3cyVzR5a0l2RjZISDhrUFV6cE9zUjMzZ0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHSUlJZGJYazFwSjFQUGNSalVpcGJWb1FRaUZlcnVvaTVTNHp2bDNnQ1hlRUVwNHh3ZmxqcWpLZER1ckl4Wm8ySHROcUcrNWQwWXNPTkllS0ZKdEVBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDMwNjE2OTI6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVVQaFRYYWpkK1BOd1BFYzlrZmZZU1B4a1F3WUxoRno3T0xnZFZsdG9zQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNzI2MDcxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIbkIifQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "axz8sJZXD9Va11Zr1fU8ZNVx",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "183JfD98Lf6FX1XKqTmXUaPyXDrPZh6YQM",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Goku",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
