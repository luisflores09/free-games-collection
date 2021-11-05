import './App.css';
import {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {auth} from './services/firebase';
import Show from './pages/Show';


function App() {
  const [user, setUser] = useState(null);

  const [favGames, setFavGames] = useState([]);

  const API_URL = 'http://localhost:3001/api/games';
  // const API_URL = 'https://free-games-collection.herokuapp.com/api/games';

  const getFavGames = async () => {
    if(!user) return;
    const token = await user.getIdToken();
    const response = await fetch(API_URL, 
      {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
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
  }, [user])

  const url = 'http://localhost:3002/api/games';
  // const url = 'https://gamesapi99.herokuapp.com/api/games';

    const [game, setGame] = useState(null);

    const getGame = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setGame(data);
        console.log(data);
    }

    useEffect(() => {
        getGame();
      }, []);

  return (
    <>
      <Header user={user} />
        <Switch>
          <Route exact path='/'>
            <Home favGames={favGames} createFavGame={createFavGame} game={game} />
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
          <Route path='/games/:id'>
            <Show game={game} />
          </Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;
