import HeaderTagline from './HeaderTagline'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {ReactFragment} from 'react'
import {Fragment} from 'react'

function HeaderNav() {

    const location = useLocation();
    const { pathname } = location
    const splitLocation = pathname.split('/');

    return (
        
            <Fragment>
                <header className="s-header">

                    <HeaderTagline />

                    <nav className="s-header__nav-wrap">

                        <div className="row">

                            <ul className="s-header__nav">
                                <li className={splitLocation[1] === '' ? 'current' : ''} ><Link to='/'>Home</Link></li>
                                <li className={splitLocation[1] === 'demo' ? 'current' : ''}><Link to="/demo">Demo</Link></li>
                                <li className={splitLocation[1] === 'archives' ? 'current' : ''}><Link to="/archives">Archives</Link></li>
                                <li className="has-children"><Link to="#0">Blog</Link>
                                    <ul>
                                        <li className={splitLocation[1] === 'blog' ? 'current' : ''}><Link to="/blog">Blog Entries</Link></li>
                                        {/* <li className={splitLocation[1] === 'detail' ? 'current' : ''}><Link to="/detail">Single Blog</Link></li> */}
                                    </ul>
                                </li>
                                <li className={splitLocation[1] === 'page' ? 'current' : ''}><Link to="/page">Page</Link></li>

                            </ul>

                        </div>

                    </nav>

                    <a className="header-menu-toggle" href="#0" title="Menu"><span>Menu</span></a>

                </header>

            </Fragment>
           
    )

}

export default HeaderNav;