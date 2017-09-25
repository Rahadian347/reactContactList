import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'mobx-react'
import {
    Tabs, Tab
} from 'react-bootstrap'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


//import components
import ContactPage from './Contactlist/ContactContainer.jsx'
import NewToDoListPage from './newToDo/ToDoList.jsx'
import FixedTablePage from './FixedDataTable/TableContainer.jsx'
import rootStore from './stores/rootstore.jsx'

injectTapEventPlugin()

class AppProvider extends React.Component {
    render() {
        return (
            <Provider store={rootStore}>
                <App />
            </Provider>
        )
    }
}
class App extends React.Component {
    render () {
        return (
            <div>
                <Tabs
                    id={1}
                    defaultActiveKey={3}
                    animation={false} >

                    <Tab eventKey={1} title='Todo List'><NewToDoListPage /></Tab>
                    <Tab eventKey={2} title='Contact List'><ContactPage /> </Tab>
                    <Tab eventKey={3} title='Table'><FixedTablePage /> </Tab>
                </Tabs>    
            </div>   
        )
    }
}

ReactDOM.render(  
    <MuiThemeProvider>
        <AppProvider />
    </MuiThemeProvider>
        , document.getElementById('root'));

registerServiceWorker();


