import React, {useReducer} from 'react';
//only insatall bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'
import reducer from '../reducers'


const App = () => {
  const initialState ={
    events: []
  }

  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    //valueで渡せる　useContextで渡せる
    <AppContext.Provider value={{state,dispatch}}>
      <div className="contaienr-fluid">
      <EventForm />
      <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
