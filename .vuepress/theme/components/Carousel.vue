<template>
    <div class="container">
        <div class="glide ">
            <div data-glide-el="track" class="glide__track">
                <ul class="glide__slides">
                    <li class="glide__slide"
                        v-for="(slide,index) in slides"
                        :key="index"
                    >
                            <div class="container absolute w-full h-24 pin-b">
                                <div class="relative opacity-50 bg-white flex h-full w-full items-end">

                                </div>

                                <div class="absolute container h-full w-full pin-t">
                                    <router-link :to="`/${slide.link}`" class="nav-link">
                                        <div class="relative w-full h-full flex flex-wrap md:justify-end items-center">
                                            <p class="h2 w-screen">
                                                {{slide.description}}
                                            </p>
                                        </div>
                                    </router-link>
                                </div>


                            </div>
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