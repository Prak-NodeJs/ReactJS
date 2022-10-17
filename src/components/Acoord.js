import { useState } from 'react'
import classes from './Accord.module.css'

const Accord = (props) => {
  const [isClicked, setIsClcked] = useState(false)

  const btnclick = () => {
    if (isClicked === false) {
      setIsClcked(true)
    }
    if (isClicked === true) {
      setIsClcked(false)
    }
  }
  return (
    <div className={classes.outer}>
      <div className={classes.outerline}>
        <h2>{props.title}</h2>
        <button onClick={btnclick}> {isClicked ? '➖' : '➕'}</button>
      </div>

      {isClicked && <p className={classes.para}>{props.description}</p>}
    </div>
  )
}

export default Accord
