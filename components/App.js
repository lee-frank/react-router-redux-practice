import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/foo">Foo</Link>
        <br />
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <br /><br />
      <div>{children}</div>
    </div>
  )
}
