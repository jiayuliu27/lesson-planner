'use strict'

// import 'typeface-roboto'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router,
         Route,
         IndexRoute,
         IndexRedirect,
         browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import createMuiTheme from 'material-ui/styles/createMuiTheme'
// import createMuiTheme from 'material-ui/styles/createMuiTheme'
// import createPalette, { dark } from 'material-ui/styles/createPalette'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import Main from './containers/MainContainer'

import store from './store'

const App = () => (
    <MuiThemeProvider>
        <div>
            Main
            <DatePicker hintText="Default" />
        </div>
    </MuiThemeProvider>
);

render(
    <App />,
    document.getElementById('main')
);