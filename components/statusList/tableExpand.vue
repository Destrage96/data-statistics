<template>
  <div>
    <Row class="expand-row"
         type="flex"
         justify="end"
         :gutter="80"
         v-for="item in row"
         :key="item.CameraID">
      <Col class="d-flex justify-space-between" span="8">
        <span class="expand-value">Камера - {{ item.CameraName }}</span>
      </Col>
      <Col class="d-flex justify-start" span="8">
        <span class="expand-value">{{ item.EggCount }}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "table-expand",

        props: {
          row: {
            type: Array,
            default: []
          }
        }
    }
</script>

<style scoped>
  .expand-row{
    margin-bottom: 16px;
  }
</style>
