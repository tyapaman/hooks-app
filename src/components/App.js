import React from 'react';
//only insatall bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="contaienr-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle"/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody"/>
        </div>
          <button className="btn btn-primary">イベントを作成する</button>
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
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default App;
