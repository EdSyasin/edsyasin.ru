<template>
    <div id="hello-card" :class="{'hello-card_rotated': this.rotated }">
        <div id="front">
            <div id="title">
                <img :src="this.avatar" id="avatar" @click="rotate()">
                <span id="name">Эдуард Сясин</span>
                <span id="desc">веб разработчик</span>
            </div>
            <div id="btn-container">
                <btn text='обо мне' href='#/aboutme'></btn>
                <btn text='блог' href='#/blog'></btn>
                <btn text='мои работы' href='#/porfolio'></btn>
            </div>
        </div>
        <div id="back" @click="rotate()">
            <img :src="this.bigPhoto">
        </div>
    </div>
</template>

<script>

    import btn from './hello-btn.vue'

    export default {
        data(){
            return{
                avatar: '/src/assets/avatar.JPG',
                bigPhoto: '/src/assets/bigphoto.JPG',
                rotated: false
            }
        },
        methods:{
            goto () {
                alert('hello');
            },
            rotate(){
                this.rotated = !this.rotated;
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
        position: relative;
        z-index: 1;
        perspective: 1000px;
    }

    #front,#back{
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        transition: 1s;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 5px;
    }

    #front{
        background: white;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2em);
        opacity: 2%;
    }

    #back{
        transform: rotateY(180deg);
        background: #00A0AE;
    }

    
    .hello-card_rotated #front{
        transform: rotateY(180deg) !important;
    }

    .hello-card_rotated #back{
        transform: rotateY(360deg) !important;
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

    #btn-container a{
        margin: 20px 0 0 0px;
    }

</style>

