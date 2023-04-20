import SideBar from "./SideBar";
import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {apilink} from '../apilink'


function CategoryList() {
    const param = useParams();
    
    const [categories, setCategories] = useState([]);
    const [categoryposts, setCategoryPosts] = useState([]);

    useEffect(() => {
        try {
          const url = `${apilink('/categories', setCategories )}`;
        } catch (error) {
            console.log(error)
        }
      }, []);

      useEffect(() => {
        try {
          const url = `${apilink(`/categories/${param.category_tag}/`, setCategoryPosts )}`;
        } catch (error) {
            console.log(error)
        }
      }, [param.category_tag]);


    return (
        <div className="s-content">
            <div className="row">
                <div id="main" className="s-content__main large-8 column">

                {  param.category_tag? (
                        <section className="page-content">
                    <h2 className="page-content__title h1">All posts in {param.category_tag} category</h2>
                   
                   <ul> 
                       { categoryposts.posts ? categoryposts.posts.map((post) =>{
                               return <li key={post.id}><Link to={`/detail/${post.slug}`}>{post.post_title}</Link></li>
                           })
                           : <p><strong>There are no posts under this category.</strong></p>
                        }
                   </ul>
                
                   </section>) : 
                   
                   
                   ( <section className="page-content">
                    <h2 className="page-content__title h1">All post categories</h2>
                   <ul> 
                       { categories.map((category) =>{
                               return <li key={category.id}><Link to={`/categories/${category.category}`}>{category.category}</Link></li>
                           })
                       }
                       
                   </ul>

                   </section>)
                }
                 
                </div>
                <SideBar />
            </div>
        </div>
    )
}

export default CategoryList;
