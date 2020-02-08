<template>
  <div class="layout--container">
    <Layout style="min-height: 100%">
      <Sider ref="leftSlider" hide-trigger width="230"
             class="slider" collapsible
             :collapsed-width="78" v-model="isCollapsed">

        <div :class="isCollapsed ? 'logo-collapsed' : 'slider-logo'">
          <img src="~assets/images/logo.svg" alt="logo">
        </div>


        <Divider style="margin-top: 0" />

        <Menu :active-name="active"
              theme="dark" width="auto"
              @on-select="$_onSelect"
              :class="menuitemClasses">
          <MenuItem name="/">
            <i>
              <font-awesome-icon fas icon="home"/>
            </i>
            <span>Главная</span>
          </MenuItem>
          <MenuItem name="graph">
            <i>
              <font-awesome-icon fas icon="chart-line"/>
            </i>
            <span>График</span>
          </MenuItem>
          <MenuItem name="status">
            <i>
              <font-awesome-icon fas icon="info-circle"/>
            </i>
            <span>Статус</span>
          </MenuItem>
          <MenuItem name="statistics">
            <i>
              <font-awesome-icon fas icon="chart-pie"/>
            </i>
            <span>Статистика</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0'}" type="md-menu" size="24"/>
        </Header>
        <Content class="content">
          <nuxt/>
        </Content>
        <Footer :style="{padding: 0}" class="footer">
          <div class="bottom-panel">
            <Row type="flex" justify="space-between">
              <Col span="24" class="d-flex justify-end items-align-center">
                <span style="font-size: 10px; color: #47494e">&copy; 2018 - {{year}}, ООО «Зубарев-Техника»</span>
              </Col>
            </Row>
          </div>
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapsed: false
      }
    },
    computed: {
      active() {
        let p = this.$route.name.replace(/(___[aA-zZ]{2})$/, '').split('-');
        return p[0];
      },
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },

      year() {
        return new Date().getFullYear();
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.leftSlider.toggleCollapse();
      },
      $_onSelect: function (name) {
        this.$router.push(name);
      },
    }
  }
</script>

<style lang="less">
  @import '~assets/css/main.less';

  .layout--container {
    height: 100%;

    .ivu-layout-sider {
      .slider-logo {
        margin-top: 10px;
        text-align: center;
        display: block;
        margin-bottom: 10px;

        img {
          transition: width .2s ease .2s, height .2s ease .2s;
          height: 95px;
        }
      }

      .logo-collapsed {
        margin-top: 7px;
        text-align: center;
        display: block;
        margin-bottom: 7px;

        img {
          transition: width .2s ease, height .2s ease;
          width: 45px;
        }
      }

      .ivu-menu {
        &-item {
          font-size: 16px;
          margin-top: 10px;
          display: flex;
          padding: 20px 20px;
          align-items: center;

          i {
            margin-right: 10px;
          }
        }

        &-item-selected {
          color: #FFFFFF !important;
        }
      }


      .collapsed-menu {
        span {
          width: 0 !important;
          transition: width .2s ease !important;
          display: none;
        }

        i {
          transform: translateX(5px) !important;
          transition: font-size .2s ease .2s, transform .2s ease .2s !important;
          vertical-align: middle !important;
          font-size: 22px !important;
        }

      }

      .menu {
        background-color: @color-fade-cyan;
        span {
          display: inline-block;
          overflow: hidden;
          width: 160px;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: bottom;
          transition: width .2s ease .2s;
          margin-left: 15px;
        }

        i {
          transform: translateX(0px);
          transition: font-size .2s ease, transform .2s ease;
          vertical-align: middle;
          font-size: 16px;
        }
      }
    }

    .ivu-layout {
      &-header {
        background: #fff;
        padding: 0 30px;
        box-shadow: 0 0 5px rgba(86, 96, 117, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .top-panel {
          width: 100%;
          flex-flow: row wrap;
          padding: 0 15px;
        }
      }

      &-footer {
        background: #fff;
        box-shadow: 0 0 5px rgba(86, 96, 117, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .bottom-panel {
          width: 100%;
          padding: 10px 15px;
          flex-flow: row wrap;

          .lang-switcher {
            display: flex;
            -webkit-box-pack: end;
            justify-content: flex-end;
          }
        }
      }

      &-content {
        background-color: fade(@color-fade-cyan, 10%);
        margin: 20px 15px;
        padding: 15px 20px;
      }
    }
  }

  .rotate-icon{
    transform: rotate(-90deg);
  }
</style>
