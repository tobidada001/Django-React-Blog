import Categories from './Categories'
import PostTags from './PostTags'
import PopularPostsList from './PopularPostsList'
import Search from './Search'

function SideBar(){

    return (
        <div id="sidebar" className="s-content__sidebar large-4 column">
            
            <Search />
            <Categories />

            <div className="widget widget_text group">
                    <h3 className="h6">Widget Text.</h3>

                    <p>
                    Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor 
                    aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur 
                    sint cillum sint consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.
                    </p>
                </div>
    
            <PostTags />

            <PopularPostsList />

        </div>

    )
}

export default SideBar;