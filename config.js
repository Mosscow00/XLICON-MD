const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "201210307869"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'itsmosscow@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '201210307869' 
global.devs = '201210307869';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lmekl6Tzk3M2NCT1RMaTFyOFBGZEp5a3NoT05xVEhNZU11eDIxd1ptcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWJFMXB0dHFFWWFGVTdsaytmOUFNUGt1ZDZ0a01iYUVlV0RRYlJmUmVRRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Smw2MTdMa3FWR0ZkR3BjSHI2NXVKZnEvM3FSaitlNlBqSCt1Y3ltR0VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkU3JjMTVWV3hVdFl4WFk2VFBMRDlONktYRGRaWndqRkE2bVhlaTAxankwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEUGw2LzJWWVZEcUR5RzFzL2N1cSs2aDV2Q0ZqTHVJdThTeWgxVzBVVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk2Q1dxTGZxdWVQblRmNTErUkwwcytxVW0wWE1aK2h3QjhkaW9ZTnRpaGM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIWVNGZmlDSFQxU2YycitMZlVMY0loblR0NkgvUGFYamdIMENhd0Nla2xBbnVzWXo4TzZ4WjJWK2VwZWN0d2RzK29JT0t5UHhsbTc2L294aFQvNldpdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNiwiYWR2U2VjcmV0S2V5IjoiWjhxOEhIZnVQa2JlTFJaMjd1SGNTbEhkanZRTGZobnQydVlVNE1UUS9idz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT3RHbm0wQUxRMkNJWjRfOWU1MEF4USIsInBob25lSWQiOiI0YjIzMTQyMC0zOGM5LTQxYTEtOGZjZC1jOWI2MTkwMjdmOWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVAxeXE4Y2c4Z3hHbXhYWU41SXU4V0JNR1ZVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjZXA3ZnRtTzFlb3FSS2M5L2tpOUFLcTRHdFE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPZmkwdWtERUtxRWhyY0dHQ1VnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2LzVTVGV4Z2g3TGM0NjlrSmhQZWk5aFlRNmZPZnI0UGZ6dlNuS2FPM1g0PSIsImFjY291bnRTaWduYXR1cmUiOiJpR0YzaWU3eUdsUTdtcUcwSHN4M0ZyWE9Ec0c4Ty9jTUFaMEtOb21aNE5pOHhYMDBjVHoxOG15RGVrUXF0b2xtcHl6VXp6MjVYWFRoTGZUc29pK2dEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGErR280cnBGWG9OTlFKWjc2MEU3TzJUais0TWVqWCtlbWtrWkMwM3RNVkREMTRWa29jV1VxanluNmFiYzBrbnM4SGl3U1NabTJYbDFtNTFTdXBtaUE9PSJ9LCJtZSI6eyJpZCI6IjIwMTIxMDMwNzg2OTo2MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDEyMTAzMDc4Njk6NjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYi8rVWszc1lJZXkzT092WkNZVDNvdllXRU9uem42K0QzODcwcHltanQxKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjA1NDk1N30=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '20' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
