// endpoint : throw the user to this point, to let spotify takes care of it
// and coming back to my app after the user gets authentication
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "7288adf7e41345a8adcd9b3b5a545598";

// define the scope such as what they can do
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// ? add parameter    %20   ascII space   token  authentication
export const loginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
// 1. click login button
// 2. redirect to spotify login page
// 3. redirect to home page once logged in

export const getTokenFromUrl = () => {
  //can be used to get the current page address
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((init, item) => {
      let parts = item.split("=");
      init[parts[0]] = decodeURIComponent(parts[1]);
      return init;
    }, {});
};
