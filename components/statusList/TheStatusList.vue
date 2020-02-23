<template>
  <div class="status-list--container" style="height: auto">
    <h2 class="mb30  mt30">Статус</h2>
    <Table :columns="statusListTitle" :data="dataJson">
      <template slot-scope="{ row }" slot="CounterID">
        <span>{{ row.CounterID }}</span>
      </template>
      <template slot-scope="{ row }" slot="Cameras">
        <span>{{ row.Cameras.length }}</span>
      </template>
      <template slot-scope="{ row }" slot="total">
        <span>{{ $_onTotalCount(row.Cameras) }}</span>
      </template>
    </Table>
    <Paginator @on-page-change="onPageChange"/>
  </div>
</template>

<script>
  import expandRow from '~/components/statusList/tableExpand';
  import Paginator from '~/components/paginator/Paginator';

  export default {
    name: "status-list",
    components: {
      expandRow,
      Paginator
    },
    data: function () {
      return {
        statusListTitle: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row.Cameras
                }
              })
            }
          },
          {
            title: 'Корпус',
            slot: 'CounterID',
            minWidth: 200
          },
          {
            title: 'Камер всего',
            slot: 'Cameras',
            minWidth: 200
          },
          {
            title: 'Всего',
            slot: 'total',
            minWidth: 200
          },
        ],
        //dataJson-тестовые данные, в дальнейшем передача иными путями (api или prorps...)
        dataJson: [
          {
            CounterID: 9,
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
              },
            ]
          },
          {
            CounterID: 7,
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
            CounterID: 8,
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
          }
        ]
      }
    },
    methods: {

      $_onTotalCount(row) {
        let result = row.reduce(function(sum, current) {
          return sum + current.EggCount;
        }, 0);
        return result;
      },

      onPageChange(offset, limit) {
        this.query.limit = limit;
        this.query.offset = offset;
        //вызов функции fetchlist
      },
    }
  }
</script>

<style lang="less">
  .ivu-table-overflowX {
    overflow-x: hidden;
  }
</style>
