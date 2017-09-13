import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'mobx-react'

//import components
import Contact from './Contactlist/ContactContainer'
import NewToDoList from './newToDo/ToDoList'
import store from './newToDo/ToDoStore'
// import store from './Contactlist/ContactStore'

ReactDOM.render(  
    <Provider>
        <NewToDoList store={store} />  
        {/* <ToDo /> */}
        {/* <Contact  store={store}/> */}
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();


