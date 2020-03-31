<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown" align-top>
    <v-timeline-item class="mb-6" hide-dot>
      <span>TODAY</span>
    </v-timeline-item>
    <v-timeline-item v-for="(ex, id) in experiences" :key="`ex-${id}`">
      <template v-slot:icon>
        <v-avatar>
          <img :src="getAvatar(ex)" />
        </v-avatar>
      </template>
      <div>
        <experience-card v-bind="{ ...ex, id }" @selectExp="selectExp" />
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import ExperienceCard from "./ExperienceCard";

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
    getAvatar(ex) {
      const { company, logo } = ex;
      return require(`@/assets/company/${
        logo ? logo : company.toLowerCase() + ".png"
      }`);
    },
    selectExp(id) {
      this.$emit("selectExp", id);
    }
  }
};
</script>
