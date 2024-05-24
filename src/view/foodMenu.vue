<script setup>
    import searchRow from "../components/SearchRow.vue"
    import foodCategory from "../components/foodCategory.vue";
    import restaurantList from "../components/RestaurantList.vue"
    import frenchImg from "../assets/images/french.jpg"
    import chineseImg from "../assets/images/draganCity.jpg"
    import drinkImg from "../assets/images/drink.jpg"
    import mcdonalds from "../assets/images/mcdonalds.gif"

    const restaurantLists =[
                            {
                                title:'麥當勞',
                                type:'速食/點心/炸雞/',
                                waitTime:'等待時間5-10分鐘',
                                openTime:'營業時間00:00-00:00',
                                score:'5.0',
                                img:mcdonalds
                            },
                            {
                                title:'可不可熟成紅茶',
                                type:'飲品/紅茶/特調',
                                waitTime:'等待時間10-15分鐘',
                                openTime:'營業時間9:00-21:00',
                                score:'4.5',
                                img:drinkImg
                            },
                            {
                                title:'Ephernité',
                                type:'法式/米其林/套餐/排餐',
                                waitTime:'等待時間30-40分鐘',
                                openTime:'營業時間17:00-23:00',
                                score:'4.8',
                                img:frenchImg
                            },
                            {
                                title:'龍都酒樓',
                                type:'港式/單點/烤鴨/小點心',
                                waitTime:'等待時間20-35分鐘',
                                openTime:'營業時間14:00-22:00',
                                score:'4.9',
                                img:chineseImg
                            }
        ]

    const restaurantTypes = [
        {
            value:'西式',
        },
        {
            value:'速食',
        },
        {
            value:'小吃',
        },
        {
            value:'日式',
        },
        {
            value:'健康飲食',
        },
        {
            value:'飲料',
        },
        {
            value:'中式'
        },
    ]

    const restaurantStates = [
        {
            value:'營業中',
        },
        {
            value:'促銷活動',
        },
        {
            value:'超人氣餐廳',
        },
        {
            value:'新上線餐廳',
        }
    ]

    const restaurantSorts = [
        {
            value:'評分',
        },
        {
            value:'價格',
        },
        {
            value:'等待時間',
        },
        {
            value:'地點',
        }
    ]


</script>

<template>
    <searchRow></searchRow>
    <main>
        <aside>
            <div>
                <div class="bookmark">
                    <span>內用</span>
                    <span>外帶</span>
                </div>
            </div>
            <div class="list">
                <span>餐點類別</span>
            </div>
            <foodCategory :restaurantTypeList="restaurantType" v-for="restaurantType in restaurantTypes" :key="restaurantType.value"></foodCategory>
            <div class="list">
                <span>餐廳狀態</span>
            </div>
            <foodCategory :restaurantTypeList="restaurantState" v-for="restaurantState in restaurantStates" :key="restaurantState.value"></foodCategory>
            <div class="list">
                <span>排列方式</span>
            </div>
            <foodCategory :restaurantTypeList="restaurantSort" v-for="restaurantSort in restaurantSorts" :key="restaurantSort.value"></foodCategory>
        </aside>
        <section>
            <restaurantList class="restaurantList" v-for="restaurantList in restaurantLists" :item="restaurantList" :key="restaurantList.title"></restaurantList>
        </section>
    </main>
</template>

<style scoped>
    main{
        display: flex;
    }
    
    main{
        width:100%;
        display:flex;
        padding: 20px 0;
    }

    section{
        width: 70%;
    }

    aside{
        width: 30%;
        margin: 0 auto;
    }

    .bookmark{
            text-align: center;
            background-color: white;
            padding: 15px 0;
    }

    .bookmark span{
        margin:10px;
    }

    .list{
        background-color: rgb(245,245,245);
        width: 50%;
        height: 30px;
        margin: 0 auto;
        border-radius: 5px;
        padding-left: 80px;
        margin-top: 40px;
        align-content: center;
    }

    .restaurantList{
        margin: 20px auto;
        width: 80%;
    }

</style>