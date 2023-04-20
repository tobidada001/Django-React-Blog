import {Link} from 'react-router-dom'
function HeaderTagline(){
    return (

        <div className="row">

        <div className="s-header__content column">
            <h1 className="s-header__logotext">
                <Link to="/" title="">Keep It Simple.</Link>
                
            </h1>
            <p className="s-header__tagline">Put your awesome tagline here.</p>
        </div>

     </div> 
    )
}

export default HeaderTagline;