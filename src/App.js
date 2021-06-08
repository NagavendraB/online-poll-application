import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AddQuestion, QuestionDetails, Questions } from './pages';
import {
  StyledGlobal,
  StyledAppWrapper,
} from './App.styled';

const App = () => (
  <StyledAppWrapper>
    <Router>
      <Switch>
        <Route exact path="/" component={Questions} />
        <Route exact path="/questions/:questionNo" component={QuestionDetails} />
        <Route exact path="/add-question" component={AddQuestion} />
      </Switch>
      <StyledGlobal />
    </Router>
  </StyledAppWrapper>
);

export default App;
