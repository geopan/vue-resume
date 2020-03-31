<template>
  <l-feature-group :visible="visible">
    <exp-marker :visible="visible" :latLng="experience.center" />
    <l-feature-group
      :visible="visible"
      v-for="(m, i) in experience.missions"
      :key="`m-${i}`"
    >
      <mission-marker :latLng="m.loc" :visible="visible" />
      <!-- <l-polyline :lat-lngs="[experience.center, m.loc]" /> -->
    </l-feature-group>

    <l-polyline />
  </l-feature-group>
</template>

<script>
import { LFeatureGroup, LPolyline } from "vue2-leaflet";
import ExpMarker from "./ExpMarker";
import MissionMarker from "./MissionMarker";

export default {
  name: "ExpLayer",
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    experience: {
      type: Object,
      default: () => ({
        missions: []
      })
    }
  },
  components: {
    LFeatureGroup,
    LPolyline,
    ExpMarker,
    MissionMarker
  }
};
</script>
