import { Nav } from './components/nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Sign} from './components/sign.jsx';
import { Allblogs} from './components/allblog.jsx';
import { Newblog } from './components/newblog.jsx';
import {Home} from './components/home.jsx';
import {Create} from './components/create.jsx';
import { Blogger } from './components/blogger.jsx';
import { Blogs } from './components/blogs.jsx';
import ScrollToTop from './components/scrolltop.jsx';
import Footer from './components/footer.jsx';
import {About} from './components/about.jsx';
function App() {
  return (
  <>
      <BrowserRouter>
      <ScrollToTop/>
      <Nav />
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/allblogs/:i" element={<Allblogs />}/>
        <Route path="/sign" element={<Sign />}/>
        <Route path="/newpost" element={<Newblog/>}></Route>
        <Route path='/createuser' element={<Create/>}></Route>
        <Route path='/blogger/:x' element={<Blogger/>}></Route>
        <Route path='/blog/:i' element={<Blogs/>}></Route>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </>
  );
}
export default App;
