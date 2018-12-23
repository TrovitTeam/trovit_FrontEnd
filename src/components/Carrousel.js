import React from "react";

import Slider from "react-slick";

import src12 from "../resources/Captura12.PNG";
import src11 from "../resources/Captura11.PNG";
import src13 from "../resources/Captura13.PNG";

class Carrousel extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			adaptiveHeight: false,
			arrows: true
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						<img width="100%" alt="" src={src13} />
					</div>
					<div>
						<img width="100%" alt="" src={src12} />
					</div>
					<div>
						<img width="100%" alt="" src={src11} />
					</div>
				</Slider>
			</div>
		);
	}
}

export default Carrousel;
