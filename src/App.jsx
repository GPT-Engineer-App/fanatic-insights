import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/profile" 
          element={
            <SharedLayout>
              <Profile />
            </SharedLayout>
          } 
        />
        <Route 
          path="/" 
          element={
            <SharedLayout>
              <Index />
            </SharedLayout>
          } 
        />
      </Routes>
    </Router>
  );
}
export default App;