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
        BaliBirdData: {
            type: Array,
            required: true
        }
    }
};
</script>
<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(item, index) in BaliBirdData" :key="index">
            <div class="relative">
                <img s:src="item.images.length > 0 ? item.images[0].path : 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'"
                    :alt="item.name"
                    class="h-[50vh] w-full object-cover filter brightness-50 rounded-[20px]">
            </div>
        </swiper-slide>
    </swiper>
    <div class="text-center mx-auto mt-5">
        <p class="mb-5 text-white">Pesky Parakeet Feeding</p>
        <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
    </div>
</template>