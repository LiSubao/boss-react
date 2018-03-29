import {testService} from '../../services/IndexPage'
export default {
    namespace:"indexPage",
    state:{
        modelName:"luyuting"
    },
    effects:{
        *init({payload},{call}){
            var test=yield call(testService,payload)
            console.log(test);
        }
    },
    reducers:{

    }
}