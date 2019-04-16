<template>
    <div class="mx-auto max-w-xl">
        <main class="container border p-6 sm:m-6 ">
            <article>
                <header class="mb-6">
                    <h1>{{$page.frontmatter.title}}</h1>
                    <span>April 3, 2019 By eamonn</span>
                </header>
                <Content></Content>
            </article>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Page'
    }
</script>

<style scoped>

</style>