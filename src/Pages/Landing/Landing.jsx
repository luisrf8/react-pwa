import React, {useState} from 'react'
// import AuthOptions from '../../Components/Auth/AuthOptions'
import LoginForm from '../../Components/Auth/LoginForm'
import RegisterForm from '../../Components/Auth/RegisterForm'
import "./Landing.scss"

export default function Landing() {
  const [selectedForm, setSelectedForm] = useState(true);
  const handlerForm = () => {
    console.log("aqui", selectedForm)
    if(selectedForm) {
        return <LoginForm setSelectedForm={setSelectedForm}/>;
    } else {
        return <RegisterForm setSelectedForm={setSelectedForm}/>
    }
  }
  return (
    <div className='Landing' style={{backgroundcolor: '#ffff'}}>
      {/* <Topbar /> */}
      <div className='auth__dark'/>
      <div className='auth__box'>
        {handlerForm()}
      </div>
    </div>
  )
}
