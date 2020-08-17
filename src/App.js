import React from 'react';
import styled from 'styled-components';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/pages/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import Search from './components/pages/Search/Search';
import Introduction from './components/pages/Introduction/Introduction';
import CompanyDetails from './components/pages/CompanyDetails/CompanyDetails';


function App(props) {
  return (
    <div className={props.className}>
      <Router>
        <NavBar />
        <CompanyDetails />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/details" component={CompanyDetails} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default styled(App)`
  border: 2px solid black;
  width: 350px;
  height: 550px;
`;
