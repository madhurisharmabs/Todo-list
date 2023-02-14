// import {createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// import rootReducer from './root-reducer';
// const middleware =[];

// if(process.env.NODE_ENV==='development'){
//     middleware.push(logger);
// }
// const store=createStore(rootReducer, applyMiddleware(...middleware));

// export default store;


import { createStore } from "redux";
import rootReducer from "./root-reducer";


const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
