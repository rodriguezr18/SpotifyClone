import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";

// super object that we constantly refer to - responsible for any interaction between our react app & spotify
const spotify = new SpotifyWebApi();

function App() {
  // setToken is how you change the variable
  // useState how we handle variables in react
  const [token, setToken] = useState(null);

  // dispatch is a gun - shoots at the DataLayer, update it with values and things like that
  // Can pull anything from the DataLayer
  // DataLayer.user is = destructing user
  const [{user}, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  // Use useEffect to keep an eye on that window location so that URL,
  // to see if anything changes I want to fire up that bit of code
  useEffect(() => {
    const hash = getTokenFromUrl();

    // clears the end of the url so you don't see the access token
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      dispatch()

      spotify.setAccessToken(_token);
      // gets the users account
      spotify.getMe().then(user => {

        // Popped the user right into the data layer
        // After we pull it from the DataLayer and read it
        // How you set your actions: All capital with underscores for spaces
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
    }

    console.log("I HAVE A TOKEN>>>> ", token);
  }, []);

  console.log('🙍‍♂️', user);


  return (
    <div className="app">
      {
        // if there is a token it will render the player for the user and if there isn't it will take the user back to the login page
        token ? 
        <Player />
         : <Login />
        

      }
    </div>
  );
}

export default App;
