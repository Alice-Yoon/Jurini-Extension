import React from 'react';
import styled from 'styled-components';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';



function App(props) {
  return (
    <div className={props.className}>
      <Router>
      Jurini Extension

      </Router>
    </div>
  );
}

export default styled(App)`
  border: 2px solid black;
  width: 350px;
  height: 550px;
`;
