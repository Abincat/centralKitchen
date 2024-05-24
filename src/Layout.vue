<script setup>
    import Header from "./components/Header.vue"
    import Footer from "./components/Footer.vue"
</script>

<template>
    <div>
        <Header></Header>
        <div>
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>

</style>