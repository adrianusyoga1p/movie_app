import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import useFetch from '../hooks/useFetch';
// import Loading from "./Loading"

const Banner = () => {
  const { data } = useFetch('movies');
  console.log(data)
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        // loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // autoplay={{
        //   delay: 3000
        // }}
        modules={[EffectCoverflow]}
        className="mySwiper overflow-visible"
      >
        {data.map(item => (
          <>
            <SwiperSlide key={item?._id}>
              <img src={item?.backdrop_path} />
            </SwiperSlide>
          </>
        ))}
      </Swiper >
    </>
  )
}

export default Banner