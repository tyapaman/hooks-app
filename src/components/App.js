import React, {useEffect,useReducer} from 'react';
//only insatall bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux';

const App = () => {
  const stringAppState = localStorage.getItem(APP_KEY)
  const initialState = stringAppState ? JSON.parse(stringAppState) : {
    events: [],
    operationLogs: []
  }
  
  const [state, dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])

  return (
    //valueで渡せる　useContextで渡せる
    <AppContext.Provider value={{state,dispatch}}>
      <div className="contaienr-fluid">
      <EventForm />
      <Events />
      <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
