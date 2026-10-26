import { useRef , useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import {data} from "../../../Data/data"



export function SignUpForm({active, setForm , mediaQuery}){
  const loginForm = useRef(null)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect( fadeIn ,[active])
  
  function fadeIn(){
      if(!active && !mediaQuery){
      loginForm.current.classList.add('animate1')
      setTimeout(()=>{
        loginForm.current.classList.remove('animate1')
      },1000)
    }
  }

  function handleSignUp(){
    
    const users = data.users
    const foundUser = users.find(u => u.email === email)
    
    if(name=== "" || email=== "" || password=== "" || password.length < 6){
      setErrorMessage("Please fill in all fields and ensure password is at least 6 characters long")
      setTimeout(()=>{
        setErrorMessage("")
      },5000)
      return;
    }

    if(foundUser){
      
      setErrorMessage("Email already exists")
      setTimeout(()=>{
        setErrorMessage("")
      },5000)
    } 
    else {
      const newUser = {
        id: `id${Date.now()}`,
        email,
        password,
        user: "patient",
      }
      data.users.push(newUser)

      data.Patientuser.push({
        id: newUser.id,
        name,
        email,
        phone: null,
        age: null,  
        gender: null,
        address: null,
        profilePic: null,
        healthStatus: "No Record Yet",
        medications: [],
        doctorsId: [],
        notification: [],
      })
      console.log(newUser)
    }
    localStorage.setItem("token", "fake-jwt-token")
    localStorage.setItem("user", JSON.stringify({
      id: `id${Date.now()}`,
      email,
      password, 
      user: "patient",
    }))
    navigate("/dashboard")
  }


  
  return(
    <div className="form-container" ref={loginForm}>
    <div className="signUp-form panel-form">
      <h1>Create Account</h1>
      
      <div className="form">
        <input type="text"
         placeholder="Name" 
         name="name"
         value={name}
         onChange={
          (e) => setName(e.target.value)
        
        }  
        />
        <input type="email"
         placeholder="Email" 
         name="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}  
        />
        <input type="password" 
         placeholder="Password" 
         name="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}  
        />
        <button className="signUp-btn"
        onClick={()=>handleSignUp()}
        >Sign Up
      </button>
      </div>

      
      <div className="alertScreen">
        {errorMessage}
      </div>

      {mediaQuery && 
        <div>
          <p>Already have an account? <span onClick={()=> setForm(true)}>Login</span></p>
        </div>
      }
    </div>

    
    
    </div>
  )
}