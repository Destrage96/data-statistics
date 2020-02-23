<template>
  <div class="statistics-list--container">
    <h2 class="mb30 mt30">Статистика</h2>
    <Row type="flex" :gutter="20" class="mb20 mt30">
      <Col>
        <DatePicker type="daterange"
                    show-week-numbers
                    placement="bottom-end"
                    format="dd/MM/yyyy"
                    placeholder="Выберите дату"
                    v-model="dataRange"
                    style="width: 200px"/>
      </Col>
      <Col>
        <TheCounterSelect :clearable="true"
                          @on-select="$_onSelectCounter"
                          :value="CounterSelect"
                          v-model="CounterSelect"/>
      </Col>
    </Row>
    <Table :columns="titles()" :data="dataJson" border>
      <template slot-scope="{ row }" slot="date">
        <span>{{ row.date }}</span>
      </template>
      <template slot-scope="{ row }" slot="EggCount">
        <span>{{$_onTotalCount(row) }}</span>
      </template>
    </Table>
    <Paginator @on-page-change="onPageChange"/>
  </div>
</template>
<script>
  import Paginator from '~/components/paginator/Paginator';
  import TheCounterSelect from '~/components/counterSelect/TheCounterSelect';
  export default {
    name: "statistics-list",

    components: {
      Paginator,
      TheCounterSelect
    },

    data: function () {
      return {
        dataRange: [],
        CounterSelect: 0,
        limit: 25,
        offset: 0,
        //dataJson-тестовые данные, в дальнейшем передача иными путями (api или prorps...)
        dataJson: [
          {
            date: '2019-07-14',
            Counter: [
              {
                id: 9,
                EggCount: 11179,
                Cameras: [
                  {
                    CameraID: 12,
                    CameraName: 3,
                    EggCount: 0,
                  },
                  {
                    CameraID: 13,
                    CameraName: 1,
                    EggCount: 1234,
                  },
                  {
                    CameraID: 14,
                    CameraName: 21,
                    EggCount: 5323,
                  },
                  {
                    CameraID: 15,
                    CameraName: 12,
                    EggCount: 4563,
                  },
                  {
                    CameraID: 16,
                    CameraName: 11,
                    EggCount: 56,
                  },
                  {
                    CameraID: 17,
                    CameraName: 5,
                    EggCount: 3,
                  }
                ]
              },
              {
                id: 7,
                EggCount: 7148,
                Cameras: [
                  {
                    CameraID: 1,
                    CameraName: 1,
                    EggCount: 34,
                  },
                  {
                    CameraID: 2,
                    CameraName: 45,
                    EggCount: 654,
                  },
                  {
                    CameraID: 4,
                    CameraName: 56,
                    EggCount: 5674,
                  },
                  {
                    CameraID: 7,
                    CameraName: 24,
                    EggCount: 786,
                  },
                ]
              },
              {
                id: 8,
                EggCount: 8552,
                Cameras: [
                  {
                    CameraID: 65,
                    CameraName: 345,
                    EggCount: 6743,
                  },
                  {
                    CameraID: 90,
                    CameraName: 124,
                    EggCount: 567,
                  },
                  {
                    CameraID: 543,
                    CameraName: 657,
                    EggCount: 7,
                  },
                  {
                    CameraID: 89,
                    CameraName: 675,
                    EggCount: 1235,
                  },
                ]
              },
            ],
          },
          {
            date: '2019-07-15',
            Counter: [
              {
                id: 9,
                EggCount: 4364,
                Cameras: [
                  {
                    CameraID: 12,
                    CameraName: 3,
                    EggCount: 234,
                  },
                  {
                    CameraID: 13,
                    CameraName: 1,
                    EggCount: 3452,
                  },
                  {
                    CameraID: 14,
                    CameraName: 21,
                    EggCount: 55,
                  },
                  {
                    CameraID: 15,
                    CameraName: 12,
                    EggCount: 456,
                  },
                  {
                    CameraID: 16,
                    CameraName: 11,
                    EggCount: 567,
                  },
                  {
                    CameraID: 17,
                    CameraName: 5,
                    EggCount: 56,
                  }
                ]
              },
              {
                id: 7,
                EggCount: 7148,
                Cameras: [
                  {
                    CameraID: 1,
                    CameraName: 1,
                    EggCount: 34,
                  },
                  {
                    CameraID: 2,
                    CameraName: 45,
                    EggCount: 654,
                  },
                  {
                    CameraID: 4,
                    CameraName: 56,
                    EggCount: 5674,
                  },
                  {
                    CameraID: 7,
                    CameraName: 24,
                    EggCount: 786,
                  },
                ]
              },
              {
                id: 8,
                EggCount: 4020,
                Cameras: [
                  {
                    CameraID: 65,
                    CameraName: 345,
                    EggCount: 3462,
                  },
                  {
                    CameraID: 90,
                    CameraName: 124,
                    EggCount: 456,
                  },
                  {
                    CameraID: 543,
                    CameraName: 657,
                    EggCount: 67,
                  },
                  {
                    CameraID: 89,
                    CameraName: 675,
                    EggCount: 35,
                  },
                ]
              }
            ]
          },
          {
            date: '2019-07-16',
            Counter: [
              {
                id: 9,
                EggCount: 10843,
                Cameras: [
                  {
                    CameraID: 12,
                    CameraName: 3,
                    EggCount: 4563,
                  },
                  {
                    CameraID: 13,
                    CameraName: 1,
                    EggCount: 456,
                  },
                  {
                    CameraID: 14,
                    CameraName: 21,
                    EggCount: 345,
                  },
                  {
                    CameraID: 15,
                    CameraName: 12,
                    EggCount: 675,
                  },
                  {
                    CameraID: 16,
                    CameraName: 11,
                    EggCount: 1241,
                  },
                  {
                    CameraID: 17,
                    CameraName: 5,
                    EggCount: 3563,
                  },

                ]
              },
              {
                id: 7,
                EggCount: 7148,
                Cameras: [
                  {
                    CameraID: 1,
                    CameraName: 1,
                    EggCount: 34,
                  },
                  {
                    CameraID: 2,
                    CameraName: 45,
                    EggCount: 654,
                  },
                  {
                    CameraID: 4,
                    CameraName: 56,
                    EggCount: 5674,
                  },
                  {
                    CameraID: 7,
                    CameraName: 24,
                    EggCount: 786,
                  },
                ]
              },
              {
                id: 8,
                EggCount: 1457,
                Cameras: [
                  {
                    CameraID: 65,
                    CameraName: 345,
                    EggCount: 67,
                  },
                  {
                    CameraID: 90,
                    CameraName: 124,
                    EggCount: 57,
                  },
                  {
                    CameraID: 543,
                    CameraName: 657,
                    EggCount: 753,
                  },
                  {
                    CameraID: 89,
                    CameraName: 675,
                    EggCount: 235,
                  },
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      //переход на страницы и выбор колличества отображаемых полей
      onPageChange(offset, limit) {
        this.limit = limit;
        this.offset = offset;
        //вызов функции fetchlist
      },


      //генерация заголовков таблицы
      titles: function () {
        let cols = [{
          title: 'Дата',
          slot: 'date',
          resizable: true,
          width: 180
        }];

        if(this.CounterSelect <= 0) {
          for(let item in this.dataJson[0].Counter) {
            let Count = this.dataJson[item].Counter[item];
            cols.push(
              {
                title: Count.id,
                slot: 'EggCount'
              }
            );
          }
        } else {
          for(let item in this.dataJson[0].Counter) {
            let Count = this.dataJson[0].Counter[item];
            if(Count.id === this.CounterSelect) {
              let Camera = this.dataJson[item].Counter[item].Cameras;
              for(let egg in Camera) {
                cols.push(
                  {
                    title: 'Камера - ' +Camera[egg].CameraName,
                    slot: 'EggCount'
                  }
                );
              }
            }
          }
        }

        return cols;
      },

      fetchList() {
        //Функция для запроса API
      },

      $_onTotalCount(row) {

      },

      $_onSelectCounter(q) {
        return this.CounterSelect = q;
      }
    }
  }
</script>
