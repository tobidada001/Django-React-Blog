import SideBar from '../SideBar'
import CategoryList from '../CategoryList';
import Categories from '../Categories';
import PopularPostsList from '../PopularPostsList';
import { useState, useEffect } from 'react';
import {apilink} from '../../apilink'
import formatdate from '../formatdate'
function Archives (){
    const [archives, setArchives] = useState([])

    useEffect(() => {

        try {
            const url = `${apilink('/archives/', setArchives)}`;
        } catch (error) {
            console.log(error)
        }
    }, []);


    return (
        <div className="s-content">

        <div className="row">

            <div id="main" className="s-content__main large-8 column">

                <section className="page-content">

                    <h2 className="page-content__title h1">Archives.</h2>
                    
                    <p className="lead">
                    Lorem ipsum Nisi enim est proident est magna occaecat dolore 
                    proident eu ex sunt consectetur consectetur dolore enim nisi exercitation 
                    adipisicing magna culpa commodo deserunt ut do Ut occaecat. Lorem ipsum Veniam 
                    consequat quis.
                    </p>	
                    
                    <h4>Last 10 Posts.</h4>
                    <PopularPostsList />

                    <h4>Archives By Month.</h4>
                    <ul>
                        {archives.map((archive, key) =>{
                            return <li key={key}><a  href="#0">{formatdate(archive.post_date)}</a></li>
                        })}
                        
                    </ul>

                    <h4>Archives By Category.</h4>
                            <Categories />

                    <h4>Site Map.</h4>

                    <ul>
                        <li><a href="#0">Archives</a></li>
                        <li><a href="#0">Home</a></li>
                        <li><a href="#0">About Us</a></li>
                        <li><a href="#0">Blog</a></li>
                        <li><a href="#0">Demo</a></li>
                        <li><a href="#0">Other Stuff</a></li>
                    </ul>

                </section> 

                
           </div> 
           <SideBar />
       </div>

   </div> 
    )
}

export default Archives;