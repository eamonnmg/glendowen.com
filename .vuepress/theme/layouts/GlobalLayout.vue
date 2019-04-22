<template>
    <div>
        <site-header></site-header>

        <div class="mx-auto">
            <component :is="layout"></component>
        </div>


        <div class="border-t pin-b">
            footer

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