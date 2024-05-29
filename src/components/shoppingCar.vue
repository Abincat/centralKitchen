<script setup>
    import {ref} from "vue";

    const emit = defineEmits(['toggle'])

    function showShoppingCarList(){
        emit('toggle')
        
    }
</script>

<template>
    <div class="bg">
        <div>
            <nav>
                <div class="title">
                    <div @click="showShoppingCarList">
                        <img src="../assets/images/comeBack-icon.png" alt="comeBack" class="comeBack">
                        <span>回上頁</span>
                    </div>
                    <span>購物車</span>
                </div>
            </nav>
            <main>
                <article>
                    <section>
                        <div class="imgTitleBlock">
                            <img src="../assets/images/cake.PNG" class="commodityImg">
                            <span>百花蛋糕</span>
                        </div>
                        <div class="priceBlock">
                            <span>$200</span>
                            <div class="revise">
                                <img src="../assets/images/add-icon.png" alt="addImg">
                                <span>1</span>
                                <img src="../assets/images/reduce-icon.png" alt="reduceImg">
                            </div>
                        </div>
                        <div class="deleteBlock">
                            <img src="../assets/images/drop-icon.png" alt="drop">
                        </div>
                    </section>
                    <section>
                        <div class="imgTitleBlock">
                            <img src="../assets/images/cake.PNG" class="commodityImg">
                            <span>百花蛋糕</span>
                        </div>
                        <div class="priceBlock">
                            <span>$200</span>
                            <div class="revise">
                                <img src="../assets/images/add-icon.png" alt="addImg">
                                <span>1</span>
                                <img src="../assets/images/reduce-icon.png" alt="reduceImg">
                            </div>
                        </div>
                        <div class="deleteBlock">
                            <img src="../assets/images/drop-icon.png" alt="drop">
                        </div>
                    </section>
                    <section>
                        <div class="imgTitleBlock">
                            <img src="../assets/images/cake.PNG" class="commodityImg">
                            <span>百花蛋糕</span>
                        </div>
                        <div class="priceBlock">
                            <span>$200</span>
                            <div class="revise">
                                <img src="../assets/images/add-icon.png" alt="addImg">
                                <span>1</span>
                                <img src="../assets/images/reduce-icon.png" alt="reduceImg">
                            </div>
                        </div>
                        <div class="deleteBlock">
                            <img src="../assets/images/drop-icon.png" alt="drop">
                        </div>
                    </section>
                </article>
            </main>
        </div>
        <div class="checkOut">
            <p>共3項商品</p>
            <div>
                <button class="checkOutButton">立即結帳 $640</button>
                <button class="continueShopping" @click="showShoppingCarList">繼續購物</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bg{
        width: 30%;
        height: 100vh;
        background-color: rgb(209,192,200);
        z-index: 50;
        /* align-content: space-between; */
    }
    
    .title{
        display: flex;
        justify-content:space-between;
    }

    .title div{
        display: flex;
    } 

    .title div span{
        cursor: pointer;
    }

    .comeBack{
        cursor: pointer;
        padding-right: 5px;
    }

    nav{
        width: 80%;
        margin: 20px auto;
    }

    .revise img{
        cursor: pointer;
    }

    .deleteBlock img{
        cursor: pointer;
    }

    article{
        width: 80%;
        /* border: 1px solid white; */
        margin: 0 auto;
    }

    section{
        background-color: white;
        width: 100%;
        display: flex;
        margin-bottom: 15px;
        /* border: 1px solid black; */
        /* margin: 10px; */
    }

    .imgTitleBlock{
        /* border: 1px solid blue; */
        display: flex;
        width: 60%;
        justify-content: space-around;
        align-items: center;
    }

    .priceBlock{
        /* border: 1px solid red; */
        display: flex;
        width: 30%;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;

    }

    .deleteBlock{
        background-color: rgb(209,192,200);
        /* border: 1px solid green; */
        width: 10%;
        align-content: center;
        text-align: end;
    }

    .revise{
        display: block;
        width:30px;
        text-align: center;
        align-content: center;
        /* border: 1px solid rgb(255, 191, 0); */
    }

    .commodityImg{
        width:100px;
        height: 100px;
        margin: 5px;
        border-radius: 15px;
    }

    .checkOut{
        width: 80%;
        margin: 0 auto;
        font-weight: bold;
    }
    
    .checkOutButton{
        width: 100%;
        border: none;
        border-radius: 15px;
        height: 40px;
        font-size: 16px;
        margin-bottom: 10px;
        background-color: rgb(133,88,111);
        color: white;
    }

    .continueShopping{
        width: 100%;
        border: none;
        border-radius: 15px;
        height: 40px;
        font-size: 16px;
        background-color:white ;
        color:rgb(133,88,111) ;
    }

    .checkOutButton:hover,
    .continueShopping:hover{
        box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
        font-weight: bold;
        cursor: pointer;
    }
</style>