import "./css/story.css"
import img from "./img/story.PNG"
import  Profile from "./img/profile.jpg"

const Story=()=>{
    return(
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
                <div className="story"><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.36329-10/309669073_489919463016172_5045441100571731736_n.jpg?stp=dst-jpg_s280x280&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=CNZyyU-1gy8AX9P167m&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT9IKtQ0foOdM-CCf66qHhdXCXMt5ISOJr7aoCz5yOw92A&oe=633DEDE1" alt="" /></div>
                <div className="story"><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t15.5256-10/310316918_787402505901525_5803155204026049025_n.jpg?stp=dst-jpg_s280x280&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=QkOOmQgGT1YAX9MfN5M&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT-sDfP-L7twMIgeiG6RUFjUKDv6fuM-S91xD4PeQlAlew&oe=633DEEF4" alt="" /></div>
                <div className="story"><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/310042992_182525984347118_4564387251855002465_n.jpg?stp=dst-jpg_s280x280&_nc_cat=105&ccb=1-7&_nc_sid=365331&_nc_ohc=Mu3_Xl636QsAX9Of37e&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT9orvwot1UcJcyEHqbTLmtBNXKK92FUXwQRLkqEQZ8TNg&oe=633DAF5E" alt="" /></div>
            </div>
        <div className="createPost">
            <div className="input-box">
                <div className="img">
                <img src={Profile} alt="" />
                </div>
                <div className="create-story-input" >
                    <input type="text" placeholder="What's on your mind Ahad?" />
                </div>
            </div>
            <div className="line"></div>
            <div className="create-story-icon">
                <div className="create-story-box1">
                <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xmw33a7 xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path><path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path></g></g></svg>
                <span className="create-story-span">Live video</span>
                </div>
                <div className="create-story-box2">
                <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xdb1l0v xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fill-rule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                <span className="create-story-span">Photo/Video</span>
                </div>
                <div className="create-story-box3">
                <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xedzdh8 xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z" transform="translate(353.5 156.5)"></path><path fill-rule="nonzero" d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z" transform="translate(353.5 156.5)"></path><path d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192" transform="translate(353.5 156.5)"></path></g></g></svg>
                <span className="create-story-span">Felling/Activity</span>
                </div>

            </div>
        </div>
        </div>

        </>
    )
}
export default Story;