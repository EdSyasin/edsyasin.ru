<template>
    <div @click="goto(page)" id="btn">
        {{ text }}
        <div id="bg">

        </div>
    </div>
</template>

<script>
export default {
    props:['text', 'page'],    
    methods:{
            goto (page) {
                this.$router.push(page);
            }
    },
}
</script>

<style scoped>

#btn,#bg{
    transition: 0.3s;
}

#btn{
    position: relative;
    height: 70px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border: 2px solid #00a0ae;
    border-radius: 5px;
    color: #00a0ae;
    cursor: pointer;
    overflow: hidden;
}

#bg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: #00a0ae;
    top: 101%;
}

#btn:hover{
    color: white;
}

#btn:hover #bg{
    top: 0%;
}

</style>

