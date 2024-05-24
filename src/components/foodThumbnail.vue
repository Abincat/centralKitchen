<script setup>

</script>

<template>
    <section>
        <img src="../assets/images/add-icon.png" alt="addIicon" class="addIicon">
        <p>玫瑰沙拉<br>
            $200
        </p>
    </section>
</template>

<style scoped>
    section{
        width: 200px;
        height: 200px;
        border-radius: 30px;
        background-image: url("../assets/images/salad.PNG");
        background-position:right bottom 20%;
        background-size: 140%;
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
    }

    .addIicon{
        position: absolute;
        right: 10px;
        top:10px;
    }

    p{
        width: 100%;
        background-color: white;
        font-weight: bold;
        text-align: center;
        position: absolute;
        bottom:-10px;
    }
</style>