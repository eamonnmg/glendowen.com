<template>
    <div>
        <img v-for="url in imageUrls" :src="url">
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "JustifiedCloudinaryImageGallery",
        data(){
            return {
                cloudinaryImageList: [],
            }
        },
        computed :{
            imageUrls(){


                const cloudName = 'dlhvhevvo';
                const resourceType = 'image';
                const type = 'upload';


                return this.cloudinaryImageList.map((image) => {
                    const tranformations = `w_0.1`;
                    return `https://res.cloudinary.com/${cloudName}/${resourceType}/${type}/${tranformations}/${image.public_id}.${image.format}`
                });
            }
        },
        mounted(){
            axios.get('https://res.cloudinary.com/dlhvhevvo/image/list/glendowen-crafts.json')
                .then((response) => {
                    this.cloudinaryImageList = response.data.resources;
                });
        },

    }
</script>

<style scoped>

</style>