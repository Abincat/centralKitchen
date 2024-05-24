<script setup>
    import {ref,defineEmits} from "vue";

    const emit = defineEmits(['toggle'])

    function showShoppingCarList(){
        emit('toggle')
        
    }
</script>

<template>
    <div class="bg">
        <section>
            <div class="title">
                <div @click="showShoppingCarList">
                    <img src="../assets/images/comeBack-icon.png" alt="comeBack" class="comeBack">
                    <span >回上頁</span>
                </div>
                <span>購物車</span>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .bg{
        width: 30%;
        height: 100vh;
        background-color: rgb(209,192,200);
        z-index: 50;
    }
    
    .title{
        display: flex;
        justify-content:space-between;
    }

    .title div{
        display: flex;
    } 

    .title span{
        cursor: pointer;
    }

    .comeBack{
        cursor: pointer;
        padding-right: 5px;
    }

    section{
        width: 80%;
        margin: 20px auto;
    }
</style>