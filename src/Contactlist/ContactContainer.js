import React from 'react'
import ContactTable from './list'
import { observer } from 'mobx-react'
import {toJS} from 'mobx'
import DevTools from 'mobx-react-devtools'

@observer
export default class Contact extends React.Component {

  componentDidMount() {
    
    this.props.store.loadParent()
    
  }
  
  render() {
    
    if (this.props.store.dataForParent != null) {
      var data = toJS(this.props.store.dataForParent)
      return (
        <div className="App">
          <DevTools />
          <ContactTable data={data}/>
        </div>
      )
    }    
    return (null)
  }
}
