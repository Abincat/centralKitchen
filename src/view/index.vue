<script setup>
    import Nav from "../components/Nav.vue"
    import Tonight from "../components/Tonight.vue";
    import HotRestaurant from "../components/HotRestaurant.vue"
</script>

<template>
    <Nav class="navBar"></Nav>
    <Tonight class="tonightToEat"></Tonight>
    <h3>熱門排行</h3>
    <HotRestaurant class="HotRestaurant"></HotRestaurant>
    <HotRestaurant class="HotRestaurant"></HotRestaurant>
    <HotRestaurant class="HotRestaurant"></HotRestaurant>
</template>

<style scoped>
    .navBar{
        width: 100%;
        padding: 50px 0;
    }

    .tonightToEat{
        width: 100%;
    }

    h3{
        width: 75%; 
        margin: 20px auto;
    }

    .HotRestaurant{
        width: 70%;
        margin-bottom: 70px;
    }
</style>