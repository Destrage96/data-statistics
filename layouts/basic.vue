<template>
  <div class="layout--container">
    <Header>
      <Menu mode="horizontal"
            theme="dark"
            :active-name="active"
            @on-select="$_onSelect" >
        <div class="layout-nav d-flex justify-end">
          <MenuItem name="status">
            Статус
          </MenuItem>
          <MenuItem name="graph">
            График
          </MenuItem>
          <MenuItem name="statistics">
            Статистика
          </MenuItem>
          <MenuItem name="logout" style="color: black">
            Выход
          </MenuItem>
        </div>
      </Menu>
    </Header>
    <Layout style="min-height: 100%">
      <Content class="content">
        <nuxt/>
      </Content>
      <Footer :style="{padding: 0}" class="footer">
        <div class="bottom-panel">
          <Row type="flex" justify="center">
            <Col span="24" class="d-flex justify-center">
              <span style="font-size: 10px; color: #47494e">&copy; 2018 - {{year}}, ООО «Зубарев-Техника»</span>
            </Col>
          </Row>
        </div>
      </Footer>
    </Layout>
  </div>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    middleware: 'redirect',
    data() {
      return {
        bcolor: {
          backgroundColor: '#fff'
        }
      };
    },

    computed: {
      year() {
        return new Date().getFullYear();
      },
      active() {
        let p = this.$route.name.replace(/(___[aA-zZ]{2})$/, '').split('-');
        return p[0];
      },
    },
    methods: {
      ...mapMutations('auth', ['LOGOUT']),

      $_onSelect: function (name) {
        if(name !== 'logout') {
          this.$router.push(name);
        } else {
          this.LOGOUT();
          this.$router.push({name: 'login'});
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~assets/css/main.less';

  .layout--container {
    height: 100vh;
    border: 1px solid #d7dde4;
    background-color: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-y: auto;
    overflow-x: hidden !important;

    .ivu-layout-header {
      background-color: @color-blue;
      .ivu-menu-dark {
        background:  @color-blue;
        .ivu-menu-horizontal {
          .ivu-menu-item {
            font-weight: 600 !important;
          }
        }
      }
    }

    .layout-logo{
      width: 65px;
      float: left;
      position: relative;
      top: 0;
      left: 20px;
      z-index: 2000;
    }

    .content {
      margin: 0 0 20px;
      min-width: 500px;
      background-color: fade(@color-cyan, 5%);
    }

    .layout-footer-center{
      text-align: center;
    }

    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      vertical-align: center;
      height: 20px;
    }
  }
</style>
