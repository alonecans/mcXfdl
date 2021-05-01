exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 PENDAFTARAN 」*\n\n*Cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Nurul|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database manca-bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Nurulツ, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA MANCA BOT 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting! katanya:V`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `╭──「 *BOT INFO* 」
❑ Nama Bot: Manca
❑ Version: 3.0
❑ Sc Ori By : FxSx
❑ Owner: NuyFaa
╰─────────

╭──「 *USER INFO* 」
❑ Nama: ${pushname}
❑ Uang mu : Rp${uangku}
❑ Nomer: ${sender.split("@")[0]}
❑ XP: ${getLevelingXp(sender)}/${reqXp}
❑ Level: ${getLevelingLevel(sender)}
❑ User register : ${_registered.length}
╰─────────

╭──「 *MENU UTAMA* 」
❑ ${prefix}info
❑ ${prefix}snk
❑ ${prefix}lpr 
❑ ${prefix}request
❑ ${prefix}blocklist
❑ ${prefix}banlist
❑ ${prefix}blocklist
❑ ${prefix}grouplist
❑ ${prefix}premiumlist
❑ ${prefix}ping
❑ ${prefix}buypremium
❑ ${prefix}hargaprem
❑ ${prefix}menupict
❑ ${prefix}menuowner
╰─────────

╭──「 *MENU GRUP* 」
❑ ${prefix}welcome [1/0]
❑ ${prefix}nsfw [1/0]
❑ ${prefix}antilink [1/0]
❑ ${prefix}leveling [1/0]
❑ ${prefix}antibadword [1/0]
❑ ${prefix}simih [1/0] 
❑ ${prefix}promote [@tag]
❑ ${prefix}demote [@tag]
❑ ${prefix}tagall
❑ ${prefix}listadmin
❑ ${prefix}wakillist
❑ ${prefix}premiumlist
❑ ${prefix}linkgc
❑ ${prefix}mining
❑ ${prefix}hidetag
❑ ${prefix}grouplist
❑ ${prefix}add [62]
❑ ${prefix}kick [@tag]
❑ ${prefix}setname
❑ ${prefix}setdesc
❑ ${prefix}setpp
❑ ${prefix}listadmin
❑ ${prefix}linkgc
❑ ${prefix}leave
❑ ${prefix}mining
❑ ${prefix}level
❑ ${prefix}grup [buka/tutup)
╰─────────

╭──「 *NEW MENU* 」
❑ ${prefix}nsfwloli
❑ ${prefix}asupan
❑ ${prefix}wiki
❑ ${prefix}spamcall
❑ ${prefix}tebakgambar
❑ ${prefix}babi
❑ ${prefix}caklontong
❑ ${prefix}katailham
❑ ${prefix}katabijak
❑ ${prefix}fakta
❑ ${prefix}mimpi
❑ ${prefix}husbu
❑ ${prefix}imagemountain
❑ ${prefix}loli
❑ ${prefix}imagegame
❑ ${prefix}imagecyberspace
❑ ${prefix}imageislamic
❑ ${prefix}blackpink
❑ ${prefix}randomexo
❑ ${prefix}randombts
❑ ${prefix}menuownerwaifu
❑ ${prefix}goldplaybutton
❑ ${prefix}silverplaybutton
❑ ${prefix}shadow
❑ ${prefix}cup
❑ ${prefix}cup1
❑ ${prefix}romance
❑ ${prefix}smoke
❑ ${prefix}burnpaper
❑ ${prefix}lovemessage
❑ ${prefix}undergrass
❑ ${prefix}coffe
❑ ${prefix}woodheart
❑ ${prefix}text2gif
❑ ${prefix}flowerheart
❑ ${prefix}woodenboard
❑ ${prefix}summer3d
❑ ${prefix}nature3d
❑ ${prefix}wolfmetal
❑ ${prefix}hologram
❑ ${prefix}underwater
❑ ${prefix}golderrose
❑ ${prefix}summernature
❑ ${prefix}letterleaves
❑ ${prefix}glowingneon
❑ ${prefix}fallleaves
❑ ${prefix}flamming
❑ ${prefix}nulis
❑ ${prefix}nulis2
❑ ${prefix}nulis3
❑ ${prefix}nulis4
❑ ${prefix}sticker
❑ ${prefix}stickergif
❑ ${prefix}toimg
❑ ${prefix}hartatata
❑ ${prefix}hartatata2
❑ ${prefix}hartatata3
❑ ${prefix}text2gif
❑ ${prefix}tolol
❑ ${prefix}quotemaker
❑ ${prefix}galaxtext
❑ ${prefix}pupycut
❑ ${prefix}galaxstyle
❑ ${prefix}hologram
❑ ${prefix}textbyname
❑ ${prefix}herrypoter
❑ ${prefix}greanneon
❑ ${prefix}logoepep
❑ ${prefix}logoepep2
❑ ${prefix}logoepep3
❑ ${prefix}logoepep4
❑ ${prefix}logoepep5
❑ ${prefix}gamelogo
❑ ${prefix}pornlogo
❑ ${prefix}metallogo
❑ ${prefix}ssweb
❑ ${prefix}hilih [teks]
❑ ${prefix}alay [teks]
❑ ${prefix}say [teks]
❑ ${prefix}wiki [teks]
❑ ${prefix}kbbi [teks]
❑ ${prefix}map [teks]
❑ ${prefix}kalkulator
❑ ${prefix}lirik [teks]
❑ ${prefix}brainly [teks]l
❑ ${prefix}bitly
❑ ${prefix}cuttly
❑ ${prefix}meme
❑ ${prefix}darkjoke
❑ ${prefix}tinyurl
❑ ${prefix}shrtco
❑ ${prefix}chord [teks]
❑ ${prefix}katabijak 
❑ ${prefix}faktaunik 
❑ ${prefix}coronainfo
❑ ${prefix}holoh
❑ ${prefix}halah
❑ ${prefix}huluh
❑ ${prefix}heleh
❑ ${prefix}hurufterbalik
❑ ${prefix}lirik
❑ ${prefix}alay2
❑ ${prefix}fml
❑ ${prefix}katadilan
❑ ${prefix}katabucin
❑ ${prefix}katabucin2
❑ ${prefix}cerpen
❑ ${prefix}quotes
❑ ${prefix}bacotanhacker
❑ ${prefix}quotedoraemon
❑ ${prefix}infofilm
❑ ${prefix}igvideo
❑ ${prefix}pantun
❑ ${prefix}artinama [teks]
❑ ${prefix}bahasa
❑ ${prefix}kodenegara
❑ ${prefix}infogempa
❑ ${prefix}infocuaca
❑ ${prefix}infonomor
❑ ${prefix}covidindo
❑ ${prefix}covidglobal
❑ ${prefix}ceknamaff
❑ ${prefix}namaninja
❑ ${prefix}ccgenerator
❑ ${prefix}shrtco
❑ ${prefix}newsinfo
❑ ${prefix}tribunews
❑ ${prefix}tiktokstalk
❑ ${prefix}igstalk
❑ ${prefix}nickff
❑ ${prefix}quran
❑ ${prefix}foxnews
❑ ${prefix}liputan6
❑ ${prefix}jadwalbola
❑ ${prefix}film2
❑ ${prefix}film
❑ ${prefix}newsinfo
❑ ${prefix}coronainfo
❑ ${prefix}github
❑ ${prefix}kurs
❑ ${prefix}cersex
❑ ${prefix}ceritahorror
❑ ${prefix}infofilm2
❑ ${prefix}heroml
❑ ${prefix}newsinfo
❑ ${prefix}ceknamaml
❑ ${prefix}gantengcek
❑ ${prefix}cantikcek
❑ ${prefix}sangecek
❑ ${prefix}gaycek
❑ ${prefix}lesbicek
❑ ${prefix}watak
❑ ${prefix}hobby
❑ ${prefix}apakah
❑ ${prefix}kapankah
❑ ${prefix}bisakah
❑ ${prefix}bagaimanakah
❑ ${prefix}rate
❑ ${prefix}1cak
❑ ${prefix}img [teks]
❑ ${prefix}ytmp3 [link]
❑ ${prefix}ytmp4 [link]
❑ ${prefix}tiktoknowm [link]
❑ ${prefix}play [teks]
❑ ${prefix}fototiktok
❑ ${prefix}igpost [teks]
❑ ${prefix}igtv
❑ ${prefix}joox [teks]
❑ ${prefix}mutual
❑ ${prefix}next
❑ ${prefix}loli
❑ ${prefix}neko
❑ ${prefix}waifu
❑ ${prefix}animecry
❑ ${prefix}animehug
❑ ${prefix}osakana
❑ ${prefix}naruto
❑ ${prefix}anime
❑ ${prefix}husbu
❑ ${prefix}animegirl
❑ ${prefix}animeboy
❑ ${prefix}nekonime
❑ ${prefix}randomkpop
❑ ${prefix}randombts
❑ ${prefix}randomexo
❑ ${prefix}blackpink
❑ ${prefix}doraemon
❑ ${prefix}pokemon
❑ ${prefix}anjing
❑ ${prefix}kucing
❑ ${prefix}hamster
❑ ${prefix}kelinci
❑ ${prefix}mobil
❑ ${prefix}motor
❑ ${prefix}sepeda
❑ ${prefix}aesthetic
❑ ${prefix}bluesky
❑ ${prefix}flower
❑ ${prefix}icecream
❑ ${prefix}pemandangan
❑ ${prefix}quotes
❑ ${prefix}quoteskehidupan
❑ ${prefix}quotesislami
❑ ${prefix}katabijak
❑ ${prefix}katailham
❑ ${prefix}quotesnasehat
❑ ${prefix}quotesmotivasi
❑ ${prefix}limit
❑ ${prefix}buylimit
❑ ${prefix}buypremiumlimit
❑ ${prefix}transfer
❑ ${prefix}leaderboard
❑ ${prefix}gtts
❑ ${prefix}kusonime 
❑ ${prefix}neonime
❑ ${prefix}wait
❑ ${prefix}apkpure [teks]
❑ ${prefix}happymod [teks]
❑ ${prefix}moddroid [teks]
❑ ${prefix}blowjob
❑ ${prefix}randomhentai
❑ ${prefix}sfw
❑ ${prefix}nsfw
❑ ${prefix}randomsfw
❑ ${prefix}randomnsfw
❑ ${prefix}nsfwneko
❑ ${prefix}truth
❑ ${prefix}dare
❑ ${prefix}slap
❑ ${prefix}tampar
❑ ${prefix}nangis
❑ ${prefix}cium
❑ ${prefix}simi
❑ ${prefix}afk
❑ ${prefix}wame
❑ ${prefix}qrcode
❑ ${prefix}profile
❏ ${prefix}adds
❏ ${prefix}slist
❏ ${prefix}gets
❏ ${prefix}addvn
❏ ${prefix}vnlist
❏ ${prefix}getvn
❏ ${prefix}addimg
❏ ${prefix}imglist
❏ ${prefix}gimg
❏ ${prefix}addvid
❏ ${prefix}vidlist
❏ ${prefix}getvid
╰─────────

╭──「 *MENU OWNER* 」
❑ ${prefix}setreply
❑ ${prefix}setppbot
❑ ${prefix}addbadword
❑ ${prefix}delbadword
❑ ${prefix}listbadword
❑ ${prefix}ban
❑ ${prefix}listban
❑ ${prefix}unban
❑ ${prefix}block
❑ ${prefix}unblock
❑ ${prefix}setprefix
❑ ${prefix}leave
❑ ${prefix}kickall
❑ ${prefix}event [1/0]
❑ ${prefix}bc
❑ ${prefix}bcgc
❑ ${prefix}clone
❑ ${prefix}clearall
╰─────────
╭──「 *THANKS TO* 」
❑ FXSX
❑ FDL/RIFAUL
❑ NUY
❑ ARDAN
╰─────────
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +3
  ❏ Pangkat :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/6283815956151\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
