import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Accordian from './components/Accordianpage'
import Popup from './components/PopUp'
import Forms from './components/Forms'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Subscribe to </p>
        <h1>Thapa Technical Home Page</h1>
      </section>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home"></Route>

        <Route path="/accordian">
          <Accordian />
        </Route>

        <Route path="/popup">
          <Popup />
        </Route>

        <Route path="/forms">
          <Forms />
        </Route>
      </Switch>
    </div>
  )
}

export default App
