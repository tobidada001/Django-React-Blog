import Home from './components/pages/Home'
import Archives from './components/pages/Archives'
import Page from './components/pages/Page'
import SingleBlog from './components/pages/SingleBlog'
import Demo from './components/pages/Demo'
import BlogEntries from './components/pages/BlogEntries'
import CategoryList from './components/CategoryList'
import TagPostList from './components/pages/TagPostList'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
    
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/archives" element={<Archives />} />
        <Route exact path="/page" element={<Page />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path='/detail/:slug/' element={<SingleBlog />} /> 
        <Route exact path='/blog' element={<BlogEntries />} /> 
        <Route exact path='/categories/:category_tag/' element={<CategoryList />} /> 
        <Route exact path='/categories/' element={<CategoryList />} /> 
        <Route exact path='/tags' element={<TagPostList />} /> 
        <Route exact path='/tags/:tag' element={<TagPostList />} /> 
         
    </Routes>

  );
}

export default App;
