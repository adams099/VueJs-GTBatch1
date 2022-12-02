<template>
    <nav class="nav" id="icon-kursi">
        <a class="ml-5" href="#">Home /&nbsp;</a>
        <a href="#">Office Room /&nbsp;</a>

        <!-- detail -->
        <router-link to="/" v-show="breadLink == '/'"><b>Detail</b></router-link>

        <!-- shipping -->
        <router-link to="/" v-show="breadLink == '/shipping'">Detail</router-link>
        <router-link to="/shipping" v-show="breadLink == '/shipping'">&nbsp;/ <b>Shipping</b></router-link>

        <!-- shipping list -->
        <router-link to="/" v-show="breadLink == '/shippingList'">Detail</router-link>
        <router-link to="/shippingList" v-show="breadLink == '/shippingList'">&nbsp;/ <b>Shipping List</b></router-link>
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