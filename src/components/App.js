import React, {useReducer} from 'react';
//only insatall bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import reducer from '../reducers'
import Events from '../components/Events'


const App = () => {
  const [state, dispatch] = useReducer(reducer,[])

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
