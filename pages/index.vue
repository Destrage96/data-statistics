<template>
  <div class="container">
    <Tabs value="status">
      <TabPane label="Статус" name="status">
        <Row>
          <Col>
            <TheStatusList/>
          </Col>
        </Row>
      </TabPane>
      <TabPane label="График" name="graph">
        <Row>
          <Col span="8" style="height: 400px">
            <TheGraph/>
          </Col>
        </Row>
      </TabPane>
      <TabPane label="Статистика" name="statistics">
        <Row>
          <Col>
            <TheStatisticsList/>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import TheStatusList from '~/components/statusList/TheStatusList';
  import TheGraph from '~/components/graph/TheGraph';
  import TheStatisticsList from '~/components/statisticsList/TheStatisticsList';

export default {
  components: {
    TheStatusList,
    TheGraph,
    TheStatisticsList
  }
}
</script>

<style lang="less">
  @import '~assets/css/main.less';

  .container {
    .ivu-tabs-nav-scroll {
      width: 100%;
      margin-bottom: 30px;
      height: 48px;
      background-color: @color-cyan;
      color: #FFFFFF;
      font-weight: bold;
    }

    .ivu-tabs-nav {
      margin-right: 40px;
      float: right;
      .ivu-tabs-tab:hover {
        color:  @color-yellow;
      }
    }

    .ivu-tabs-tabpane {
      padding: 0 20px;
    }
  }
</style>

