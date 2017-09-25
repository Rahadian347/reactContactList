import {observable, computed, action} from 'mobx'
import axios from 'axios'

class tableStore {
    constructor(rootstore) {
        this.tableStore = tableStore
    }

    @observable dataTable = []
    @observable searchKeyword = 'stark'
    @observable isLoading = false

    @computed get filteredDataTable() {
        let filteredDataTable = []
        if (this.searchKeyword !== '') {
            filteredDataTable = this.dataTable.filter(people => people.personaname.indexOf(this.searchKeyword) >= 0 )
        } else {
            filteredDataTable = this.dataTable
        }
        return filteredDataTable
    }

    @action loadData() {
        this.isLoading = true
        axios.get(`https://api.opendota.com/api/search?q=${this.searchKeyword}`).then ((response) => {  
            this.dataTable = response.data
            this.isLoading = false
        }).catch(function (error) {
            console.error("Error getting parent info:" + error.toString())
        })
    }

    @action onChangeFilter(data) {
        this.searchKeyword = data
    }

}

export default tableStore