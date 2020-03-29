<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <timeline :experiences="experiences" class="timeline" />
      </v-col>
      <v-col cols="7">
        <the-map :experiences="experiences" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheMap from "./map/TheMap";
import Timeline from "./timeline/Timeline";

export default {
  name: "Home",
  components: { TheMap, Timeline },
  data: () => ({
    experiences: [
      {
        company: "DroneShield",
        role: "Team Lead Software Engineering",
        start: new Date("2019-08-01"),
        end: new Date(),
        center: [-33.8732279, 151.2077566]
      },
      {
        company: "DroneShield",
        role: "Senior Software Engineering",
        start: new Date("2018-06-01"),
        end: new Date("2019-08-01"),
        center: [-33.8732279, 151.2077566]
      },
      {
        company: "HomeTrack",
        role: "Senior Application Developer",
        date: new Date("2017-06-01"),
        end: new Date("2018-06-01"),
        center: [-33.8676606, 151.2076709]
      },
      {
        company: "Vocus",
        role: "GIS Manager",
        start: new Date("2013-11-01"),
        end: new Date("2018-06-01"),
        center: [-33.8391957, 151.2042808]
      },
      {
        company: "Vocus",
        role: "GIS Developer",
        date: new Date("2012-09-01"),
        end: new Date("2013-11-01"),
        center: [-33.8391957, 151.2042808]
      },
      {
        company: "IRD",
        role: "GIS Developer",
        start: new Date("2011-02-01"),
        end: new Date("2011-09-01"),
        center: [43.5611567, 1.4760998]
      },
      {
        company: "BRGM",
        role: "GIS Analyst",
        start: new Date("2007-11-01"),
        end: new Date("2009-08-01"),
        center: [47.8299322, 1.9383028]
      }
    ]
  })
};
</script>

<style>
.timeline {
  height: 100%;
  overflow-y: auto;
}
</style>
