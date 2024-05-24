
<script setup>
const restaurantTypeLists = defineProps(["restaurantTypeList"]);
const checkeds =[]


function choose(value){
    checkeds.push(restaurantTypeLists.restaurantTypeList.value);
    console.log(this.checkeds)
}


</script>

<template>
    <aside>
        <label @click="choose('value')">
            <input type="checkbox" value="${ restaurantTypeLists.restaurantTypeList.value }" >
            <span>{{ restaurantTypeLists.restaurantTypeList.value }}</span>
        </label>
    </aside>
</template>

<style scoped>
    label{
        display: flex;
        padding: 10px 0;
        
    }

    input[type=checkbox]{
        display: none;
    }

    span{
        padding-left: 36px;
        position: relative;
    }

    /* 設計點擊前的框框樣式 */
    span::before{
        content: "";
        left: 0;
        top:2px;
        position: absolute;
        outline: 1px solid rgb(133,88,111);
        background-color:white;
        border-radius: 5px;
        width: 20px;
        height: 20px;
    }

    /* 點擊後的框框樣式 */
    span::after{
        display:none;
        content: "";
        left: 5px;
        top:2px;
        position: absolute;
        width: 7px;
        height: 14px;
        border-right: 2px solid rgb(133,88,111);
        border-bottom: 2px solid rgb(133,88,111);
        transform: rotate(40deg);
    }

    input[type=checkbox]:checked{
        display: none;
    }

    input[type=checkbox]:checked+span::after{
        display:block;
    }

</style>