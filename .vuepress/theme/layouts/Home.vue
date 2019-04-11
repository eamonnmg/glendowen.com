<template>
    <div>
            <carousel :slides="$frontmatter.carouselSlides"></carousel>

        <div class="container flex flex-wrap mb-4">
            <div class="md:w-1/2 w-full p-2">
                <h1 class="h2">Welcome to Glendowen</h1>

                <Content/>


            </div>
            <div class="md:w-1/2 w-full p-2">
                <h2 class="h2">Location</h2>

                <div class="location-map">
                    <location-map></location-map>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Carousel from '../components/Carousel';
    import LocationMap from '../components/LocationMap';
    export default {
        components: {
            Carousel,
            LocationMap,
        }
    }
</script>

<style src="../styles/theme.scss" lang="scss"></style>
<style scoped lang="scss">
    .location-map {
        height: 400px;
    }

</style>