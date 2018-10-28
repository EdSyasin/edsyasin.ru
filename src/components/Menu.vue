<template>
    <div class="men">
        <a @click="CloseMenu" class="menu-link" href="#/">Главная</a>
        <a @click="CloseMenu" class="menu-link" href="#/aboutme">Обо мне</a>
        <a @click="CloseMenu" class="menu-link" href="#/">Блог</a>
        <a @click="CloseMenu" class="menu-link" href="#/">Мои работы</a>
        <a @click="CloseMenu" class="menu-link" href="#/">Войти</a>

    </div>
</template>

<script>
    export default {
        name: 'mainmenu',
        methods: {
            CloseMenu() {
                this.$root.menuOpen = false;
            }
        }
    }
</script>

<style scoped>
    .men {
        top: 150px;
        position: absolute;
        height: 500px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .menu-link {
        font-size: 1rem;
        width: 130px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-top: -2px;
        color: #00a0ae;
    }

    .menu-link:before {
        transition: 0.2s;
        box-sizing: border-box;
        content: '';
        position: absolute;
        border-top: solid 2px;
        border-bottom: solid 2px;
        width: 130px;
        height: 60px;
        transform: scaleX(0);
    }

    .menu-link:hover:before {
        transform: scalex(1);
    }

</style>
