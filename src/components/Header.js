import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

const Header = () =>
(
    <div className="container">
        <div className="header">
            <ul>
                <li><a href="/#">Ana Sayfa</a></li>
                <li><a href="/#photos">Foto Galeri</a> </li>
                <li>
                    <a href="/#">
                       <img className="logo" src={require("./images/logo.jpeg")} alt="Logo" height="50px" /> 
                    </a>
                </li>

                
                <li><a href="/#about-us">Hakkında</a></li>
                <li><a href="/#contact">İletişim</a></li>
            </ul>
        </div>
    </div>
)

export default Header;
