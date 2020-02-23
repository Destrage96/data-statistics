<template>
  <div class="status-page--container">
    <Row>
      <Col>
        <TheStatusList/>
      </Col>
    </Row>
  </div>
</template>

<script>
  import TheStatusList from '~/components/statusList/TheStatusList';

export default {
  layout: 'basic',
  components: { TheStatusList },
}
</script>

