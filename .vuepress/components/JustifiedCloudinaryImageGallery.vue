<template>
    <div>
        <img v-for="url in imageUrls" :src="url">
    </div>
</template>

<script>
    import axios from 'axios';
    import JustifiedLayout from 'justified-layout';

    export default {
        name: "JustifiedCloudinaryImageGallery",
        data(){
            return {
                cloudinaryImageList: [],
                layoutGeometry: [],
                imageUrls: [],
                imageSizeRatios: [],


            }
        },
        computed :{

        },
        mounted(){
            axios.get('https://res.cloudinary.com/dlhvhevvo/image/list/glendowen-crafts.json')
                .then((response) => {
                    this.cloudinaryImageList = response.data.resources;

                    this.setImageSizeRatios();

                    this.layoutGeometry = JustifiedLayout(this.imageSizeRatios, {
                        containerWidth: this.$el.offsetWidth,
                    })

                    this.setImageUrls();

                });
        },
        methods:{
            setImageUrls(){


                const cloudName = 'dlhvhevvo';
                const resourceType = 'image';
                const type = 'upload';


                this.imageUrls = this.cloudinaryImageList.map((image, index) => {
                    const justifiedTile = this.layoutGeometry.boxes[index];
                    const width = Math.round(justifiedTile.width);
                    const height = Math.round(justifiedTile.height);
                    const tranformations = `w_${width},h_${height}`;
                    return `https://res.cloudinary.com/${cloudName}/${resourceType}/${type}/${tranformations}/${image.public_id}.${image.format}`
                });
            },
            setImageSizeRatios(){
                this.imageSizeRatios = this.cloudinaryImageList.map((image) => {
                    return image.width / image.height;
                });
            }
        }

    }
</script>

<style scoped>

</style>