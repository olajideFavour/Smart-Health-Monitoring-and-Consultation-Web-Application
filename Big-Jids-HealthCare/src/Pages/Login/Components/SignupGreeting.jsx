import './Component.css'
import { useRef } from 'react'

export function SignupGreeting({ active , form  , setActive , mediaQuery}) {
  const greeting = useRef(null)

  function switchLoginSignup(){
    if(active && !mediaQuery){
      setActive(false)
      greeting.current.classList.toggle('border1')

      setTimeout(()=>{
      greeting.current.classList.add('login-greeting')
      greeting.current.classList.remove('signup-greeting')
      greeting.current.classList.remove('border1')
      },990)
    }
    else if (!active && !mediaQuery){
      setActive(true)
      greeting.current.classList.toggle('border2')

      setTimeout(()=>{
      greeting.current.classList.add('signup-greeting')
      greeting.current.classList.remove('login-greeting')
      greeting.current.classList.remove('border2')
      console.log(greeting.current.classList)
      },990)
    }
    else if(active && mediaQuery){
      console.log('hello 33' , active)
      setActive(false)
      greeting.current.classList.remove('close-greeting')
      greeting.current.classList.add('open-greeting')
    }
    else if (!active && mediaQuery){
      console.log(active)
      setActive(true)
      greeting.current.classList.toggle('openGreeting2')
    }
  }



// greeting-container signup-greeting

  return (
    <>
      <div className={mediaQuery ? 'greeting-container close-greeting': 'greeting-container signup-greeting'} ref={greeting}>
        <div className='greeting-card'>
          <h1 className='about-header'>Hello, Friend!</h1>
          <p>
            {!mediaQuery && 
            <>
            {active ? "Welcome to our health monitoring and consultation platform" : `Already have an account? Login here.`}
            </>}
            {mediaQuery && 
            <>
            {form ? <>Welcome Back <br/>It's so good to see you <br/> </> : "Welcome to our health monitoring and consultation platform" }
            </>}
          </p>
          <button
            onClick={switchLoginSignup}
          >
          {!mediaQuery &&
          <>
          {active  ? "Sign Up" : "Login"}
          </>
          }
          {mediaQuery &&
          <>
          {form  ? "Login" : "Signup"}
          </>
          }
          </button>
        </div>
      </div>
    </>
  )
}
