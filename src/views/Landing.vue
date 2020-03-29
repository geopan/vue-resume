<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-avatar size="300">
          <v-img src="@/assets/logo.png" />
        </v-avatar>
      </v-col>

      <v-col cols="12" class="text-center">
        <h1 class="display-2 font-weight-light mb-3">Guillaume</h1>
        <h1 class="display-1 font-weight-light mb-3">de Boyer-Montegut</h1>

        <p class="display-1">
          Senior Software Engineer
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        Scroll down
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Landing",
  data: () => ({})
};
</script>
