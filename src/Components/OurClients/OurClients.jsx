import React from 'react'
import point from "../../Images/Logo/part5.png"
import AMLogo from "../../Images/Logo/AMLogo.png"
import ReporajLogo from "../../Images/Logo/ReportajLogo.png"
import './OurClients.css'

const OurClients = () => {
  return (
    <div className='our-clients-cont'>
			<div className='main-title-cont main-title small'>
					<img src={point} alt='' className='point'/> 
					<span>DISCOVER US</span>
			</div>
			<div className='main-title large'>OUR CLIENTS</div>
			<div className='clients-container'>
				<div class="clients-card-cont">
					<div class='clients-card-ch'>
						<img class='clients-card-img' src={AMLogo} alt="NFT" />
						{/* <h2>A&M INTERNATIONAL</h2> */}
					</div>
				</div>
				<div class="clients-card-cont">
					<div class='clients-card-ch'>
						<img class='clients-card-img' src={ReporajLogo} alt="NFT" />
						{/* <h2>REAPORTAJ PROPARTIES</h2> */}
					</div>
				</div>
			</div>
    </div>
  )
}

export default OurClients