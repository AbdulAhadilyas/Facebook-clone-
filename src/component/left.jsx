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
        <li className='topList'><span className='seeMore'><svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg></span><span className='topSpan'>See more</span></li>
    </ul>

    <div className="line"></div>
    <h3 className='shortCut'>Your shortcuts</h3>
        <ul className='bottom'>
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/269805473_4784582351628694_2238216964732359384_n.jpg?stp=c43.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=Jtv-7EvG5HMAX83QcG9&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s_b8-800PO1x7hOhYIwTVFCqxILfy0O47OY6Lh-pudw&oe=633F28B2" alt="" /><span className='botoomSpan'>Saylani's Certified Python Programming Course</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/285197999_4756888744413100_7659515622477318732_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=RQJJttFp_6YAX-TT2K_&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_eW2nf-oDDAuECodLjvW81z_6PYeerIaQk_d2k-rttDQ&oe=633EC44B" alt="" /><span className='botoomSpan'>Saylani Mass IT Training Programme</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/242155805_1122730755151838_3697054892668277263_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=vHMKgOusGBwAX-kVPlj&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s3u937phr98aecquYs9S5u19Rrh2fXJUjIED8IMLwPg&oe=633DB489" alt="" /><span className='botoomSpan'>Golimar Ki Memes😍</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/57564719_1166651196839577_9178761006120173568_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=EuLcjdyZt8QAX-V8rRs&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_DhKvhP5SlOTN-Qm3SJKsZijAW6XVqO08hWsAtA381fg&oe=635F2E00" alt="" /><span className='botoomSpan'>Sir Nasir</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/305837535_6110506125631439_8351065399650804471_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=06fsWx40oLkAX8BtLMl&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT9LNmA544FEF8qrkZauidzIXNzwzAKe4pW-ibexzJAMbQ&oe=633E363A" alt="" /><span className='botoomSpan'>PC Gamers Of Pakistan☑️</span></li> 

        
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/269805473_4784582351628694_2238216964732359384_n.jpg?stp=c43.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=Jtv-7EvG5HMAX83QcG9&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s_b8-800PO1x7hOhYIwTVFCqxILfy0O47OY6Lh-pudw&oe=633F28B2" alt="" /><span className='botoomSpan'>Saylani's Certified Python Programming Course</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/285197999_4756888744413100_7659515622477318732_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=RQJJttFp_6YAX-TT2K_&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_eW2nf-oDDAuECodLjvW81z_6PYeerIaQk_d2k-rttDQ&oe=633EC44B" alt="" /><span className='botoomSpan'>Saylani Mass IT Training Programme</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/242155805_1122730755151838_3697054892668277263_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=vHMKgOusGBwAX-kVPlj&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s3u937phr98aecquYs9S5u19Rrh2fXJUjIED8IMLwPg&oe=633DB489" alt="" /><span className='botoomSpan'>Golimar Ki Memes😍</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/57564719_1166651196839577_9178761006120173568_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=EuLcjdyZt8QAX-V8rRs&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_DhKvhP5SlOTN-Qm3SJKsZijAW6XVqO08hWsAtA381fg&oe=635F2E00" alt="" /><span className='botoomSpan'>Sir Nasir</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/305837535_6110506125631439_8351065399650804471_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=06fsWx40oLkAX8BtLMl&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT9LNmA544FEF8qrkZauidzIXNzwzAKe4pW-ibexzJAMbQ&oe=633E363A" alt="" /><span className='botoomSpan'>PC Gamers Of Pakistan☑️</span></li> 
         
        
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/269805473_4784582351628694_2238216964732359384_n.jpg?stp=c43.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=Jtv-7EvG5HMAX83QcG9&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s_b8-800PO1x7hOhYIwTVFCqxILfy0O47OY6Lh-pudw&oe=633F28B2" alt="" /><span className='botoomSpan'>Saylani's Certified Python Programming Course</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/285197999_4756888744413100_7659515622477318732_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=RQJJttFp_6YAX-TT2K_&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_eW2nf-oDDAuECodLjvW81z_6PYeerIaQk_d2k-rttDQ&oe=633EC44B" alt="" /><span className='botoomSpan'>Saylani Mass IT Training Programme</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/242155805_1122730755151838_3697054892668277263_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=vHMKgOusGBwAX-kVPlj&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s3u937phr98aecquYs9S5u19Rrh2fXJUjIED8IMLwPg&oe=633DB489" alt="" /><span className='botoomSpan'>Golimar Ki Memes😍</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/57564719_1166651196839577_9178761006120173568_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=EuLcjdyZt8QAX-V8rRs&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_DhKvhP5SlOTN-Qm3SJKsZijAW6XVqO08hWsAtA381fg&oe=635F2E00" alt="" /><span className='botoomSpan'>Sir Nasir</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/305837535_6110506125631439_8351065399650804471_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=06fsWx40oLkAX8BtLMl&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT9LNmA544FEF8qrkZauidzIXNzwzAKe4pW-ibexzJAMbQ&oe=633E363A" alt="" /><span className='botoomSpan'>PC Gamers Of Pakistan☑️</span></li> 
         
        
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/269805473_4784582351628694_2238216964732359384_n.jpg?stp=c43.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=Jtv-7EvG5HMAX83QcG9&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s_b8-800PO1x7hOhYIwTVFCqxILfy0O47OY6Lh-pudw&oe=633F28B2" alt="" /><span className='botoomSpan'>Saylani's Certified Python Programming Course</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/285197999_4756888744413100_7659515622477318732_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=RQJJttFp_6YAX-TT2K_&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_eW2nf-oDDAuECodLjvW81z_6PYeerIaQk_d2k-rttDQ&oe=633EC44B" alt="" /><span className='botoomSpan'>Saylani Mass IT Training Programme</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/242155805_1122730755151838_3697054892668277263_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=vHMKgOusGBwAX-kVPlj&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s3u937phr98aecquYs9S5u19Rrh2fXJUjIED8IMLwPg&oe=633DB489" alt="" /><span className='botoomSpan'>Golimar Ki Memes😍</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/57564719_1166651196839577_9178761006120173568_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=EuLcjdyZt8QAX-V8rRs&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_DhKvhP5SlOTN-Qm3SJKsZijAW6XVqO08hWsAtA381fg&oe=635F2E00" alt="" /><span className='botoomSpan'>Sir Nasir</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/305837535_6110506125631439_8351065399650804471_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=06fsWx40oLkAX8BtLMl&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT9LNmA544FEF8qrkZauidzIXNzwzAKe4pW-ibexzJAMbQ&oe=633E363A" alt="" /><span className='botoomSpan'>PC Gamers Of Pakistan☑️</span></li> 
        
    
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/269805473_4784582351628694_2238216964732359384_n.jpg?stp=c43.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=Jtv-7EvG5HMAX83QcG9&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s_b8-800PO1x7hOhYIwTVFCqxILfy0O47OY6Lh-pudw&oe=633F28B2" alt="" /><span className='botoomSpan'>Saylani's Certified Python Programming Course</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/285197999_4756888744413100_7659515622477318732_n.png?stp=c23.0.50.50a_cp0_dst-png_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=RQJJttFp_6YAX-TT2K_&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_eW2nf-oDDAuECodLjvW81z_6PYeerIaQk_d2k-rttDQ&oe=633EC44B" alt="" /><span className='botoomSpan'>Saylani Mass IT Training Programme</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/242155805_1122730755151838_3697054892668277263_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=vHMKgOusGBwAX-kVPlj&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT_s3u937phr98aecquYs9S5u19Rrh2fXJUjIED8IMLwPg&oe=633DB489" alt="" /><span className='botoomSpan'>Golimar Ki Memes😍</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.6435-9/57564719_1166651196839577_9178761006120173568_n.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=EuLcjdyZt8QAX-V8rRs&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT_DhKvhP5SlOTN-Qm3SJKsZijAW6XVqO08hWsAtA381fg&oe=635F2E00" alt="" /><span className='botoomSpan'>Sir Nasir</span></li> 
         <li className='bottomList'><img src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/305837535_6110506125631439_8351065399650804471_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=06fsWx40oLkAX8BtLMl&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT9LNmA544FEF8qrkZauidzIXNzwzAKe4pW-ibexzJAMbQ&oe=633E363A" alt="" /><span className='botoomSpan'>PC Gamers Of Pakistan☑️</span></li> 
         
         <li> <p className='sidetrem'>Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Meta © 2022</p></li>
         <li></li>
        </ul>

        
        
        </aside>
)
}

export default Side;