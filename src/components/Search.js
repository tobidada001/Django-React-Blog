import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Search(){
    const [data, setData] = useState('')
    const [searched, setSearched] = useState('')
    const navigate = useNavigate()

    const SubmitSearch = (e) =>  {
        e.preventDefault();
        navigate({pathname: '/blog', search: `?search=${searched}`})
    }

    return (
        <div className="widget widget--search">
                  
                  <form onSubmit={SubmitSearch}>
                     <input type="text" value={searched} onChange={ event => setSearched(event.target.value)} placeholder="Search here..." className="text-search"/>
                  </form>
               </div>
    )
}

export default Search;