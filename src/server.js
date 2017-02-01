require('babel-core/register')({
    presets: ['es2015', 'react']
});

const path = require('path');
const Express = require('express');
const React = require('react');
const Redux = require('redux');
const reactDomServer = require('react-dom/server');
const ReactRedux = require('react-redux');

//Reducers
const SampleContainerReducer = require('./store/reducers/sample-container-reducer').default;

//Container
const SampleContainer = require('./containers/sample-container');

const app = Express();
app.get('/ping', initialRender);


/*
 Controller Class
 */
function initialRender (req, res) {
    const store = Redux.createStore(SampleContainerReducer);
    const html = reactDomServer.renderToString(
        <ReactRedux.Provider store={store}>

        </ReactRedux.Provider>
    );

    const initialState = store.getState();
    res.send(renderFullPage(html, initialState))
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>React Bootstrap</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="./bundle.js"></script>
      </body>
    </html>
    `
}

const server = app.listen(8080, () => { console.log('app listening on 8080'); });