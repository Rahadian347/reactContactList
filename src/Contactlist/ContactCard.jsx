import React from 'react'
import {inject, observer} from 'mobx-react'

import {
    Card, CardTitle, CardText, Avatar
} from 'material-ui'

@inject('store') @observer
export default class CardContact extends React.Component {
    
    render() {
        return (
            <div >
                <Card>
                    <CardTitle
                        title={'Jack Sparrow'}
                        subtitle='Carribean' />
                    <CardText>
                        <Avatar src='asd' size={120} style={{marginBottom: 10}}/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            </div>
        )
    }
}