<template>
  <v-card tile elevation="0" :height="400">
    <v-card-title class="pt-0">{{ company }}</v-card-title>
    <v-card-subtitle>{{ role }}</v-card-subtitle>
    <v-card-text>{{ formatDate(start) }} - {{ formatDate(end) }}</v-card-text>
    <v-card-text class="pt-0">{{ summary }}</v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";

export default {
  name: "ExperienceCard",
  props: {
    company: String,
    role: String,
    start: Date,
    end: Date,
    summary: String
  },
  computed: {
    duration() {
      return moment(this.start).diff(this.end, "years") || 1;
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMM YYYY");
    }
  }
};
</script>
