<template>
  <div>
    <Navbar id="navbar" />
    <v-app app id="app">
      <sidebar-menu :menu="menu" id="sidebar" :collapsed="true">
        <!-- <div slot="header">header</div> -->
        <!-- <div slot="footer">footer</div> -->
        <span slot="toggle-icon"><i class="fas fa-caret-square-left"></i></span>
        <span slot="dropdown-icon"><i class="fas fa-angle-right"></i></span>
      </sidebar-menu>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import Navbar from './routes/Navbar.vue'
import menu from './services/menu.js'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
  name: 'app',
  data () {
    return {
      menu: menu,
    }
  },
  components: {
    SidebarMenu,
    Navbar,
  },
}
</script>

<style lang="stylus">
@import "./assets/stylus/main.styl";

#sidebar {
  // background-color : lightgray
}

#sidebar .vsm--toggle-btn {
  background-color : info
}

#sidebar .svg-inline--fa {
  border: 1px;
  border-style: inset;
}

#app .vuecal__event {
  background-color: cornflowerblue
}

#app .vuecal--view-with-time {
  // background-color: #e4f5ef
}

#sidebar .vsm--item{
  padding-top: 30px
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Roboto;
  background-color: ghostwhite;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.break {
  flex-basis: 100%;
  height: 0;
}
#app {
   display: flex;
   flex-direction: column;
   align-items: center;
}
#navbar {
  left: 50px;
  position: relative;
}
.tooltip-inner {
  max-width: 100% !important;
}
</style>
