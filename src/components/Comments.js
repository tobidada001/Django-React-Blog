import userimg from './images/avatars/user-01.jpg'
import userimg2 from './images/avatars/user-03.jpg'
import formatdate from './formatdate'

export default function Comments(props) {

    return (

        <div id="comments">

            <h3>{props.total} Comments</h3>

            <ol className="commentlist">

                {props.comments && props.comments.map((comment, key) => {

                    return <li key={key} className="thread-alt depth-1 comment">

                        <div className="comment__avatar">
                            <img className="avatar" src={userimg} alt="" width="50" height="50" />
                        </div>

                        <div className="comment__content">

                            <div className="comment__info">
                                <div className="comment__author">{comment.name}</div>

                                <div className="comment__meta">
                                    <div className="comment__time">{formatdate(comment.date_added)}</div>
                                    <div className="comment__reply">
                                        <a className="comment-reply-link" >Reply</a>
                                    </div>
                                </div>
                            </div>

                            <div className="comment__text">
                                <p>{comment.comment}</p>
                            </div>

                        </div>

                        {comment.replies && comment.replies.map((reply) => {

                            return (<ul key={reply.id} className="children">

                                <li className="depth-2 comment">

                                    <div className="comment__avatar">
                                        <img className="avatar" src={userimg2} alt="" width="50" height="50" />
                                    </div>

                                    <div className="comment__content">

                                        <div className="comment__info">
                                            <div className="comment__author">{reply.name}</div>

                                            <div className="comment__meta">
                                                <div className="comment__time">{formatdate(reply.date_added)}</div>
                                                <div className="comment__reply">
                                                    <a className="comment-reply-link" >Reply</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment__text">
                                            <p>{reply.reply}</p>
                                        </div>

                                    </div>

                                </li>

                            </ul>)
                        })

                        }
                    </li>
                    // )
                })
                }

            </ol>

        </div>
    )

}