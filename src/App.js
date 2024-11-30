import './App.css';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import UserDetailPage from './pages/UserDetailPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/userdetail" element={<UserDetailPage />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
