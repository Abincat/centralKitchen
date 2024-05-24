<script setup>

</script>

<template>
    <footer>
        <section>
            <div class="icons">
                <img src="../assets/images/centralKitchen-logo.png" alt="logo" class="logo">
                <div class="linkIcons">
                    <a href="#">
                        <img src="../assets/images/fb-icon.png" alt="fb" class="fb">
                    </a>
                    <a href="#">
                        <img src="../assets/images/ig-icon.png" alt="ig" class="ig">
                    </a>
                    <a href="#">
                        <img src="../assets/images/email-icon.png" alt="email" class="email">
                    </a>
                </div>
            </div>
            <article>
                <p>聯絡我們<br>
                TEL：+886-9123456<br>
                地址：臺北市信義區市府路45號</p>
            </article>
        </section>
    </footer>
</template>

<style scoped>

    footer{
        background-color: white;
        width: 100%;
    }

    section{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo{
        width: 120px;
        height: 70%;
    }

    .icons{
        display: flex;
    }

    .linkIcons{
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }

    .fb,
    .ig,
    .email{
        margin: 0 15px;
    }

    .fb:hover,
    .ig:hover,
    .email:hover{
        border-bottom:3px solid purple ;
        border-top:3px solid purple ;
    }
</style>