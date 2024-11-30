import './App.css';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/userdetail" element={<UserDetailPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
