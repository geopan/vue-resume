<template>
  <v-container fluid fill-height id="scroll-target" class="main-container">
    <v-row
      class="infiniti-scroll"
      align="center"
      justify="center"
      v-scroll:#scroll-target="onScroll"
    >
      <v-col cols="12" class="text-center">
        <profile />
      </v-col>
      <v-col cols="12" class="text-center">
        Scroll down
        <!-- <v-icon>arrow_drop_down</v-icon> -->
        {{ offsetTop }}
      </v-col>
      <v-col cols="12">
        <experiences :display="offsetTop >= 100" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Experiences from "./Experiences";
import Profile from "@/components/profile/Profile";

export default {
  name: "Landing",
  components: { Experiences, Profile },
  data: () => ({
    offsetTop: 0
  }),

  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  },
  watch: {
    // offsetTop(v) {
    //   if (v >= 600) {
    //     this.$router.push({ name: "experiences" });
    //   }
    // }
  }
};
</script>

<style>
.profile {
  min-height: "300px";
}

body,
html {
  overflow: hidden;
}

.main-container {
  max-height: calc(100vh - 64px);
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.infinite-scroll {
  min-height: "2280px";
  /* display: flex; */
  /* overflow-y: auto; */
}
</style>
