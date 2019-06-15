<template>
    <div class="font-sans antialiased">
        <nav class="flex items-center justify-between flex-wrap bg-white p-3 border-purple border-b">
            <div class="flex items-center flex-no-shrink text-black mr-6">
                <router-link to="/" class="nav-link">
                    <h1 class="text-celtic">Glendowen</h1>
                    <span class="font-light capitalize text-sm">Traditional Irish Crafts Shop</span>
                </router-link>
            </div>
            <div class="block sm:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-black-lighter border-white-light hover:text-black hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-end sm:w-auto">
                <div class="text-sm sm:flex-grow">
                    <router-link :to="'/glendowen-crafts'" class="nav-link">
                        Glendowen Crafts
                    </router-link>
                    <router-link :to="'/other-crafts'" class="nav-link">
                        Other Crafts
                    </router-link>
                    <router-link :to="'/inishowen'" class="nav-link">
                       Visiting Inishowen?
                    </router-link>
                    <router-link :to="'/about'" class="nav-link">
                        About
                    </router-link>
                </div>
                <div>
                    <a href="https://www.facebook.com/glendowencraftshop/" target="_blank" class="nav-link ">Facebook</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "SiteHeader.vue",
        data(){
            return {
                open: false
            }
        },
        methods: {
            toggle() {
                this.open = !this.open
            }
        }
    }
</script>

<style scoped>

</style>