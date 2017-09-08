import {observable} from 'mobx'

export class ToDoStore {
    @observable todos = []
    @observable filter = ''

    }

export default new ToDoStore