import React from 'react'

const StepName = ({nextStep}) => {
  return (
    <div>
     <div>Set up your name</div> 
     <button onClick={nextStep}>Next</button>
      </div>
  )
}

export default StepName