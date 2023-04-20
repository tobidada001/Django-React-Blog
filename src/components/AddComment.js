import { apilink } from "../apilink";
import { useState } from "react";

function AddComment(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    function submitForm(event){
        
        const sent_data = { 'name': name, "post": props.post, 'email': email, 'comment': comment}

        fetch(`http://127.0.0.1:8000/api/comments/`, {
            'method': 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Authorization': 'Token cf45ca1eb6bd5328106e749446ef6f9f76c473a2'
            }, 
            body: JSON.stringify(sent_data)})
            
            .then(resp => resp.json())
            .then(data =>{console.log('Second Then: ', data); props.onCommentAdded(data)
        
            setName('')
            setEmail('')
            setComment('')
        
        }).catch(resp => console.log('Error: ', resp.message))
    }

    return ( <div name="contactForm" id="contactForm" >
      
            <fieldset>
                
                <div className="form-field">
                    <input  onChange={(e) => setName(e.target.value)} id="cName" className="h-full-width" placeholder="Your Name" value={name} type="text" />
                </div>

                <div className="form-field">
                    <input  onChange={(e) => setEmail(e.target.value)} id="cEmail" className="h-full-width" placeholder="Your Email" value={email} type="text" />
                </div>

                <div className="form-field">
                    <input  id="cWebsite" className="h-full-width" placeholder="Website"  type="text" />
                </div>

                <div className="message form-field">
                    <textarea value={comment} onChange={e => setComment(e.target.value)}  id="cMessage" className="h-full-width" placeholder="Your Message"></textarea>
                </div>

                <input  onClick={submitForm}  id="submit"  className="btn btn--primary btn-wide btn--large h-full-width" defaultValue="Add Comment" type="submit" />

            </fieldset>
        </div>
    )
}

export default AddComment;