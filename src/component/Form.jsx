import React from 'react'
import "./css/Form.css"
import { useState } from 'react'



export default function From(
    {getUserEmail 
    ,getUserPass,
    createAccount ,
    singInEmail,
    singInPass,
    singInWithEmail
    }) {
    const [show, setShow] = useState(false)




    const handleShow = () => {
        setShow(!show);
        console.log(show)
    }
  
  
    return (
        <>
        <div>

            <div className="container1">

                <div className="main">

                    <div className="main-left">

                        <p className="facebook-logo">facebook</p>

                        <p className="facebook-status">Facebook helps you connect and share with the people in your life.</p>

                    </div>
                    <form onSubmit={singInWithEmail}>
                    <div className="main-right">
                    

                        <div className="main-right-login">

                            <div className="main-right-email">

                                <input type="email" placeholder="Email address or phone number" onChange={singInEmail} />

                            </div>

                            <div className="main-right-password">

                                <input type="password" placeholder="Password" onChange={singInPass}/>

                            </div>

                            <div className="main-right-button">

                                <button type='submit'>
                                    Log In
                                </button>

                            </div>

                            <div className="main-right-link">

                                <a href="/">Forgotten account?</a>

                            </div>

                            <div className="main-right-line">

                            </div>

                            <div className="main-right-account">

                                <button id="signup-account" onClick={handleShow}>Create New Account</button>

                            </div>

                            <div className="main-right-page-link">

                                <a href="/">create a Page </a><p>for a celebrity, band or business.</p>

                            </div>

                        </div>

                    </div>
                    </form>

                </div>
              </div>
   
             
        
          </div>
          <div>
       <div className={(show)?"modal-show":"modal-hide"}>
       <form onSubmit={createAccount}>
          
          <div className="modal-signup">
             
             <div className="modal-close" onClick={handleShow}>
                 X
             </div>
             
             <div className="modal-signup-heading">
                 
                 <p className="modal-signup-name">Sign Up</p>
                 
                 <p className="modal-signup-child-name">It's quick and easy.</p>
                 
             </div>
             
             <div className="modal-signup-name">
                       
                <input type="text" placeholder="First name"/>
                
                <input type="text" placeholder="Surname"/>
                           
             </div>
             
             <div className="modal-signup-email">
                
                       
                <input type="email" placeholder="Email address or phone number" onChange={
                    getUserEmail
                    
                }  />
                       
             </div>
                   
             <div className="modal-signup-password">
                       
                 <input type="password" placeholder="Password" onChange={
                    getUserPass
                 }/>
                       
              </div>
          
              <div className="modal-date-birth">
                 
                 <label htmlFor="">Date of birth</label>
                 
                 <div className="modal-date-alert">
                     
                     <a >&#63;</a>
                     
                 </div>
                  
              </div>
              
              <div className="modal-date-selection">
                  
                   
              </div>
              
              <div className="modal-gender">
                 
                 <label htmlFor="">Gender</label>
                 
                 <div className="modal-gender-alert">
                     
                     <a >&#63;</a>
                     
                 </div>
                  
              </div>
              
              <div className="modal-gender-choice">
                 
                 <div className="modal-gender-name">
                     
                     <label htmlFor="">Femal</label>
                     
                     <input type="radio"/>
                     
                 </div>
                 
                 <div className="modal-gender-name">
                     
                     <label htmlFor="">Male</label>
                     
                     <input type="radio"/>
                     
                 </div>
                 
                 <div className="modal-gender-name">
                     
                     <label htmlFor="">Custom</label>
                     
                     <input type="radio"/>
                     
                 </div>
                  
              </div>
              
              <div className="modal-signup-terms">
                  
                  <p> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.  
                    </p>
                    
              </div>
              
              <div className="modal-signup-button">
                  
                  <button >Sign Up</button>
                  
              </div>
              
          </div>
          </form>
       </div>
    </div>
              
          </>

    
        
             
            )
}
