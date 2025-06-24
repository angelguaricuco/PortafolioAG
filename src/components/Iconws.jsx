
import { IoLogoWhatsapp } from "react-icons/io";
import './iconws.css'
import { div } from "framer-motion/client";
function iconws() {
  return (
<div className='whatsapp__container'>
      <a href="https://wa.me/+584242611859" 
      target='_blank' 
      rel='noopener noreferrer'
      className='whatsapp__link2'>
        <IoLogoWhatsapp className='icon2'/>
</a>
</div>
  )
}

export default iconws
