<template>
    <div class="mx-auto">
        <main class=" border p-6 sm:m-6 ">
            <article>
                <header class="mb-6">
                    <h1 class="heading-1">{{$page.frontmatter.title}}</h1>
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