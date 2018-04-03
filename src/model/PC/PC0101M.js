import {getCompanyList,getRelatedPersonList,updateRelatedPerson} from "../../services/PC0101S"

export default {
    namespace:"pc0101Info",
    state:{
        companyList:[],
        relatedPersonList:[]
    },
    effects:{
        *init({payload},{call,put}){
            let companyData=yield call(getCompanyList,payload);
            let relatedPersonData=yield call(getRelatedPersonList,payload);
            if(relatedPersonData.result){
                relatedPersonData.result.map((item)=>{
                    item.key=item.id;
                    return item
                });
            }
            yield put({
                type:"update",
                payload:{
                    companyList:companyData.result,
                    relatedPersonList:relatedPersonData.result
                }
            })
        },
        *companyFilter({payload},{call,put}){
            let relatedPersonData=yield call(getRelatedPersonList,payload);
            yield put({
                type:"update",
                payload:{
                    relatedPersonList:relatedPersonData.result
                }
            })
        },
        *nameFilter({payload},{call,put}){
            let relatedPersonData=yield call(getRelatedPersonList,payload);
            yield put({
                type:"update",
                payload:{
                    relatedPersonList:relatedPersonData.result
                }
            })
        },
        *updateRelatedPerson({payload},{call}){
            yield call(updateRelatedPerson,payload)

        }
    },
    reducers:{
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}