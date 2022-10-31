// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';


import DarkPortfolioLanding from './dark/PortfolioLanding';
import About from './elements/About';
import Blog from './elements/Blog';


import error404 from "./elements/error404";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return (
          <BrowserRouter basename={'/'}>
            <PageScrollTop>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={DarkPortfolioLanding}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/news`}
                  component={About}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/events`}
                  component={Blog}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/404`}
                  component={error404}
                />
                <Route component={error404} />
              </Switch>
            </PageScrollTop>
          </BrowserRouter>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();