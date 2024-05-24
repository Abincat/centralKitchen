<script setup>
    import { ref } from "vue"
    import { useRouter } from "vue-router";

    const selectedCity = ref('')
    const searchCity = ref('')
    const router = useRouter()

    function selectCity(){
        console.log(selectedCity.value)
    }

    function goToSearch(){
        if(selectedCity.value==='' && searchCity.value===''){
            alert('請選擇城市並輸入搜尋關鍵字')
        }else{
            router.push({name:'resturantTwoColumn'});
        }
    }
</script>

<template>
    <div class="searchBlock">
        <div class="area">
            <img src="../assets/images/position-icon.png" alt="positionIcon" class="positionIcon">
            <select class="topInput" @change="selectCity" v-model="selectedCity">
                <option value="" disabled selected>請選擇城市</option>
                <option value="Taipei">Taipei</option>
                <option value="Taoyuan">Taoyuan</option>
                <option value="Yilan">Yilan</option>
                <option value="Hsinchu">Hsinchu</option>
                <option value="Miaoli">Miaoli</option>
                <option value="Taichung">Taichung</option>
                <option value="Changhua">Changhua</option>
                <option value="Nantou">Nantou</option>
                <option value="Tainan">Tainan</option>
                <option value="Kaohsiung">Kaohsiung</option>
            </select>
        </div>
        <div class="search">
            <input type="text" placeholder="搜尋餐廳" class="bottomInput" v-model="searchCity">
            <button class="searchSubmit btn" @click="goToSearch">Search</button>
        </div>
    </div>
</template>

<style scoped>
    .searchBlock{
        width: 50%;
        display: flex;
        margin: 0 auto;
    }

    .searchBlock div{
        width: 100%;
        margin: 0 auto;
        position: relative;
        display: flex;
        align-items: center;
    }

    select{
        width: 80%;
        border: none;
        background-color: rgb(245,245,245);
        height: 40px;
        outline-color: rgb(209,192,200);
        margin:10px 0;
        font-size: 16px;
        text-align: center;
    }

    input{
        width: 80%;
        border: none;
        background-color: rgb(245,245,245);
        height: 40px;
        outline-color: rgb(209,192,200);
        margin:10px 0;
        font-size: 16px;
    }

    .positionIcon{
        width: 30px;
        height: 30px;
        position: absolute; 			
        left: 3px;
        top: 15px;
    }

    .searchSubmit{
        position: absolute; 			
        right: 50px;
        top: 10px;
        border: none;
        background-color: rgb(209,192,200);
        height: 42px;
        color:rgb(133,88,111);
        cursor: pointer;
    }

</style>