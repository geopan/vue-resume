<template>
  <v-container
    fluid
    fill-height
    id="scroll-target"
    style="max-height: 1400px"
    class="overflow-y-auto"
  >
    <v-row>
      <v-col></v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-avatar size="250">
          <v-img src="@/assets/logo.png" />
        </v-avatar>
      </v-col>
      <v-col cols="12" class="text-center">
        <h1 class="display-2 font-weight-light mb-3">Guillaume</h1>
        <h1 class="display-1 font-weight-light mb-3">de Boyer-Montegut</h1>
        <p class="display-1">Senior Software Engineer</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-show="offsetTop >= 300">
      <v-col cols="12" class="text-center">
        <p class="headline">Contact</p>
      </v-col>
    </v-row>
    <v-row align="bottom" justify="center">
      <v-col cols="12" class="text-center">
        Scroll down
        <!-- <v-icon>arrow_drop_down</v-icon> -->
        {{offsetTop}}
      </v-col>
    </v-row>
    <v-row v-scroll:#scroll-target="onScroll" style="height: 5000px"></v-row>
  </v-container>
</template>

<script>
export default {
  name: "Landing",
  data: () => ({
    offsetTop: 0
  }),

  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  },
  watch: {
    offsetTop(v) {
      if (v >= 600) {
        this.$router.push({ name: "experiences" });
      }
    }
  }
};
</script>

<style>
.profile {
  min-height: "300px";
}
</style>
