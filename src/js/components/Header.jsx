import React from 'react'
 
export function Header(){
    return(
    

        <div className="container-fluid hell ">
             
            <div className=" section1 row d-flex flex-column justify-content-center align-items-center">
                <div className="col-12">
                    <h1 className="heading1 text-center"> The Best Fitness In The City</h1>
                    <p className="para1 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, non.</p>
                </div>
            
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn align-center button-sign-up btn-lg">Sign Up!</button>
                
                </div>
                
            </div>
           <div className="row">
                    <ul className="ml-4 icons">
                    <li className="icon"><i class="fab fa-twitter" title="Twitter"></i><hr className="hr1"/></li>
                   <li className="icon"><i class="fab fa-facebook-f" title="Facebook"></i><hr className="hr1"/></li>
                    <li className="icon"><i class="fab fa-instagram" title="Instagram"></i><hr className="hr1"/></li>
                   
                 </ul>
           </div>

        </div>
    )
}
export default Header;