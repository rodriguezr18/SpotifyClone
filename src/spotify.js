// We did not use a capital letter for this file because it is not a component

//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/# (This is the link for the spotify documentation)

//this is the endpoint for where we are going to send the user to in order to actually get them to login and authentication for spotify


// we use spotify's api to authorize the user to show there spotify music and account in out app 
//This link throws the user to spotify for them to login and then it redirects you to the homepage off our app IF the user logs in
export const authEndpoint = "https://accounts.spotify.com/authorize";



const clientId = "2eab8689555f4c609134f2acc70da041" // this is our id / token from spotify

const redirectUri = "http://localhost:3000/";



// this scope allows for us to use the information that we are calling for from the users spotify account 
//this allows us to modify the user information to our liking and this actually calls the spotify api to use this information for our app
// these scopes allows you to get the correct permissions to get this information from the users account
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
  return window.location.hash //this reaches out to the hashtag in url
  .substring(1)// chops the string up and call for the first sub string
  .split('&') //this & symbol does not allow any extra parameters past the access token

  // initial: initial value of the reduce, Item: Item will get every time it loops through
  // Pulling Access Token
  .reduce((initial, item) => {
    // #accessToken=mysupersecretkey&name=rudy
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial;
  }, {});
} 







// authEndpoint is generating a long web address that we use to send the user off 
// ? because we are adding a parameter
// that url contains the information of the redirect uri (user information)
// scopes.join allows us to go through our scopes and join it with what we would give join
// &response_type=token - once the user is authenticated we will receive a token 
//show_dialog=true - prompt that pops up for the user
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

