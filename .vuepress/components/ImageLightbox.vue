<template>
    <div class="lightbox fixed flex pin z-50 w-full w-full">
        <div class="fixed pin-r pin-t text-white cursor-pointer text-4xl p-1 mr-2" @click="close">&times;</div>
            <div class="cursor-pointer self-center px-8"
                @click="prevImage"
            >
                <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                    <path d="M0-.5h24v24H0z" fill="none"/>
                </svg>
            </div>
            <div class="relative flex w-full h-full justify-center items-center">
                <img v-show="!isLoadingImage"
                     :src="image.src"
                     alt=""
                     @load="onImageLoad"
                >
                <div v-show="isLoadingImage">
                    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        <div class="cursor-pointer self-center px-8"
            @click="nextImage"
        >
            <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                <path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
        </div>

    </div>
</template>

<script>
    export default {
        name: "image-lightbox",
        props: {
            image: {
                type: Object,
                required: true,

            }
        },
        data(){
            return {
                isLoadingImage: true,
            }
        },
        methods: {
            nextImage(){
                this.$emit('next');
            },
            prevImage(){
                this.$emit('prev');
            },
            close(){
                this.$emit('close');
            },
            onImageLoad(){
                this.isLoadingImage= false
            },
        },
        watch: {
            image(){
                this.isLoadingImage = true;
            }
        }
    }
</script>

<style scoped>
    .lightbox {
        background: rgba(0, 0, 0, 0.8);
    }
    .lds-default {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    }
    .lds-default div {
        position: absolute;
        width: 5px;
        height: 5px;
        background: #fff;
        border-radius: 50%;
        animation: lds-default 1.2s linear infinite;
    }
    .lds-default div:nth-child(1) {
        animation-delay: 0s;
        top: 29px;
        left: 53px;
    }
    .lds-default div:nth-child(2) {
        animation-delay: -0.1s;
        top: 18px;
        left: 50px;
    }
    .lds-default div:nth-child(3) {
        animation-delay: -0.2s;
        top: 9px;
        left: 41px;
    }
    .lds-default div:nth-child(4) {
        animation-delay: -0.3s;
        top: 6px;
        left: 29px;
    }
    .lds-default div:nth-child(5) {
        animation-delay: -0.4s;
        top: 9px;
        left: 18px;
    }
    .lds-default div:nth-child(6) {
        animation-delay: -0.5s;
        top: 18px;
        left: 9px;
    }
    .lds-default div:nth-child(7) {
        animation-delay: -0.6s;
        top: 29px;
        left: 6px;
    }
    .lds-default div:nth-child(8) {
        animation-delay: -0.7s;
        top: 41px;
        left: 9px;
    }
    .lds-default div:nth-child(9) {
        animation-delay: -0.8s;
        top: 50px;
        left: 18px;
    }
    .lds-default div:nth-child(10) {
        animation-delay: -0.9s;
        top: 53px;
        left: 29px;
    }
    .lds-default div:nth-child(11) {
        animation-delay: -1s;
        top: 50px;
        left: 41px;
    }
    .lds-default div:nth-child(12) {
        animation-delay: -1.1s;
        top: 41px;
        left: 50px;
    }
    @keyframes lds-default {
        0%, 20%, 80%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
    }

</style>