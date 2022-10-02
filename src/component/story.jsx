import "./css/story.css"
import img from "./img/story.PNG"

const Story=()=>{
    return(
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
                <div className="story"><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.36329-10/309669073_489919463016172_5045441100571731736_n.jpg?stp=dst-jpg_s280x280&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=CNZyyU-1gy8AX9P167m&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT9IKtQ0foOdM-CCf66qHhdXCXMt5ISOJr7aoCz5yOw92A&oe=633DEDE1" alt="" /></div>
                <div className="story"><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t15.5256-10/310316918_787402505901525_5803155204026049025_n.jpg?stp=dst-jpg_s280x280&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=QkOOmQgGT1YAX9MfN5M&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT-sDfP-L7twMIgeiG6RUFjUKDv6fuM-S91xD4PeQlAlew&oe=633DEEF4" alt="" /></div>
                <div className="story"><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/310042992_182525984347118_4564387251855002465_n.jpg?stp=dst-jpg_s280x280&_nc_cat=105&ccb=1-7&_nc_sid=365331&_nc_ohc=Mu3_Xl636QsAX9Of37e&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT9orvwot1UcJcyEHqbTLmtBNXKK92FUXwQRLkqEQZ8TNg&oe=633DAF5E" alt="" /></div>
            </div>
        </div>
    )
}
export default Story;