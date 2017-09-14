import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import FetchDemo from './component/FetchDemo';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import './css/bootstrap-social.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <div>
      <App/>
      <FetchDemo data={"12345678"}/>
    </div>
  );
};

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
