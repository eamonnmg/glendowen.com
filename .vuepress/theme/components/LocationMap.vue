<template>
    <div class="location-map h-full w-full">
    </div>
</template>

<script>
    const GLENDOWEN_COORDINATES = {lat: 55.2342023, lng: -7.4000257};

    export default {
        name: "location-map.vue",
        mounted(){
            const vm = this;
            import('google-maps').then((GoogleMapsLoader)=>{
                GoogleMapsLoader.KEY = 'AIzaSyDEMcKJO6HVsPg153Mln0kl9JUNYZgiA5g';
                GoogleMapsLoader.VERSION = '3.34';

                GoogleMapsLoader.load((google) => {

                    vm.googleMap =  new google.maps.Map(vm.$el, {
                        zoom: 9,
                        center: GLENDOWEN_COORDINATES,
                    });


                    vm.glendowenMarker = new google.maps.Marker({position: GLENDOWEN_COORDINATES, map: vm.googleMap});
                });
            });



        }
    }
</script>