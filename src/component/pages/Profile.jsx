import React from 'react'
import "../component/css/Profile.css"

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-box">
                <div className="profile-image-box">
                    <img src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/312015210_1011556640245745_5776737841806748821_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=L-5UbycVQiwAX86zVRS&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfAKB6TuGFsvkQ8E8C3chu1cEOTIFZlx85u4yt19SrfowA&oe=636CEA7D" alt="" />
                </div>
                <div className="profile-pic-box">
                    <div className="prifile-pic-circle">
                        <div className="profile-pic">
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        </div>
                    </div>
                    <div className="name">
                        <h1>Ahad Memon</h1>
                    </div>
                </div>

                <div className="profile-list">
                    <ul>
                        <li>photo</li>
                        <li>photo</li>
                        <li>photo</li>
                        <li>photo</li>
                        <li>photo</li>
                        <li>photo</li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
