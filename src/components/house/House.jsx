import "./House.scss"
import React, { useState } from 'react'
import home1 from "../../images/home1.jpg"
import home2 from "../../images/home2.jpg"
import home3 from "../../images/home3.jpg"

function House() {
	const [visble, setVisble] = useState(false)

	function visibilityFunction() {
		setVisble(true)
	}
	function unVisibilityFunction() {
		setVisble(false)
	}
	return (
		<div className="house">
			<div className="house__images-container">
				<div className="img-box">
					<img src={home1} alt="" />
				</div>
				<div className="img-box img-box2">
					<img src={home2} alt="" />
					<div className="test">
						<div className="test-point-container" onMouseOver={visibilityFunction} onMouseOut={unVisibilityFunction}>
							<div className="test-point">
							</div>
						</div>
						<div className="test-text-container" style={{ display: visble ? "block" : "none" }}>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
						</div>
					</div>
				</div>
			</div>

			<div className="house__text-container">
				<div className="text-box">
					<h2>14 Milena Grove</h2>
					<h3>House for Sale</h3>
					<div className="house__ditales-container">
						<div className="bads"> 2 Bads</div>
						<div className="baths"> 2 Baths</div>
						<div className="parking"> 1 Parking</div>
					</div>
				</div>
			</div>

			<div className="house__plan-container">
				<div className="img-box">
					<img src={home3} alt="" />
				</div>
			</div>
		</div>
	)
}

export default House