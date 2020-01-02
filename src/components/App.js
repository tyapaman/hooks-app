import React, {useReducer} from 'react';
//only insatall bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import reducer from '../reducers'
import Events from '../components/Events'

const App = () => {
  const [state, dispatch] = useReducer(reducer,[])

  return (
    <div className="contaienr-fluid">
    <EventForm state={state} dispatch={dispatch}/>
    <Events state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
