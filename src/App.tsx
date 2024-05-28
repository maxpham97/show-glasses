import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes, { routes } from './routers';

function App() {
    return (
        <div>
            <Router>{renderRoutes(routes)}</Router>
        </div>
    );
}

export default App;
