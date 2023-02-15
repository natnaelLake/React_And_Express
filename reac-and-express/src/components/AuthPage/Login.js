import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../config/Header'
import '../config/style.css'
import { Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const [emailError,setEmailError] = useState('')
const [passwordError,setPasswordError] = useState('')
const navigate = useNavigate()

      const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(email,password);
        try {
          const res = await fetch('http://localhost:5000/login',{    
            method:'POST'  ,
            body:JSON.stringify({      
                email,
                password
              }),
            headers:{'Content-Type':'application/json'}
        })
          const data = await res.json()
          console.log(data)
          if (data.errors){
            console.log(data.errors)
              setEmailError(data.errors.email)
              setPasswordError(data.errors.password) 
          }
          if (data.user){
            navigate('/',{replace:true})
        }
        
      }
      catch(err){
        console.log(err)
      }
      }
  return (
    <div>
      <Header />
        <div className='container' >
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card shadow-lg p-1 bg-dark rounded card-signin my-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form  className='form-signin' onSubmit={handleSubmit}>
                      <div className='form-floating form-label-group' id='first' name = 'fname'>
                          <input
                            type="text"
                            className='form-control rounded-4'
                            id='form1'
                            name="email"
                            placeholder='User Name'
                            onChange={(e)=>setEmail(e.target.value)}
                          />
                      <label htmlFor="floatForm">User Name</label>
                </div>          
                  <br></br>
                  <div className='email error alert-danger text-danger text-center'>{emailError}</div>
                <div className='form-floating form-label-group'>
                          <input
                            type="password"
                            className='form-control rounded-4'
                            id='floatForm'
                            name="password"
                            placeholder='User Name'
                            onChange={(e)=>setPassword(e.target.value)}
                          />
                      <label htmlFor="floatForm">Pass Word</label>
                  </div> 
                        <br />
                        <div className='email error alert-danger text-danger text-center'>{passwordError}</div>
                        <hr />
                          <Link to='/signup' className='style-1'> Create Account?</Link>
                        <br />
                        <br />
                        <div className='text-center'>
                          <button type = "submit" className='btn btn-success' >Login</button>
                        </div>
                  </form>
                </div>  
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
