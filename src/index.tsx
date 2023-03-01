import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
<Provider store={store}>
  <App color="green" />
</Provider>, document.getElementById("root"));