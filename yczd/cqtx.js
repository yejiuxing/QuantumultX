/******************************

脚本功能：乘趣
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/appserver\.nokeeu\.com\/api\/user\/a\/v1\/skin\/suggestSkinList url script-response-body https://raw.githubusercontent.com/yejiuxing/QuantumultX/refs/heads/main/yczd/cqtx.js

[mitm] 

hostname = appserver.nokeeu.com



*******************************/

var _0x365c=['peach','https://p1.nokeeu.com/app-skin/img/peach_img_v1.png','1acefe83d67a0c8f176624ce82bf9940','闭上眼睛品尝，仿佛能感受到夏日午后的阳光、微风和雨露，所有美好的记忆都随着桃汁的流淌而苏醒。'];var _0x3ea4=function(_0x365c9f,_0x3ea4cc){_0x365c9f=_0x365c9f-0x0;var _0x33ff2d=_0x365c[_0x365c9f];return _0x33ff2d;};var objc=JSON['parse']($response['body']);objc={'code':0x0,'message':'成功','data':[{'skinNo':_0x3ea4('0x0'),'skinName':'水蜜桃','skinDesc':_0x3ea4('0x3'),'skinCoverImgUrl':'https://p1.nokeeu.com/app-skin/img/peach_main.png','marketServiceFee':null,'saleServiceFee':0x1,'symbol':'￥','supportTryFlag':0x1,'tryUseDays':0x0,'tryUseDuration':0x5,'tryUseUnit':0x3,'usingFlag':0x0,'keepStatus':0x0,'tag':'免费试用','displayOrder':0x0,'fileDownUrl':'https://p1.nokeeu.com/app-skin/peach.zip','fileMd5':_0x3ea4('0x2'),'skinImgList':[_0x3ea4('0x1'),'https://p1.nokeeu.com/app-skin/img/peach_img_v2.png']}],'extCode':null,'extMessage':null};$done({'body':JSON['stringify'](objc)});
