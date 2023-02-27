<template>
    <div class="content">
        <top-bar></top-bar>
        <div class="mainContent">
            <div class="layout">
                <router-link class="control" to="/doc/about">
                    <div class="layoutIcon ">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-kongzhi"></use>
                        </svg>
                    </div>
                    <div class="layoutTitle">设备页面</div>
                </router-link>
                <router-link class="history" to="/doc/history">
                    <div class="layoutIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-lishijilu"></use>
                        </svg>
                    </div>
                    <div class="layoutTitle">历史记录</div>
                </router-link>

            </div>
            <main><router-view></router-view></main>
        </div>
    </div>
</template>
<script>
import TopBar from '@/components/TopBar.vue'
export default {
    components: { TopBar }
}

</script>
<style lang="scss" scoped>
$leftNav: rgb(236, 201, 163, 0.5);
$rightBg: rgb(229, 227, 229);
$active: rgb(34, 70, 105);
$fontColor: rgb(62, 115, 158);

.content {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .mainContent {
        background-color: $leftNav;
        display: flex;
        width: 100vw;
        flex: 1;

        .layout {
            width: 200px;
            background-color: rgba(184, 175, 164, 0.5);
            display: flex;
            flex-direction: column;
            font-size: 17px;
            text-align: left;

            .control,
            .history {
                display: flex;
                align-items: center;
                border-right: 7px solid transparent;
            }

            .layoutTitle {
                height: 60px;
                line-height: 60px;
                color: $fontColor;

            }

            .icon {
                width: 25px;
                height: 25px;
                margin: 0 10px 0 20px;
                color: $fontColor;

            }


            .router-link-active {
                border-right: 7px solid $active;
                background-color: rgba(184, 175, 164, 0.7);

            }
        }

        main {
            flex: 1;
            background-color: $rightBg;

        }

    }
}
</style>