import React,{useState} from 'react'
import StepAvatar from './Steps/StepAvatar';
import StepOtp from './Steps/StepOtp';
import StepPhoneMail from './Steps/StepPhoneMail'
import StepUsername from './Steps/StepUsername';

type Steps = {
    [key:number]:any
}

const steps :Steps= {
    1:StepPhoneMail,
    2:StepOtp,
    3:StepUsername,
    4:StepAvatar
}

const Register = () => {
    const [stepNo,setStepNo] = useState(1);
    const CurrentStep = steps[stepNo];
    const nextStep = ()=>{
    setStepNo((prev)=>prev+1)
    }
  return (
    <div>
        <CurrentStep nextStep={nextStep}/>
    </div>
  )
}

export default Register