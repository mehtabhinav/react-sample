const path = require('path');
const Express = require('express');
const React = require('react');
const Redux = require('redux');
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Router, createMemoryHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { match, RouterContext, createRoutes } from 'react-router'


import routes from './routes/routes';


//Reducers
const SampleContainerReducer = require('./store/reducers/sample-container-reducer').default;

//Container
const SampleContainer = require('./containers/sample-container');

const app = Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));
app.get('/', serve);

/*
 Controller Class
 */

function serve (req, res) {
    const history = createMemoryHistory();
    const store = Redux.createStore(SampleContainerReducer, {});

    match({routes, location: req.url}, (err, redirectLoc, renderProps) => {
        if (err) {

        } else if(redirectLoc) {

        } else if(renderProps) {
            const content = renderToString(
                <Provider store={store}>
                    <Router history={history} routes={routes} />
                </Provider>

            );
            const finalState = JSON.stringify(store.getState());

            res.render('index', {content, finalState});
        } else {
            res.send(404).send("Not Found");
        }
    });
}

const server = app.listen(8080, () => { console.log('app listening on 8080'); });