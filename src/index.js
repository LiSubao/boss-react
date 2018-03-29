import dva from 'dva';
import RouterConfig from './router';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./model/IndexPage/IndexPage_M'));

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
