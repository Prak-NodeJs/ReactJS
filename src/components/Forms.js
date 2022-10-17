import { useState } from 'react'
import './Forms.css'

const Forms = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [confirmEmail, setconfirmEmail] = useState('')
  const [address, setAddress] = useState('')
  const [company, setCompany] = useState('')
  const [Degree, setDegree] = useState('')
  const [College, setCollege] = useState('')

  const [details, setDetails] = useState([])

  const [submited, setSubmited] = useState(false)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setDetails((oldDetails) => {
      return [
        ...oldDetails,
        firstName,
        lastName,
        Email,
        confirmEmail,
        address,
        company,
        Degree,
        College,
      ]
    })

    console.log(details)
    setSubmited(true)

    setFirstName('')
    setLastName('')
    setconfirmEmail('')
    setEmail('')
    setAddress('')
    setCollege('')
    setCompany('')
    setDegree('')
  }

  return (
    <div className="container">
      <div className="small-container">
        <form action="">
          <div className="header">
            <h1 className="heading">Form For Collecting Data</h1>
            <hr />
          </div>
          <div className="allInputs">
            <div className="inputs">
              <label htmlFor="">Enter First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                className="input"
                type="text"
                value={firstName}
              />
            </div>
            <div className="inputs">
              <label htmlFor="">Enter last Name</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className="inputs">
              <label htmlFor="">Enter Email</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
            </div>
            <div className="inputs">
              <label htmlFor="">Enter confirm Email</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setconfirmEmail(e.target.value)}
                value={confirmEmail}
              />
            </div>
            <div className="inputs">
              <label htmlFor="">Enter Address</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="inputs">
              <label htmlFor="">Enter Company </label>
              <input
                className="input"
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
            <div className="inputs">
              <label htmlFor="">Enter Degree</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setDegree(e.target.value)}
                value={Degree}
              />
            </div>
            <div className="inputs">
              <label htmlFor="">Enter College Name</label>
              <input
                className="input"
                type="text"
                onChange={(e) => setCollege(e.target.value)}
                value={College}
              />
            </div>
          </div>

          <div className="btn">
            <button onClick={onSubmitHandler} className="submitbtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forms
