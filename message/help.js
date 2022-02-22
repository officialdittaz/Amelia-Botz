
exports.menu = (dateIslamic, thisHit, listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib, thePrefix, fs, isPremium, getLimit, limitCount, getBalance, senderNumber, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender) => {
return`*${fake}*
${week}, ${calender} 

⬡ Nama : ${pushname}
⬡ Status : ${isPremium ? '🎫 Premium':'Free'}
⬡ Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
⬡ Saldo : Rp ${getBalance(senderNumber, user).toLocaleString()}
⬡ Prefix :「  ${thePrefix}  」
⬡ Mode : ${publik ? "Public" : "Self"}
⬡ Active : ${kyun(process.uptime())}
⬡ Time : ${timeWib} WIB
⬡ Time : ${timeWit} WIT 
⬡ Time : ${timeWita} WITA
⬡ Islamic : ${dateIslamic}
⬡ Hit Today : ${thisHit.toLocaleString()}
⬡ Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}
⬡ Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
⬡ User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
⬡ User Blocked : ${JSON.parse(fs.readFileSync('./database/userblocked.json')).length} 
⬡ Cmd Blocked : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length} 

 *]───── COMMAND ─────[*
					          ▾
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*╭─❲ GROUP ❳*
*│*
*│▸* ${prefix}antilink    ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}antilinkgc   ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}antivirtex     ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}antitroli     ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}antihidetag    ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}antibadword     ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}antivo    ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}antidelete    ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}addbadword    ${explain ? "[ _Teks_ ]":""}
*│▸* ${prefix}delbadword     ${explain ? "[ _Teks_ ]":""}
*│▸* ${prefix}add    ${explain ? "[ _Reply/Nomor_ ]":""}
*│▸* ${prefix}kick    ${explain ? "[ _Reply/Tag/Nomor_ ]":""}
*│▸* ${prefix}kickme
*│▸* ${prefix}kicktime    ${explain ? "[ _Reply/Tag_ ]":""}
*│▸* ${prefix}opentime    ${explain ? "[ _1 menit/1 jam_ ]":""}
*│▸* ${prefix}closetime    ${explain ? "[ _1 menit/1 jam_ ]":""}
*│▸* ${prefix}welcome    ${explain ? "[ _On/Off_ ]":""}
*│▸* ${prefix}linkgc
*│▸* ${prefix}infogc
*│▸* ${prefix}gc    ${explain ? "[ _Open/Close/Revoke_ ]":""}
*│▸* ${prefix}setdesc    ${explain ? "[ _Query_ ]":""}
*│▸* ${prefix}setnamegc    ${explain ? "[ _Query_ ]":""}
*│▸* ${prefix}infoall    ${explain ? "[ _Query_ ]":""}
*│▸* ${prefix}sider      ${explain ? "[ _reply chat bot_ ]":""}
*│▸* ${prefix}unbanchat
*│▸* ${prefix}promote    ${explain ? "[ _Reply/Tag/Nomor_ ]":""}
*│▸* ${prefix}demote    ${explain ? "[ _Reply/Tag/Nomor_ ]":""}
*│▸* ${prefix}revoke
*│▸* ${prefix}getppgc
*│▸* ${prefix}getbio    ${explain ? "[ _Reply_ ]":""}
*│▸* ${prefix}getpp    ${explain ? "[ _Reply_ ]":""}
*│▸* ${prefix}ban    ${explain ? "[ _Reply/Tag_ ]":""}
*│▸* ${prefix}unban    ${explain ? "[ _Reply/Tag_ ]":""}
*│▸* ${prefix}listban
*│▸* ${prefix}ceksewa 
*│▸* ${prefix}voting    ${explain ? "[ _Tag|Alasan|1_ ]":""}
*│▸* ${prefix}delvote
*│▸* ${prefix}totalpesan
*│▸* vote
*│▸* devote
*│*
*╰────────────⦁*

*╭─❲ ON/OFF SYSTEM ❳*          
*│*
*│* ▸ Antibadword : ${Toxic ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Antihidetag : ${isAntihidetag ? 'Aktif' : 'OFF'}
*│* ▸ Antiasing : ${isKickarea ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Antilink : ${isAntiLink ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Antivirtex : ${AntiVirtex ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Antivo : ${isAntiviewonce ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Autotyping : ${typing ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Autovn : ${autovn ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Autosticker : ${autosticker ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Autoread : ${autoread ? 'ON ✅' : 'OFF ❌'}
*│* ▸ Forward : ${forwarding ? 'ON ✅' : 'OFF ❌'}
*│*
*╰────────────⦁*

*╭─❲ REPORT BUG ❳*
*│* 
*│▸* ${prefix}reportbug     ${explain ? "[ _Teks / Image_ ]":"[ _Teks / Foto_ ]"} 
*│*
*╰────────────⦁*

*╭─❲ RANDOM ❳*
*│* 
*│▸* ${prefix}loli   
*│▸* ${prefix}cosplay 
*│▸* ${prefix}wallml     
*│▸* ${prefix}katailham
*│▸* ${prefix}bucin
*│▸* ${prefix}anime
*│▸* ${prefix}memeindo
*│*
*╰────────────⦁*

*╭─❲ INFO ❳*    
*│*
*│▸* ${prefix}infogempa
*│▸* ${prefix}gempanow
*│▸* ${prefix}weather   ${explain ? "[ _Nama Negara_ ]":""} 
*│▸* ${prefix}cuaca
*│*
*╰────────────⦁*

*╭─❲ ANONYMOUS CHAT ❳*    
*│*
*│▸* ${prefix}anonymous
*│▸* ${prefix}start
*│▸* ${prefix}stop
*│▸* ${prefix}next
*│▸* ${prefix}sendkontak
*│*
*╰────────────⦁*

*╭─❲ NSFW ❳*    
*│*
*│▸* ${prefix}nsfwmenu 
*│*
*╰────────────⦁*


*╭─❲ GAME ❳*
*│*
*│▸* ${prefix}tebakbendera    
*│▸* ${prefix}tebakgambar     
*│▸* ${prefix}tebakanime    
*│▸* ${prefix}caklontong     
*│▸* ${prefix}family100     
*│▸* ${prefix}tebakkata     
*│▸* ${prefix}tebaklirik     
*│▸* ${prefix}siapaaku     
*│▸* ${prefix}math
*│*
*╰────────────⦁*

*╭─❲ USER LIMIT ❳*
*│*
*│▸* ${prefix}limit 
*│▸* ${prefix}claim
*│▸* ${prefix}cekprem 
*│▸* ${prefix}listprem
*│▸* ${prefix}topbalance 
*│▸* ${prefix}buylimit
*│▸* ${prefix}buygamelimit
*│▸* ${prefix}myprofil
*│*
*╰────────────⦁*

*╭─❲ MAKER ❳*
*│*
*│▸* ${prefix}sticker      ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}nobg      ${explain ? "[ _Reply Image_ ]":""} 
*│▸* ${prefix}take    ${explain ? "[ _teks|teks_ ]":""} 
*│▸* ${prefix}fdeface    ${explain ? "link|title|desc|teks":""}
*│▸* ${prefix}emoji    ${explain ? "[ _Wa Emoji_]":""} 
*│▸* ${prefix}semoji   ${explain ? "[ _emoji_ ]":""} 
*│▸* ${prefix}nuliskiri    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}nuliskanan    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}foliokiri     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}foliokanan    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}tts    ${explain ? "[ _id teks_ ]":""} 
*│*
*╰────────────⦁*

*╭─❲ STICK MAKER ❳*
*│*
*│▸* ${prefix}triggered    ${explain ? "[ _Tag/Reply_ ]":""} 
*│▸* ${prefix}wasted    ${explain ? "[ _Reply Image_ ]":""} 
*│▸* ${prefix}smeme     ${explain ? "[ _Teks | Teks_ ]":""} 
*│▸* ${prefix}comrade    ${explain ? "[ _Tag/Reply_ ]":""} 
*│▸* ${prefix}horny    ${explain ? "[ _Reply Image_ ]":""} 
*│▸* ${prefix}blur     ${explain ? "[ _Teks | Teks_ ]":""} 
*│▸* ${prefix}pixelate     ${explain ? "[ _Teks | Teks_ ]":""} 
*│▸* ${prefix}simpcard    ${explain ? "[ _Tag/Reply_ ]":""} 
*│▸* ${prefix}lolice    ${explain ? "[ _Reply Image_ ]":""} 
*│▸* ${prefix}glass     ${explain ? "[ _Teks | Teks_ ]":""} 
*│*
*╰────────────⦁*

*╭─❲ IMAGE MAKER ❳*
*│*
*│▸* ${prefix}wanted    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}utatoo    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}unsharpen    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}thanos    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}sniper    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}sharpen    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}sepia    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}scary    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}rip    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}redple    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}rejected    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}posterize    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}ps4    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}pixelize    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}missionpassed    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}moustache    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}lookwhatkarenhave    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}jail    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}invert    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}instagram    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}greyscale    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}glitch    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}gay    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}frame    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}fire    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}distort    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}dictator    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}deepfry    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}ddungeon    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}circle    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}challenger    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}burn    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}brazzers    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}beautiful    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}approved    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}3000years    ${explain ? "[_Reply Image_]":""} 
*│*
*╰────────────⦁*

*╭─❲ CONVERTER ❳*
*│*
*│▸* ${prefix}toimg    ${explain ? "reply sticker":""} 
*│▸* ${prefix}tomp3    ${explain ? "reply video":""} 
*│▸* ${prefix}toptt    ${explain ? "[ _Reply Audio_ ]":""} 
*│▸* ${prefix}slow    ${explain ? "reply video":""} 
*│▸* ${prefix}togif    ${explain ? "reply video":""} 
*│▸* ${prefix}tovideo    ${explain ? "reply sticker":""} 
*│▸* ${prefix}fast    ${explain ? "reply video":""} 
*│▸* ${prefix}reverse    ${explain ? "reply vidio":""} 
*│▸* ${prefix}pastebin    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}hode    ${explain ? "[ _Reply Audio_ ]":""} 
*│▸* ${prefix}imut    ${explain ? "[ _Reply Audio_ ]":""} 
*│▸* ${prefix}nightcore    ${explain ? "[ _Reply Audio_ ]":""} 
*│▸* ${prefix}ghost    ${explain ? "[ _Reply Audio_ ]":""} 
*│▸* ${prefix}volume    ${explain ? "[ _Reply Audio_ ]":""} 
*│*
*╰────────────⦁*

*╭─❲ STORAGE ❳*
*│*
*│▸* ${prefix}adderror    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}addstik    ${explain ? "reply sticker":""} 
*│▸* ${prefix}addvn    ${explain ? "[ _Reply Audio_ ]":""} 
*│▸* ${prefix}delvn    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}delstik    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}delerror    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}liststik
*│▸* ${prefix}listerror
*│*
*╰────────────⦁*

*╭─❲ FUN ❳*
*│*
*│▸* ${prefix}fitnah     ${explain ? "@tagmember|teks|teks":""} 
*│▸* ${prefix}hobby
*│▸* ${prefix}watak
*│▸* ${prefix}bisakah    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}apakah    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}kapankah    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}bagaimanakah    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}rate
*│▸* ${prefix}sangecek
*│▸* ${prefix}gaycek
*│▸* ${prefix}lesbicek
*│▸* ${prefix}gantengcek
*│▸* ${prefix}cantikcek
*│▸* ${prefix}jadian 
*│▸* ${prefix}ngewe
*│▸* ${prefix}wangy    ${explain ? "[ _nama_ ]":""} 
*│▸* ${prefix}truth
*│▸* ${prefix}dare  
*│▸* ${prefix}cekbapak
*│*
*╰────────────⦁*

*╭─❲ PREMIUM ❳*
*│* 
*│▸* ${prefix}pinterest    ${explain ? "[ _Teks_ ]":""}   
*│▸* ${prefix}totag    ${explain ? "reply":""} 
*│▸* ${prefix}chat    ${explain ? "nomer|teks":""} 
*│▸* ${prefix}simi    ${explain ? "teks/on/off":""} 
*│▸* ${prefix}caridoi   
*│▸* ${prefix}hidetag    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}twitterhd      ${explain ? "link":""} 
*│*
*╰────────────⦁*

*╭─❲ PRIMBON ❳*
*│* 
*│▸* ${prefix}artinama     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}artimimpi     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}namapasangan     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}tanggaljadian    ${explain ? "tanggal":""} 
*│▸* ${prefix}tipewatak      ${explain ? "nama tanggal":""} 
*│▸* ${prefix}ramalanjodoh    ${explain ? "nama tanggal nama tanggal":""} 
*│▸* ${prefix}ramalanrejeki     ${explain ? "tanggal":""} 
*│▸* ${prefix}kecocokannama     ${explain ? "nama tanggal":""} 
*│▸* ${prefix}haribaik      ${explain ? "tanggal":""} 
*│▸* ${prefix}harilarangan     ${explain ? "tanggal":""} 
*│*
*╰────────────⦁*

*╭─❲ DOWNLOAD ❳*
*│*
*│▸* ${prefix}ytmp4     ${explain ? "Link":""} 
*│▸* ${prefix}ytmp3     ${explain ? "Link":""} 
*│▸* ${prefix}play      ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}tiktok     ${explain ? "Link":""} 
*│▸* ${prefix}tiktoknowm     ${explain ? "Link":""} 
*│▸* ${prefix}ig     ${explain ? "Link":""} 
*│▸* ${prefix}igstory     ${explain ? "Link":""} 
*│▸* ${prefix}twitter          ${explain ? "Link":""} 
*│▸* ${prefix}gitclone          ${explain ? "Link":""} 
*│▸* ${prefix}spotify          ${explain ? "Link":""} 
*│*
*╰────────────⦁* 

*╭─❲ TEXT PROME ❳*
*│*
*│▸* ${prefix}blackping     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}glitch     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}glitch2     ${explain ? "teks|teks":""} 
*│▸* ${prefix}glitch3      ${explain ? "teks|teks":""} 
*│▸* ${prefix}lion       ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}3dneon     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}3dspace      ${explain ? "teks|teks":""} 
*│▸* ${prefix}neon      ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}greenneon    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}bokeh    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}hollographic   ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}bear     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}wolf      ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}joker    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}dropwater   ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}neonlight    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}thewall     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}natural     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}carbon     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}pencil     ${explain ? "[ _Teks_ ]":""} 
*│*
*╰────────────⦁* 

*╭─❲ TEXT TO PNG ❳*
*│*
*│▸* ${prefix}attp
*│▸* ${prefix}ttp
*│▸* ${prefix}ttpred
*│▸* ${prefix}ttpblue
*│▸* ${prefix}ttpyellow
*│▸* ${prefix}ttppink
*│▸* ${prefix}ttpviolet
*│▸* ${prefix}ttpgreen
*│▸* ${prefix}ttppurple
*│▸* ${prefix}ttpmagenta
*│▸* ${prefix}ttp2
*│▸* ${prefix}ttp2red
*│▸* ${prefix}ttp2blue
*│▸* ${prefix}ttp2yellow
*│▸* ${prefix}ttp2pink
*│▸* ${prefix}ttp2violet
*│▸* ${prefix}ttp2green
*│▸* ${prefix}ttp2purple
*│▸* ${prefix}ttp2magenta
*│*
*╰────────────⦁* 

*╭─❲ SEARCH ❳*
*│*
*│▸* ${prefix}ytsearch     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}google     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}igstalk     ${explain ? "username":""} 
*│▸* ${prefix}gimage     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}wiki     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}kbbi     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}brainly    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}whatanime    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}whatmusic     ${explain ? "[ _Reply Audio_ ]":""} 
*│*
*╰────────────⦁*

*╭─❲ OTHER ❳*
*│*
*│▸* ${prefix}ping
*│▸* ${prefix}inspect     ${explain ? "[ _link gc_ ]":""} 
*│▸* ${prefix}caripesan    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}kontak
*│▸* ${prefix}style    ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}shorturl     ${explain ? "link":""} 
*│▸* ${prefix}tourl     ${explain ? "[ _Reply Image/Video/Sticker_ ]":""} 
*│▸* ${prefix}linkwa     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}listsewa 
*│▸* ${prefix}tospam    ${explain ? "reply image/vidio":""} 
*│▸* ${prefix}spam     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}kodebahasa 
*│▸* ${prefix}listvn
*│▸* ${prefix}ssweb
*│▸* ${prefix}cerpen     
*│▸* ${prefix}listgc
*│▸* ${prefix}translate     ${explain ? "[ _teks/reply teks_ ]":""}   
*│▸* ${prefix}kalkulator [ _angka_ ]
*│*
*╰────────────⦁*

*╭─❲ SETTING BOT❳*
*│*
*│▸* ${prefix}setprefix    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setthumb    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setppbot     ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setfakeimg    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setimgdoc    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setimgreply    ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setimginfo     ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setreply 
*│▸* ${prefix}setbc     ${explain ? "[ _troli/lokasi/dokumen_ ]":""} 
*│▸* ${prefix}setquoted
*│▸* ${prefix}setexif
*│▸* ${prefix}setmenu      ${explain ? "[ _pdf/troli/katalog/lokasi_ ]":""} 
*│▸* ${prefix}setovo      ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setgopay      ${explain ? "[_Reply Image_]":""} 
*│▸* ${prefix}setdana       ${explain ? "[_Reply Image_]":""} 
*│*
*╰────────────⦁*

*╭─❲ OWNER ❳*
*│*
*│▸* ${prefix}on
*│▸* ${prefix}off     ${explain ? "[ _Alasan_ ]":""} 
*│▸* ${prefix}bc     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}bcgc     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}bcpc     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}pcallmem     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}block    ${explain ? "[ _Tag/Reply/Nomer_ ]":""} 
*│▸* ${prefix}unblock     ${explain ? "[ _Tag/Reply/Nomer_ ]":""} 
*│▸* ${prefix}addstory     ${explain ? "[ _Reply Image/Vidio/Teks":""} 
*│▸* ${prefix}status
*│▸* ${prefix}explain <on/off>
*│▸* ${prefix}self
*│▸* ${prefix}public
*│▸* ${prefix}sendhidetag      ${explain ? "[ _Idgc|Teks_ ]":""} 
*│▸* ${prefix}adderror     ${explain ? "[ _Teks|Teks_ ]":""} 
*│▸* ${prefix}addorder      ${explain ? "[ _Link Gc_ ]":""} 
*│▸* ${prefix}addprem      ${explain ? "[ _reply/tag/nomer_ ]":""} 
*│▸* ${prefix}addrespon     ${explain ? "[ _Teks Teks_ ]":""} 
*│▸* ${prefix}delrespon     ${explain ? "[ _Teks_ ]":""} 
*│▸* ${prefix}listrespon
*│▸* ${prefix}listuser
*│▸* ${prefix}delprem      ${explain ? "[ _Reply/Tag/Nomer_ ]":""} 
*│▸* ${prefix}giftlimit
*│▸* ${prefix}resetlimit
*│▸* ${prefix}setcmd      ${explain ? "[ _ Reply/Sticker + Commandnya_ ]":""} 
*│▸* ${prefix}delcmd      ${explain ? "[ _Reply/Sticker_ ]":""} 
*│▸* ${prefix}blockcmd      ${explain ? "[ _Command_ ]":""} 
*│▸* ${prefix}delblockcmd    ${explain ? "[ _Command_ ]":""} 
*│▸* ${prefix}delchat
*│▸* ${prefix}readall
*│▸* ${prefix}clearall
*│▸* ${prefix}clearallpc
*│▸* ${prefix}clearallbc
*│▸* ${prefix}clearallerror     
*│▸* ${prefix}clearalluser
*│▸* ${prefix}clearallblock
*│▸* ${prefix}clearallban
*│▸* ${prefix}listblockcmd  
*│▸* ${prefix}listcmd
*│▸* ${prefix}listorder
*│▸* ${prefix}out
*│▸* ${prefix}autowelcome    ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}autotyping     ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}autoread     ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}autovn     ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}autoclearall    ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}autoblockcmd     ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}antichatbot     ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}anticall     ${explain ? "[ _On/Off_ ]":""}  
*│▸* ${prefix}listbot
*│▸* ${prefix}setwelcome
*│▸* ${prefix}forward     ${explain ? "[ _On/Off_ ]":""} 
*│▸* ${prefix}forwardtotal     ${explain ? "[ _angka_ ]":""} 
*│▸* ${prefix}join    ${explain ? "[ _Linkgc_ ]":""} 
*│*
*╰────────────⦁*

*╭─❲ MODE WAR ❳*
*│*
*│▸* ${prefix}bugv1 
*│▸* ${prefix}bugv2 
*│▸* ${prefix}bugv3 
*│▸* ${prefix}bugv4 
*│▸* ${prefix}bugv5     
*│▸* ${prefix}bugvn    
*│▸* ${prefix}amaterasu 
*│*
*╰────────────⦁*

*╭─❲ THANKS TO ❳*
*│*
*│* • Dittaz
*│* • Nina Kawai
*│* • Resta Gamteng :v
*│* • Zeeone Ofc
*│* • Yudha Perdana
*│* • Yogi PW
*│* • Decode Denpa
*│* • Fernazer
*│* • X - Dev Team
*│* • XChillDs & Yuzu
*│* • Dika Ardnt
*│*
*╰────────────⦁*`
}