import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes, { routes } from './routers';
import './index.css';

function App() {
  return (
    <div>
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
