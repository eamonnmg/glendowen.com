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
                :show-thumbs="false"
                :show-light-box="false"
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
                imageList: [],
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


                    this.layoutGeometry = JustifiedLayout(this.cloudinaryImageList, {
                        containerWidth: this.$el.offsetWidth,
                    })

                    this.setImageList();


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
            setImageTiles(){
                this.imageTiles = this.imageList.map((image) => {
                    return {
                        ...image.tile_geometry,
                        url: this.getImageSrcOptimizedForTile(image),
                    }
                });
            },
            setLightBoxImages(){
                this.lightBoxImages = this.imageList.map((image) => {
                    return {
                        src: this.getImageSrcOptimizedForLightbox(image),
                    }
                });
            },
            setImageList(){
                this.imageList = this.cloudinaryImageList.map((image, index) => {
                    return {
                        base_height: image.height,
                        base_width: image.width,
                        public_id: image.public_id,
                        format: image.format,
                        tile_geometry: this.layoutGeometry.boxes[index]
                    }
                });
            },
            openLightbox(index){
                this.$refs.lightbox.showImage(index);
            },

            getImageSrcOptimizedForTile(image){
                const cloudName = 'dlhvhevvo';
                const resourceType = 'image';
                const type = 'upload';

                const width = Math.round(image.tile_geometry.width);
                const height = Math.round(image.tile_geometry.height);
                const tranformations = `w_${width},h_${height}`;
                return `https://res.cloudinary.com/${cloudName}/${resourceType}/${type}/${tranformations}/${image.public_id}.${image.format}`
            },

            getImageSrcOptimizedForLightbox(image){
                const cloudName = 'dlhvhevvo';
                const resourceType = 'image';
                const type = 'upload';

                const height = window.innerHeight;
                const tranformations = `h_${height}`;
                return `https://res.cloudinary.com/${cloudName}/${resourceType}/${type}/${tranformations}/${image.public_id}.${image.format}`
            }
        }

    }
</script>

<style scoped>

</style>