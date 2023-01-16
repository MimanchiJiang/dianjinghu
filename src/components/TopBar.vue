<template>
    <div class="TopBar">
        <div class="logo"></div>
        <div class="skew"></div>
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
                    <div class="mapList">
                        <ul class="main">
                            <li class="mainTitle">主站</li>
                            <li class="first"><a>电竞虎首页</a></li>
                            <li><a>游戏资讯</a></li>
                            <li><a>直播导航</a></li>
                            <li><a>游戏视频</a></li>
                            <li><a>热门主播</a></li>
                            <li><a>表情包图库</a></li>
                            <li><a>APP下载</a></li>
                        </ul>
                        <ul class="exportsGames">
                            <li class="exportsGamesTitle">电竞游戏</li>
                            <li class="first"><a href="">英雄联盟</a></li>
                            <li><a href="">守望先锋</a></li>
                            <li><a href="">绝地求生</a></li>
                            <li><a href="">炉石传说</a></li>
                            <li><a href="">魔兽世界</a></li>
                            <li><a href="">穿越火线</a></li>
                            <li><a href="">地下城与勇士</a></li>
                        </ul>
                        <ul class="mobileGames">
                            <li class="mobileGamesTitle">手机游戏</li>
                            <li class="first"> <a href="">球球大作战</a></li>
                            <li><a href="">皇室战争</a></li>
                            <li><a href="">王者荣耀</a></li>
                            <li><a href="">阴阳师</a></li>
                        </ul>
                    </div>

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

<style scoped lang="scss" >
@import url(../style/TopBar.scss);
</style>