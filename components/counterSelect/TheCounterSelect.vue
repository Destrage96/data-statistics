<template>
  <div class="TheCounterSelect--container">
    <Select style="width:200px"
            :value="value"
            @on-change="$_onChange"
            :clearable="clearable"
            placeholder="Выберите корпус">
      <Option
        v-for="item in CounterList"
        :value="item.value"
        :key="item.value">
        {{ item.label }}
      </Option>
    </Select>
  </div>
</template>

<script>
  export default {
    name: "TheCounterSelect",
    props: {
      value: {
        type: Number
      },
      clearable: {
        type: Boolean,
        default: false
      }
    },

    model: {
      prop: 'value',
      event: 'on-select',
    },

    computed: {
      CounterList: function () {
        return [
          {
            value: 7,
            label: 'Корпус-7'
          },
          {
            value: 8,
            label: 'Корпус-8'
          },
          {
            value: 9,
            label: 'Корпус-9'
          }
        ]
      }
    },

    methods: {
      $_onChange(id) {
        this.$emit('on-select', id);
      }
    }
  }
</script>
