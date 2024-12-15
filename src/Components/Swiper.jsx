import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { Autoplay } from 'swiper/modules'; // Import Swiper autoplay module

export default () => {
  return (
    <Swiper
      spaceBetween={0} // Remove the gap between slides
      slidesPerView={3} // Default slides per view (on larger screens)
      breakpoints={{
        320: { // For screens with width >= 320px (mobile)
          slidesPerView: 1, // Show 1 slide on mobile
          spaceBetween: 10, // Optional: Adjust the space between slides for mobile
        },
        768: { // For screens with width >= 768px (tablet and larger)
          slidesPerView: 2, // Show 2 slides on tablets
        },
        1024: { // For screens with width >= 1024px (desktop)
          slidesPerView: 3, // Show 3 slides on desktop
        },
      }}
      modules={[Autoplay]} // Include the autoplay module
      autoplay={{
        delay: 3000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Keep autoplay active on user interaction
      }}
      loop={true} // Enable infinite loop
    >
      <SwiperSlide><img className='w-full h-[33rem] ' src={'https://i.ibb.co.com/QFyFRB2/c53c956d6cd3631a7f82ee91a9d0baca.jpg'} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[33rem] ' src={'https://i.ibb.co.com/C1hHghr/MV5-BZTVk-ZWY5-Mm-It-Yj-Y3-OS00-OWY3-LTg2-NWEt-OWE1-Nm-Q4-NGMw-ZGNl-Xk-Ey-Xk-Fqc-Gc-V1.jpg'}  alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[33rem] ' src={'https://i.ibb.co.com/8B23J9s/n0-W7kaj-F4-GFMRk2c0w-Ww-MQq-Ta-DM.jpg'} alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[33rem] ' src={'https://i.ibb.co.com/8ch52SV/MV5-BNz-Y3-OWQ5-NDkt-NWQ2-OC00-Zjdl-LThk-Mm-It-MDhh-NDk3-NTFi-ZGU4-Xk-Ey-Xk-Fqc-Gc-V1.jpg'} alt="Slide 4" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[33rem] ' src={'https://i.ibb.co.com/FHk6VkS/51bsjerr5z-L.jpg'} alt="Slide 5" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[33rem]' src={'https://i.ibb.co.com/M9xpZSy/MV5-BNDhl-Mz-Ey-Nz-It-MTA5-Mi00-YWRh-LThl-NTkt-YTQy-MTA0-MDIy-NDEy-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg'} alt="Slide 6" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[33rem]' src={'https://i.ibb.co.com/3yr3S0N/MV5-BMTM3-Nj-A1-NDMy-MV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-MDQz-NDMz-OQ-V1.jpg'}  alt="Slide 7" /></SwiperSlide>
      {/* Additional slides here */}
    </Swiper>
  );
};