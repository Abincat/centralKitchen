<script setup>
    import Search from "./Search.vue"
</script>

<template>
    <nav>
        <section>
            <div class="navBg"></div>
            <div class="searchBar">
                <Search></Search>
            </div>
        </section>
    </nav>
</template>

<style scoped>
    section{
        display: flex;
        width: 80%;
        margin: 0 auto;
        background-color: white;
        height: 350px;
    }

    .searchBar{
        width: 35%;
        background-color: white;
        align-content: center;

    }

    .navBg{
        width: 65%;
        background-image: url("../assets/images/nav.png");
        background-size: cover;
        background-position: center;
        height: 100%;
        background-repeat: no-repeat;
    }

</style>