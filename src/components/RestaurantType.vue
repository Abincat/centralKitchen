<script>
import AmericanStyle from "../assets/images/AmericanStyle.jpg"
import ChineseStyle from "../assets/images/ChineseStyle.jpg"
import FrenchStyle from "../assets/images/FrenchStyle.jpg"
import ItalianStyle from "../assets/images/ItalianStyle.jpg"
import JapanStyle from "../assets/images/JapanStyle.jpg"


    export default{
        data(){
            return {
                types:[
                    {
                        category:"義式",
                        foodImg:ItalianStyle
                    },
                    {
                        category:"中式",
                        foodImg:ChineseStyle
                    },
                    {
                        category:"日式",
                        foodImg:JapanStyle
                    },
                    {
                        category:"法式",
                        foodImg:FrenchStyle
                    },
                    {
                        category:"美式",
                        foodImg:AmericanStyle
                    },
                ]
            }
        }
    }
</script>

<template>
    <section v-for="type in types" :key="type">
        <router-link to="foodMenu">
            <div class="tonightEat" :style="{backgroundImage:`url(${ type.foodImg })`}"></div>
        </router-link>
        <p>{{ type.category }}</p>
    </section>
</template>

<style scoped>
    section{
        text-align: center;
        font-weight: bold;
        padding: 0 20px;
        margin: 0 auto;
    }

    .tonightEat{
        background-size: cover;
        background-position: center;
        width:130px;
        height:130px;
        border-radius: 50%;
        border: none;
    }
</style>