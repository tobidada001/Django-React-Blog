import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {apilink} from '../apilink'
import {useLocation} from 'react-router-dom'

function PopularPostsList(){
    const [posts, setPosts] = useState([])
    const location = useLocation()
    useEffect(() => {
        try {
          const url = `${apilink('/post', setPosts )}`;
        } catch (error) {
            console.log(error)
        }
      }, []);

    return (

        <div className="widget widget_popular">

            {location.pathname == "/archives" ? "" : <h3 className="h6">Popular Post.</h3> }
            
            <ul className="link-list">

                {   posts.map(post => {
                        
                return  <li key = {post.id}><Link to={`/detail/${post.slug}/`}>{post.post_title} </Link></li> })}
            </ul>
            </div>
    )
}

export default PopularPostsList;