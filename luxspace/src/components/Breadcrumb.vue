<template>
    <nav class="nav" id="icon-kursi">
        <a class="ml-5" href="#">Home /&nbsp;</a>
        <a href="#">Office Room /&nbsp;</a>
        <router-link to="/">Detail</router-link>
        <router-link to="/shipping" v-show="breadLink == '/shipping'">&nbsp;/ Shipping</router-link>
    </nav>
</template>

<script>
export default {
    name: 'BreadcrumbComponent',
    data() {
        return {
            breadLink: this.$route.path
        }
    }
}
</script>

<style>

</style>