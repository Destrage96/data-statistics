<script>
  import { Line, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins;

  export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>

<style lang="less">
  canvas {
    min-width: 50vw !important;
    max-width: 70vw !important;
    height: 450px !important;
  }
</style>
