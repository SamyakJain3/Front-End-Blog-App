import "./write.css";
import Topbar from "../../components/Topbaar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
function write() {
  return (
    <>
    <Topbar />
    <div className="write">
      <img src="src\assets\img\image.png" alt="img" className="writeimg" />
        
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileinput"/>
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
            />
        </div>
        <div className="writeformgroup">
          <textarea type="text" placeholder ="Tell Your story" className="writeinput writetext"></textarea>
        </div>
        <button className="writesubmit">publish</button>
      </form>
    </div>
    <Sidebar />
            </>
  );
}

export default write;
