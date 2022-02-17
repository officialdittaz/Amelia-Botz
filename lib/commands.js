const fs = require('fs')



/**
 * Add Commands/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const addCommands = (msg, response, userId, _data) => {
    const obj = {
        pesan: msg,
        balasan: response,
        creator: userId
    }
    _data.push(obj)
    fs.writeFileSync('./database/commands.json', JSON.stringify(_data))

    return true
}


/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 */
const deleteCommands = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].pesan === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/commands.json', JSON.stringify(_data))
        }
    })
    return true
}


/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

const checkCommands = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].pesan === commands) {
            status = true
        }
    })

    return status
}

const addDb = (cmd, _db) => {
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].name == cmd){
            found = i
        } 
    }) 
      
    if (found !== false) {
        _db[found].count += 1;
        fs.writeFileSync('./database/dashboard.json',JSON.stringify(_db));
    } else {
        obj = { name: cmd, count: 1 }
           _db.push(obj)
          fs.writeFileSync('./database/dashboard.json', JSON.stringify(_db))
}
}



const clearAllDb = (_dir) => {
    Object.keys(_dir).forEach((i) => {
        _dir.splice(_dir[i], 1)
        fs.writeFileSync('./database/dashboard.json', JSON.stringify(_dir))
    })
console.log("Sukses clear all dasboard")
}

module.exports = {
    addCommands,
    checkCommands,
    deleteCommands,
    addDb, 
clearAllDb
}