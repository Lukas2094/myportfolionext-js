import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination , Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as S from './styles';

export function Carrousel() {

    return (
        <>
            <S.Container>
                <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                spaceBetween={30}
                effect={"fade"}
                navigation={false}
                pagination={{
                clickable: false,
                }}
                modules={[EffectFade, Navigation, Pagination , Autoplay]}
                className="mySwiper"
            >
                    <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                </Swiper> 
            </S.Container>
         
        </>
    )
}