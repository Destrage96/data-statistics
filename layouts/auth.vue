<template>
  <div class="auth--container">
    <div class="auth-wrapper">
      <nuxt/>
    </div>
  </div>
</template>

<script>
    export default {
        middleware: 'authenticated',
    };
</script>

<style lang="less" scoped>
    @import '~assets/css/helpers';
   .auth--container {
     height: 100%;
     background-image: url("../assets/images/white-scratone.png");
     background-repeat: repeat;
     .auth-wrapper {
       margin-left: auto;
       margin-right: auto;
       width: 550px;
       min-width: 320px;
       padding-top: 10%;
     }
   }

    @media @mobile {
        div.auth-wrapper {
            width: 98%;
        }
    }
</style>
