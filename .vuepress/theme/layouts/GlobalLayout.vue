<template>
    <div>
        <site-header></site-header>

        <div class="mx-auto">
            <component :is="layout"></component>
        </div>


        <div class="pin-b flex justify-center items-center h-32">
            Copyright © {{new Date().getFullYear()}} · Glendowen Craft Studio

        </div>


    </div>
</template>
<script>
    import SiteHeader from '../components/SiteHeader'
    import Home from './Home'
    import Page from './Page'
    export default {
        components: {
            SiteHeader,
            Home,
            Page,
        },
        computed: {
            layout(){
                return this.$page.frontmatter.layout || 'Home'
            }
        }
    }
</script>

<style scoped>
    .modal-open {
        max-height: 100vh;
        overflow: hidden;
    }
</style>