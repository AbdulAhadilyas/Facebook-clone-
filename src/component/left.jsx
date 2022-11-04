import './css/left.css'
import Profile from "./img/profile.jpg";
const Side = () =>{
return(
    <aside>
    <ul className='top'>
        <li className='topList'><img src={Profile} alt="" /><span className='topSpan'>Ahad Ilyas</span></li>
        <li className='topList'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" alt="" /><span className='topSpan'>Friends</span></li>
        <li className='topList'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png" alt="" /><span className='topSpan'>Facebook Pay </span></li>
        <li className='topList'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="" /><span className='topSpan'> Groups </span></li>
        <li className='topList'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt="" /><span className='topSpan'> Marketplace</span></li>
        <li className='topList'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" alt="" /><span className='topSpan'>Watch</span></li>
        <li className='topList'><span className='seeMore'><svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg></span><span className='topSpan'>See more</span></li>
    </ul>

    <div className="line"></div>
    <h3 className='shortCut'>Your shortcuts</h3>
        <ul className='bottom'>
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/285197999_4756888744413100_7659515622477318732_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=Y6s032UuY0cAX92LbKR&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfBHBegi6cmKMaqOtdQzxacqqWOc2k_UuqYmPj8IL6Kwuw&oe=636A45CB" alt="" /><span className='botoomSpan'>Saylani's Certified Python Programming Course</span></li> 
         <li className='bottomList'><img src="https://thumbs.dreamstime.com/z/random-click-squirrel-wire-random-picture-cute-squirrel-219506797.jpg" alt="" /><span className='botoomSpan'>Saylani Mass IT Training Programme</span></li> 
         <li className='bottomList'><img src="https://source.unsplash.com/1600x900/?coding" alt="" /><span className='botoomSpan'>Sir Nasir</span></li> 
         <li className='bottomList'><img src="https://source.unsplash.com/1600x900/?pc" alt="" /><span className='botoomSpan'>PC Gamers Of Pakistan☑️</span></li> 

        
         
         
         <li> <p className='sidetrem'>Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Meta © 2022</p></li>
         <li></li>
        </ul>

        
        
        </aside>
)
}

export default Side;