import { observable, computed} from 'mobx'

const id = Date.now()

class ToDoStore {
    @observable todos = [
        {
            'id': id,
            'value': 'makan pagi',
            'complete': false
        },
        {
            'id': id + 1,
            'value': 'makan siang',
            'complete': false
        }, {
            'id': id + 2,
            'value': 'makan malam',
            'complete': false
        }
    ]

    @observable filter = ''
    @observable classes = 'list-group-item'


    @computed get filteredTodo() {
        var matchesFilter = new RegExp(this.filter, 'i')
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }

    createTodo(value) {
        this.todos.push({ id: Date.now(), value: value, complete: false })
    }

    clearComplete = () => {
        const clear = this.todos.filter(todo => !todo.complete)
        this.todos.replace(clear)
    }
    @computed get changeComplete() {
        if (this.todos.complete)
            return this.classes + ' success'
        return this.classes
    }
}

var store = window.store = new ToDoStore()

export default store