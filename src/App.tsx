import React from "react";
import Player from "./components/Player";
import Auth from "./components/Auth";
import hash from "./components/hash";

interface AppState {
  token?: string;
  item: any;
  is_playing: any;
  progress_ms: any;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      token: undefined,
      item: undefined,
      is_playing: undefined,
      progress_ms: undefined
    };
  }

  componentDidMount() {
    let _token = window.localStorage.getItem("token");

    if (!_token) {
      _token = hash.access_token;
      if (_token) {
        window.localStorage.setItem("token", _token);
      }
    }

    if (_token) {
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }
  }

  async getCurrentlyPlaying(token: string) {
    const url = "https://api.spotify.com/v1/me/player";
    const requestParams = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    const response = await fetch(url, requestParams);
    const data = await response.json();
    console.log("data", data);
    this.setState({
      item: data.item,
      is_playing: data.is_playing,
      progress_ms: data.progress_ms
    });
  }

  public render(): JSX.Element {
    const { token, item } = this.state;
    return (
      <>
        {token ? item && (
          <Player
            artist={item.artists.map((x: any) => x.name).join(', ')}
            albumCover={item.album.images && item.album.images[0].url}
            song={item.name}
          />
        ) : (
          <Auth />
        )}
      </>
    );
  }
}

export default App;
