<template>
    <nav class="flex items-center justify-between flex-wrap bg-white border-black border-b-2 p-3">
        <div class="flex items-center flex-no-shrink text-black mr-6">
            <span class="font-semibold text-xl text-black tracking-tight">Glendowen</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-black-lighter border-black-light hover:text-white hover:border-white"
                @click="toggleNav"
            >
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block lg:flex lg:items-center float-right lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-lighter hover:text-black mr-4">
                    Products
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-lighter hover:text-black mr-4">
                    About
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar.vue",
        data(){
            return {
                showMenu: false,
            }
        },
        methods: {
            toggleNav(){
                this.showMenu = !this.showMenu;
            }
        }
    }
</script>

<style scoped>

</style>