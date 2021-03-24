import React from "react";
import {BrowserRouter} from "react-router-dom";
import { Route } from 'react-router';

import {Grid} from "./Styles";
import Main from "./Main";
import Write from "./Write";

function App() {
  return (
    <Grid is_root bg="#ddd">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/write" exact component={Write} />
      </BrowserRouter>
    </Grid>
  );
}

export default App;
