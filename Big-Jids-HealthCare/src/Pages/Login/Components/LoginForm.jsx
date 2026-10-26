import { useRef, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {data} from "../../../Data/data"
import '../Login.css'

export function LoginForm({active,  setForm , mediaQuery}){
  const loginForm = useRef(null)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect( fadeIn ,[active])

  function fadeIn(){
      if(!mediaQuery && active){
      loginForm.current.classList.add('animate1')
      setTimeout(()=>{
        loginForm.current.classList.remove('animate1')
      },1000)
    }
  }
  

  function handleLogin(email, password){
    const users = data.users
    const foundUser = users.find(u => u.email === email && u.password === password)
    if(foundUser){
      localStorage.setItem("token", "fake-jwt-token")
      localStorage.setItem("user", JSON.stringify(foundUser))
      console.log(foundUser)
      navigate("/dashboard")
    } else {
      setErrorMessage("Invalid email or password")
      setTimeout(()=> {
        setErrorMessage('')
      },5000)
    }
  }
  

  return(
    <div className="form-container " ref={loginForm}>
      <div className="login-form panel-form">
        <h1>Login</h1>
        
        <div className="form">
          <input 
           type="email"
           placeholder="Email" 
           name="email"
           value={email}
           onChange={(e) =>{
            setEmail(e.target.value);
            setErrorMessage('');
          }}
          />
          <input 
           type="password" 
           placeholder="Password" 
           name="password"
           value={password}
           onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage('');
           }}
          />
          <button 
            className="login-btn"
            onClick={()=>handleLogin(email, password)}
          >Login</button>
        </div>
        <div className="alertScreen">
        {errorMessage}
      </div>
        {mediaQuery && 
        <div>
          <p>Don't have an account? <span onClick={()=> setForm(false)}>Sign up</span></p>
        </div>
      }
      </div>
      
    </div>
  )
}