import SideBar from '../SideBar'
import PostListStyled from '../PostListStyled'
import PostItem from '../PostItem'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {ReactFragment} from 'react'
import {apilink} from '../../apilink'

function Home (){

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
      try {
        const url = `${apilink('/post/', setPosts )}`;
      } catch (error) {
          console.log(error)
      }
    }, []);


    return (
        
        <div className="s-content">
        
        <div className="row">
          <PostListStyled>
            {posts.map((post) => {    
              
            return <PostItem key ={post.id} slug={post.slug} id= {post.id} post_title = {post.post_title} category = {post.category} 
            author = {post.author} content = {post.post_body} post_date = {post.post_date}/> 
        })}
            </PostListStyled>
          
          <SideBar />
        </div>
      </div>
    )
}

export default Home;