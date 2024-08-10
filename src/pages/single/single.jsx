import "./single.css"
import Sidebar from "../../components/sidebar/sidebar"
import SinglePost from "../../components/singlepost/singlepost"
import Topbaar from "../../components/Topbaar/topbar"
function single() {
  return (
    <div className="single">
      <Topbaar />
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default single
