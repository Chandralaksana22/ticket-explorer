<script>
import VendorHome from '@/components/HomeComponent/VendorHome.vue'
import BaliZooExplorer from '@/components/HomeComponent/BaliZooExplore.vue';
import BaliFarmExplore from '@/components/HomeComponent/BaliFarmExplore.vue';
import { getBaliFarmPopular ,getBalizooPopular, getVendor, getBaliBirdPopular, getBaliSafariPopular } from '@/config/api'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import PanelInfo from '../components/PanelInfo.vue'
import BaliBirdExplore from '@/components/HomeComponent/BaliBirdExplore.vue';
import BaliSafariExplore from '../components/HomeComponent/BaliSafariExplore.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    PanelInfo,
    VendorHome,
    BaliZooExplorer,
    BaliBirdExplore,
    BaliFarmExplore,
    BaliSafariExplore
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  data() {
    return {
      vendors: [],
      explorerData: [],
      balifarmData: [],
      BaliBirdData: [],
      balisafariData: []
    };
  },
  async mounted() {
    try {
      const data = await getVendor();
      this.vendors = data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
    try {
      const data = await getBalizooPopular();
      this.explorerData = data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
    try {
      const data = await getBaliFarmPopular();
      this.balifarmData = data;
    } catch (error) {
      console.error('There was an error fetching the data!', error);
    }
    try{
      const data = await getBaliBirdPopular();
      this.BaliBirdData=data;
    } catch (error){
      console.error('There was an error fetching the data!', error);
    }
    try{
      const data = await getBaliSafariPopular();
      this.balisafariData=data;
    } catch (error){
      console.error('There was an error fetching the data!', error);
    }
  }
};
</script>

<template>

  <section class="bg-cover bg-[url('../assets/image/bg-desktop.png')]">
    <div
      class="bg-center bg-cover h-[100] bg-no-repeat bg-[url('../assets/image/Homepage-mobile.png')] lg:bg-[url('../assets/image/bg-home.png')]">
      <div class="h-[100vh] px-5 lg:px-10 container mx-auto flex items-center">
        <h1
          class="hidden lg:block mb-4 boldfont text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> TO <br>
          BALI’S EXOTIC ANIMALS</h1>
        <h1
          class="block lg:hidden mb-4 boldfont text-center mx-auto text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> <br> TO
          BALI’S <br> EXOTIC ANIMALS</h1>
      </div>
    </div>

    <div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
      <div id="feature">
        <h5 class="text-center font-bold text-white text-2xl boldfont">Places To Go</h5>
        <div class="grid grid-cols-1 lg:grid-cols-12 py-5 gap-6">
          <VendorHome :vendors="vendors" />
        </div>
      </div>
      <div>
        <div class="panel-home bg-[#FFD600] p-5 lg:p-10 rounded-3xl mt-10 lg:mt-44 mb-[-20%] relative">
          <PanelInfo />
        </div>
      </div>
    </div>

  </section>

  <section class="bg-cover h-[25vh] lg:h-auto bg-[url('../assets/image/background-biru-desktop.png')]">

    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div class="col-span-7 pt-24">
        <h4 class="boldfont text-white text-3xl text-center">Explore Bali Zoo</h4>
        <div class="py-20 mx-auto px-10">
          <BaliZooExplorer :explorerData="explorerData" />
        </div>
      </div>
      <div class="col-span-5 bg-[url('../assets/image/plan.png')]">
        <div class="pt-24">
          <h4 class="boldfont text-white text-3xl text-center"> A WELL SPENT DAY <br> at BALI BIRD PARK</h4>
          <div class="py-20 px-10">
            <BaliBirdExplore :BaliBirdData="BaliBirdData" />
          </div>
        </div>
      </div>
    </div>

  </section>

  <section>

    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-5">
        <BaliFarmExplore :balifarmData="balifarmData" />
      </div>
      <div class="col-span-7 bg-contain bg-[url('../assets/image/bg-hijau.png')]">
        <h4 class="boldfont pt-24  text-white text-3xl text-center">WILDLIFE ADVENTURE AT BALI SAFARI</h4>
        <div class="pt-10 mx-auto px-10">
         <BaliSafariExplore :balisafariData="balisafariData" />
        </div>
      </div>
    </div>

  </section>

</template>

<style>
.swiper-pagination-bullet-active {
  background: white !important;
  width: 25px !important;
  border-radius: 5px !important;
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff !important;
  height: 35px !important;
  width: 35px !important;
  background-color: rgba(0, 0, 0, 0.50) !important;
  border-radius: 100% !important;
  padding: 2% !important;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 14px !important;
}
</style>