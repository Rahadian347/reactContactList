import React from 'react'
import {Card, ListItem, Avatar } from 'material-ui'
import { observer, inject } from 'mobx-react'
import styles from './contact.css'

@inject('store') @observer
export default class ContactTable extends React.Component {

    render () {
        return (
            <div>
                <Card className={styles.listItemContainer}>
                    {
                        this.props.data.map(({ name, picture, login, email, nat }, index) => {
                            return (
                                <div key={index}>
                                    <ListItem
                                        primaryText={`${name.first} ${name.last}`}
                                        leftAvatar={<Avatar src={picture.thumbnail} />}
                                    >
                                    </ListItem>
                                </div>
                            )
                        })
                    }
                </Card>
            </div>
        )
    }
}