//компонент пагинации таблиц
<template>
    <div class="paginator--container" style="height: auto">
        <Row class="mb10 mt10 d-flex justify-end">
            <Col>
                <div class="d-flex justify-end">
                    <Page :current="page"
                          show-sizer
                          :page-size="25"
                          :page-size-opts="[10,15,25,50,100]"
                          @on-change="$_onChange"
                          @on-page-size-change="$_onPageSizeChange"/>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'paginator',

        data() {
            return {
                page: 1,
                limit: 25,
                offset: 0,
            };
        },
        methods: {
            /**
             * @param {number} page
             */
            $_onChange(page) {
                this.page = page;
                this.$_onPageChange()
            },

            $_onPageChange() {
                this.offset = (this.limit * this.page) - this.limit;
                this.$emit('on-page-change', this.offset, this.limit)
            },

            /**
             * @param {number} size
             */
            $_onPageSizeChange(size) {
                this.limit = size;
                if (this.page === 1) {
                    this.$_onPageChange()
                }
            }
        }
    }
</script>
