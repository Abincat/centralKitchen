<script setup>
    import RestaurantType from "./RestaurantType.vue"
</script>

<template>
    <h3>今晚想吃</h3>
    <div class="typeBar">
        <RestaurantType></RestaurantType>
    </div>
</template>

<style scoped>
    h3{
        width: 75%; 
        margin: 20px auto;
    }
    .typeBar{
        display: flex;
        width: 70%;
        margin: 0 auto;
    }
</style>