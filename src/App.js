import { useContext } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import {UserContext} from './providers/user-provider';

function App() {
  const {user, isLoggedIn} = useContext(UserContext);

  return (
    <div className="App">
        <Header/>
        {isLoggedIn ? <h3>Hello, {user.name}</h3> : 'Please sign in'}
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
