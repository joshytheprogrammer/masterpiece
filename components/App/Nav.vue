<template>
  <nav>
    <div class="navbar">
      <!-- The Logo Section -->
      <div class="logo">
        <NuxtLink to="/#">
          <img src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1662566313/masterpiece/cleaned-bg-mp-logo_xwvneu.png" alt="Masterpiece Logo">
          <h2>M.P MASTERPIECE</h2>
        </NuxtLink>
      </div>
      <!-- The Menu Section -->
      <div class="menu">
        <!-- For Phones -->
        <div class="mobile" v-if="isMobile">
          <XIcon color="white" v-if="isOpen" @click="toggleMenu" />
          <MenuAlt3Icon color="white" v-else @click="toggleMenu" />
        </div>
        <!-- For Desktops -->
        <div class="desktop" v-else>
          <Menu />
        </div>
      </div>
    </div>
    <div class="menuItems" v-if="isMobile && isOpen">
      <Menu />
    </div>
  </nav>
</template>

<script>
import { MenuAlt3Icon, XIcon } from '@vue-hero-icons/outline'
import Menu from "./Menu.vue"
export default {
  components: {
    Menu,
    MenuAlt3Icon,
    XIcon
  },
  data(){
    return {
      isMobile: '',
      isOpen: false,
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener("resize", this.checkMobile);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      window.innerWidth > 768 ? this.isMobile = false : this.isMobile = true
    },
    toggleMenu(){
      this.isOpen = !this.isOpen
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  padding: 14px 16px;
  position: fixed;
  top: 0;
  z-index: 12;
  width: 100%;
  background: $trans-dark;

  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 72px;

    .logo {
      a {
        text-decoration: none;
        color: $light;

        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
          width: 45px;
          height: 45px;
        }

        h2 {
          padding-left: 8px;
          font-size: 36px;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: $medium) {
    .navbar {
      justify-content: space-between;

      .logo {
        a {
          h2 {
            font-size: 28px;
          }
        }
      }
    }
  }


}
</style>
