import "./Home.css"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/sidebar/sidebar"
import Post from "../../components/Post/post"
function Home() {
return(
  <>
<Header />
  <div className="Home">
  <Post />
  <Sidebar />
  </div>
  </>
  )
}

export default Home
