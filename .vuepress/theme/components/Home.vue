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

        <div class="container flex mb-4">
            <div class="w-1/2 border lg:mx-12">

                <Content/>


            </div>
            <div class="w-1/2 border">Google map here</div>
        </div>

    </div>
</template>

<script>
    import Carousel from './Carousel'
    export default {
        components: {
            Carousel
        }
    }
</script>

<style src="../styles/theme.css"></style>