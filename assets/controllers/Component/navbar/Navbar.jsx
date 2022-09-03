import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <section className='container'>
            <div className="navbar">
                <div className="navlogo">
                    <a href="/"><img src="#" alt=""/>LOGO</a>
                </div>
                <div className="navmenu">
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/apropos">A propos</a></li>
                        <li><a href="/creation">Mes création</a></li>
                        <li><a href="/services">Mes services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navconnexion">
                    <ul>
                        <li><a href="/connexion">Connexion</a></li>
                        <li><a href="/inscription">Inscription</a></li>
                    </ul>
                </div>
            </div>
            </section>
        )
    }
}

export default Navbar;
