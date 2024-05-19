import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import ig from '../assets/iconmonstr-instagram-11.svg';
import face from '../assets/iconmonstr-facebook-5.svg';
import tw from '../assets/iconmonstr-twitter-5.svg';
import yt from '../assets/iconmonstr-youtube-10.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h3>La Tiendita del Abuelo</h3>
                        <Link to="#"><p>©2020-2021</p></Link>
                        <Link to="#"><p>Privacy-Terms</p></Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Cuenta</h4>
                        <Link to="/login"><p>Log in</p></Link>
                        <Link to="/register"><p>Registro</p></Link>
                        <Link to="/cart"><p>Carrito</p></Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Productos</h4>
                        <Link to="/best-sellers"><p>Más vendidos</p></Link>
                        <Link to="/new"><p>Nuevos</p></Link>
                        <Link to="/offers"><p>Ofertas</p></Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Ayuda</h4>
                        <Link to="/about-us"><p>Acerca de nosotros</p></Link>
                        <Link to="/shipping-policy"><p>Política de envío</p></Link>
                        <Link to="/faq"><p>FAQ</p></Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <div className="socialMedia">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={ig} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={face} alt="Facebook" />
                            </a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                                <img src={tw} alt="X" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src={yt} alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Footer;