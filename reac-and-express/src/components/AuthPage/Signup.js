import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../config/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [fristName,setFristName] = useState('')
  const [lastName,setLastName] = useState('')
  const [phone,setPhone] = useState('')
  
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [fristNameError,setFristNameError] = useState('')
  const [lastNameError,setLastNameError] = useState('')
  const [phoneError,setPhoneError] = useState('')
  const navigate = useNavigate()
  
    const handleSubmit = async (e)=>{
      e.preventDefault()
      console.log(fristName,lastName,email,password,phone);
      try {
        const res = await fetch('http://localhost:5000/signup',{  
          method:'POST'  ,
          body:JSON.stringify({      
              fristName,
              lastName,
              email,
              password,
              phone}),
              credentials:'include',
          headers:{'Content-Type':'application/json'}
      })
        const data = await res.json()
        console.log(data)
        if (await data.errors){
          console.log(data.errors)
            setEmailError(data.errors.email)
            setFristNameError(data.errors.fristName) 
            setLastNameError(data.errors.lastName) 
            setPasswordError(data.errors.password) 
            setPhoneError(data.errors.phone) 
        }
        if (data.user){
          navigate('/',{replace:true})
      }
      
    }
        catch(err){
          console.log(err)
        }
        
        // console.log(res.data.fristName)
        // const value = res.data
        // navigate('/users',{state:{value}})
    }


  return (
    <div>
        <Header />
          <div className='container' >
          <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card shadow-lg p-1 bg-dark rounded card-signin my-5">
              <div className="card-body">
              <h5 className="card-title text-center">Sign Up</h5>
            <form className='form-signin' onSubmit={handleSubmit}>
            <div className='email error alert-danger text-danger text-center'>{fristNameError}</div>
              <div className='form-floating form-label-group' id='first'>
                    <input 
                      type="text" 
                      className='form-control rounded-4' 
                      id='form1' 
                      name="fname" 
                      placeholder='User Name' 
                      value={fristName} 
                      onChange={e =>{setFristName(e.target.value)}}
                      />
                    <label htmlFor="floatForm">First Name</label>
              </div> 
              <br></br>         
              <div className='email error alert-danger text-danger text-center'>{lastNameError}</div>
                <div className='form-floating form-label-group'>
                    <input 
                      type="text" 
                      className='form-control rounded-4' 
                      id='form2' 
                      name="lname" 
                      value={lastName}
                      placeholder='User Name'  
                      onChange={e =>{setLastName(e.target.value)}}
                      />
                    <label htmlFor="floatForm">Last Name</label>
              </div> 
              <br></br>
              <div className='email error alert-danger text-danger text-center'>{emailError}</div>
              <div className='form-floating form-label-group'>
                    <input 
                      type="text" 
                      className='form-control rounded-4' 
                      id='form3' 
                      name="email" 
                      value={email}
                      placeholder='User Name'  
                      onChange={e =>{setEmail(e.target.value)}}
                      />
                    <label htmlFor="floatForm">Email</label>
              </div>
                <br></br> 
                <div className='email error alert-danger text-danger text-center'>{passwordError}</div>
                <div className='form-floating form-label-group'>
                    <input 
                      type="password" 
                      className='form-control rounded-4' 
                      id='form4' 
                      name="passwrod" 
                      value={password}
                      placeholder='User Name' 
                      onChange={e =>{setPassword(e.target.value)}}
                      />
                    <label htmlFor="floatForm">Pass Word</label>
                </div> 
                <br />
              <div className='email error alert-danger text-danger text-center'>{phoneError}</div>
              <div className='form-floating form-label-group'>
                  <input 
                    type="tel" 
                    className='form-control rounded-4' 
                    id='form5' 
                    name="phoneNumber" 
                    value={phone}
                    placeholder='User Name' 
                    max={10} 
                    onChange={e =>{setPhone(e.target.value)}}
                    />
                  <label htmlFor="floatForm">Phone Number</label>
                </div>          
                                <br></br>                               
                      <br />
                      <hr />
                        <Link to='/login' className='style-1'> Have Account?</Link>
                      <br />
                      <br />
                      <div className='text-center'>
                        <button type = "submit" className='btn btn-success '>Sign Up</button>
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

export default Signup
