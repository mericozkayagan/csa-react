import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer id="contact" className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-7">
                        <h6>Hakkımızda</h6>
                        <p className="text-justify">Biz, görme engelliler konusunda toplumda bilinç oluşturmayı amaçlayan bir grup Ege Üniversitesi Bilgisayar Mühendisliği bölümü öğrencisiyiz. Amacımız, görme engellilerin toplulumuza nasıl kazandırılacağı ve engellerin nasıl aşılacağı hakkında bilgi vermek ve insanları bu konuda bilinçlendirmektir. Community Service Activities dersimiz kapsamında yaptığımız site ve afiş çalışmalarıyla, halkımızı bilinçlendirmeye çalışıyoruz.</p>
                    </div>

                    

                    <div className="col-sm-6 col-md-5">
                        <h6 className="footer-links">Navigasyon</h6>
                        <ul className="footer-links">
                            <li><a href="/#">Anasayfa</a></li>
                            <li><a href="/#photos">Foto Galeri</a></li>
                            <li><a href="/#about-us">Hakkında</a></li>
                            <li><a href="/#contact">İletişim</a></li>
                        
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2023-2024 Community Service Activities Group-7</p>
                    </div>

                    
                    
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;