import React ,{ useContext }from 'react'
import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions' 
import  AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

//event は state　の一つ一つ {id:1, title:'titel', body:'body'}
const Event = ({ event }) =>{
const id = event.id
const {dispatch } =useContext(AppContext) 
  const handleClickDeleteButton = () =>{
    const result = window.confirm(`ID = ${id}のイベントを削除しても良いですか?`)
    //dispatchを読んでreducerに削除した事を伝えたい action に詰める
    if(result){
      dispatch({ type:DELETE_EVENT, id})
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `ID = ${id} のイベントを削除しました`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }
  return(
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event