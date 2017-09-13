import {observable} from 'mobx'
import axios from 'axios'


class ContactStore {
    
    @observable dataForParent

    loadParent = () => {
        let that = this
        axios.get("https://randomuser.me/api/?results=5").then(function (response) {
            that.dataForParent = response.data.results
        }).catch(function (error) {
            console.error("Error getting parent info:" + error.toString())
        })
    }

}

var store = new ContactStore()

export default store

// autorun(() => {
//     console.log(toJS(store.contactData))
// })