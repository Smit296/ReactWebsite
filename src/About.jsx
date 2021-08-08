import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/images/smit2.jpg';
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
										<div className="d-flex">
											<p>2018 to 2021</p>
										</div>
										<div className="media-body">
											<h4>Uka Tarsadiya University</h4>
											<p>B.Sc.(IT)<br />Bardoli</p>
										</div>
									</div>

                  <div className="d-flex">
											<p>2021 to 2023</p>
										</div>
										<div className="media-body">
											<h4>Charotar University Of Science And Technology</h4>
											<p>M.Sc.(IT)<br />Anand</p>
										</div>
								
								
						</div>
						<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
							<ul className="list">
								<li>
									<span></span>
									<div className="media">
										<div className="d-flex">
											<p>2021 to 2023</p>
										</div>
										<div className="media-body">
											<h4></h4>
											<p>M.Sc.(IT)<br />Anand.</p>
										</div>
									</div>
								</li>
								
								
							</ul>
						</div>
					</div>
        		</div>
        	</div>
        </section>

  
  </>
  );
};

export default About