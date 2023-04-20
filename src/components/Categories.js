
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {apilink} from '../apilink'
import {useLocation} from 'react-router-dom'
function Categories() {

    const [categories, setCategories] = useState([])
    const location = useLocation()

    
    useEffect(() => {
        try {
            const url = `${apilink('/categories', setCategories )}`;
          } catch (error) {
              console.log(error)
          }
    }, [])

    return (
        <div className="widget widget--categories">

        {location.pathname == "/archives" ? "" :  <h3 className="h6">Categories.</h3>}
           
           
            <ul>
            {   categories.map((category) => {
                return <li key={category.id}><Link to={`/categories/${category.category}`}>{category.category}</Link> ({category.category_post_count})</li>;
                })
            }  
            </ul>
        </div>
    )
}

export default Categories;