import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import App from './components/App/';
import EnsureAuthenticated from './components/EnsureAuthenticated/';
import Login from "./scenes/Login";
import Projects from './scenes/Projects/';
import Project from './scenes/Projects/components/Project'
import ProjectCreate from './scenes/Projects/components/ProjectCreate'
import DeployContracts from './scenes/DeployContracts';
import CreateUser from './scenes/User/CreateUser';

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={Login} />
    <Route path="/create-user" component={CreateUser} />
    <Route path="/deploy" component={DeployContracts} />
    <IndexRedirect to="/projects" />
    <Route component={EnsureAuthenticated}>
      <Route path="/projects" name="My Projects" icon="playlist_add_check">
        <IndexRoute component={Projects} />
        <Route path="create" component={ProjectCreate} />
        <Route path=":pname" component={Project} />
      </Route>
    </Route>
  </Route>
);
