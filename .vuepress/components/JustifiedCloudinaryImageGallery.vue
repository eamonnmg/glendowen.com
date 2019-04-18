<template>
    <div>
        <div class="relative" :style="computedInlineStyle">
            <image-tile
                    @click.native="openLightbox(index)"
                    v-for="(tile, index) in imageTiles" :image-tile="tile" />
        </div>
        <light-box
                ref="lightbox"
                :images="lightBoxImages"
        ></light-box>
    </div>

</template>

<script>
    import axios from 'axios';
    import JustifiedLayout from 'justified-layout';
    import LightBox from 'vue-image-lightbox';
    import ImageTile from './ImageTile';

    export default {
        name: "JustifiedCloudinaryImageGallery",
        data(){
            return {
                cloudinaryImageList: [],
                layoutGeometry: [],
                imageUrls: [],
                imageSizeRatios: [],
                imageTiles: [],
                lightBoxImages: [], // ref: https://github.com/pexea12/vue-image-lightbox#usage


            }
        },
        components :{
            ImageTile,
            LightBox
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
                    this.setImageTiles();
                    this.setLightBoxImages()

                });
        },
        computed: {
            computedInlineStyle(){
                return `height: ${this.layoutGeometry.containerHeight}px;`;
            }
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
            },
            setImageTiles(){
                this.imageTiles = this.layoutGeometry.boxes.map((box, index) => {
                    return {
                        ...box,
                        url: this.imageUrls[index],
                    }
                });
            },
            setLightBoxImages(){
                this.lightBoxImages = this.imageTiles.map((tile, index) => {
                    return {
                        thumb: tile.url,
                        src: tile.url,
                    }
                });
            },
            openLightbox(index){
                this.$refs.lightbox.showImage(index);
            }
        }

    }
</script>

<style scoped>

</style>