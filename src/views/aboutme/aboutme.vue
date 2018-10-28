<template>
    <div id="content">
        <div id="title">
            <parallax>
                <img :src="this.bg" alt="very cool bg">
            </parallax>
        </div>
        <div class="who-am-i">

        </div>

    </div>
</template>

<script>
    import Parallax from 'vue-parallaxy'

    export default {
        data() {
            return {
                bg: '/src/assets/background.jpg',
            }
        },
        components: {
            Parallax
        }
    }
</script>

<style scoped>
    #content {
        position: relative;
        z-index: 1;
    }

    #title {
        height: 100vh;
    }

    img {
        width: 100%;
    }

    .who-am-i {
        height: 500px;
    }

</style>
