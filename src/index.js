import dva from 'dva';
import RouterConfig from './router';
import IndexPageM from './model/IndexPage/IndexPage_M'


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(IndexPageM);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
