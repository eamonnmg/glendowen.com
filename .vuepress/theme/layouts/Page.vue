<template>
    <div class="mx-auto max-w-xl flex justify-center">
        <main class="container sm:border p-3 sm:p-6 sm:m-6 ">
            <article>
                <header class="mb-6">
                    <h1 class="heading">{{$page.frontmatter.title}}</h1>
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