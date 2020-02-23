<template>
  <div class="statistics-page--container">
    <Row>
      <Col>
        <TheStatisticsList/>
      </Col>
    </Row>
  </div>
</template>

<script>
  import TheStatisticsList from '~/components/statisticsList/TheStatisticsList';

export default {
  layout: 'basic',
  components: {  TheStatisticsList }
}
</script>
