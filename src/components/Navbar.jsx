import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='navbar'>
			<div className="nav_logo">
				<a href="#home"className={`nav_item ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
					<p className='nav_title'>Angel Guaricuco</p></a>
				</div>
			<div className={`nav_items ${isOpen && "open"}`}>
        <a href="#home"className={`nav_item ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>INICIO</a>
				<a href="#about-me"className={`nav_item ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>SOBRE MI</a>
				<a href="#skills"className={`nav_item ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>TECNOLOGIAS</a>
				<a href="#projects"className={`nav_item ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>PROYECTOS</a>
        <a href="#contact"className={`nav_item ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>CONTACTO</a>
      </div>
			<div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
}

export default Navbar;
