import fetch from 'dva/fetch';
import { hashHistory } from 'dva/router';
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;
const weburl = 'https://'+DOMAIN_CONFIG+'/ihm';

var ref = true;
export default {
    convertObjToQueryString: function(obj) {
        var paramStr = '';
        for (let name in obj) {
            paramStr += (name + '=' + obj[name] + '&');
        }
        if (paramStr[paramStr.length - 1] === '&')
            return paramStr.slice(0, paramStr.length - 1);
        else
            return paramStr;
    },
    get: function(originUrl, data) {
        let url = originUrl;
        let queryString = this.convertObjToQueryString(data);
        if (url.indexOf('?') !== -1) url = url + '&' + queryString;
        else url += ('?' + queryString);
        return fetch(url, {
            credentials: 'include'
        });
    },
    getJSON: function(originUrl, data) {
        return this.get(originUrl, data).then(function(res) {
            return res.json()
        });
    },
    post: function(url, data) {
        return fetch(weburl + url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(function(res) {
            if (res.status == 4005) {
                if (ref) {
                    console.log('登录超时:' ,res);
                    ref = false;
                    Modal.error({
                        title: '登录超时',
                        content: '因长时间没有操作导致登录超时，将返回到登录页面进行重新登录操作。',
                        onOk() {
                            ref = true;
                            hashHistory.push({pathname:'/login', query :{}});
                        },
                    });
                }
            } else if (res.status == 500) {
                if (ref) {
                    console.log('系统异常:', res);
                    ref = false;
                    Modal.error({
                        title: '系统异常',
                        content: '系统出现异常，请按F5刷新后重试，如果仍然存在异常，请联系管理员解决。',
                        onOk() {
                            ref = true;
                            //hashHistory.push({pathname:'/login', query :{}});
                        },
                    });
                }
            }  else {
                return res.json();
            }
        }).catch(error => {
            if (error == "TypeError: Failed to fetch") {
                if (ref) {
                    console.log('网络异常:', error);
                    ref = false;
                    Modal.error({
                        title: '网络异常',
                        content: '连接服务器失败，将返回到登录页面进行重新登录操作。',
                        onOk() {
                            ref = true;
                            hashHistory.push({pathname:'/login', query :{}});
                        },
                    });
                }
            }
        });
    }
}
