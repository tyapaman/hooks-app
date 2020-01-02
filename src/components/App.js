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
    <AppContext.Provider value={'hello provider'}>
      <div className="contaienr-fluid">
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
