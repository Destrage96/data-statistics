<template>
  <div class="graph--container">
    <h2>График</h2>
      <LineChart :chart-data="dataCollection"/>
      <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    components: {
      LineChart
    },

    mounted () {
      this.fillData()
    },

    data: function () {
      return {
        dataCollection: {}
      }
    },

    methods: {
      fillData () {
        this.dataCollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>
