import React, { useState } from 'react'
import './Popup.css'
const Popup = () => {
  const [popup, setPopup] = useState(false)

  const popupHandler = () => {
    if (popup === false) {
      setPopup(true)
    }
  }
  return (
    <div>
      {!popup && (
        <div className="whole">
          <p>Click here to show the pop up</p>
          <button className="buttonpop" onClick={popupHandler}>
            Open PopUp
          </button>
        </div>
      )}

      {popup && (
        <div className="modelbackground">
          <button className="xbtn" onClick={() => setPopup(false)}>
            X
          </button>
          <div className="modalContainer">
            <div className="title">
              <h3>Are you sure You want to Continue?</h3>
            </div>
            <div className="body">
              <p>THe next page is awaseome,plse move forward</p>
            </div>
            <div className="footer">
              <button className="popbtn" onClick={() => setPopup(false)}>
                Cancel
              </button>
              <button className="popbtn" onClick={() => setPopup(false)}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Popup
