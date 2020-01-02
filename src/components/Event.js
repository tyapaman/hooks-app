import React from 'react'

//event は state　の一つ一つ {id:1, title:'titel', body:'body'}
const Event = ({dispatch, event}) =>{
const id = event.id
  const handleClickDeleteButton = () =>{
    const result = window.confirm(`ID = ${id}のイベントを削除しても良いですか?`)
    //dispatchを読んでreducerに削除した事を伝えたい action に詰める
    if(result)dispatch({ type:'DELETE_EVENT', id})
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