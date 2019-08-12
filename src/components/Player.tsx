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

export default class Player extends React.Component {
  public render(): JSX.Element {
    return <>
    Player
    <Button>button</Button>
    </>;
  }
}
