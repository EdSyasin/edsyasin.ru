<template>
    <div id="content">
        <parallax-container class="horizontal-card container">
            <parallax-element class="background-image" :parallaxStrength="-50" :type="'translation'">     
            </parallax-element>            
        </parallax-container>
        <hellocard></hellocard>
    </div>
</template>

<script>
import hellocard from './components/hellocard.vue'

export default {
    components:{
        hellocard
    }    
}
</script>

<style scoped>
    #content{
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .container{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 0;
    }

    .background-image{
        background-image: url('/src/assets/background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        min-width: calc(100% + 100px) !important;
        height: calc(100% + 100px);
    }

</style>
