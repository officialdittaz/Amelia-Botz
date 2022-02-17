const fs = require('fs')
const toMs = require('ms')

exports.cmdAdd = function(run, time, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === run) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].totalcmd += 1
        fs.writeFileSync('./database/hitToday.json', JSON.stringify(_db))
    } else {
        const bulin = ({
        	id: run,
            expired: Date.now() + toMs(time),
            totalcmd: 1
                })
        _db.push(bulin)
        fs.writeFileSync('./database/hitToday.json', JSON.stringify(_db))
    }
}

exports.expiredCmd = ( _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired && _dir[i].id === "run" ) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Total hit telah di reset`)         
            _dir.splice(position, 1)
            fs.writeFileSync('./database/hitToday.json', JSON.stringify(_dir))
        }
    }, 2000)
}


exports.getHit = function(run, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === run) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].totalcmd
    }
}




//Fitur Autoclear chat
exports.addAutoClear= (namenya, waktu, _level) => {                                                                                                                      
 obj = {  id: namenya, expired: Date.now() + toMs(waktu) }
_level.push(obj)
fs.writeFileSync('./database/hitToday.json', JSON.stringify(_level))
}

exports.autoClearChat = async ( totalchat, xdev, ChatModification, _dir) => {
   // setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired && _dir[i].id === "AutoClearChat") {
                position = i
            }
        })
        if (position !== null) {	
        //Copas dari bootstyle
            let chats = xdev.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
            grup = []
            for (let id of chats) {
                if (id.endsWith('g.us')) {
                    grup.push(id)
                } else {
                    xdev.modifyChat(id, 'delete').catch(_ => _)
                }
            }
            for (let i = 0; i < 1; i++) {
                await xdev.modifyChat(grup[i], 'clear', {
                    includeStarred: false
                }).catch(_ => _)
            }
        
       
        
        /* //Fitu buatan gua yg ini
        console.log(`Sukses clear all chat`)
        for ( let i of totalchat){
        xdev.modifyChat(i.jid, ChatModification.delete).catch(_ => _) 
        }
        */
            _dir.splice(position, 1)
            fs.writeFileSync('./database/hitToday.json', JSON.stringify(_dir))

        }
  //  }, 1000)
}

exports.checkAutoClear = function(namenya, claim) {
    let status = false
    Object.keys(claim).forEach((i) => {
        if (claim[i].id === namenya) {
            status = true
        }
    })
    return status
}





//FITUR CLAIM

//Add User Claim
exports.addUserClaim= (waktu, jam, pushname, sender, _level) => {                                                                                                                      
 obj = { name: pushname, id: sender, time: jam, expired: Date.now() + toMs(waktu) }
_level.push(obj)
fs.writeFileSync('./database/claim.json', JSON.stringify(_level))
}


exports.expiredClaim = ( _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/claim.json', JSON.stringify(_dir))
        }
    }, 2000)
}


exports.getClaim = function(id, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === id) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].time
    }
}


exports.checkClaim = function(senderNumber, claim) {
    let status = false
    Object.keys(claim).forEach((i) => {
        if (claim[i].id === senderNumber) {
            status = true
        }
    })
    return status
}



//FITUR KEAMANAN UNTUK BOT
exports.createDataId= (nama,_level) => {                                                                                                                      
 obj = { name: nama, id: [] }
_level.push(obj)
fs.writeFileSync('./database/data.json', JSON.stringify(_level))
}




exports.getDataId = function(nama, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].name === nama) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].id
    }
}


exports.addDataId = function(idgc, nama, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].name == nama){
            found = i
        }
    })
    if (found !== false) {
        _db[found].id.push(idgc)
        fs.writeFileSync('./database/data.json',JSON.stringify(_db));
    }
}


exports.removeDataId = function(nama, idgc, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].name == nama){
            found = i
        }
    })
    if (found !== false) {
        _db[found].id.splice(idgc, 1)
        fs.writeFileSync('./database/data.json',JSON.stringify(_db));
    }
}



exports.checkDataId = function(nama, idgc, _db){
    var found = false;
    var status = false
    Object.keys(_db).forEach((i) => {
        if(_db[i].name == nama){
            found = i
        }
    })
    if (found !== false) {
     for (let indexs of  _db[found].id){
     if( indexs === idgc){
     	status = true
     }
        }
    }
    return status
}



exports.checkDataName = function(nama, idgc, claim) {
    let status = false
    Object.keys(claim).forEach((i) => {
        if (claim[i].name === nama) {
            status = true
        }
    })
return status
}










