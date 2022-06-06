import SvgPrev from "../../svg/SvgPrev"
import SvgNext from "../../svg/SvgNext"

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMainSlider } from "../../../Redux/Actions/getMainSlider.action";

import Slider from "react-slick"

export const MainSlider = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMainSlider());
    }, [])
    const mainSlider = useSelector(state => {
        return state.data.mainSlider;
    })

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div className='right-button block absolute z-10 right-0 top-1/2 pointer'
            onClick={onClick}
          >
            <SvgNext />
          </div>
        );
    }      
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div className="left-button block absolute z-10 left-0 top-1/2 pointer"
          onClick={onClick}
        >
            <SvgPrev />
        </div>
      );
    }
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return mainSlider.length && (
        <div className='main-slider'>
            {/* <button className='left-button block absolute z-10 left-0 top-1/2 pointer'>
                <SvgPrev />
            </button>
            <button className='right-button block absolute z-10 right-0 top-1/2 pointer'>
                <SvgNext />
            </button> */}
            {/* <div className='slider flex overflow-hidden'> */}
            <Slider {...settings}>
                {
                    mainSlider.map((e) => {
                        return(
                            <div>
                                <img key={e.image} src={e.image} alt='slide'/>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* </div> */}
        </div>
    )
}

export default MainSlider;