<template>
    <div class="h-full w-full">
    </div>
</template>

<script>
    import gmapsInit from '../utils/gmaps';

    const GLENDOWEN_COORDINATES = {lat: 55.2342023, lng: -7.4000257};

    export default {
        name: "location-map.vue",
        async mounted() {
            const vm = this;
            const google = await gmapsInit();
            const map = new google.maps.Map(this.$el,{
                zoom: 9,
                center: GLENDOWEN_COORDINATES,
            });


            const glendowenMarker = new google.maps.Marker({position: GLENDOWEN_COORDINATES, map: map});


        }
    }
</script>