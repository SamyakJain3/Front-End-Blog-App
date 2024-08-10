import "./posts.css";
function posts({title,time,description,image,writer,id}) {
  const num = id;
  return (
    <div className="posts">
  
    <img src={image} alt="img" className="postimg" />
     
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">By</span>
          <span className="postcat">{writer}</span>
        </div>
        <span className="posttitle">{title}</span>
        <span className="postdate">{time}</span>
      </div>
      <p className="postdescription">
      {description}
      </p>
    </div>
  );
}

export default posts;
