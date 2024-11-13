import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../Auth/Register';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={< Register/>} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;