//my secript by @deltatech 𝐯𝟏𝟒
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟ 𝐯𝟏𝟒༑ཀ͜͡🇮🇩"
global.dana = "chat admin"
global.qris = "kosong"


// GLOBAL SETTING
global.owner = "6288809023312"
global.namabot = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟ 𝐯𝟏𝟒🇮🇩"
global.nomorbot = "6281939836226"
global.nameCreator = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ 𝐯𝟏𝟒ཀ͜͡🇮🇩💤"
global.linkyt = "https://chat.whatsapp.com/BoUOWZufSKA07QmUB2zd2J"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/wrk6cuul.jpg'
global.isLink = "https://chat.whatsapp.com/BoUOWZufSKA07QmUB2zd2J"
global.packname = "𝐃𝐞𝐥𝐭𝐚 𝐯𝟏𝟒🇮🇩"
global.author = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ 𝐯𝟏𝟒ཀ͜͡🇮🇩"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})