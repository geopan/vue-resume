<template>
  <v-row>
    <v-col cols="5">
      {{ offsetTop }}
      <v-container fluid class="timeline" id="timeline">
        <timeline
          :experiences="experiences"
          v-scroll:#timeline="onScroll"
          @selectExp="selectExp"
        />
      </v-container>
    </v-col>
    <v-col cols="7">
      <the-map
        :selectedExp="selectedExp"
        :experiences="experiences"
        class="mapview"
      />
    </v-col>
  </v-row>
</template>

<script>
import TheMap from "@/components/map/TheMap";
import Timeline from "@/components/timeline/Timeline";

export default {
  name: "Experiences",
  components: { TheMap, Timeline },
  props: {
    display: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    experiences: [
      {
        company: "DroneShield",
        role: "Team Lead Software Engineering",
        start: new Date("2019-08-01"),
        end: new Date(),
        summary: "Global leader in counterdrone solutions",
        center: [-33.8732279, 151.2077566]
      },
      {
        company: "DroneShield",
        role: "Senior Software Engineering",
        start: new Date("2018-06-01"),
        end: new Date("2019-08-01"),
        center: [-33.8732279, 151.2077566],
        mission: [{ loc: [] }]
      },
      {
        company: "HomeTrack",
        role: "Senior Application Developer",
        date: new Date("2017-06-01"),
        end: new Date("2018-06-01"),
        summary:
          "Design and development of property valuation and risk assessment solutions using microservices written in Node.js with RabbitMQ message broker. TDD approach. DevOps with Jenkins, Vagrant, Docker. Deployment to AW",
        center: [-33.8676606, 151.2076709]
      },
      {
        company: "Vocus",
        role: "GIS Manager",
        start: new Date("2013-11-01"),
        end: new Date("2018-06-01"),
        summary:
          "My responsibilities were to manage, design, develop and keep Vocus GIS up-to-date, available to the rest of the company and to continually improve it. This means developing solutions with my team to support Fibre Operations with data, tools, applications, analyses and APIs to keep GIS interconnected with others systems.",
        center: [-33.8391957, 151.2042808],
        missions: [
          { loc: [-32.0397559, 115.6813467], name: "Perth" },
          { loc: [-37.9716913, 144.7722849], name: "Melbourne" }
        ]
      },
      {
        company: "Vocus",
        role: "GIS Developer",
        date: new Date("2012-09-01"),
        end: new Date("2013-11-01"),
        summary:
          "Vocus Communications is one of the fastest growing telcos in Australia and New Zealand. Vocus owns and operates a telecommunications network that spans Australia, New Zealand, Singapore, Hong Kong and the USA.",
        center: [-33.8391957, 151.2042808]
      },
      {
        company: "IRD",
        role: "GIS Developer",
        start: new Date("2011-02-01"),
        end: new Date("2011-09-01"),
        summary:
          "The “Institut de recherche pour le développement” (IRD ; Institute of research for development) is a French public science and technology research institute. It conducts scientific programs contributing to the sustainable development of the countries of the South, with an emphasis on the relationship between man and the environment.",
        center: [43.5611567, 1.4760998]
      },
      {
        company: "Jean Jaures University",
        logo: "jean-jaures.png",
        role: "Master's Degree, GIS",
        start: new Date("2010-09-01"),
        end: new Date("2011-06-01"),
        summary: "",
        center: [43.5791382, 1.400941]
      },
      {
        company: "Paul Valery University",
        logo: "paul-valery.png",
        role: "Bachelor's Degree, GIS",
        start: new Date("2009-09-01"),
        end: new Date("2010-06-01"),
        summary: "",
        center: [43.632442, 3.8702447]
      },
      {
        company: "BRGM",
        logo: "brgm.png",
        role: "GIS Analyst",
        start: new Date("2007-11-01"),
        end: new Date("2009-08-01"),
        summary:
          "The BRGM is France's leading public institution in Earth science applications for the management of surface and subsurface resources and risks. It provides the French geological survey.",
        center: [47.8299322, 1.9383028]
      },
      {
        company: "Via Domitia University",
        logo: "via-domitia.png",
        role: "Advanced Diploma, GIS",
        start: new Date("2007-09-01"),
        end: new Date("2008-06-01"),
        summary: "",
        center: [43.1889087, 2.3408705]
      },
      {
        company: "Jean Jaures University",
        logo: "jean-jaures.png",
        role: "Diploma of Geography",
        start: new Date("2005-09-01"),
        end: new Date("2007-06-01"),
        summary: "",
        center: [43.5791382, 1.400941]
      }
    ],
    offsetTop: 0,
    selectedExp: 0
  }),
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
      this.selectExp(parseInt(e.target.scrollTop / 200));
    },
    selectExp(id) {
      this.selectedExp = id;
    }
  }
};
</script>

<style>
.timeline {
  max-height: calc(60vh - 100px);
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.infinite-scroll {
  min-height: "2280px";
  display: flex;
  /* overflow-y: auto; */
}

.mapview {
  z-index: 1;

  /* max-height: calc(100vh - 100px); */
  /* height: auto; */

  /* min-height: 20%; */
  /* position: absolute; */
  /* left: 0px;
  right: 0px;
  margin: 0px;
  top: 0px;
  bottom: 0px; */
}
</style>
