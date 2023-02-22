import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import api from '../Contex/Api'
import carusel1 from '../image/carusel1.png'
import carusel2 from '../image/carusell2.png'
import carusel3 from '../image/carusel3.png'
import { Pagination, Navigation } from "swiper";
import Card from "../Components/Katta Sotuvlar/Card";
export default function Home() {

    // const [api , setApi] = useState()

    return (
        <div className="Home">

            <div className="swipper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="carusel" src={carusel1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="carusel" src={carusel1} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <p className="Savdo">Katta sotuvlar</p>
            <div className="Cards">
                {
                    api.map((item) => (
                        <Card item={item} />
                    ))
                }

            </div>

            <div className="ozers">
                Yana koʻrsatish 20
            </div>
            <img src={carusel2} alt="" className="carusel kategoriImg" />
            <p className="Savdo">Ortiqcha to'lovlarsiz nasiya</p>
            <div className="Cards">
                <div className="Cards cards2">
                    {
                        api.slice(0, 10).map((item) => (
                            <Card item={item} />
                        ))
                    }

                </div>
                <div className="Cards cards2">
                    {
                        api.slice(0, 10).map((item) => (
                            <Card item={item} />
                        ))
                    }

                </div>
            </div>

            <img src={carusel3} alt="" className="carusel kategoriImg" />

        </div>
    )
}