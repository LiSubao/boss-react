import $ from '../utils/ajax';

async function getCompanyList(params) {
    return $.getJSON("/v1/company/get_company_list/",params)
}

async function getRelatedPersonList(params) {
    return $.getJSON("/v1/company/get_related_person_list/",params)
}

async function updateRelatedPerson(params){
    var formData=new FormData();
    for(let key in params){
        formData.append(key,params[key])
    }
    return $.formPost("/v1/company/update_related_person/",formData)
}

async function deleteRelatedPerson(params){
    return $.getJSON("v1/company/delete_related_person/",params)
}


export {getCompanyList,getRelatedPersonList,updateRelatedPerson,deleteRelatedPerson}