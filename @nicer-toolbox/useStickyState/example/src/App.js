import React from 'react'
import useStickyState from 'use-sticky-state'

const App = () => {
  const [state, setState] = useStickyState('test', 'key')
  return <div>{state}</div>
}

export default App
