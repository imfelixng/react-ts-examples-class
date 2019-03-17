import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage } from './components';

export const AppRouter: React.FC<{}> = () => {
  return (
    <HashRouter>
      <div className="container">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}