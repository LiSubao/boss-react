import $ from '../utils/ajax';

async function login(params) {
    var formData=new FormData();
    for(let key in params){
        formData.append(key,params[key])
    }
    return $.formPost("/v1/login/",formData)
}


export {login}