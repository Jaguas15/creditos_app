<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" />

    <div :class="sidebarClass" @click="onSidebarClick">
      <div class="layout-logo">
        <router-link to="/">
          <img alt="Logo" :src="logo" />
        </router-link>
      </div>

      <AppProfile />
      <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
    </div>

    <div class="layout-main">
      <router-view />
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppTopBar from "./../AppTopbar.vue";
import AppProfile from "./../AppProfile.vue";
import AppMenu from "./../AppMenu.vue";
import AppFooter from "./../AppFooter.vue";

export default {
  name: "Layout",
  data() {
    return {
      layoutMode: "static",
      layoutColorMode: "ligth",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu: [
        { label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" },
        
        {
          label: "Parámetros básicos",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Clientes",
              icon: "pi pi-fw pi-circle-on",
              to: "/Clientes"
            },
            
          ],
          
        },
        // { label: "Proceso de Creditos", icon: "pi pi-cog", to: "/" },
        {
          label: "Creditos",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Registro de Creditos",
              icon: "pi pi-fw pi-circle-on",
              to: "/creditos"
            },
            
          ],
          
        },


        {
          label: "Pagos",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Registro de Pagos",
              icon: "pi pi-fw pi-circle-on",
              to: "/pagos"
            },
            
          ],
          
        },
      ],
       
       
    };
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    }
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onMenuToggle() {
      this.menuClick = true;

      if (this.isDesktop()) {
        if (this.layoutMode === "overlay") {
          this.overlayMenuActive = !this.overlayMenuActive;
        } else if (this.layoutMode === "static") {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      }

      event.preventDefault();
    },
    onSidebarClick() {
      this.menuClick = true;
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }
    },
    addClass(element, className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    },
    removeClass(element, className) {
      if (element.classList) element.classList.remove(className);
      else
        element.className = element.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
    },
    isDesktop() {
      return window.innerWidth > 1024;
    }
  },
  computed: {
    containerClass() {
      return [
        "layout-wrapper",
        {
          "layout-overlay": this.layoutMode === "overlay",
          "layout-static": this.layoutMode === "static",
          "layout-static-sidebar-inactive":
            this.staticMenuInactive && this.layoutMode === "static",
          "layout-overlay-sidebar-active":
            this.overlayMenuActive && this.layoutMode === "overlay",
          "layout-mobile-sidebar-active": this.mobileMenuActive
        }
      ];
    },
    sidebarClass() {
      return [
        "layout-sidebar",
        {
          "layout-sidebar-dark": this.layoutColorMode === "dark",
          "layout-sidebar-light": this.layoutColorMode === "light"
        }
      ];
    },
    logo() {
      return this.layoutColorMode === "dark"
        ? "assets/layout/images/logo-white.svg"
        : "assets/layout/images/logo.svg";
    }
  },
  beforeUpdate() {
    if (this.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  },
  components: {
    AppTopBar: AppTopBar,
    AppProfile: AppProfile,
    AppMenu: AppMenu,
    AppFooter: AppFooter
  }
};
</script>

<style scoped>
.float-r {
  float: right !important;
}
/* .layout-sidebar {
  width: 280px;
}

.layout-wrapper.layout-static .layout-topbar {
  left: 280px;
}

.layout-wrapper.layout-static .layout-main,
.layout-wrapper.layout-static .layout-footer {
  margin-left: 280px;
}

.layout-wrapper.layout-static.layout-static-sidebar-inactive .layout-sidebar {
  left: -280px;
} */
</style>