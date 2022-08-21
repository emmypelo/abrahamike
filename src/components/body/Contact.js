import React, { useState, useRef, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const messageSent = () => toast.success("Your message has been sent");
  const messagefail = () => toast.error("There is an error sending your message");
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const Navigate = useNavigate()

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };
  const Scrolltop =()=>{
    
      window.scrollTo({top:0, left:0, behavior:"smooth"})
    
  }
  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_za5athz",
        "template_jztb59f",
        form.current,
        "-LWqK-GeYshtaQZJ9"
      )
      .then(
        (result) => {
          if (result.status===200) {
            messageSent();
            Navigate('/')
            setEmail("");
            setName("");
            setText(""); 
            Scrolltop()
            
          }
  
        },
        (error) => {
          messagefail();
          console.log(error.text);
        }
      );
  };

  return (
    <div className="auth__container" id="contact">
      <ToastContainer className='text-primary'/>
      <div className="auth">
        <form className="auth__form" ref={form} onSubmit={(e) => sendEmail(e)}>
          <input
            className="auth__form--input"
            type="text"
            value={name}
            placeholder="First name Last name"
            minLength={8}
            name="user_name"
            required
            onChange={(e) => updateName(e)}
          />
          <input
            className="auth__form--input"
            type="email"
            placeholder="email"
            value={email}
            name="user_email"
            required
            onChange={(e) => updateEmail(e)}
          />

          <input
            className="auth__form--input"
            type="text"
            placeholder="Enter your message"
            minLength={8}
            value={text}
            name="message"
            required
            onChange={(e) => updateText(e)}
          ></input>
          <input className="auth__form--submit" type="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default Auth;
