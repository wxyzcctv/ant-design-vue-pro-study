<template>
  <div style="text-align: center;">
    <IconFont type="icon-icon-404" style="font-size: 100px;" />
    <br />
    <!-- <img :src="logo" /> -->
    <Logo />
  </div>
</template>

<script>
// import logo from "@/assets/海豚.svg";
import Logo from "@/assets/logo.svg";
export default {
  components: {
    Logo
  }

  // data() {
  //   return {
  //     logo
  //   };
  // }
  // 这是一个通过img的方式引入的一个方式
};
</script>

<style></style>
