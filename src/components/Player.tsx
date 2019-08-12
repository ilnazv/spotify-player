import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Artist = styled.div`
  color: palevioletred;
`;


interface PlayerProps {
  artist: string;
  song: string;
  albumCover: string;
}

export default class Player extends React.Component<PlayerProps, {}> {
  public render(): JSX.Element {
    const { artist, song, albumCover } = this.props;
    return <>
    <Artist>{artist}</Artist>
    <Artist>{song}</Artist>
    <img src={albumCover} alt="album cover"/>
    </>;
  }
}
