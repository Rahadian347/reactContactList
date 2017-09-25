import React from 'react'
import ContactTable from './ContactList'
import ContactCard from './ContactCard'
import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import styles from './contact.css'

//import Component

@inject('store') @observer
export default class Contact extends React.Component {

  componentDidMount() {
    
    this.props.store.contact.loadParent()
    
  }
  
  render() {
    let data = this.props.store.contact.fetchedData
    let person
    return (
      <div>
        <DevTools />
        <ContactTable data={data}/>
        <div className={styles.cardContainer}>
          <ContactCard person={person}/>
        </div>
      </div>
    )   
  }
} 