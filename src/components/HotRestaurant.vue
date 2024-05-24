<script setup>
    import foodThumbnail from "./foodThumbnail.vue"
</script>

<template>
    <section class="resturantIntroduction">
        <article>
            <div>
                <h4>Ephernité</h4>
                <span>法式/米其林/套餐/排餐</span>
            </div>
            <div>
                <span>等待時間30-40分鐘</span>
                <img src="../assets/images/star-icon.png" alt="star" class="star">
                <h4 class="score">4.9/5</h4>
            </div>
        </article>
        <div class="resturant">
            <div class="resturantImg"></div>
            <div class="foodImg">
                <section>
                    <div class="foodBlock">
                        <foodThumbnail class="foodThumbnail"></foodThumbnail>
                        <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    </div>
                    <div class="foodBlock">
                        <foodThumbnail class="foodThumbnail"></foodThumbnail>
                        <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .resturantIntroduction{
        width: 100%;
        margin: 0 auto;
        background-color:rgb(255,255,255,0.5);
        border-radius: 30px;
        padding-bottom: 40px;
    }

    article{
        display: flex;
        justify-content: space-between;
    }

    

    h4{
        display: inline-block;
        padding: 0 20px;
    }

    span{
        padding: 0 20px;
    }

    .resturant{
        width: 100%;
        display: flex;
        
        justify-content: center;
    }

    .star{
        width: 30px;
        height: 30px;
        position: relative;
        top: 7px;
    }

    .score{
        padding-left: 0;
    }

    .foodImg{
        width:55%;
        height: auto;
    }

    .resturantImg{
        width: 35%;
        height: 500px;
        background-image: url("../assets/images/french.jpg");
        background-size: cover;
        background-position: center;
    }

    .foodThumbnail{
        margin: 25px 20px;
    }

    .foodBlock{
        display: flex;
        justify-content: center;
    }
</style>