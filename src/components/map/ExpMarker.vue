<template>
  <l-marker :visible="visible" :icon="icon" :lat-lng="latLng">
    <l-popup :options="{ className: 'custom-popup dark', offset: [130, -25] }">
      <slot name="popup" />
    </l-popup>
  </l-marker>
</template>

<script>
import { icon } from "leaflet";
import { LPopup, LMarker } from "vue2-leaflet";

export default {
  name: "ExpMarker",
  components: { LPopup, LMarker },
  props: {
    visible: Boolean,
    latLng: Array
  },
  computed: {
    icon() {
      return icon({
        iconUrl: require(`@/assets/exp.png`),
        iconSize: 40,
        iconAnchor: [20, 20]
      });
    }
  }
};
</script>
