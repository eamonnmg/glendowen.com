<template>
    <div>
        <site-header></site-header>

        <div class="container mx-auto">

            <Home v-if="$page.frontmatter.home" class="mt-4 mb-4"/>
        </div>


        <div class="border-t pin-b">
            footer

        </div>

    </div>
</template>

<script>
    import SiteHeader from '../components/SiteHeader'
    import Home from '../components/Home'
    export default {
        components: {
            SiteHeader,
            Home,
        }
    }
</script>

<style  src="../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css">