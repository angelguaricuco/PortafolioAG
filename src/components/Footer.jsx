import { GrLinkedin } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import { FaHtml5, FaCss3Alt, FaReact, FaWhatsapp, FaRegCopyright   } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer section">
				<div className="footer__container">
					<div className="footer__info">
						
						<p className="footer__description">
							Soy un desarrollador web y me apasiona el entorno de desarrollo.
							Disfruto escribir código y me encanta lo que hago.
						</p>
					</div>

					<div className="footer__social">
						<h3 className="footer__title">Redes Sociales</h3>
						<p className='footer__social-links'>
							<a
								className="linkedin__link"
								href="https://www.linkedin.com/in/angel-guaricuco/"
                 target='_blank'
                rel="noopener noreferrer"
							>
								<GrLinkedin />
							</a>
							<a
								className="github__link"
								href="https://github.com/angelguaricuco"
                 target='_blank'
                rel="noopener noreferrer"
							>
								<ImGithub />
							</a>
              <a
								className="github__link"
								href="https://wa.me/+584242173205"
                target='_blank'
                rel="noopener noreferrer"
							>
								<FaWhatsapp  />
							</a>
						</p>
					</div>
				</div>

				<p className="footer__copy">
					<span><FaRegCopyright className='copy_icon' /> CopyRigth Todos los derechos reservados</span>
				</p>
			</footer>
  )
}

export default Footer
