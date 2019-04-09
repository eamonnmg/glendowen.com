<template>
    <div>
        <div class="container mx-auto">
            <!--<div class="absolute container  w-full h-24 pin-b">-->
                <!--<div class="container relative opacity-50 bg-black flex h-full w-full items-end">-->

                <!--</div>-->

                <!--<h3 class="pin-b pin-r mb-6 mr-2 absolute text-white text-2xl ">-->
                    <!--View other crafts-->
                <!--</h3>-->
            <!--</div>-->
            <!--<img src="../../../images/other-crafts.jpg" alt="">-->
            <carousel :slides="$frontmatter.carouselSlides"></carousel>
        </div>

        <div class="container flex flex-wrap mb-4">
            <div class="md:w-1/2 sm:w-full">
                <h1 class="h2">Welcome to Glendowen</h1>

                <Content/>


            </div>
            <div class="md:w-1/2 sm:w-full">
                <h2 class="h2">Location</h2>

                <location-map></location-map>
            </div>
        </div>

    </div>
</template>

<script>
    import Carousel from './Carousel';
    import LocationMap from './LocationMap';
    export default {
        components: {
            Carousel,
            LocationMap,
        }
    }
</script>

<style src="../styles/theme.css"></style>