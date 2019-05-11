<template>
    <div>
        <div class="relative" :style="computedInlineStyle">
            <image-tile
                    v-for="(tile, index) in imageTiles" :image-tile="tile"
                    @click.native="showImage(index)"
            />
        </div>
        <image-lightbox
                v-if="activeImage"
                :image="activeImage"
                @close="closeLightbox"
                @next="showNextImage"
                @prev="showPrevImage"
        ></image-lightbox>

    </div>

</template>

<script>
    import axios from 'axios';
    import JustifiedLayout from 'justified-layout';
    import ImageTile from './ImageTile';
    import ImageLightbox from './ImageLightbox';
    export default {
        name: "JustifiedCloudinaryImageGallery",
        props: {
          tag: {
              type: String,
              required: true,
          }
        },
        data(){
            return {
                cloudinaryImageList: [],
                layoutGeometry: [],
                imageList: [],
                imageTiles: [],
                lightBoxImages: [],
                activeImageIndex: null,


            }
        },
        components: {
            ImageTile,
            ImageLightbox,

        },
        mounted(){
            axios.get(`https://res.cloudinary.com/dlhvhevvo/image/list/${this.tag}.json`)
                .then((response) => {
                    this.cloudinaryImageList = response.data.resources;


                    this.layoutGeometry = JustifiedLayout(this.cloudinaryImageList, {
                        containerWidth: this.$el.offsetWidth,
                    });

                    this.setImageList();


                    this.setImageTiles();
                    this.setLightBoxImages()

                });
        },
        computed: {
            computedInlineStyle(){
                return `height: ${this.layoutGeometry.containerHeight}px;`;
            },

            activeImage(){
                if(this.activeImageIndex === null) {
                    return null;
                }
                return this.lightBoxImages[this.activeImageIndex];
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
            },

            showImage(index){
                this.activeImageIndex = index;
            },

            showNextImage(){
                if(this.activeImageIndex >= this.lightBoxImages.length-1){
                    return this.activeImageIndex = 0;
                }

                return this.activeImageIndex++;
            },

            showPrevImage(){
                if(this.activeImageIndex === 0){
                    return this.activeImageIndex <= this.lightBoxImages.length-1;
                }

                return this.activeImageIndex--;
            },
            closeLightbox(){
                this.activeImageIndex = null;
            }
        }

    }
</script>

<style scoped>

</style>