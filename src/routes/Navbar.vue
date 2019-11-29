<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand>
        <!-- <img alt="logo surgemap" title="logo_surgemap" src="../assets/logo_surgemap.png" id="logo"/> -->
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"><i class="fas fa-envelope"></i> Contact</b-nav-item>
          <b-nav-item href="#"><i class="fa fa-cog"></i> Settings</b-nav-item>
          <!-- <b-nav-item v-if="authenticated" v-on:click="logout" id="logout-button"
            ><i class="fa fa-user"></i> Logout</b-nav-item
          >
          <b-nav-item v-else v-on:click="login" id="login-button"><i class="fa fa-user"></i> Login</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script></script>
<script>
export default {
  // name: 'app',
  // data() {
  //   return {
  //     authenticated: false,
  //   }
  // },
  // watch: {
  //   $route: 'isAuthenticated',
  // },
  // created() {
  //   this.isAuthenticated()
  // },
  // methods: {
  //   async isAuthenticated() {
  //     this.authenticated = await this.$auth.isAuthenticated()
  //   },
  //   login() {
  //     this.$auth.loginRedirect('/graphics')
  //   },
  //   async logout() {
  //     await this.$auth.logout()
  //     await this.isAuthenticated()
  //     this.$router.push({ path: '/' })
  //   },
  // },
}
</script>

<style scoped>
#logo {
  max-height: 50px;
}
.ml-auto {
  margin-right: 50px;
}
.bg-info {
  background-color: lightgray !important;
}
#navbar .nav-link {
  color: black;
}
</style>
