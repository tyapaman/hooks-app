import React, {useReducer, useState} from 'react';
//only insatall bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Event from '../components/Event'

const App = () => {
  const [state, dispatch] = useReducer(reducer,[])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e =>{
    e.preventDefault()
    //create dispatch(action)
    dispatch({
      type:'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }
  return (
    <div className="contaienr-fluid">
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
          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th> 
            <th>Title</th> 
            <th>Body</th> 
            <th>Button</th> 
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
