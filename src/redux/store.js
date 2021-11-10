

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux";
// 引入为count组件服务的reducer
import countReducer from "./reducers/count"

import personReducer from "./reducers/person"
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 汇总所有的reducer变成一个总的reducers
const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer
})
// 暴露store
export default createStore(allReducer, applyMiddleware(thunk))