<template>
    <div class="absolute " :style="computedInlineStyle">
        <div v-show="isImageLoading" class="skeleton w-full h-full">

        </div>
        <img v-show="!isImageLoading"
             :src="imageTile.url"
             @load="isImageLoading = false"
        >
    </div>
</template>

<script>
    export default {
        name: "image-tile",
        props: {
            imageTile: {
                type: Object,
                required: true,
            }
        },
        data() {
          return {
              isImageLoading: true,
          }
        },
        computed: {
            computedInlineStyle(){
                return `left: ${this.imageTile.left}px; top: ${this.imageTile.top}px; height: ${Math.round(this.imageTile.height)}px; width: ${Math.round(this.imageTile.width)}px;`;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>