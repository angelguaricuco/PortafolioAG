import './Form.css'
import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
function Form() {
    const form = useRef();

  const sendEmail = async (e) => {
    await e.preventDefault();
    

    emailjs.sendForm('service_512avmj', 'template_to5h3hn', form.current, {
        publicKey: 'lxJrCZ9Cpa4m6kiAX',
      })
      .then(
        () => {
          handleSubmit(e); // Call handleSubmit to show the modal
          console.log('SUCCESS!', 'Message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      await e.target.reset(); // Reset the form after submission
  }
      // Estado para controlar la visibilidad del modal
        const [mostrarModal, setMostrarModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para procesar los datos del formulario
    setMostrarModal(true); // Muestra el modal al enviar
  };

  const closeModal = () => {
    setMostrarModal(false);
  };
  return (
    <div className="container2__form">
      <h2 className="form_title">Ponte en contacto conmigo</h2>
      <form action="" ref={form} onSubmit={sendEmail}>
        <div className="form_group">
          <label htmlFor="name"className='title_form'>Nombre:</label>
          <input type="text" id="name" name="name" required placeholder='Nombre' className='input'/>
        </div>
        <div className="form_group">
          <label htmlFor="email"className='title_form'>Correo Electrónico:</label>
          <input type="email" id="email" name="email" required placeholder='Email' className='input'/>
        </div>
        <div className="form_group">
          <label htmlFor="subject"className='title_form'>Asunto:</label>
          <input type="text" id="subject" name="subject" required placeholder='Asunto' className='input'/>
        </div>
        <div className="form_group">
          <label htmlFor="message"className='title_form'>Mensaje:</label>
          <textarea id="message" name="message" rows="4" required placeholder='Escribe un mensaje' className='textarea'></textarea>
        </div>
        <div className='form_button_container'>
<button type="submit" className="form_button" value="Send" >Enviar</button>
        </div>
        
      {mostrarModal && (
        <div className="modal">
          <div className="modal_content">
            <h2>¡Mensaje enviado con éxito!</h2>
            <p>Gracias por tu mensaje. Me pondré en contacto contigo pronto.</p>
            <button onClick={closeModal} >Cerrar</button>
          </div>
        </div>
      )}
      </form>
    </div>
  )

}

export default Form
