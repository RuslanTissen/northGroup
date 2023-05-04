import "./Intr.scss"
import React from 'react'
import Button from '@mui/material/Button';


function Intr() {

	return (
		<div className="intr">
			<div className="intr__logo-container"><h1>NORTH  Group</h1></div>
			<div className="intr__moto-container">Let us help you make the move.</div>
			<div className="intr__contact-container">
				<Button href='#' variant="contained">List your home</Button>
				<Button href='#' variant="contained">Buy a home</Button>
			</div>
		</div>
	)
}

export default Intr