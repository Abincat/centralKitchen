<script setup>

</script>

<template>
    <header>
        <section>
            <router-link to="/">
                <img src="../assets/images/centralKitchen-logo.png" alt="logo" class="logo">
            </router-link>
            <ul>
                <li>
                    <img src="../assets/images/shoppingCart-icon.png" alt="shoppingCart" class="shoppingCart">
                </li>
                <li class="loginButton">
                    <img src="../assets/images/member-icon.png" alt="member" class="member">
                    <span>Login</span>
                </li>
            </ul>
        </section>
    </header>
</template>

<style scoped>

    header{
        width: 100%;
        background-color: white;
    }

    section{
        width: 90%;
        display: flex;
        padding: 5px;
        margin: 0 auto;
        justify-content: space-between;
    }

    .logo{
        width: 120px;
    }

    ul{
        display: flex;
    }

    li{
        list-style: none;
        justify-content: center;
        align-items: center;
    }

    .shoppingCart{
        width: 30px;
        height: 25px;
        padding-right:20px;
        padding-top:5px;
        cursor: pointer;
    }

    .member{
        width: 30px;
        height: 25px;
        padding-right:5px;
    }

    .loginButton{
        display: flex;
        width: 120px;
        border-radius: 30px;
        background-color: rgb(213,191,180);
        cursor: pointer;
    }
</style>