import React from "react";
import './Header.css'
import $ from "jquery";



function extantedHeader(props) {
    if($('#navbarHeader').hasClass('show')) {
        $('#navbarHeader').removeClass('show')
        $('#buttonHeader').removeClass('collapsed').attr('aria-expanded', 'false')
        $('main').fadeIn(100)
    } else {  
        $('#navbarHeader').addClass('show')
        $('#buttonHeader').addClass('collapsed').attr('aria-expanded', 'true')
        $('main').fadeOut(1)
    }
}

export default props =>
    <React.Fragment>
            <header id='header'>
                <div class="bg-dark collapse" id="navbarHeader">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-md-7 py-4">
                                <h4 class="text-white">Sobre</h4>
                                <p class="text-muted">Prazer, me chamo Giovani e venho por meio deste apresentar meus conhecimentos e experiências.
                                Sou graduado em administração e possuo o curso de infraestrutura tecnológica de softwares pela UEA (Universidade Europea del Atlantico).
                                Além da especialização em softwares tenho mais de 150 horas de cursos em programação por plataformas online, dentre eles Python, MySQL, MongoDB, Javascript, HTML, CSS, Ajax, Bootstrap, Jquery, Node.js, React.
                                </p>
                                </div>
                            <div class="col-sm-4 offset-md-1 py-4">
                                <h4 class="text-white">Contatos</h4>
                                    <ul class="list-unstyled">
                                        <li><a target="_blank" class=""href="https://www.linkedin.com/in/giovanidamian/" class="text-white">Linkedin</a></li>
                                        <li><a target="_blank" href="https://github.com/GiovaniDamian" class="text-white">Github</a></li>
                                        <li><a target="_blank" href="https://www.instagram.com/d_giovani_/" class="text-white">Instagram</a></li>
                                        <li><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhnsTTpNgtbVPxTttKqrKlsNgqjZmGkSTcNLQtztfXQwDbFtCZVGblLFrZSkCkzWztFTg">E-mail</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" ></path><circle cx="12" cy="13" r="4"></circle></svg>
                            <strong>Galeria</strong>
                        </a>
                        <button class="navbar-toggler collapsed" id="buttonHeader"
                         type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarHeader" 
                          aria-controls="navbarHeader" aria-expanded='false' 
                          aria-label="Toggle navigation" onClick={extantedHeader}
                        >                           
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                
            </header>
    </React.Fragment>