import SideBar from '../SideBar'
import PostListStyled from '../PostListStyled'
import PostItem from '../PostItem'
import { apilink } from '../../apilink'
import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

function BlogEntries() {

    const [posts, setPosts] = useState([])

    var params = useParams()
    const search = useLocation().search;
    const searched = new URLSearchParams(search).get('search');

    useEffect(() => {

        try {
            const url = `${apilink('/post/', setPosts)}`;
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div className="s-content">

            <div className="row">

                <PostListStyled>
                    {
                        posts.filter((val) => {
                            if (searched) {

                                if (((val.post_title.toLowerCase().includes(searched.toLowerCase())) ||
                                    (val.post_body.toLowerCase().includes(searched.toLowerCase())))) {
                                    return true
                                }
                                return
                            }

                            else {
                                return true
                            }
                        }).map((post) => {
                            
                            return post ? <PostItem key={post.id}  slug={post.slug}  post_title={post.post_title} category={post.category}
                                author={post.author} content={post.post_body} post_date={post.post_date} /> : <p>Sorry, there's no post with this searched keyword.</p>
                        })}
                </PostListStyled>

                <SideBar />

            </div>

        </div>
    )
}

export default BlogEntries;