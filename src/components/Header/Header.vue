<template>
  <header :class="{ 'projects-header': shouldAddClassToHeader }">
    <div class="svg-container">
      <svg class="background-svg" width="720" height="629" viewBox="0 0 720 629" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_257_693)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.452 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#64A2FF"/>
        </g>
        <defs>
        <clipPath id="clip0_257_693">
        <rect width="720" height="629" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
    <nav>
      <router-link to="/" class="logo">Lukas Bouhlel</router-link>
        <div class="menu-burger">
            <div @click="handleToggleMenu" class="container-button-menu">
                <IconMenu :isOpened="isOpened"  @click="handleIconMenuClick"/> 
            </div>
            <div class="menu-scroll" :class="{ 'open-menu': isMenuOpen, 'close-menu': isMenuClosed }">
                <div class="background-menu animated"></div>
                <div class="content-menu">
                    <ul>
                      <li><router-link @click="closeMenuIfNeeded('/')" to="/">Home</router-link></li>
                      <li><router-link @click="closeMenuIfNeeded('/biography')" to="/biography">Biography</router-link></li>
                      <li><router-link @click="closeMenuIfNeeded('/projects')" to="/projects">My Projects</router-link></li>
                    </ul> 
                </div>
            </div>
        </div>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script>
import IconMenu from './HeaderSvgAnimation.vue';

export default {
  components: {
    IconMenu
  },
  data() {
    return {
      isMenuOpen: false,
      isMenuClosed: false,
      isOpened: false,
      isProjectsPage: false,
    };
  },
  computed: {
    shouldAddClassToHeader() {
      return this.$route.path === '/projects';
    },
  },
  methods: {
    handleToggleMenu() {
      if (this.isMenuOpen === true) {
        this.isMenuOpen = false;
        this.isMenuClosed = true;
        this.isOpened = false;
        document.documentElement.style.overflow = 'auto';
      } else {
        this.isMenuOpen = true;
        this.isMenuClosed = false;
        this.isOpened = true;
        document.documentElement.style.overflow = 'hidden';
      }
    },
    handleIconMenuClick() {
      this.isOpened = true;
      document.documentElement.style.overflow = 'hidden';
    },
    closeMenuIfNeeded(targetRoute) {
      const currentRoute = this.$route.path;
      if (this.isMenuOpen && currentRoute === targetRoute) {
        this.isMenuOpen = false;
        this.isMenuClosed = true;
        this.isOpened = false;
        document.documentElement.style.overflow = 'auto';
      }
    }
  },
  watch: {
    $route(to, from) {
      if (this.isMenuOpen === true) {
        this.isMenuOpen = false;
        this.isMenuClosed = true;
        this.isOpened = false;
        document.documentElement.style.overflow = 'auto';
      }
    }
  }
};
</script>