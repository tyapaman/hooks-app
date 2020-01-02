import React,{ useContext } from 'react'
import Event from '../components/Event'
import AppContext from '../contexts/AppContext'

const Events = () =>{
  const {state} = useContext(AppContext)

  return(
  <>
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
        { state.map((event, index) => (<Event key={index} event={event}/>))}
      </tbody>
    </table>
  </>
  );
}

export default Events