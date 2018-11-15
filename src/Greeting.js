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

export default () => {
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
    </div>
  );
};
