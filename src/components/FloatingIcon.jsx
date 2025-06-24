import { IoLogoWhatsapp } from "react-icons/io";
import './FloatingIcon.css'

function FloatingIcon() {
  return (
<div className='whatsapp__container'>
      <a href="https://wa.me/+584242611859" 
      target='_blank' 
      rel='noopener noreferrer'
      className='whatsapp__link2'>
        <IoLogoWhatsapp />
</a>
</div>
  )
}

export default FloatingIcon;
