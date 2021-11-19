import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/images/Fenil.jpg';
import Common from './Common';

const About=()=>
{
  return (
      <>
  
  <Common name="I am" 
        imgsrc={Web}
        visit="/Contact"
        btname="Contact Now"

        
  />

        <section className="mytabs_area p_120">
        	<div className="container">
          
        		<div className="tabs_inner">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						
						<li className="nav-item">
							<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							
									<span></span>
									<div className="media">
										
										<div className="media-body">
											<h4>B.D.V. PITHADVADIWALA MADHYAMIK SHALA</h4>
											<p>S.S.C.<br />SARTHANA JAKATNAKA,SURAT</p>
										</div>
									</div>

                  <div className="d-flex">
											
										</div>
										<div className="media-body">
											<h4>B.V. PATEL INSTITUTE OF TECHNOLOGY</h4>
											<p>DIPLOMA<br />UMRAKH,BARDOLI</p>
										</div>
								
								
						</div>
						
					</div>
        		</div>
        	</div>
        </section>

  
		<section className="mytabs_area p_120">
        	<div className="container">
          
        		<div className="tabs_inner">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						
						<li className="nav-item">
							<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Professional Skill</a>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							
									<span></span>
									<div className="media">
										
										<div className="media-body">
											<h4><li>Autocad</li></h4>
											
										</div>
									</div>

                 
								
								
						</div>
						
					</div>
        		</div>
        	</div>
        </section>
  </>
  );
};

export default About