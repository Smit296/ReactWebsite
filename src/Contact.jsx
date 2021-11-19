import React, { useState } from "react";
import Common from './Common';
import Web from '../src/images/Fenil.jpg';

const Contact = () => {
  


  return (
    <>
    
    <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
     <section className="mytabs_area p_120">
        	<div className="container">
          
        		<div className="tabs_inner">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						
						<li className="nav-item">
							<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Information</a>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							
									<span></span>
                  
										<div className="media-body">
											<h4><b>Name</b> : Fenil Hiteshbhai Antala</h4>
                      <h4><b>Address</b> : 54, Ashopalav bungalows near shyam chowk,velanja,surat</h4>
                      <h4><b>Contact No.</b> : 96016 05413</h4>
                      <h4><b>Email</b>:fenilantala44@gmail.com </h4>
										
										</div>
							
						
						</div>
					</div>
        		</div>
        	</div>
        </section>
</div>
</div>
</div>
  
      
 

    </>
  );
};



export default Contact;