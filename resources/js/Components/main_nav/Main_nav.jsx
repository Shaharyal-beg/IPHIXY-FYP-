import React from 'react'
import {  Navbar2, Navbar3} from '../../Components'

const Main_nav = (props) => {
  console.log(props)
  let type=props.props.type
  let navbar;
    if (type==4) {
      navbar = <Navbar2/>;
    } else {
      navbar = <Navbar3/>
    }
  return (
    <div>{navbar}</div>
    
  )
}

export default Main_nav
