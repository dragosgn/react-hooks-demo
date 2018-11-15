import React, { Component } from "react";
import styled from "styled-components";

import Greeting from "./Greeting";

const Root = styled.div`
  padding: 5rem;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <Greeting />
      </Root>
    );
  }
}

export default App;
