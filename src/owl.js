import React from 'react';
import OwlCarousel from 'react-owl-carousel';

class Owl extends React.Component {

	render() {
		var options = {
			loop: true,
			margin: 20,
			nav: false,
			responsive:{
				0: {
					items: 2.5
				},
				768: {
					items: 4
				},
				1024: {
					items: 6
				},
				1600: {
					items: 8
				}
			}
		};

		return (
			<OwlCarousel 
				className="owl-theme"
				{...options}
			>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?1" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?2" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?3" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?4" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?5" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?6" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?7" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?8" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?9" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?10" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?11" /></div>
		        <div className="item"><img alt="" src="http://lorempixel.com/350/350?12" /></div>
			</OwlCarousel>
		);
	}
}

export default Owl;