<template>
    <div class="main">
        <div class="layout">
            <div>
                <router-link to="/doc/about">1111111111111关于电竞虎</router-link>
            </div>
            <div>
                <router-link to="/doc/work">来电竞虎工作</router-link>
            </div>
            <div>
                <router-link to="/doc/author">成为作者</router-link>
            </div>
            <div>
                <router-link to="/doc/contact">联系我们</router-link>
            </div>
            <div>
                <router-link to="/doc/webmap">网站地图</router-link>
            </div>
        </div>

        <main><router-view></router-view></main>
    </div>

</template>
<script>
export default {

}

</script>
<style lang="scss" scoped>
@import url(../style/Doc.scss);

@function px($n) {
    @return $n / 1920 * 100rem;
}

.main {
    background-color: rgb(247, 247, 247);
    margin: 0 auto;
    margin-left: px(430);
    margin-top: px(70);

    .layout {
        width: px(215);
        height: 100%;
        flex-shrink: 0;
    }

}
</style>