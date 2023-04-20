import {useEffect, useState} from 'react'
import {apilink} from '../apilink'
function PostTags(){
    const [tags, setTags] = useState([])

    useEffect(() => {
        try {
          const url = `${apilink('/tags', setTags )}`;
         
        } catch (error) {
            console.log(error)
        }
      }, []);

    return (

        <div className="widget widget_tags">
            
                    <h3 className="h6">Post Tags.</h3>
                    <div className="tagcloud group">
                    
                    { tags.map((tag) => {
                            return <a key = {tag.id} href="#0">{tag.name}</a>
                        })
                    }
                    </div>
                </div>

    )
}

export default PostTags;