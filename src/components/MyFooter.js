import thumb from './images/thumb.jpg'
import {Link} from  'react-router-dom'
export function SocialIcons(){

    return (

        <div className="row s-footer__top">
        <div className="column">
            <ul className="s-footer__social">
                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-vimeo-v" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-skype" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
    )
}


export function PhotoStream(){

    return (
        <div className="large-8 tab-full column">

                        <h3 className="h6">Photostream</h3>
                        
                        <ul className="photostream group">
                            
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                            <li><a href="#0"><img alt="thumbnail" src={thumb}/></a></li>
                        </ul>
        
                    </div>
    )
}



export function FooterAbout(){

    return (
    
        <div className="large-6 tab-full column s-footer__info">
                    <h3 className="h6">About Keep It Simple</h3>
    
                    <p>
                    Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor 
                    aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur 
                    sint cillum sint consectetur voluptate adipisicing Duis
                    </p>
    
                    <p>
                    Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint 
                    sint incididunt cupidatat esse in Ut sed commodo tempor consequat culpa fugiat incididunt.
                    </p>
                </div>
    
    )
    }


   export function FooterNavigate() {
        return (
    
            <div className="large-4 tab-full column">
                <h3 className="h6">Navigate</h3>
    
                <ul className="s-footer__list s-footer-list--nav group">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/demo">Demo</Link></li>
                    <li><Link to="/archives">Archives</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </div>
        )
    }
    