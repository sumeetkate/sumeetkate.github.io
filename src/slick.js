import React from 'react';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class Slick extends React.Component {

	render() {
		var settings = {
		  dots: false,
		  infinite: false,
		  speed: 500,
		  slidesToShow: 8,
		  slidesToScroll: 8,
		  initialSlide: 0,
		  responsive: [{
		    breakpoint: 1599,  // Desktop version falls between 1823 to 1024
		    settings: {
		      slidesToShow: 6,
		      slidesToScroll: 6,
		    }
		  },{
		    breakpoint: 1023,  // Tablet version falls between 1023 to 768
		    settings: {
		      slidesToShow: 4,
		      slidesToScroll: 4,
		    }
		  }, {
		    breakpoint: 767, // Mobile version starts 767 and below
		    settings: {
		      slidesToShow: 2.5,
		      slidesToScroll: 2,
		    }
		  }]
		};

		return (
	      <Slider {...settings}>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?1" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?2" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?3" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?4" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?5" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?6" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?7" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?8" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?9" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?10" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?11" /></div></div>
	        <div><div className="item-wrap"><img alt="" src="http://lorempixel.com/350/350?12" /></div></div>
	      </Slider>
		);
	}
}

export default Slick;