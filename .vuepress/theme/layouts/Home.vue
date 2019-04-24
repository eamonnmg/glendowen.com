<template>
    <div class="container mx-auto">
            <carousel :slides="$frontmatter.carouselSlides"></carousel>

        <div class="flex flex-wrap mb-4">
            <div class="md:w-1/2 w-full p-2">
                <h2>Welcome to Glendowen</h2>
                <img src="https://res.cloudinary.com/dlhvhevvo/image/upload/v1556129981/ann-mc-gonigle/yqk2fws5zpbft8cqtjuk.jpg" alt="Ann Mc Gonigle">
                <Content/>

                <div class="container flex mt-6">
                    <div class="w-1/2">
                        <h4>Address</h4>
                        <ul class="list-reset">
                            <li>
                                Meentagh Glen
                            </li>
                            <li>Clonmany</li>
                            <li>Co Donegal</li>
                            <li>Phone: 074 93 76265</li>
                        </ul>
                    </div>
                    <div class="w-1/2">
                        <h4>Opening Hours</h4>
                        <ul class="list-reset">
                            <li>Monday to Saturday</li>
                            <li>10:30am to 5:30pm</li>
                        </ul>
                    </div>
                </div>


            </div>
            <div class="md:w-1/2 w-full p-2">
                <h2>Location</h2>

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