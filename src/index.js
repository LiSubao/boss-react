import dva from 'dva';
import RouterConfig from './router';
import IndexPageM from './model/IndexPage/IndexPage_M'
import CI0101M from './model/CI/CI0101M';
import PC0101M from './model/PC/PC0101M';


/** 1. 初始化Dva*/
const app = dva();

/** 2. 插件*/
// app.use({});

/**数据model层注册*/
//基础模块
app.model(IndexPageM);

//PC模块(个人中心)
app.model(PC0101M);

//CI模块(客户信息)
app.model(CI0101M);

/** 4. 路由配置注册*/
app.router(RouterConfig);

/** 5. 开始*/
app.start('#root');
