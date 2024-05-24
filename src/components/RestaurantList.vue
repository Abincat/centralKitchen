<script setup>
const restaurant = defineProps(["item"]);



</script>

<template>
    <section>
        <article>
            <h4>{{ restaurant.item.title }}</h4>
            <div>
                <p>{{ restaurant.item.type }}</p>
                <p>{{ restaurant.item.waitTime }}</p>
            </div>
            <div>
                <p>{{ restaurant.item.openTime }}</p>
            </div>
            <div class="scoreBar">
                <img src="../assets/images/star-icon.png" alt="star" class="star">
                <h4 class="score">{{ restaurant.item.score }}/5</h4>
            </div>
        </article>
        <div class="restaurantImg" :style="{backgroundImage:`url(${ restaurant.item.img })`}"></div>
    </section>
</template>

<style scoped>
    section{
        background-color: rgb(245,245,245,0.8);
        display: flex;
        width: 100%;
    }

    article{
        width: 30%;
        text-align: center;
        align-content: center;
    }

    article div{
        padding-top:5px;
    }

    .restaurantImg{
        width: 70%;
        height: 300px;
        /* background-image: url('../assets/images/french.jpg'); */
        background-size: cover;
        background-position: center;
    }

    .scoreBar{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .star{
        width: 25px;
        height: 25px;
    }
</style>