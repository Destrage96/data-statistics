<template>
    <Form ref="loginForm" :rules="formRules" :model="formModel" autocomplete="on">
        <Row type="flex" :gutter="15">
            <Col span="24">
                <Form-item prop="email">
                    <Input v-model.trim="formModel.email" clearable :disabled="loading"
                           placeholder="Логин"/>
                </Form-item>
            </Col>
        </Row>

        <Row type="flex" :gutter="15">
            <Col span="24">
                <Form-item prop="password">
                    <Input v-model="formModel.password" type="password" password :disabled="loading"
                           placeholder="Пароль" @keyup.native.enter="submitForm()"/>
                </Form-item>
            </Col>
        </Row>

        <Row type="flex">
            <Col span="12">
              <FormItem prop="checked">
                <Checkbox v-model="formModel.remember">Запомнить меня</Checkbox>
              </FormItem>
            </Col>
        </Row>

        <Row style="margin-top: 30px" type="flex" justify="center">
            <Col>
                <Button class="big-button" type="primary" :loading="loading" :disabled="loading"
                        @click="submitForm()"
                        @keyup.native.enter="submitForm()">Войти
                </Button>
            </Col>
        </Row>
    </Form>
</template>

<script>

    export default {
        name: 'login-form',

        data: function() {
            return {
                loading: false,
                formModel: {
                    login: '',
                    password: '',
                    remember: true,
                },

                formRules: {
                    password: [
                      {
                        required: true, validator: function(rule, value, callback) {
                          let errors = [];
                          if (!value || value === 0) {
                            errors.push('Пароль должен быть указан');
                          } else if (value.length > 4 && value !== 'Test') {
                            errors.push('Не правильный пароль');
                          }
                          callback(errors);
                        }, trigger: 'change',
                      },
                    ],
                    email: [
                      {
                        required: true, validator: function(rule, value, callback) {
                          let errors = [];
                          if (!value || value === 0) {
                            errors.push('Логин должен быть указан');
                          } else if (value.length > 4 && value !== 'Test') {
                            errors.push('Не верный логин');
                          }
                          callback(errors);
                        }, trigger: 'change',
                      },
                    ],
                },
            };
        },

        methods: {
            submitForm() {
              this.$refs['loginForm'].validate(async (valid) => {
                if (valid) {
                  await this.login();
                }
              });
            },

            async login() {
              this.loading = true;
              try {
                await this.$store.dispatch('auth/LOGIN', {
                  data: {
                    'password': this.formModel.password,
                    'identifier': this.formModel.login,
                  },
                  persist: this.formModel.remember
                });
                await this.$router.push({path: '/'});
              } catch (e) {
                throw e;
              } finally {
                this.loading = false;
              }
            },
        },
    };
</script>
