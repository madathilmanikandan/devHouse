import React from 'react'
import {Button,Card, CardContent, Typography,Box,Container} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  return (
    <div>
      <div>
     <FontAwesomeIcon icon={faCoffee}/>
     <h2>Welcome to devHouse</h2>
      </div>
      <p>The clubhouse platform is a place where developers can come to collaborate, share knowledge, and learn new skills. The developer community has grown exponentially in the past few years. Developers need a safe space to share their knowledge and learn new skills. The clubhouse provides that space for them...</p>
    </div>

  )
}

export default Home

//   The clubhouse platform is a place where developers can come to collaborate, share knowledge, and learn new skills. The developer community has grown exponentially in the past few years. Developers need a safe space to share their knowledge and learn new skills. The clubhouse provides that space for them.