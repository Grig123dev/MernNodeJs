import React from 'react';
import { useRouts } from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/Auth.context';
import { Navbar } from './components/Navbar';
import 'materialize-css'
import { Loader } from './components/Loader';

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRouts(isAuthenticated);

  if(!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        {isAuthenticated && <Navbar />}
      <div className="container">
      {routes}
      </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
