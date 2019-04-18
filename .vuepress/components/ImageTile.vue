<template>
    <img class="absolute" :style="computedInlineStyle" :src="imageTile.url" alt="">
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
        computed: {
            computedInlineStyle(){
                return `left: ${this.imageTile.left}px; top: ${this.imageTile.top}px`;
            }
        }
    }
</script>

<style scoped>

</style>