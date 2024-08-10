import "./post.css"
import Posts from "../posts/posts"
import {image} from "../../assets/assets.js"
function post() {
  return (
    <div className="post">
      {
        image.map((item,index)=>{
          return <Posts key={index} title={item.title} image={item.img} time={item.time} description={item.description} writer={item.writer}/>
        })
      }
    </div>
  )
}

export default post
