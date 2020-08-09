import React from 'react';
import WhatsApp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

// import { Container } from './styles';
export default function TeacherItem() {
    return(
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars2.githubusercontent.com/u/50683388?s=460&u=0bcd99e4f4f8333452d936b5c566760c760e9da1&v=4"
              alt="NicolasAlex"
            />

            <div>
              <strong>Nicolas Alexsander</strong>
              <span>Análise e Desenvolvimento de Sitemas</span>
            </div>
          </header>

          <p>
            Analista e Desenvolvedor de Sistemas
            <br /><br />
            Sempre desenvolvendo aplicativos mobile, web e evoluindo cada vez mais no React.
          </p>

          <footer>
            <p>
              Preço/hora:
              <strong>R$ 40,00</strong>
            </p>
            <button type="button">
              <img src={WhatsApp} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
          
        </article>
    )
}