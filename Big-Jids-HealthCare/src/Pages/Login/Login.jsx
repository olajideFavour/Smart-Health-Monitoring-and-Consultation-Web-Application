import { SignupGreeting } from "./Components/SignupGreeting";
import { LoginForm } from "./Components/LoginForm";
import { SignUpForm } from "./Components/SignUpForm";
import { useState } from "react";
import "./Login.css";

export function Login() {
  const [active, setActive] = useState(true);
  const mediaQuery = window.matchMedia('(max-width: 960px)');
  const [form, setForm] = useState(true);

  return (
    <div className="container">
      <SignupGreeting active={active} form={form} setForm={setForm} setActive={setActive} mediaQuery={mediaQuery.matches}/>
      <div className="forms-container">
        {mediaQuery.matches &&
        <div className="MobileForms">
        {form && <LoginForm active={active} form={form} setForm={setForm} setActive={setActive} mediaQuery={mediaQuery.matches} />}
        {!form && <SignUpForm active={active} form={form} setForm={setForm} setActive={setActive} mediaQuery={mediaQuery.matches}/>}
        </div>
        }
        {!mediaQuery.matches &&
        <>
        <SignUpForm active={active} form={form} setForm={setForm} setActive={setActive} mediaQuery={mediaQuery.matches}/>
        <LoginForm active={active} form={form} setForm={setForm} setActive={setActive} mediaQuery={mediaQuery.matches} />
        </>
        }
        
      </div>
    </div>
  );
}
