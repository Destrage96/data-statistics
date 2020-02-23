<template>
  <div class="graph-page--container">
    <Row>
      <Col span="12">
        <TheGraph/>
      </Col>
    </Row>
  </div>
</template>

<script>
  import TheGraph from '~/components/graph/TheGraph';

export default {
  layout: 'basic',
  components: { TheGraph }
}
</script>
