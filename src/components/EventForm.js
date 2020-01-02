import React,{useState} from 'react'
import { DELETE_ALL_EVENTS , CREATE_EVENT} from '../actions' 

//app componentから渡される state dispatchを使用する
const EventForm = ({state,dispatch}) =>{
//App.jsのReducerを使用しなければいけない
//  const [state, dispatch] = useReducer(reducer,[])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e =>{
    e.preventDefault()
    //create dispatch(action)
    dispatch({
      type:CREATE_EVENT,
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e =>{
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか?')
    if(result)dispatch({type: DELETE_ALL_EVENTS})
  }

  return (
<>
<h4>イベント作成フォーム</h4>
<form>
  <div className="form-group">
    <label htmlFor="formEventTitle">Title</label>
    <input className="form-control" id="formEventTitle" value = {title} onChange = {e => setTitle(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="formEventBody">Body</label>
    <textarea className="form-control" id="formEventBody" value = {body} onChange = {e => setBody(e.target.value)}/>
  </div>
    <button className="btn btn-primary" onClick={addEvent} disabled={title === '' || body ===''}>イベントを作成する</button>
    <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>

</form>
</>
  )

}

export default EventForm