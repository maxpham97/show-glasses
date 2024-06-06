import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes, { routes } from './routers';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>{renderRoutes(routes)}</Router>
      </Provider>
    </div>
  );
}

export default App;
