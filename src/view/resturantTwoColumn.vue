<script setup>
    import SearchRow from '../components/SearchRow.vue';
    import foodThumbnail from '../components/foodThumbnail.vue'
    import foodCategory from '../components/foodCategory.vue'

    const foodTypes = [
        {
            value:'主廚推薦',
        },
        {
            value:'沙拉',
        },
        {
            value:'飯/麵',
        },
        {
            value:'排餐',
        },
        {
            value:'單點',
        },
        {
            value:'飲品',
        },
        {
            value:'甜點'
        }
    ]
</script>

<template>
        <SearchRow></SearchRow>
        <nav>
            <article>
                <div class="restaurantText">
                    <h1>Ephernité</h1>
                    <div class="restaurantTextIntroduction">
                        <p>法式/米其林/套餐/排餐</p>
                        <p>等待時間30-40分鐘</p>
                    </div>
                    <div>
                        <p>營業時間17:00-23:00</p>
                    </div>
                </div>
                <div>
                    <img src="../assets/images/star-icon.png" alt="star" class="star">
                    <span>4.9/5</span>
                </div>
            </article>
            <div class="restaurant">
                <img src="../assets/images/french.jpg" alt="restaurantImg" class="restaurantImg">
            </div>
        </nav>
        <main>
            <aside>
                <div>
                    <div class="bookmark">
                        <span>線上訂購</span>
                        <span>預約座位</span>
                        <span>評論</span>
                    </div>
                </div>
                <foodCategory v-for="foodType in foodTypes" :restaurantTypeList="foodType"></foodCategory>
            </aside>
            <section>
                <div class="menu">
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                </div>
                <div class="menu">
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                </div>
                <div class="menu">
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                    <foodThumbnail class="foodThumbnail"></foodThumbnail>
                </div>
            </section>
        </main>
</template>

<style scoped>

    nav{
        width: 100%;
        display: flex;
        background-color:rgb(255,255,255,0.5);
        padding: 20px 0;
    }

    article{
        width: 50%;
        align-content: center;
        display: flex;
    }

    .restaurant{
        width: 50%;
        padding-left: 15px;
    }

    .restaurantImg{
        width: auto;
        height: 100%;
    }

    .restaurantText{
        width: 30%;
        margin: 0 auto;
        white-space: nowrap;
    }

    .restaurantTextIntroduction{
        padding: 15px 0;
    }

    .star{
        width: 30px;
        height: 30px;
        position: relative;
        top: 7px;
    }

    main{
        width:100%;
        display:flex;
        padding: 20px 0;
    }

    aside{
        width: 30%;
        margin: 0 auto;
    }

    section{
        width: 70%;
    }

    .menu{
        display: flex;
    }

    .bookmark{
        text-align: center;
        background-color: white;
        padding: 15px 0;
    }

    .bookmark span{
        margin:10px;
    }

    .foodThumbnail{
        width: 200px;
        margin: 25px 20px;
    }
</style>