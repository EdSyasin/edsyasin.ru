<template>
    <div id="hello-card">
        <div id="title">
            <img :src="this.avatar" id="avatar">
            <span id="name">Эдуард Сясин</span>
            <span id="desc">веб разработчик</span>
        </div>
        <div id="btn-container">
            <btn text='обо мне' page="aboutme"></btn>
            <btn text='блог' page="blog"></btn>
            <btn text='мои работы' page="projects"></btn>
        </div>
    </div>
</template>

<script>

    import btn from './hello-btn.vue'

    export default {
        data(){
            return{
                avatar: '/src/assets/avatar.JPG'
            }
        },
        methods:{
            goto () {
                alert('hello');
            }
        },
        components:{
            btn
        }

    }
</script>

<style scoped>

    #hello-card{
        width: 400px;
        height: 582px;
        background: white;
        position: relative;
        z-index: 1;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 5px;
    }

    #title{
        height: 251px;
        display: flex;
        
        align-items: center;
        flex-direction: column;
    }

    #avatar{
        width: 130px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        border-radius: 90.5px;
        margin: 20px 0 0 0; 
    }

    #name{
        margin: 20px 0 0 0;
        color: #00A0AE;
        font-size: 40px;
    }

    #desc{
        margin: 20px 0 0 0;
        color: #D0D0D0;
        font-size: 20px;
    }

    #btn-container{
        display: flex;
        padding: 20px 0 0 0;
        align-items: center;
        height: 331px;
        flex-direction: column;
    }

    #btn-container div{
        margin: 20px 0 0 0px;
    }

</style>

