
import {Link} from 'react-router-dom'
import formatdate from './formatdate'
function PostItem(props){
    
    return (
        <article className="entry">
                   
                    <header className="entry__header">
                        <h2 className="entry__title h1">    
                        
                            <Link to={`/detail/${props.slug}/`}>{props.post_title} </Link>
                        </h2>

                        <div className="entry__meta">
                            <ul>
                                <li>{formatdate(props.post_date)}</li>
                                <li><Link to={`/categories/${props.category.category}`} rel="category tag">{props.category.category}</Link></li>
                                <li>{props.author.username}</li>
                            </ul>
                        </div>
                    </header>
                    
                    <div className="entry__content">
                    
                        <p dangerouslySetInnerHTML= {{__html: props.content.slice(0, 500)}}>
                        
                        </p>
                        <Link to = {`/detail/${props.slug}`} > Read More >>> </Link>
                    </div> 

                </article>
    )
}

export default PostItem;