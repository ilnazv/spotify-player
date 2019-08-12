import React from "react";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "c6e191f64e124fd59b045db08707eefb";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state"
];

export default class Auth extends React.Component {
  public render(): JSX.Element {
    return (
      <a
        className="btn btn--loginApp-link"
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>
    );
  }
}
