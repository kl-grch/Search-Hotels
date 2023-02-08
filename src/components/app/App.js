import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainPage from "../pages/mainPage/MainPage";
import AuthorizationPage from "../pages/authorizationPage/AuthorizationPage";
import { useSelector } from "react-redux";

function App() {

  const {authorizationStatus} = useSelector(state => state.authorization);

  function PrivateRoute({ children }) {
    return authorizationStatus === true ? children : <Navigate to="/auth" />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><MainPage/></PrivateRoute>}/>
        <Route path="/auth" element={<AuthorizationPage/>}/>
        <Route path='*' element={<PrivateRoute><Navigate to='/'/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
