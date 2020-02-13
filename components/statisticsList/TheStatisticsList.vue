<template>
  <div class="statistics-list--container">
    <h2>Статистика</h2>
    <Table :columns="columns13" :data="data5" border/>
    <Paginator @on-page-change="onPageChange"/>
  </div>
</template>
<script>
  import Paginator from '~/components/paginator/Paginator';
  export default {
    name: "statistics-list",

    components: {Paginator},

    data: function () {
      return {
        columns13: [
          {
            title: 'Date',
            key: 'date',
            resizable: true,
            width: 180
          },
          {
            title: 'Name',
            key: 'name',
            resizable: true,
            width: 180
          },
          {
            title: 'Age',
            key: 'age',
            resizable: true,
            width: 180
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data5: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    methods: {
      onPageChange(offset, limit) {
        this.query.limit = limit;
        this.query.offset = offset;
        //вызов функции fetchlist
      },
    }
  }
</script>
