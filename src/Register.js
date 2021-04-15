import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const server = 'http://localhost:3001/'
  const history = useHistory();
  /** Checks if the passwords are the same. */
  function checkPasswordsSame() {
    if (password === confirmPassword) {
      return true
    }
  }

  /** Registers the user. */
  async function registerUser(e) {
    e.preventDefault()
    setError('')
    setStatus('')

    if (!checkPasswordsSame()) {
      return
    }

    const obj = {
      username: username,
      password: password
    }

    // send off to server
    const url = server + 'api/register'
    try {
      const result = await fetch(url, {
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const response = await result.json()

      if (response.hasOwnProperty('error')) {
        setError(response.error)
        // setStatus(response.error)
        return
      }



      setStatus(response.status)

      // delay before redirect
      await new Promise(r => setTimeout(r, 1500));

      // redirect to home
      history.push('/login')



      // TODO if it fails??
      console.log(response)
    } catch (err) {
      console.log(err)
    }


  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3'>
          <form className='mt-5'>
            <h1 className='mb-4 text-center'>Register</h1>
            <div className="form-group mb-2">
              <label >Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter username" />
            </div>
            <div className="form-group mb-2">
              <label >Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-group mb-3">
              <label >Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" onClick={registerUser} className="btn btn-primary">Submit</button>
          </form>
          {
            status.length > 0 && <h5 className='mt-3 alert alert-success'>{status}</h5>
          }
          {
            error.length > 0 && <h5 className='mt-3 alert alert-danger'>{error}</h5>
          }
        </div>
      </div>
    </div>
  )
}


export default Register
