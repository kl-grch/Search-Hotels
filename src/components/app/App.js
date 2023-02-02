import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MainPage from "../pages/mainPage/MainPage";
import AuthorizationPage from "../pages/authorizationPage/AuthorizationPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/auth" element={<AuthorizationPage/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </Router>
  );
}

export default App;
