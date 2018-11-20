import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  margin: 1rem;
  font-size: 1.25rem;
  border: 1px solid gray;
  border-radius: 5px;
  :focus {
    outline: none;
  }
`;

const Hooks = () => {
  const [name, setName] = useState("Leia");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <label>Name</label>
      <Input
        value={name}
        onChange={handleNameChange}
        type="text"
        placeholder="Luke Skywalker"
      />
      <div>
        <p>{`Your name is: ${name}`}</p>
      </div>
    </div>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hooks />
      </div>
    );
  }
}
