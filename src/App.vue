<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="primary"
    >
      <span class="title ml-3 mr-5">Google&nbsp;<span class="font-weight-light">Keep</span></span>
      <template v-if="hiddenNavbar !== true">
      <v-text-field
        
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
      />
      </template>
      <v-spacer />
      <!-- <v-btn
      text
      icon
      large
      >
      <v-icon >mdi-account-circle-outline</v-icon>
      Login
      </v-btn> -->

      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
        <v-row
          justify="center"
          align="center"
        >
        <router-view />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      hiddenNavbar: false
    }),
    mounted(){
      this.verifyNavbar()
    },
    methods: {
      verifyNavbar(){
        if(this.$route.path === '/login') {
          this.hiddenNavbar = true;
          return true;
        } else {
          this.hiddenNavbar = false;
          return false;
        }
      }
    }
  }
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>