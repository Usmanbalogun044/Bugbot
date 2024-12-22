//my secript by @deltatech 𝐕𝟏𝟓
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐎𝐧𝐞𝐓𝐚𝐩𝐃𝐞𝐥𝐭𝐚𝐕𝟏𝟓🐉"
global.dana = "chat admin"
global.qris = "kosong"


// GLOBAL SETTING
global.owner = "2348155481816"
global.namabot = "𝐎𝐧𝐞𝐓𝐚𝐩𝐃𝐞𝐥𝐭𝐚𝐕𝟏𝟓🐉"
global.nomorbot = "2348155481816"
global.nameCreator = "𝐎𝐧𝐞𝐓𝐚𝐩𝐃𝐞𝐥𝐭𝐚𝐕𝟏𝟓🐉"
global.linkyt = "https://whatsapp.com/channel/0029VahZdOy4inoll8oqQr2O"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/y9gjy0sz.jpg'
global.isLink = "https://whatsapp.com/channel/0029VahZdOy4inoll8oqQr2O"
global.packname = "𝐎𝐧𝐞𝐓𝐚𝐩𝐃𝐞𝐥𝐭𝐚𝐕𝟏𝟓🐉"
global.author = "ཀ͡༑𝐎𝐧𝐞𝐓𝐚𝐩𝐃𝐞𝐥𝐭𝐚𝐕𝟏𝟓🐉"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})