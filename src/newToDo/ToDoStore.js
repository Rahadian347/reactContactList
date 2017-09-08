import { autorun, observable } from 'mobx'

class ToDoStore {
    @observable todos = ["get milk", "buy egg"]
    @observable filter = ''
}

var store = window.store = new ToDoStore

export default store

autorun(() => {
    console.log(store.filter)
    console.log(store.todos[0])
})