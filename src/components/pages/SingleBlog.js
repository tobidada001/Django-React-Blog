import SideBar from '../SideBar'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { apilink } from '../../apilink'
import Comments from '../Comments';
import AddComment from '../AddComment';
import formatdate from '../formatdate'

function SingleBlog(props) {

    const params = useParams();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([])
    const [total_comments, setTotalComments] = useState(0)
    const [errs, setErrs] = useState([])
    useEffect(() => {
       
        fetch(`http://127.0.0.1:8000/api/detail/${params.slug}`, {
        'method': 'GET',
        headers : {
            'Content-Type': 'application/json',
            'Authorization': 'Token cf45ca1eb6bd5328106e749446ef6f9f76c473a2'
        } 

    }).then(resp => resp.json())
    .then(resp => { setArticle(resp); setComments(resp.comments); setTotalComments(resp.total) })
    .catch(resp => console.log('Fetch Error: ', resp.message))
       
    }, [params.slug, setArticle]);

    function onCommentAdded(newarticle) {
        const updatedcomments = [newarticle, ...comments ]
        
        setComments(updatedcomments)
        if (updatedcomments){
            setTotalComments(total_comments + 1)
        }
        
    }

    return (

        <div className="s-content">

        {article.detail ? <p >Oh! Sorry, the resource you've requested cannot be found.</p> : 

            <div className="row">
                <div id="main" className="s-content__main large-8 column">
                
                <article className="entry">

                        <header className="entry__header">

                            <h2 className="entry__title h1">
                                <a href="#" title="">{article.post_title}</a>
                            </h2>

                            <div className="entry__meta">
                                <ul>
                                    <li>{formatdate(article.post_date)}</li>
                                    <li><a href="#" title="" rel="category tag">{article.category && article.category.category}</a></li>
                                    <li>{article.author && article.author.username}</li>
                                </ul>
                            </div>

                        </header>

                        <div className="entry__content-media">

                            <img
                                srcSet={`${article.cover && article.cover} 1000w, 
                             ${article.cover && article.cover} 500w`}
                                sizes="(max-width: 1000px) 100vw, 1000px" alt="" />
                        </div>

                        <div className="entry__content" dangerouslySetInnerHTML={{ __html: article.post_body }}>

                        </div>

                        <p className="entry__tags">
                            <span>Tagged in </span>:
                        {
                            article.tagsagain && article.tagsagain.map((tag) =>{
                                return  <a key={tag} href="#0">{tag}, &nbsp;</a>
                            })
                        }
                       
                        </p>

                        <ul className="entry__post-nav h-group">
                        
                        {article.previousarticle &&  <li className="prev"><Link to={`/detail/${article.previousarticle.slug}`}><strong className="h6">Previous Article</strong> {article.previousarticle.post_title}</Link></li>}
                            
                            {article.nextarticle && <li className="next"><Link to={`/detail/${article.nextarticle.slug}`}><strong className="h6">Next Article</strong> {article.nextarticle.post_title}</Link></li>}
                        </ul>

                    </article>

                    

                    <div className="comments-wrap">

                        <Comments total = {total_comments} comments={comments} />

                        <div className="comment-respond">
                            <div id="respond">

                                <h3>Add Comment <span>Your email address will not be published</span></h3>

                                <AddComment post={article.id} onCommentAdded={onCommentAdded}  />

                            </div>

                        </div>
                    </div>

                   

                </div>

                <SideBar />
            </div>

}
        </div>

    )
}

export default SingleBlog;