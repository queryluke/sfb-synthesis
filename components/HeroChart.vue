<template>
  <radar-chart :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
export default {
  name: 'HeroCard',
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      labels: [
        'Attack',
        'Defense',
        'Movement',
        'Control',
        'Support'
      ]
    }
  },
  computed: {
    minMaxScores () {
      return this.$store.getters.minMaxScores
    },
    minMaxScoresByFacet () {
      return this.$store.getters.minMaxScoresByFacet
    },
    normalizedScores () {
      return ['attack', 'defense', 'movement', 'control', 'support'].map(i => Math.round(this.normalize(this.hero.facets[i], i)))
    },
    datasets () {
      console.log(this.hero.name, this.normalizedScores)
      return [
        {
          data: this.normalizedScores,
          // data: [6, 6, 10, 7, 7],
          fill: true,
          backgroundColor: 'rgba(244,81,30,0.55)',
          borderColor: '#F4511E',
          pointBackgroundColor: '#F4511E',
          pointBorderColor: '#1E1E1E',
          pointHoverBackgroundColor: '#1E1E1E',
          pointHoverBorderColor: '#F4511E'
        }
      ]
    },
    chartData () {
      return {
        datasets: this.datasets,
        labels: this.labels
      }
    },
    chartOptions () {
      return {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            angleLines: {
              color: '#5E35B1'
            },
            grid: {
              color: '#5E35B1'
            },
            pointLabels: {
              color: '#eee'
            },
            ticks: {
              display: false
            },
            max: 100,
            min: 0
          }
        }
      }
    }
  },
  methods: {
    normalize (score, facet) {
      return (score / this.minMaxScoresByFacet[facet].max) * 100
    }
  }
}
</script>
