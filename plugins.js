function _0x28eb(_0x12bda5,_0x11ced2){const _0x41d239=_0x41d2();return _0x28eb=function(_0x28eb9e,_0x50b8ab){_0x28eb9e=_0x28eb9e-0x88;let _0xae0967=_0x41d239[_0x28eb9e];return _0xae0967;},_0x28eb(_0x12bda5,_0x11ced2);}const _0x1e3a7d=_0x28eb;(function(_0x22bbea,_0x647b5e){const _0x4f561d=_0x28eb,_0x3da44c=_0x22bbea();while(!![]){try{const _0x2a42a2=-parseInt(_0x4f561d(0x100))/0x1+-parseInt(_0x4f561d(0xd7))/0x2+-parseInt(_0x4f561d(0xc0))/0x3+parseInt(_0x4f561d(0xad))/0x4*(-parseInt(_0x4f561d(0x9f))/0x5)+-parseInt(_0x4f561d(0xa2))/0x6*(-parseInt(_0x4f561d(0xb5))/0x7)+-parseInt(_0x4f561d(0x10d))/0x8*(parseInt(_0x4f561d(0xd8))/0x9)+parseInt(_0x4f561d(0xc5))/0xa*(parseInt(_0x4f561d(0xa4))/0xb);if(_0x2a42a2===_0x647b5e)break;else _0x3da44c['push'](_0x3da44c['shift']());}catch(_0xd195d7){_0x3da44c['push'](_0x3da44c['shift']());}}}(_0x41d2,0x6c061),require(_0x1e3a7d(0x11a)));const pino=require(_0x1e3a7d(0x8d)),autobio=process[_0x1e3a7d(0x9c)]['AUTOBIO']||'TRUE',{Boom}=require(_0x1e3a7d(0xb8)),fs=require('fs'),moment=require('moment-timezone'),chalk=require(_0x1e3a7d(0xdf)),FileType=require('file-type'),path=require(_0x1e3a7d(0xa6)),axios=require(_0x1e3a7d(0xdb)),figlet=require('figlet'),PhoneNumber=require(_0x1e3a7d(0xf5)),{exec,execSync}=require('child_process'),Config=require(_0x1e3a7d(0x112)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./Gallery/lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require('./Gallery/lib/myfunc'),{default:KishConnect,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,Browsers}=require('@whiskeysockets/baileys'),NodeCache=require('node-cache'),Pino=require(_0x1e3a7d(0x8d)),{parsePhoneNumber}=require(_0x1e3a7d(0xf3)),makeWASocket=require(_0x1e3a7d(0x114))[_0x1e3a7d(0x111)],store=makeInMemoryStore({'logger':pino()[_0x1e3a7d(0x119)]({'level':'silent','stream':_0x1e3a7d(0x10f)})});let phoneNumber=_0x1e3a7d(0xb4),owner=JSON[_0x1e3a7d(0x115)](fs[_0x1e3a7d(0xe7)](_0x1e3a7d(0x106)));async function startKish(){const _0x9e88c2=_0x1e3a7d,{state:_0xd7e7cb,saveCreds:_0x2b2509}=await useMultiFileAuthState(_0x9e88c2(0xc6)),_0x227b41=new NodeCache(),_0x1cfb61=makeWASocket({'logger':pino({'level':_0x9e88c2(0xfe)}),'printQRInTerminal':!![],'version':[0x2,0x96d,0x1],'browser':Browsers[_0x9e88c2(0xba)](_0x9e88c2(0xd5)),'auth':_0xd7e7cb,'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x1d3bd2=>{const _0x104e2a=_0x9e88c2;let _0x2bec55=jidNormalizedUser(_0x1d3bd2[_0x104e2a(0xca)]),_0x18771f=await store[_0x104e2a(0xf2)](_0x2bec55,_0x1d3bd2['id']);return _0x18771f?.['message']||'';},'msgRetryCounterCache':_0x227b41,'defaultQueryTimeoutMs':undefined});store[_0x9e88c2(0x8e)](_0x1cfb61['ev']),setInterval(()=>{const _0x103fe0=_0x9e88c2,_0x31a552=new Date();_0x1cfb61[_0x103fe0(0x104)](_0x103fe0(0x8b)+_0x31a552[_0x103fe0(0x88)](_0x103fe0(0xd4),{'timeZone':_0x103fe0(0x10a)})+_0x103fe0(0x94)+_0x31a552[_0x103fe0(0x88)]('en-US',{'weekday':_0x103fe0(0xc2),'timeZone':_0x103fe0(0x10a)})+'.');},0xa*0x3e8),_0x1cfb61['ev']['on'](_0x9e88c2(0xc9),async _0x16280d=>{const _0x128a16=_0x9e88c2;try{const _0x5ecc71=_0x16280d[_0x128a16(0xf4)][0x0];if(!_0x5ecc71[_0x128a16(0xfb)])return;_0x5ecc71[_0x128a16(0xfb)]=Object[_0x128a16(0xdc)](_0x5ecc71[_0x128a16(0xfb)])[0x0]===_0x128a16(0x92)?_0x5ecc71['message'][_0x128a16(0x92)][_0x128a16(0xfb)]:_0x5ecc71[_0x128a16(0xfb)];_0x5ecc71['key']&&_0x5ecc71[_0x128a16(0xa3)][_0x128a16(0xca)]===_0x128a16(0xbc)&&(autoread_status&&await _0x1cfb61[_0x128a16(0x95)]([_0x5ecc71[_0x128a16(0xa3)]]));if(!_0x1cfb61[_0x128a16(0x103)]&&!_0x5ecc71[_0x128a16(0xa3)]['fromMe']&&_0x16280d[_0x128a16(0xaf)]===_0x128a16(0xe4))return;if(_0x5ecc71[_0x128a16(0xa3)]['id'][_0x128a16(0xd3)](_0x128a16(0xcf))&&_0x5ecc71[_0x128a16(0xa3)]['id'][_0x128a16(0xe2)]===0x10)return;const _0x59e3b0=smsg(_0x1cfb61,_0x5ecc71,store);require(_0x128a16(0xc7))(_0x1cfb61,_0x59e3b0,_0x16280d,store);}catch(_0x104954){console[_0x128a16(0x113)](_0x104954);}}),_0x1cfb61[_0x9e88c2(0x10b)]=async(_0x1e0e15,_0x3e9607,_0x200773='',_0x1c9ecd={})=>{const _0x32874c=_0x9e88c2;let _0x2e1ae1=[];for(let _0x2f2321 of _0x3e9607){_0x2e1ae1[_0x32874c(0xf0)]({'displayName':await _0x1cfb61[_0x32874c(0x118)](_0x2f2321+_0x32874c(0x93)),'vcard':_0x32874c(0xc4)+await _0x1cfb61['getName'](_0x2f2321+_0x32874c(0x93))+_0x32874c(0xd0)+await _0x1cfb61['getName'](_0x2f2321+_0x32874c(0x93))+'\x0aitem1.TEL;waid='+_0x2f2321+':'+_0x2f2321+_0x32874c(0xf6)});}_0x1cfb61[_0x32874c(0xe1)](_0x1e0e15,{'contacts':{'displayName':global[_0x32874c(0xb9)],'contacts':_0x2e1ae1},..._0x1c9ecd},{'quoted':_0x200773});},_0x1cfb61[_0x9e88c2(0x108)]=_0xe29902=>{const _0x49eeab=_0x9e88c2;if(!_0xe29902)return _0xe29902;if(/:\d+@/gi[_0x49eeab(0x9b)](_0xe29902)){let _0x234db9=jidDecode(_0xe29902)||{};return _0x234db9[_0x49eeab(0xd9)]&&_0x234db9['server']&&_0x234db9[_0x49eeab(0xd9)]+'@'+_0x234db9['server']||_0xe29902;}else return _0xe29902;},_0x1cfb61['ev']['on'](_0x9e88c2(0xe6),_0x178aba=>{const _0x5d0f69=_0x9e88c2;for(let _0x2a7bfd of _0x178aba){let _0x44be3d=_0x1cfb61['decodeJid'](_0x2a7bfd['id']);if(store&&store['contacts'])store['contacts'][_0x44be3d]={'id':_0x44be3d,'name':_0x2a7bfd[_0x5d0f69(0xe4)]};}}),_0x1cfb61[_0x9e88c2(0x118)]=(_0xebb63c,_0x2d72df=![])=>{const _0x54a210=_0x9e88c2;id=_0x1cfb61[_0x54a210(0x108)](_0xebb63c),_0x2d72df=_0x1cfb61[_0x54a210(0xfa)]||_0x2d72df;let _0x582647;if(id[_0x54a210(0x90)](_0x54a210(0xb6)))return new Promise(async _0x5a3ca5=>{const _0x4f897a=_0x54a210;_0x582647=store[_0x4f897a(0xbd)][id]||{};if(!(_0x582647['name']||_0x582647[_0x4f897a(0xbf)]))_0x582647=_0x1cfb61[_0x4f897a(0x116)](id)||{};_0x5a3ca5(_0x582647[_0x4f897a(0xf8)]||_0x582647['subject']||PhoneNumber('+'+id[_0x4f897a(0x101)](_0x4f897a(0x93),''))['getNumber'](_0x4f897a(0xa1)));});else _0x582647=id==='0@s.whatsapp.net'?{'id':id,'name':'WhatsApp'}:id===_0x1cfb61['decodeJid'](_0x1cfb61[_0x54a210(0xd9)]['id'])?_0x1cfb61['user']:store[_0x54a210(0xbd)][id]||{};return(_0x2d72df?'':_0x582647['name'])||_0x582647['subject']||_0x582647['verifiedName']||PhoneNumber('+'+_0xebb63c['replace'](_0x54a210(0x93),''))[_0x54a210(0x8c)](_0x54a210(0xa1));},_0x1cfb61[_0x9e88c2(0x103)]=!![],_0x1cfb61[_0x9e88c2(0xb3)]=_0x4e239c=>smsg(_0x1cfb61,_0x4e239c,store),_0x1cfb61['ev']['on']('connection.update',async _0x22bce7=>{const _0x2626e9=_0x9e88c2,{connection:_0x2a4e88,lastDisconnect:_0x29cff9}=_0x22bce7;if(_0x2a4e88==_0x2626e9(0xac)){console[_0x2626e9(0x113)](chalk['green'](_0x2626e9(0xcb))),console['log'](chalk['gray']('\x0a\x0a🚀Initializing...')),console[_0x2626e9(0x113)](chalk[_0x2626e9(0xa5)](_0x2626e9(0xeb))),_0x1cfb61[_0x2626e9(0xe1)](owner+_0x2626e9(0x93),{'text':_0x2626e9(0x96)});const _0x5aac9b=['red',_0x2626e9(0xe8),'green',_0x2626e9(0xfc),_0x2626e9(0x8f)];let _0x1be467=0x0;function _0x1633f2(){const _0x38733d=_0x2626e9,_0x200224=_0x5aac9b[_0x1be467];console[_0x38733d(0x113)](chalk[_0x38733d(0xce)](_0x200224)(_0x38733d(0xbb))),_0x1be467=(_0x1be467+0x1)%_0x5aac9b[_0x38733d(0xe2)],setTimeout(_0x1633f2,0xea60);}_0x1633f2();}_0x2a4e88===_0x2626e9(0xec)&&_0x29cff9&&_0x29cff9[_0x2626e9(0xda)]&&_0x29cff9['error'][_0x2626e9(0x9d)]['statusCode']!=0x191&&startKish();}),_0x1cfb61['ev']['on']('creds.update',_0x2b2509),_0x1cfb61['ev']['on']('messages.upsert',()=>{}),_0x1cfb61[_0x9e88c2(0x91)]=(_0x248752,_0xd401eb,_0x2f8fca='',_0x1bd8fe)=>_0x1cfb61[_0x9e88c2(0xe1)](_0x248752,{'text':_0xd401eb,..._0x1bd8fe},{'quoted':_0x2f8fca,..._0x1bd8fe}),_0x1cfb61[_0x9e88c2(0xd6)]=async(_0x2547ae,_0x380b41,_0x5047c4,_0x1c302b={})=>_0x1cfb61[_0x9e88c2(0xe1)](_0x2547ae,{'text':_0x380b41,'mentions':[..._0x380b41['matchAll'](/@(\d{0,16})/g)][_0x9e88c2(0x10c)](_0x38b37d=>_0x38b37d[0x1]+_0x9e88c2(0x93)),..._0x1c302b},{'quoted':_0x5047c4}),_0x1cfb61['sendImageAsSticker']=async(_0xb7007c,_0x412b18,_0x376e16,_0x513a47={})=>{const _0xf233d=_0x9e88c2;let _0x82500b=Buffer[_0xf233d(0x8a)](_0x412b18)?_0x412b18:/^data:.*?\/.*?;base64,/i[_0xf233d(0x9b)](_0x412b18)?Buffer[_0xf233d(0xbe)](_0x412b18[_0xf233d(0x98)]`,`[0x1],'base64'):/^https?:\/\//[_0xf233d(0x9b)](_0x412b18)?await await getBuffer(_0x412b18):fs[_0xf233d(0xed)](_0x412b18)?fs['readFileSync'](_0x412b18):Buffer[_0xf233d(0x109)](0x0),_0x5a20f7;return _0x513a47&&(_0x513a47[_0xf233d(0x97)]||_0x513a47[_0xf233d(0x89)])?_0x5a20f7=await writeExifImg(_0x82500b,_0x513a47):_0x5a20f7=await imageToWebp(_0x82500b),await _0x1cfb61['sendMessage'](_0xb7007c,{'sticker':{'url':_0x5a20f7},..._0x513a47},{'quoted':_0x376e16}),_0x5a20f7;},_0x1cfb61['sendVideoAsSticker']=async(_0x534d5d,_0x43ebd3,_0x462d7d,_0x49cc21={})=>{const _0x38d5d6=_0x9e88c2;let _0x10ed4e=Buffer[_0x38d5d6(0x8a)](_0x43ebd3)?_0x43ebd3:/^data:.*?\/.*?;base64,/i[_0x38d5d6(0x9b)](_0x43ebd3)?Buffer['from'](_0x43ebd3[_0x38d5d6(0x98)]`,`[0x1],_0x38d5d6(0xc3)):/^https?:\/\//[_0x38d5d6(0x9b)](_0x43ebd3)?await await getBuffer(_0x43ebd3):fs[_0x38d5d6(0xed)](_0x43ebd3)?fs[_0x38d5d6(0xe7)](_0x43ebd3):Buffer[_0x38d5d6(0x109)](0x0),_0x5b740e;return _0x49cc21&&(_0x49cc21['packname']||_0x49cc21[_0x38d5d6(0x89)])?_0x5b740e=await writeExifVid(_0x10ed4e,_0x49cc21):_0x5b740e=await videoToWebp(_0x10ed4e),await _0x1cfb61[_0x38d5d6(0xe1)](_0x534d5d,{'sticker':{'url':_0x5b740e},..._0x49cc21},{'quoted':_0x462d7d}),_0x5b740e;},_0x1cfb61[_0x9e88c2(0xdd)]=async(_0x1ffa05,_0xe9b054,_0x2f914a=!![])=>{const _0x2d2f63=_0x9e88c2;let _0x25fca7=_0x1ffa05[_0x2d2f63(0xb7)]?_0x1ffa05[_0x2d2f63(0xb7)]:_0x1ffa05,_0x236e6b=(_0x1ffa05['msg']||_0x1ffa05)[_0x2d2f63(0xe3)]||'',_0x5c678a=_0x1ffa05['mtype']?_0x1ffa05[_0x2d2f63(0xc1)]['replace'](/Message/gi,''):_0x236e6b[_0x2d2f63(0x98)]('/')[0x0];const _0x1d2906=await downloadContentFromMessage(_0x25fca7,_0x5c678a);let _0x530bfe=Buffer[_0x2d2f63(0xbe)]([]);for await(const _0x3469e8 of _0x1d2906){_0x530bfe=Buffer[_0x2d2f63(0x102)]([_0x530bfe,_0x3469e8]);}let _0x44d426=await FileType[_0x2d2f63(0x9e)](_0x530bfe);return trueFileName=_0x2f914a?_0xe9b054+'.'+_0x44d426[_0x2d2f63(0xa9)]:_0xe9b054,await fs[_0x2d2f63(0xa8)](trueFileName,_0x530bfe),trueFileName;},_0x1cfb61['ev']['on'](_0x9e88c2(0xaa),async _0x14428b=>{const _0x461fe5=_0x9e88c2;if(global[_0x461fe5(0xe9)]){console[_0x461fe5(0x113)](_0x14428b);try{let _0x4f7414=await _0x1cfb61[_0x461fe5(0x116)](_0x14428b['id']),_0x4a6c7c=_0x14428b[_0x461fe5(0xab)];for(let _0x5f20cb of _0x4a6c7c){try{ppuser=await _0x1cfb61[_0x461fe5(0x110)](_0x5f20cb,_0x461fe5(0x107));}catch(_0x2a6860){ppuser='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}try{ppgroup=await _0x1cfb61['profilePictureUrl'](_0x14428b['id'],'image');}catch(_0x1a1b87){ppgroup=_0x461fe5(0xc8);}memb=_0x4f7414[_0x461fe5(0xab)][_0x461fe5(0xe2)],KishWlcm=await getBuffer(ppuser),KishLft=await getBuffer(ppuser);if(_0x14428b['action']==_0x461fe5(0xfd)){const _0x4cdcea=await getBuffer(ppuser);let _0x5daa55=_0x5f20cb;const _0x547451=moment['tz'](_0x461fe5(0x10a))[_0x461fe5(0xee)](_0x461fe5(0xf1)),_0x5cf1e4=moment['tz']('Africa/Nairobi')[_0x461fe5(0xee)]('DD/MM/YYYY'),_0x2ade18=_0x4f7414['participants'][_0x461fe5(0xe2)];Kishbody=_0x461fe5(0x9a)+_0x4f7414[_0x461fe5(0xbf)]+_0x461fe5(0xcd)+_0x5daa55[_0x461fe5(0x98)]('@')[0x0]+_0x461fe5(0xff)+_0x2ade18+_0x461fe5(0xd2)+_0x547451+'\x20'+_0x5cf1e4+_0x461fe5(0xae),_0x1cfb61['sendMessage'](_0x14428b['id'],{'text':Kishbody,'contextInfo':{'mentionedJid':[_0x5f20cb],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x461fe5(0xb2)],'body':''+ownername,'previewType':_0x461fe5(0x10e),'thumbnailUrl':'','thumbnail':KishWlcm,'sourceUrl':''+link}}});}else{if(_0x14428b['action']==_0x461fe5(0xd1)){const _0x12cefd=await getBuffer(ppuser),_0x52bdf9=moment['tz'](_0x461fe5(0x10a))[_0x461fe5(0xee)](_0x461fe5(0xf1)),_0xfafa58=moment['tz'](_0x461fe5(0x10a))['format']('DD/MM/YYYY');let _0x2aa46a=_0x5f20cb;const _0x4f6c83=_0x4f7414['participants'][_0x461fe5(0xe2)];Kishbody=_0x461fe5(0xf9)+_0x4f7414[_0x461fe5(0xbf)]+'\x0a│⊳\x20\x20📃\x20Reason:\x20Left\x0a│⊳\x20\x20📔\x20Name:\x20@'+_0x2aa46a[_0x461fe5(0x98)]('@')[0x0]+'\x0a│⊳\x20\x20👥\x20Members:\x20'+_0x4f6c83+_0x461fe5(0xe5)+_0x52bdf9+'\x20'+_0xfafa58+_0x461fe5(0xae),_0x1cfb61[_0x461fe5(0xe1)](_0x14428b['id'],{'text':Kishbody,'contextInfo':{'mentionedJid':[_0x5f20cb],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global['botname'],'body':''+ownername,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':KishLft,'sourceUrl':''+link}}});}}}}catch(_0x1642f3){console[_0x461fe5(0x113)](_0x1642f3);}}}),_0x1cfb61[_0x9e88c2(0xe0)]=async _0x1cfd55=>{const _0x376325=_0x9e88c2;let _0x231b3c=(_0x1cfd55[_0x376325(0xb7)]||_0x1cfd55)[_0x376325(0xe3)]||'',_0x261da6=_0x1cfd55[_0x376325(0xc1)]?_0x1cfd55[_0x376325(0xc1)][_0x376325(0x101)](/Message/gi,''):_0x231b3c['split']('/')[0x0];const _0x4ea1a2=await downloadContentFromMessage(_0x1cfd55,_0x261da6);let _0x3c5550=Buffer[_0x376325(0xbe)]([]);for await(const _0x583270 of _0x4ea1a2){_0x3c5550=Buffer[_0x376325(0x102)]([_0x3c5550,_0x583270]);}return _0x3c5550;};}return startKish();function _0x41d2(){const _0x38f866=['blue','add','silent','\x0a│⊳\x20\x20👥\x20Members:\x20','231350PXbjOk','replace','concat','public','updateProfileStatus','Caught\x20exception:\x20','./Gallery/database/owner.json','image','decodeJid','alloc','Africa/Nairobi','sendContact','map','51288ygacYg','PHOTO','store','profilePictureUrl','default','./Config.js','log','@whiskeysockets/baileys','parse','groupMetadata','resolve','getName','child','./Config','toLocaleString','author','isBuffer','\x0a“Hey!\x20Be\x20Yourself\x20and\x20don’t\x20be\x20a\x20Ctrl+C.”\x20💁♂️✂️\x0a\x0a','getNumber','pino','bind','purple','endsWith','sendText','ephemeralMessage','@s.whatsapp.net','\x20It\x27s\x20a\x20','readMessages','*Kish-MD\x20is\x20CONNECTED*\x0a\x0a\x20\x20\x20\x20\x20\x0a💫’Creator:\x20Brasho\x20Kish\x0a’prefix:\x20[.]\x0a\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*𝐖𝐄𝐋𝐂𝐎𝐌𝐄*','packname','split','item-not-found','┌──⊰\x20🎗𝑾𝑬𝑳𝑪𝑶𝑴𝑬🎗⊰\x0a│⊳\x20\x20🌐\x20To:\x20','test','env','output','fromBuffer','5365KunqUX','watchFile','international','9762AzGvJz','key','399971OhkfoR','cyan','path','Socket\x20connection\x20timeout','writeFileSync','ext','group-participants.update','participants','open','1836rwUuHf','\x0a└──────────⊰','type','Timed\x20Out','includes','botname','serializeM','25474593684','3437KCSAZp','@g.us','msg','@hapi/boom','ownername','ubuntu','\x0a\x0a🎇waiting\x20for\x20messages','status@broadcast','contacts','from','subject','2579679dgugTN','mtype','long','base64','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','670LaakuH','./session','./Kish','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','messages.upsert','remoteJid','🟨Welcome\x20to\x20Kish-md','cache','\x0a│⊳\x20\x20📋\x20Name:\x20@','keyword','BAE5','\x0aFN:','remove','th\x0a│⊳\x20\x20🕰️\x20Joined:\x20','startsWith','en-US','Firefox','sendTextWithMentions','1096992HMXNox','927sogzAW','user','error','axios','keys','downloadAndSaveMediaMessage','rate-overlimit','chalk','downloadMediaMessage','sendMessage','length','mimetype','notify','th\x0a│⊳\x20\x20🕒\x20Time:\x20','contacts.update','readFileSync','yellow','welcome','Value\x20not\x20found','\x0a\x0a🌎Connected','close','existsSync','format','uncaughtException','push','HH:mm:ss','loadMessage','libphonenumber-js','messages','awesome-phonenumber','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:okeae2410@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://instagram.com/cak_haho\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;Indonesia;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','Connection\x20Closed','name','┌──⊰🍁𝑭𝑨𝑹𝑬𝑾𝑬𝑳𝑳🍁⊰\x0a│⊳\x20\x20👤\x20From:\x20','withoutContact','message'];_0x41d2=function(){return _0x38f866;};return _0x41d2();}let file=require[_0x1e3a7d(0x117)](__filename);fs[_0x1e3a7d(0xa0)](file,()=>{const _0x1527b5=_0x1e3a7d;fs['unwatchFile'](file),console['log'](chalk['redBright']('Update\x20'+__filename)),delete require[_0x1527b5(0xcc)][file],require(file);}),process['on'](_0x1e3a7d(0xef),function(_0x47f5ce){const _0x190568=_0x1e3a7d;let _0x4b5afd=String(_0x47f5ce);if(_0x4b5afd[_0x190568(0xb1)](_0x190568(0xa7)))return;if(_0x4b5afd[_0x190568(0xb1)](_0x190568(0x99)))return;if(_0x4b5afd['includes'](_0x190568(0xde)))return;if(_0x4b5afd['includes'](_0x190568(0xf7)))return;if(_0x4b5afd[_0x190568(0xb1)](_0x190568(0xb0)))return;if(_0x4b5afd[_0x190568(0xb1)](_0x190568(0xea)))return;console[_0x190568(0x113)](_0x190568(0x105),_0x47f5ce);});