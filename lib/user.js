const fs = require('fs')


//LIMIT FUNCTION
exports.isLimit = function(sender, isPremium, isOwner, limitCount, _db){
    if (isOwner) return false
    if (isPremium) return false
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let limits = i.limit
            if (limits == 0) {
                found = true
                return true
            } else {
                found = false
                return false
            }
        }
    }
/*
    if (found === false) {
        const obj = { id: sender, limit: 0 }
        _db.push(obj)
        fs.writeFileSync('./database/user.json', JSON.stringify(_db))
        return false
    }*/
}


exports.limitAdd = function(sender, _db){
    let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			_db[found].limit -= 1
			fs.writeFileSync('./database/user.json', JSON.stringify(_db))
		}
}
exports.getLimit = function(sender, limitCount, _db){
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].limit
    } else {
        return limitCount
    }
}
exports.giveLimit = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].limit += duit
        fs.writeFileSync('./database/user.json', JSON.stringify(_db))
    }
  /*
 else {
        const njt = duit - duit - duit
        const bulim = ({
            id: pemain,
            limit: njt
                })
        _db.push(bulim)
        fs.writeFileSync('./database/user.json', JSON.stringify(_db))
    }*/
}






//BALANCE/SALDO FUNCTION
exports.addBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance += duit
        fs.writeFileSync('./database/user.json', JSON.stringify(_db))
    } 
}


exports.kurangBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance -= duit
        fs.writeFileSync('./database/user.json', JSON.stringify(_db))
    }
}


exports.getBalance = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].balance
    } 
}




//GAME FUNCTION
exports.isGame = function(sender, isOwner, gcount, _db){
    if (isOwner) {return false;}
    let found = false;
    for (let i of _db){
        if(i.id === sender){
            let limits = i.glimit;
            if (limits == 0) {
                found = true;
                return true;
            }else{
                found = true;
                return false;
            }
        }
    }/*
    if (found === false){
        let obj = {id: sender, glimit:0};
        _db.push(obj);
        fs.writeFileSync('./database/glimit.json',JSON.stringify(_db));
        return false;
    }
    */
}

exports.gameAdd = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].glimit -= 1;
        fs.writeFileSync('./database/user.json',JSON.stringify(_db));
    }
}

exports.givegame = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].glimit += duit
        fs.writeFileSync('./database/user.json', JSON.stringify(_db))
    } 
 /*
else {
        const njti = duit - duit - duit
        const bulimi = ({
            id: pemain,
            glimit: njti
                })
        _db.push(bulimi)
        fs.writeFileSync('./database/glimit.json', JSON.stringify(_db))
    }
 */
}

exports.cekGLimit = function(sender, gcount, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if(_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].glimit
    } else {
        return gcount
    }
}







exports.AddHit = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].hit += 1;
        fs.writeFileSync('./database/user.json',JSON.stringify(_db));
    }
}
exports.gethitUser = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].hit
    }
}


exports.checkHit = function(senderNumber, user) {
    let status = false
    Object.keys(user).forEach((i) => {
        if (user[i].id === senderNumber) {
            status = true
        }
    })
    return status
    
}













exports.getLevelingXp = (sender, _level) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

exports.getLevelingLevel = (sender, _level) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

exports.getLevelingId = (sender, _level) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

exports.getDateId = (sender, _level) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].date
	}
}

exports.addLevelingXp = (sender, amount, _level ) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/user.json', JSON.stringify(_level))
	}
}

exports.resetLevelingXp = (sender, amount, _level ) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp -= amount
		fs.writeFileSync('./database/user.json', JSON.stringify(_level))
	}
}

exports.addLevelingLevel = (sender, amount, _level) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/user.json', JSON.stringify(_level))
	}
}

//Add User ID
exports.addUserId = (gcount, limitCount, tanggal, pushname, sender, _level) => {                                                                                                                      
 obj = { name: pushname, id: sender, date: tanggal, xp: 1, level: 1, hit: 0, balance: 0, limit: limitCount, glimit: gcount }
_level.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_level))
}




exports.userLeveling = (levelRole) => {
	var role = `Newbie ㋡`
                   if (levelRole <= 2) {
            return role = `Newbie ㋡`
        } else if (levelRole <= 4) {
            return role = `Beginner Grade 1 ⚊¹`
        } else if (levelRole <= 6) {
            return role = `Beginner Grade 2 ⚊²`
        } else if (levelRole <= 8) {
            return role = `Beginner Grade 3 ⚊³`
        } else if (levelRole <= 10) {
            return role = `Beginner Grade 4 ⚊⁴`
        } else if (levelRole <= 12) {
            return role = `Private Grade 1 ⚌¹`
        } else if (levelRole <= 14) {
            return role = `Private Grade 2 ⚌²`
        } else if (levelRole <= 16) {
            return role = `Private Grade 3 ⚌³`
        } else if (levelRole <= 18) {
            return role = `Private Grade 4 ⚌⁴`
        } else if (levelRole <= 20) {
            return role = `Private Grade 5 ⚌⁵`
        } else if (levelRole <= 22) {
            return role = `Corporal Grade 1 ☰¹`
        } else if (levelRole <= 24) {
            return role = `Corporal Grade 2 ☰²`
        } else if (levelRole <= 26) {
            return role = `Corporal Grade 3 ☰³`
        } else if (levelRole <= 28) {
            return role = `Corporal Grade 4 ☰⁴`
        } else if (levelRole <= 30) {
            return role = `Corporal Grade 5 ☰⁵`
        } else if (levelRole <= 32) {
            return role = `Sergeant Grade 1 ≣¹`
        } else if (levelRole <= 34) {
            return role = `Sergeant Grade 2 ≣²`
        } else if (levelRole <= 36) {
            return role = `Sergeant Grade 3 ≣³`
        } else if (levelRole <= 38) {
            return role = `Sergeant Grade 4 ≣⁴`
        } else if (levelRole <= 40) {
            return role = `Sergeant Grade 5 ≣⁵`
        } else if (levelRole <= 42) {
            return role = `Staff Grade 1 ﹀¹`
        } else if (levelRole <= 44) {
            return role = `Staff Grade 2 ﹀²`
        } else if (levelRole <= 46) {
            return role = `Staff Grade 3 ﹀³`
        } else if (levelRole <= 48) {
            return role = `Staff Grade 4 ﹀⁴`
        } else if (levelRole <= 50) {
            return role = `Staff Grade 5 ﹀⁵`
        } else if (levelRole <= 52) {
            return role = `Sergeant Grade 1 ︾¹`
        } else if (levelRole <= 54) {
            return role = `Sergeant Grade 2 ︾²`
        } else if (levelRole <= 56) {
            return role = `Sergeant Grade 3 ︾³`
        } else if (levelRole <= 58) {
            return role = `Sergeant Grade 4 ︾⁴`
        } else if (levelRole <= 60) {
            return role = `Sergeant Grade 5 ︾⁵`
        } else if (levelRole <= 62) {
            return role = `2nd Lt. Grade 1 ♢¹ `
        } else if (levelRole <= 64) {
            return role = `2nd Lt. Grade 2 ♢²`
        } else if (levelRole <= 66) {
            return role = `2nd Lt. Grade 3 ♢³`
        } else if (levelRole <= 68) {
            return role = `2nd Lt. Grade 4 ♢⁴`
        } else if (levelRole <= 70) {
            return role = `2nd Lt. Grade 5 ♢⁵`
        } else if (levelRole <= 72) {
            return role = `1st Lt. Grade 1 ♢♢¹`
        } else if (levelRole <= 74) {
            return role = `1st Lt. Grade 2 ♢♢²`
        } else if (levelRole <= 76) {
            return role = `1st Lt. Grade 3 ♢♢³`
        } else if (levelRole <= 78) {
            return role = `1st Lt. Grade 4 ♢♢⁴`
        } else if (levelRole <= 80) {
            return role = `1st Lt. Grade 5 ♢♢⁵`
        } else if (levelRole <= 82) {
            return role = `Major Grade 1 ✷¹`
        } else if (levelRole <= 84) {
            return role = `Major Grade 2 ✷²`
        } else if (levelRole <= 86) {
            return role = `Major Grade 3 ✷³`
        } else if (levelRole <= 88) {
            return role = `Major Grade 4 ✷⁴`
        } else if (levelRole <= 90) {
            return role = `Major Grade 5 ✷⁵`
        } else if (levelRole <= 92) {
            return role = `Colonel Grade 1 ✷✷¹`
        } else if (levelRole <= 94) {
            return role = `Colonel Grade 2 ✷✷²`
        } else if (levelRole <= 96) {
            return role = `Colonel Grade 3 ✷✷³`
        } else if (levelRole <= 98) {
            return role = `Colonel Grade 4 ✷✷⁴`
        } else if (levelRole <= 100) {
            return role = `Colonel Grade 5 ✷✷⁵`
        } else if (levelRole <= 102) {
            return role = `Brigadier Early ✰`
        } else if (levelRole <= 104) {
            return role = `Brigadier Silver ✩`
        } else if (levelRole <= 106) {
            return role = `Brigadier gold ✯`
        } else if (levelRole <= 108) {
            return role = `Brigadier Platinum ✬`
        } else if (levelRole <= 110) {
            return role = `Brigadier Diamond ✪`
        } else if (levelRole <= 112) {
            return role = `Major General Early ✰`
        } else if (levelRole <= 114) {
            return role = `Major General Silver ✩`
        } else if (levelRole <= 116) {
            return role = `Major General gold ✯`
        } else if (levelRole <= 118) {
            return role = `Major General Platinum ✬`
        } else if (levelRole <= 120) {
            return role = `Major General Diamond ✪`
        } else if (levelRole <= 122) {
            return role = `Lt. General Early ✰`
        } else if (levelRole <= 124) {
            return role = `Lt. General Silver ✩`
        } else if (levelRole <= 126) {
            return role = `Lt. General gold ✯`
        } else if (levelRole <= 128) {
            return role = `Lt. General Platinum ✬`
        } else if (levelRole <= 130) {
            return role = `Lt. General Diamond ✪`
        } else if (levelRole <= 132) {
            return role = `General Early ✰`
        } else if (levelRole <= 134) {
            return role = `General Silver ✩`
        } else if (levelRole <= 136) {
            return role = `General gold ✯`
        } else if (levelRole <= 138) {
            return role = `General Platinum ✬`
        } else if (levelRole <= 140) {
            return role = `General Diamond ✪`
        } else if (levelRole <= 142) {
            return role = `Commander Early ★`
        } else if (levelRole <= 144) {
            return role = `Commander Intermediate ⍣`
        } else if (levelRole <= 146) {
            return role = `Commander Elite ≛`
        } else if (levelRole <= 148) {
            return role = `The Commander Hero ⍟`
        } else if (levelRole <= 152) {
            return role = `Legends I 忍`
        } else if (levelRole <= 154) {
            return role = `Legends I 忍`
        } else if (levelRole <= 156) {
            return role = `Legends I 忍`
        } else if (levelRole <= 158) {
            return role = `Legends I 忍`
        } else if (levelRole <= 160) {
            return role = `Legends I 忍`
        } else if (levelRole <= 162) {
            return role = `Legends I 忍`
        } else if (levelRole <= 164) {
            return role = `Legends I 忍`
        } else if (levelRole <= 166) {
            return role = `Legends II 忍`
        } else if (levelRole <= 168) {
            return role = `Legends II 忍`
        } else if (levelRole <= 170) {
            return role = `Legends II 忍`
        } else if (levelRole <= 172) {
            return role = `Legends II 忍`
        } else if (levelRole <= 174) {
            return role = `Legends II 忍`
        } else if (levelRole <= 176) {
            return role = `Legends II 忍`
        } else if (levelRole <= 178) {
            return role = `Legends II 忍`
        } else if (levelRole <= 180) {
            return role = `Legends II 忍`
        } else if (levelRole <= 182) {
            return role = `Legends II 忍`
        } else if (levelRole <= 184) {
            return role = `Legends II 忍`
        } else if (levelRole <= 186) {
            return role = `Legends II 忍`
        } else if (levelRole <= 188) {
            return role = `Legends II 忍`
        } else if (levelRole <= 190) {
            return role = `Legends II 忍`
        } else if (levelRole <= 192) {
            return role = `Legends I 忍`
        } else if (levelRole <= 194) {
            return role = `Legends II 忍`
        } else if (levelRole <= 196) {
            return role = `Legends II 忍`
        } else if (levelRole <= 198) {
            return role = `Legends II 忍`
        } else if (levelRole <= 200) {
            return role = `Legends III 忍`
        } else if (levelRole <= 210) {
            return role = `Legends III 忍`
        } else if (levelRole <= 220) {
            return role = `Legends III 忍`
        } else if (levelRole <= 230) {
            return role = `Legends III 忍`
        } else if (levelRole <= 240) {
            return role = `Legends III 忍`
        } else if (levelRole <= 250) {
            return role = `Legends III 忍`
        } else if (levelRole <= 260) {
            return role = `Legends III 忍`
        } else if (levelRole <= 270) {
            return role = `Legends III 忍`
        } else if (levelRole <= 280) {
            return role = `Legends III 忍`
        } else if (levelRole <= 290) {
            return role = `Legends III 忍`
        } else if (levelRole <= 300) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 310) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 320) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 330) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 340) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 350) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 360) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 370) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 380) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 390) {
            return role = `Legends IV 忍`
        } else if (levelRole <= 400) {
            return role = `Legends V 忍`
        } else if (levelRole <= 410) {
            return role = `Legends V 忍`
        } else if (levelRole <= 420) {
            return role = `Legends V 忍`
        } else if (levelRole <= 430) {
            return role = `Legends V 忍`
        } else if (levelRole <= 440) {
            return role = `Legends V 忍`
        } else if (levelRole <= 450) {
            return role = `Legends V 忍`
        } else if (levelRole <= 460) {
            return role = `Legends V 忍`
        } else if (levelRole <= 470) {
            return role = `Legends V 忍`
        } else if (levelRole <= 480) {
            return role = `Legends V 忍`
        } else if (levelRole <= 490) {
            return role = `Legends V 忍`
        } else if (levelRole <= 500) {
            return role = `Legends VI 忍`
        } else if (levelRole <= 600) {
            return role = `Legends VII 忍`
        } else if (levelRole <= 700) {
            return role = `Legends VIII 忍`
        } else if (levelRole <= 800) {
            return role = `Legends IX 忍`
        } else if (levelRole <= 900) {
            return role = `Legends X 忍`
        } else if (levelRole <= 1000) {
            return role = `Mythic I 上帝`
        } else if (levelRole <= 2000) {
            return role = `Mythic II 上帝`
        } else if (levelRole <= 3000) {
            return role = `Mythic III 上帝`
        } else if (levelRole <= 4000) {
            return role = `Mythic IV 上帝`
        } else if (levelRole <= 5000) {
            return role = `Mythic V 上帝`
        } else if (levelRole <= 6000) {
            return role = `Mythic VII 上帝`
        } else if (levelRole <= 7000) {
            return role = `Mythic VIII 上帝`
        } else if (levelRole <= 8000) {
            return role = `Mythic IX 上帝`
        } else if (levelRole <= 9000) {
            return role = `Mythic X 上帝`
        } else if (levelRole <= 10000) {
            return role = `Awakened Mythic 特尔邦贡`
	    } else if (levelRole <= 99999999999) {
   	         return role = `End level 程度❗`
        }
}
	
	
	exports.userXp = (jumlahXp) => {
	       var bars = `[▒▒▒▒▒▒▒▒▒▒]`
	      if (jumlahXp <= 5) {
				return bars = `[▒▒▒▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 10) {
				return bars = `[█▒▒▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 20) {
				return bars = `[██▒▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 30) {
				return bars = `[███▒▒▒▒▒▒▒]`
			} else if (jumlahXp <= 40) {
				return bars = `[████▒▒▒▒▒▒]`
			} else if (jumlahXp <= 50) {
				return bars = `[█████▒▒▒▒▒]`
			} else if (jumlahXp <= 60) {
				return bars = `[██████▒▒▒▒]`
			} else if (jumlahXp <= 70) {
				return bars = `[███████▒▒▒]`
			} else if (jumlahXp <= 80) {
				return bars = `[████████▒▒]`
			} else if (jumlahXp <= 90) {
				return bars = `[█████████▒]`
			} else if (jumlahXp <= 100) {
				return bars = `[██████████]`
			} else if (jumlahXp <= 1000) {
				return bars = `[██████████]`
			} 
	}
	
	
	





















