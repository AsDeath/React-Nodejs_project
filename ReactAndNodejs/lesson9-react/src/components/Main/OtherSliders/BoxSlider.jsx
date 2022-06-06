import RouteLink from "../../../elements/RouteLink/RouteLink";
import SvgNext from "../../svg/SvgNext";
import SvgPrev from "../../svg/SvgPrev";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import ProductItem from "../Products/ProductItem";
import Slider from "react-slick"

export const BoxSlider = (data) => {
    const {values, clickBuyButton} = data;
    const {t} = useTranslation();
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
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return(
        <div className='box-slider relative w-3/4 h-380 m-auto mt-5'>
            <div className='title flex items-center justify-between w-full mb-5'>
                <h2 className='text-2xl font-serif text-left'>{t(values.title)}</h2>
                    <RouteLink className='text-right font-serif flex text-gray-400 hover:text-gray-100' to={values.link} inner={
                        [t("Go to menu") + t(values.title),
                        <SvgNext key={values._id + "svg"} fill="#9ca3af" width="25px" height="25px"/>]
                    } />
            </div>
            {/* <button onClick={onClickPrev} className='left-button block absolute z-10 left-0 top-1/2 pointer'>
                <SvgPrev />
            </button>
            <button onClick={onClickNext} className='right-button block absolute z-10 right-0 top-1/2 pointer'>
                <SvgNext />
            </button> */}
            {/* <div className='slider flex w-11/12 m-auto overflow-hidden'> */}
            <Slider {...settings}>
                {values.products.map((s) => {
                    return(
                        <ProductItem key={s._id} product={s} popUpLink={values.link + s.link} clickBuyButton={clickBuyButton} />
                    )
                })
                }
            </Slider>
            {/* </div> */}
        </div>
    )
}