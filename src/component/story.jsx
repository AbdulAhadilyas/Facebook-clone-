import "./css/story.css"
import img from "./img/story.PNG"


const Story = () => {
    return (
        <>
              <div className="storyBox">
                <div className="storyFlex">
                    <div className="des">Stories</div>
                    <div className="des">Reels</div>
                    <div className="des">Rooms</div>
                </div>
                <div className="hr">
                    <div className="line-1"></div>
                </div>

                <div className="story-box-1">
                    <div className="story"><img src={img} alt="" /></div>
                    <div className="story"><img src="https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80" alt="" /></div>
                    <div className="story"><img src="https://images.unsplash.com/photo-1616578492900-ea5a8fc6c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" /></div>
                    <div className="story"><img src="https://images.unsplash.com/photo-1581260466152-d2c0303e54f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /></div>
                </div>
                <div>
                      </div>
                </div>
              
        

        </>
    )
}
export default Story;