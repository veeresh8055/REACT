import React from 'react'
import UncontrolledForm from './components/UncontrolledForm'
import ControlledForm from './components/controlledForm'

const App = () => {
  return (
    <>
      <UncontrolledForm/>
      <hr /><br /><hr />
      <ControlledForm />
    </>
  )
}

export default App