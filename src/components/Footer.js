
import {SocialIcons, FooterAbout, FooterNavigate, PhotoStream} from './MyFooter'

function Footer(){

return (

    <footer className="s-footer">
        <SocialIcons />

        <div className="row s-footer__bottom">
            <FooterAbout />

            <div className="large-6 tab-full column">
                <div className="row">
                    <PhotoStream />

                    <FooterNavigate />
                </div>

            </div>

            <div className="ss-copyright">
                <span>© Copyright Keep It Simple 2019</span> 
                <span>Design by <a href="https://www.styleshout.com/" target = '_blank' rel="noreferrer">StyleShout</a></span>
            </div>
        </div>
        
        <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"/></svg>
            </a>
        </div>

    </footer>

)
}

export default Footer;