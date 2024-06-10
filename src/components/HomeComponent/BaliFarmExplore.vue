<template>
    <div class="relative">
        <swiper :navigation="true" :pagination="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in balifarmData" :key="index">
                <div class="relative">
                    <img :src="item.images.length > 0 ? item.images[0].path : 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'"
                        :alt="item.name" class="h-[100vh] w-full object-cover filter brightness-50">
                </div>

            </swiper-slide>
        </swiper>
        <div class="absolute z-50 top-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white">
            <h1 class="boldfont text-3xl">PLAY WITH ALPACA AT BALI FARM HOUSE</h1>
        </div>
        <div class="absolute z-50 bottom-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white">
            <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
    props: {
        balifarmData: {
            type: Array,
            required: true
        }
    }
};
</script>