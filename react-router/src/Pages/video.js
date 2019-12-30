import React from 'react'
import { Route, Link } from 'react-router-dom'
import ReactComponent from './video/react-component'
import VueComponent from './video/vue-component'
import FlutterComponent from './video/flutter-component'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/react">React教程</Link></li>
          <li><Link to="/video/vue">Vue教程</Link></li>
          <li><Link to="/video/flutter">Flutter教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path="/video/react" component={ReactComponent} />
        <Route path="/video/vue" component={VueComponent} />
        <Route path="/video/flutter" component={FlutterComponent} />
      </div>
    </div>
  )
}

export default Video