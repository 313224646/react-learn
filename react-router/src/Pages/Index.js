import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { uid:123, title: '标题-1' },
        { uid:456, title: '标题-2' },
        { uid:789, title: '标题-3' },
      ]
    }
    this.props.history.push('/home')
  }
  render() {
    return (
      <ul>
        {
          this.state.list.map(item => {
            return (
              <li key={item.uid}>
                <Link to={'/list/' + item.uid}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Index