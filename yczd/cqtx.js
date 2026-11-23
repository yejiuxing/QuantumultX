/*******************************
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://appserver.nokeeu.com/api/user/a/v1/skin/getCurrentSkinDetail url script-response-body https://raw.githubusercontent.com/yejiuxing/QuantumultX/refs/heads/main/yczd/cqtx.js
[mitm] 

hostname = appserver.nokeeu.com

*******************************/

let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {

    obj.data.supportTryFlag = 0;
    obj.data.tryUseDuration = 0;
    obj.data.tryUseUnit = 1;
    obj.data.keepStatus = "3";
}

$done({ body: JSON.stringify(obj) });
