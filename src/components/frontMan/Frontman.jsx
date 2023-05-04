import React from 'react'
import "./Frontman.scss"
import frontMan from "../../images/fronman.jpg"
import Button from '@mui/material/Button';


function frontman() {
	return (
		<div className='frontman'>
			<div className="frontman__img-container">
				<img className="image" src={frontMan} alt="" />
			</div>

			<div className="frontman__text-container">
				<p>We have what it takes to get you the best deal for your ideal home.</p>
				<Button href='#' variant="contained">Get started</Button>
			</div>
		</div>
	)
}

export default frontman