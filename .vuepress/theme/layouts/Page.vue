<template>
        <main class="container border p-6 m-6">
            <article class="text-base font-sans leading-normal tracking-normal">
                <header class="mb-6">
                    <h1>{{$page.frontmatter.title}}</h1>
                    <span>April 3, 2019 By eamonn</span>
                </header>
                <Content></Content>
            </article>
        </main>
</template>

<script>
    export default {
        name: 'Page'
    }
</script>

<style scoped>

</style>