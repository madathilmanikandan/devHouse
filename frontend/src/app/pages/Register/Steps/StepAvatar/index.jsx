import React from 'react'

const StepAvatar = ({nextStep}) => {
  return (
    <div>
        <div>
        Set Up your Avatar
        </div>
        <div>
        <button onClick={nextStep}>Next</button>
        </div>
        </div>
  )
}

export default StepAvatar