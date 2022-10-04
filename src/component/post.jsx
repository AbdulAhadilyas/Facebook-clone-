import './css/post.css'

const Post = () => {
    return (
        <>
            <div className="post-clone">
                <div className="post-top-flex">
                    <div className="profile">
                        <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-1/296947818_610871363935919_850577250435750206_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=tghxFPdvCa0AX_GoZUz&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_jgEPO9YtiH1aPbUbUT4m8mHJe6lcBri4cKgSyidZezg&oe=6340EAC3" alt="" />
                        <div className='profile-name-center'>
                            <p className='profile-name'>Anas Jawed</p>
                            <small>19h</small>
                        </div>
                    </div>
                    <div className="post-round-circle">
                        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                    </div>
                </div>
                <div className="post-img">
                    <img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/310003871_509250934545417_591776080756167189_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cWMhUghihK4AX9cx5CK&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT89Vfk4wshOuSOHwdqMr_0ouUXRYaB7QPyclUnRR-LoJA&oe=6340BF4C" alt="" />
                </div>
                <div className="post-footer">
                    <div className='post-footer-border'>
                        <p className='profile-name'>Anas Jawed</p>
                        <small>19h</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;