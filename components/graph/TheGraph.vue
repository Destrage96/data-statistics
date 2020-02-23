<template>
  <div class="graph--container">
    <h2 class="mb30 mt30">График</h2>

    <div v-if="graphCounter === false">
      <Button type="primary"
              @click="graphCounter = true"
              class="mb30">
        Данные корпусов
      </Button>
      <LineChart :chart-data="dataCamersa"/>
    </div>

    <div v-else>
      <Row type="flex"
           justify="space-between"
           class="mb30"
           style="width: 100%">
        <Col span="8">
          <Button type="primary" @click="graphCounter = false">
            Данные камер
          </Button>
        </Col>
        <Col span="16" class="d-flex justify-end">
          <TheCounterSelect class="mr10"/>

          <DatePicker type="daterange"
                      show-week-numbers
                      placement="bottom-end"
                      format="dd/MM/yyyy"
                      placeholder="Выберите дату"
                      v-model="dataRange"
                      style="width: 200px"/>
        </Col>
      </Row>

      <LineChart :chart-data="dataCounter"/>
    </div>
  </div>
</template>

<script>
  import LineChart from './LineChart';
  import TheCounterSelect from '~/components/counterSelect/TheCounterSelect';

  export default {
    components: {
      LineChart,
      TheCounterSelect
    },

    // mounted () {
    //   this.fillData()
    //   this.$_onDataCounter()
    // },

    data: function () {
      return {
        dataCamersa: {
          //labels-параметры по оси Х, построение оси У производится исходя из data в datasets
          labels: ['2019-07-16', '2019-07-20', '2019-07-23'],
          datasets: [
            {
              label: 'Камера 1',
              borderColor: '#f87979',
              backgroundColor: 'rgba(255,121,121,0)',
              data: [345, 36, 536,2352]
            },
            {
              label: 'Камера 2',
              borderColor: '#00f848',
              backgroundColor: 'rgba(255,121,121,0)',
              data: [425, 4352, 356, 2342, 325]
            },
            {
              label: 'Камера 3',
              borderColor: '#2e5ff8',
              backgroundColor: 'rgba(255,121,121,0)',
              data: [3452, 35, 124, 245]
            }
          ]
        },
        dataCounter: {
          labels: ['2019-07-16', '2019-07-20', '2019-07-23'],
          datasets: [
            {
              label: 'Корпус-7',
              borderColor: '#00eff8',
              backgroundColor: 'rgba(255,121,121,0)',
              data: [34634, 45747, 34646, 34826]
            },
            {
              label: 'Корпус-8',
              borderColor: '#f80a00',
              backgroundColor: 'rgba(255,121,121,0)',
              data: [45736, 45764, 23532, 34636]
            },
            {
              label: 'Корпус-9',
              borderColor: '#f2f801',
              backgroundColor: 'rgba(255,121,121,0)',
              data: [56857, 74373, 34367, 45747]
            },
          ]
        },
        graphCounter: false,
        dataRange: []
      }
    },

    methods: {
      fillData () {
        //функция для изменения данных графиков
      },
      $_onDataCounter() {

      }
    }
  }
</script>
