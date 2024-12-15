import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { Autoplay } from 'swiper/modules'; // Import Swiper autoplay module

const sliderData = [
  {
    img: 'https://i.ibb.co.com/QFyFRB2/c53c956d6cd3631a7f82ee91a9d0baca.jpg',
    title: 'Avatar',
    genre: 'Sci-Fi',
    rating: '5/5',
  },
  {
    img: 'https://i.ibb.co.com/C1hHghr/MV5-BZTVk-ZWY5-Mm-It-Yj-Y3-OS00-OWY3-LTg2-NWEt-OWE1-Nm-Q4-NGMw-ZGNl-Xk-Ey-Xk-Fqc-Gc-V1.jpg',
    title: 'Transformers: Rise of the Beasts',
    genre: 'Action',
    rating: '4/5',
  },
  {
    img: 'https://i.ibb.co.com/8B23J9s/n0-W7kaj-F4-GFMRk2c0w-Ww-MQq-Ta-DM.jpg',
    title: 'The Dictator',
    genre: 'Comedy',
    rating: '5/5',
  },
  {
    img: 'https://i.ibb.co.com/8ch52SV/MV5-BNz-Y3-OWQ5-NDkt-NWQ2-OC00-Zjdl-LThk-Mm-It-MDhh-NDk3-NTFi-ZGU4-Xk-Ey-Xk-Fqc-Gc-V1.jpg',
    title: ' Joker',
    genre: 'Thriller',
    rating: '5/5',
  },
  {
    img: 'https://i.ibb.co.com/99gPF3w/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg',
    title: 'Inception',
    genre: 'Thriller',
    rating: '5/5',
  },
  {
    img: 'https://i.ibb.co.com/FHk6VkS/51bsjerr5z-L.jpg',
    title: 'The Dark Knight',
    genre: 'Action',
    rating: '5/5',
  },
  {
    img: 'https://i.ibb.co.com/3r0Qy9p/MV5-BMj-A4-NDI0-MTIx-NF5-BMl5-Ban-Bn-Xk-Ft-ZTYw-NTM0-Mz-Y2-V1.jpg',
    title: 'The Prestige',
    genre: 'Drama',
    rating: '4/5',
  },
];

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index} className="relative group">
          {/* Slide Image */}
          <img
            className="w-full h-[33rem] rounded-lg"
            src={slide.img}
            alt={slide.title}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-white text-2xl font-bold">{slide.title}</h3>
            <p className="text-gray-300 text-lg">{slide.genre}</p>
            <span className="text-yellow-400 font-medium">{slide.rating}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
