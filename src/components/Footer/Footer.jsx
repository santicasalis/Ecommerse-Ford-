import { Icon } from '@iconify/react';

import "./footer.css"


export const Footer = () => {
  return (

    <div className="bg-primary " >
      <div>
        <Icon className='icons' icon="entypo-social:instagram-with-circle" color="white" height="50" />
        <Icon className='icons' icon="entypo-social:linkedin-with-circle" color="white" height="50" />
        <Icon className='icons' icon="akar-icons:telegram-fill" color="white" height="50" />

      </div>

      <a > <img className='iconFord' src="https://www.ar.ford.com/manual/img/logo.png"
        alt=""
        height="45vh"
      /></a>
    </div>
  )
}
