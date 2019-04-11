<template>
    <div class="container">
        <div class="mb-6">
            <h1>{{$page.frontmatter.title}}</h1>
            <span>April 3, 2019 By eamonn</span>
        </div>

        <div>
            <Content></Content>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page'
    }
</script>

<style scoped>

</style>