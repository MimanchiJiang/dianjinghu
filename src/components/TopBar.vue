<template>
    <div class="TopBar">
        <div class="logo"></div>
        <div class="TopBarList">
            <div class="TopBarListTop">
                <a
                    class="home">首页</a><a>英雄联盟</a><a>全球联盟视窗</a><a>王者荣耀</a><a>绝地求生</a><a>CSGO</a><a>守望先锋</a><a>炉石传说</a><a>穿越火线</a><a>地下城与勇士</a>
            </div>
            <div class="TopBarListBottom">
                <a href="" class="youxizixun">游戏资讯
                    <div class="Icon"></div>
                </a>

                <a href="" class="zhibodaohang">直播导航
                    <div class="Icon"></div>
                </a>
                <a href="" class="app">电竞虎APP
                    <div class="Icon"></div>
                </a>
                <div class="row"></div>

                <div class="map">网站地图
                    <div class="mapIcon"></div>
                </div>
                <input class="search" placeholder="搜索你想要的" />
                <div class="searchIcon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-search"></use>
                    </svg>
                </div>
                <button class="register">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    setup() {
    }

}

</script>

<style >
@import url(../style/TopBar.scss);
</style>