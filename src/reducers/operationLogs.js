import {
        ADD_OPERATION_LOG,
        DELETE_ALL_OPERATION_LOGS
} from '../actions'

//action ={
//  type: 'ADD_OPERATION_LOG',
//  description: 'aaa',
//  operatedAt: '2020-1-1'
//}

//state = [
//  {description: 'description', operatedAd:'2020-1-1'},
//  {description: 'description', operatedAd:'2020-1-1'}
//]

const operationLogs = ( state = [], action) =>{
  switch(action.type){
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      return [operationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}
export default operationLogs