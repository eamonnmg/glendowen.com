<template>
    <div>
        <navbar></navbar>

        <Home v-if="$page.frontmatter.home" class="mt-4 mb-4"/>

        <div class="border-t pin-b">
            footer

        </div>


    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import Home from '../components/Home'
    export default {
        components: {
            Navbar,
            Home,
        }
    }
</script>

<style  src="../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css">