import SideBar from "../SideBar";
import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {apilink} from '../../apilink'


function TagPostList() {
    const param = useParams();
    
    const [tags, setTags] = useState([]);
    const [tagposts, setTagPosts] = useState([]);

    useEffect(() => {
    try {
        const url = `${apilink('/post/', setTags )}`;
      } catch (error) {
          console.log(error)
      }}, [])

    useEffect(() => {
    try {
        const url = `${apilink('/post/', setTagPosts )}`;
      } catch (error) {
          console.log(error)
      }}, [param.tag])

    
    return (
        <div className="s-content">
            <div className="row">
                <div id="main" className="s-content__main large-8 column">

                { param.tag? (
                     <section className="page-content"> 
                        <h2 className="page-content__title h1">All posts in {param.tag} tags</h2>
                   <ul> 
                       
                       { tagposts.posts ? tagposts.posts.map((post) =>{
                               return <li key={post.id}><Link to={`/detail/${post.id}`}>{post.post_title}</Link></li>
                           })
                           : <p><strong>There are no posts under this tag.</strong></p> }
     
                   </ul>
                   </section>) : 
                   
                   ( <section className="page-content">
                    
                    <h2 className="page-content__title h1">All post tags</h2>
                   <ul> 
                       {tags.map((tag) =>{
                               return <li key={tag.id}><Link to={`/tags/${tag.id}`}>{tag.name}</Link></li>
                           }) }
                   </ul>
                   </section>) } 
                </div>
                
                <SideBar />
            </div>
        </div>
    )
}

export default TagPostList;
