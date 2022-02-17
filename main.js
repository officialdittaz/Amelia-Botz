const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const client = new WAConnection()
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const qrcode = require("qrcode-terminal")
const fs = require("fs");
const PhoneNumber = require('awesome-phonenumber')
const fetch = require("node-fetch");
const {weton,week,calender,dateIslamic, banner, start, success, getGroupAdmins,close} = require("./lib/functions");
const { color } = require("./lib/color");
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const { ban } = require("./message/jsonfile");
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned");
//const keepAlive = require("./keepalive.js")
Anticall = settings.Anticall
joinExtream = settings.joinGcExtream
ext = settings.SetFunction.ext
const baterai = {
battery: "" || "Belom Terdeteksi",
isCharge: "Sedang di cas" || "Tidak di cas"
}


async function starts() {
	    client.autoReconnect = ReconnectMode.onConnectionLost
	    client.version = [2, 2143, 3]
	    //client.version = [ 5, 9741, 8 ];
	    client.browserDescription = ["EXTREAM","Ubuntu","18.04"]
	    client.logger.level = 'warn'
	    console.log(color(`]─`,`magenta`),`「`,  color(`EXTREAM`,`red`), `」`,  color(`─[`,`magenta`))
	    client.on('qr', () => {
	    console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Bwang'))
	    })
	    fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	    client.on('connecting', () => {
	    start(`1`,`Connecting...`)
	    })
	    client.on('open', () => {
	    success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
	    }) 
	    client.on('ws-close', () => {
        console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'))
        })    
	    await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        
        if(settings.nomerlu.startsWith("08")){
		console.log(color('Error nomer owner tidak di temukan','red'))
		console.log(color('Masukin nomernya pake 628xxx Tod, bukan pake 08xxx Ngent ','green'))
		} else if(settings.nomerlu.startsWith("62")){
		client.sendMessage(`${settings.nomerlu}@s.whatsapp.net`,"Bot berhasil tersambung", text)
		}
		      /*
        if(joinExtream){
        teks = `https://chat.whatsapp.com/Jk6TLnLOVGQGlbzh6577Qw`
        client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
         }
         */

        client.welcome = settings.setWelcome.welcomeType
        client.antidel = []
        client._reminder = []
        client.on("group-update", async (anu) => {
        require('./message/group-settings.js')(client, anu)
        });
        client.on('group-participants-update', async (anu) => {
        require('./message/group.js')(client, anu)
        });
        client.on('CB:Blocklist', json => {
	    if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	    })
	    client.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
        client.on('CB:action,,call',  json => {
	    if(!Anticall) return
        const callerId = json[2][0][1].from;
         pushname = client.contacts[callerId] != undefined ? client.contacts[callerId].notify = undefined ? PhoneNumber('+' + callerId.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[callerId].notify || client.contacts[callerId].vname : PhoneNumber('+' + callerId.replace('@s.whatsapp.net', '')).getNumber('international')
        let id = json[2][0][2][0][1]["call-id"]
        if(cekBannedUser(callerId, ban)) return
        console.log("call dari "+ callerId)
        console.log(pushname)
        addBanned (pushname, calender, callerId, ban) 
        addBlock(callerId, blocked)
        client.sendMessage(callerId, "Kamu telah di block + banned karena telpon botz", MessageType.text)
        client.blockUser(callerId, "add") // Block user
        })     
        client.on('message-delete', async (m) => {
        require('./message/antidelete.js')(client, m)
        })      
client.on('chat-update', async (message) => {
        require('./index.js')(client, message, baterai )
        })



};


starts()













