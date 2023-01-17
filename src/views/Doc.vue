<template>
    <div class="mainContent">
        <div class="layout">
            <router-link to="/doc/about">
                <div class="layoutIcon layoutIcon-1"></div>
                <div class="layoutTitle">关于电竞虎</div>
            </router-link>
            <router-link to="/doc/work">
                <div class="layoutIcon layoutIcon-2"></div>
                <div class="layoutTitle">来电竞虎工作</div>
            </router-link>
            <router-link to="/doc/author">
                <span class="layoutIcon layoutIcon-3"></span>
                <div class="layoutTitle">成为作者</div>
            </router-link>
            <router-link to="/doc/contact">
                <span class="layoutIcon layoutIcon-4"></span>
                <div class="layoutTitle">联系我们</div>
            </router-link>
            <router-link to="/doc/webmap">
                <span class="layoutIcon layoutIcon-5"></span>
                <div class="layoutTitle">网站地图</div>
            </router-link>
        </div>

        <main><router-view></router-view></main>
    </div>

</template>
<script>
export default {

}

</script>
<style lang="scss" scoped>
@import '../style/style.scss';

@function px($n) {
    @return $n / 1920 * 100rem;
}

.mainContent {
    border: 2px solid rgb(225, 225, 225);
    background-color: rgb(247, 247, 247);
    margin: 0 auto;
    margin-top: px(170);
    min-height: 100vh;
    width: px(1000);
    display: flex;

    .layout {
        width: px(215);
        flex-shrink: 0;
        background-color: rgb(239, 239, 239);
        display: flex;
        flex-direction: column;
        font-size: px(17);
        text-align: left;

        .layoutTitle {
            height: px(60);
            line-height: px(60);
        }

        .layoutIcon {
            width: px(60);
            height: px(54);
            line-height: px(60);
            float: left;
            border: 1px solid red;
        }

        .layoutIcon-1 {
            background: url(../assets/home.png) no-repeat center;

        }

        .layoutIcon-2 {
            background: url(../assets/work.png) no-repeat center;

        }

        .layoutIcon-3 {
            background: url(../assets/author.png) no-repeat center;

        }

        .layoutIcon-4 {
            background: url(../assets/contact.png) no-repeat center;

        }

        .layoutIcon-5 {
            background: url(../assets/map.png) no-repeat center;

        }

        .router-link-active {
            background-color: white;
            border-left: px(4) solid rgb(241, 142, 0);
        }
    }

    main {
        flex: 1;
        background-color: white;
    }

}
</style>