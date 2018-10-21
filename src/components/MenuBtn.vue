<template>
    <div id="menu-btn" :class=" { 'menu-btn_active' : this.$root.menuOpen} "  @click='ShowMenu'>
        <span></span>
    </div>
</template>

<script>
export default {
  name: "menu-btn",
  methods: {
    ShowMenu() {
      this.$root.menuOpen = !this.$root.menuOpen;
    }
  }
};
</script>

<style scoped>
    #menu-btn {
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 60px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    #menu-btn span {
        transition: 0.2s;
        background: #00a0ae;
        width: 30px;
        height: 5px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 15px;
    }

    #menu-btn span::before,
    #menu-btn span::after {
        top: 0;
        bottom: 0;
        margin: auto;
        background: #00a0ae;
        width: 30px;
        height: 5px;
        position: absolute;
    }

    #menu-btn span:before,
    #menu-btn span::after {
        content: "";
        display: block;
        transition: 0.2s;
    }

    #menu-btn span::before {
        transform: translateY(-9px);
    }
    #menu-btn span::after {
        transform: translateY(9px);
    }

    .menu-btn_active span{
        height: 0 !important;
    }

    .menu-btn_active span:before {
        transform: rotate(-45deg) !important;
    }
    .menu-btn_active span:after {
        transform: rotate(45deg) !important;
    }

</style>

