import React, { useEffect, useState } from 'react';
import './Assets/App.css';
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
  

  // dispatch is a gun - shoots at the DataLayer, update it with values and things like that
  // Can pull anything from the DataLayer
  // DataLayer.user is = destructing user
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  // Use useEffect to keep an eye on that window location so that URL,
  // to see if anything changes I want to fire up that bit of code
  useEffect(() => {
    const hash = getTokenFromUrl();

    // clears the end of the url so you don't see the access token
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      

      

      spotify.setAccessToken(_token);
      // gets the users account
      spotify.getMe().then((user) => {

        // Popped the user right into the data layer
        // After we pull it from the DataLayer and read it
        // How you set your actions: All capital with underscores for spaces
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcGEL0ccnvM8Y').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      }

      );
    }

    
  }, []);

  


  return (
    <div className="app">
      
         {/* if there is a token it will render the player for the user and if there isn't it will take the user back to the login page */}
        {token ?  <Player spotify={spotify} /> : <Login /> }
        
      
        {/*  passing spotify object through player as a prop */}
       
    </div>
  );
}

export default App;
