import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import BasicRouter from'./component/BasicRouter';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import './css/bootstrap-social.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <div>
      <App/>
    </div>
  );
};

ReactDOM.render(<BasicRouter/>, document.getElementById('root'));
registerServiceWorker();
