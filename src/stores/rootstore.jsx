import todoStore from './ToDoStore.jsx'
import contactStore from './ContactStore.jsx'
import tableStore from './tableStore.jsx'


class RootStore {
    constructor() {
        this.contact = new contactStore(this)
        this.todo = new todoStore(this)
        this.table = new tableStore(this)
    }
}

const rootStore = new RootStore()
window.store = rootStore
export default rootStore