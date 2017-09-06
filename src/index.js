import React from 'react';
import ReactDOM from 'react-dom';
import App from './Contaclist/App';
import ToDo from './ToDoList/ToDoBox'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



ReactDOM.render(
<MuiThemeProvider><ToDo /></MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();


