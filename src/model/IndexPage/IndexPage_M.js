import {login} from '../../services/IndexPage'
export default {
    namespace:"indexPage",
    state:{
        modelName:"luyuting"
    },
    effects:{
        *init({payload},{call}){
            var test=yield call(login,payload)
        }
    },
    reducers:{

    }
}