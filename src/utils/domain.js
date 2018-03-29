// IHM系统网址

 const domainUrl = 'https://'+DOMAIN_CONFIG+'/ihm';
 http://192.168.11.15

// 短信模板网址
const smsTempLateUrl = 'http://oss-ihm.oss-cn-hangzhou.aliyuncs.com';
const srTempLateUrl = 'http://oss-ihm.oss-cn-hangzhou.aliyuncs.com';
//const domainUrl = 'http://116.62.31.142:8080';
// 默认图片地址
const defaultCustomerHeadImgUrl = 'http://oss-ihm.oss-cn-hangzhou.aliyuncs.com/images/head/DefaultAvatar_customer.png';
const defaultUserHeadImgUrl = 'http://oss-ihm.oss-cn-hangzhou.aliyuncs.com/images/head/DefaultAvatar.png';
const defaultDeviceImgUrl = 'http://oss-ihm.oss-cn-hangzhou.aliyuncs.com/images/device/deviceDefault.png';
const socketUrl = "https://" + DOMAIN_CONFIG + ":449";
//const socketUrl = "https://my.xingxy.cn:449";
export default {domainUrl, smsTempLateUrl, srTempLateUrl, defaultCustomerHeadImgUrl, defaultUserHeadImgUrl, defaultDeviceImgUrl,socketUrl};
