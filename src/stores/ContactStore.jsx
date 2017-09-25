import {observable} from 'mobx'
import axios from 'axios'


class contactStore {
    
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable fetchedData = []

    loadParent = () => {
        let that = this
        axios.get("https://randomuser.me/api/?results=5").then(function (response) {
            that.fetchedData = response.data.results
        }).catch(function (error) {
            console.error("Error getting parent info:" + error.toString())
        })
    }
}


// const contactStore = new ContactStore()
export default contactStore