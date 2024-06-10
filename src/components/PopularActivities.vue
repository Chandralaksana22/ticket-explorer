<template>
    <div id="placetogo" class="hidden lg:block">
        <h4 class="boldfont text-white text-3xl mb-5 text-center">Popular Activity</h4>
        <div class="grid grid-cols-3 px-10 mb-[-10%] gap-4 h-[35rem]">
            <div class="relative" v-for="(item, index) in explorerData" :key="index">
                <div class="placetogo-port img-border hover-content">
                    <img :src="item.images[0].path"
                        :alt="item.name" class="h-full" alt="">
                    <div class="cover p-5">
                        <div class="detail text-center text-white">
                            <h3 class="boldfont text-white text-2xl mb-1">{{ item.name }}</h3>
                            <!-- <p class="text-sm line-clamp-3 content">{{item.short_desc}}</p> -->
                        </div>
                    </div>
                    <div class="absolute z-50 bottom-[7%] left-1/2 -translate-x-1/2 text-center w-100">
                        <a :href="`/ticket-detail/${vendorSlug}/${item.slug}`" class="bg-white rounded-lg p-2 slide boldfont text-center">Book Ticket</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        explorerData: {
            type: Array,
            required: true
        },
        vendorSlug: String,
    }
};
</script>
