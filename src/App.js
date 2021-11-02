import './App.css';
import {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {auth} from './services/firebase';


function App() {
  const [user, setUser] = useState(null);

  const [favGames, setFavGames] = useState([]);

  const API_URL = 'http://localhost:3001/api/games';

  const getFavGames = async () => {
    const response = await fetch(API_URL);
    const favGames = await response.json();
    setFavGames(favGames);
  }

  const createFavGame = async game => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify(game)
    });
    getFavGames();
  };


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    getFavGames();
    return () => unsubscribe();
  }, [])

  return (
    <>
      <Header user={user} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login' render={() => (
            user ? <Redirect to='/dashboard' /> : <Login />
          )}      
          />
          <Route path='/dashboard' render={() =>(
            user ? (
            <Dashboard 
            favGames={favGames} 
            createFavGame={createFavGame} 
            /> 
            ): <Redirect to='/login' />
          )}
          />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
