<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown" align-top>
    <v-timeline-item class="mb-6" hide-dot>
      <span>TODAY</span>
    </v-timeline-item>
    <v-timeline-item v-for="(ex, i) in experiences" :key="`ex-${i}`">
      <template v-slot:icon>
        <v-avatar>
          <img :src="getAvatar(ex.company)" />
        </v-avatar>
      </template>
      <div>
        <experience-card v-bind="ex" />
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import ExperienceCard from "./ExperienceCard";

// interface Experience {
//   time: string;
//   company: string;
//   role: string;
// }

export default {
  name: "Timeline",
  components: { ExperienceCard },
  props: {
    experiences: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getAvatar(company) {
      return require(`@/assets/company/${company.toLowerCase()}.png`);
    }
  }
};
</script>
