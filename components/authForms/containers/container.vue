<template>
    <div class="container">
        <div class="header">
            <div class="title">Data-statistics -
                <slot name="title"></slot>
            </div>
        </div>
        <div class="container-form">
            <slot name="form"></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '~assets/css/main';

    div.container {
        padding: 0;
        width: 100%;
        background: #f5f7f9;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

        div.header {
            display: flex;
            margin-top: 30px;
            padding: 15px 30px;
            width: 100%;
            height: auto;
            justify-content: center;
            font-weight: bold;
            font-size: 22px;
            color: @color-blue;
        }

        div.container-form {
            padding: 25px 20px;
        }
    }

    @media @mobile {
        div.container {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;

            div.header {
                font-size: 18px;
            }

            div.container-form {
                padding: 15px 15px;
            }
        }
    }
</style>
