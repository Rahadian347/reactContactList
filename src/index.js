import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

//react bootsrap
import {Tab, Tabs} from 'react-bootstrap'

//import components
import ToDo from './ToDoList/ToDoBox'
import Contact from './Contaclist/Contact'

import NewToDoList from './newToDo/ToDoList'
import Store from './newToDo/ToDoStore'


injectTapEventPlugin();

// export default class App extends React.Component {

//     render() {
//         return (
//             <div>
//                 <Tabs bsStyle='tabs' defaultActiveKey={1}>
//                     <Tab eventKey={1} title='ToDo List' href='/contact'><ToDo /></Tab>
                    
//                     <Tab eventKey={2} title='Contact List' href='/todo'><Contact /></Tab>
//             </Tabs>
            
            
//             </div>
//         )
//     }

// }
ReactDOM.render(
    <NewToDoList />
    // <MuiThemeProvider><App /></MuiThemeProvider>  
        , document.getElementById('root'));
registerServiceWorker();


