<template>
    <div class="container">
        <div class="glide ">
            <div data-glide-el="track" class="glide__track">
                <ul class="glide__slides">
                    <li class="glide__slide relative"
                        v-for="(slide,index) in slides"
                        :key="index"
                    >
                        <router-link :to="`/${slide.link}`" class="font-medium text-black no-underline block mt-4 mr-4">

                        <div class="absolute w-full md:w-2/5 md:h-full pin-b md:pin-none md:pin-r"
                            @mouseover="hoveredSlide = index"
                            @mouseout="hoveredSlide = null"
                        >
                                <div class="absolute opacity-50 bg-white flex h-full w-full items-end"
                                    :class="{'opacity-75': hoveredSlide === index}"
                                >

                                </div>

                                    <div class="relative h-full w-full">
                                            <div class="relative w-full h-full">
                                                <div class="h-full p-4 flex flex-col justify-end ">
                                                    <h2 class="heading-1"
                                                        :class="{'underline': hoveredSlide === index}"
                                                    >
                                                        {{slide.heading}}
                                                    </h2>
                                                    <p class="text-xs sm:text-sm md:text-base"> {{slide.description}}
                                                    </p>
                                                    <span
                                                            class="text-xs sm:mb-4"
                                                            :class="{
                                                            'underline': hoveredSlide === index
                                                            }"

                                                    >Click for more.</span>

                                                </div>
                                            </div>
                                    </div>




                            </div>
                        </router-link>
                            <img :src="slide.src" :alt="slide.description">
                    </li>
                </ul>
            </div>
            <div class="glide__bullets flex justify-center" data-glide-el="controls[nav]">
                <button v-for="(slide,index) in slides"
                        :key="index"
                        class="glide__bullet text-2xl p-2 focus:outline-none" :data-glide-dir="`=${index}`"
                >
                    &#8226;
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Glide from '@glidejs/glide';

    export default {
        name: "carousel",
        props: {
            slides: {
                required: true,
                type: Array,
            }
        },
        data(){
            return {
                hoveredSlide: null,
            }
        },
        mounted() {
            this.glide = new Glide(this.$el, {
                type: 'carousel',
                perView: 1,
                focusAt: 'center',
            }).mount();
        }
    }
</script>

<style scoped>
</style>