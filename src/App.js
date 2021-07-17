import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import Login from "./Login";
import "./App.css";


const spotify = new SpotifyWebApi();

function App() {
  // short term memory
  //const [token, setToken] = useState(null);

  // grab data from data layerout
  const[{user,token},dispatch] = useDataLayerValue()   // Data center 
  // {user} == datalayer.user


  // run code based on the given condition, re-run in every channge
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token; // my authentication 

    if (_token) {
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
     // setToken(_token);
      // give access and connect react to spotify api
      spotify.setAccessToken(_token);
      // pop from data layer
      spotify.getMe().then((user) => {
        dispatch({
          type:"SET_USER",       // putting into datalayer
          user:user
        })
      });

      spotify.getUserPlaylists().then(playlists => (
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        })
      ))

      spotify.getPlaylist("37i9dQZEVXcDAB6yvhmpPR").then(resp =>(
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:resp
        })
      ))
    }

  }, []);

  //console.log("User >>> ", user);

  return (
    <div className="App">
      {/* Spotify login */}

      {/* JSX */}
      {token ? <Player spotify={spotify}/> : <Login />}

      {/* Login with spotify button */}
    </div>
  );
}

export default App;
