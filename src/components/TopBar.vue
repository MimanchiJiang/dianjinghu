<template>
    <div class="TopBar">
        <svg class="icon" aria-hidden="true" @click="goHome">
            <use xlink:href="#icon-shouye"></use>
        </svg>
        <div class="title">家居环境监测系统</div>
    </div>
</template>
<script>
import router from '@/router';

export default {
    setup() {
        const goHome = () => {
            router.push({
                path: '/login'
            })
        }
        return {
            goHome
        }
    }

}

</script>

<style scoped lang="scss" >
.TopBar {
    height: 50px;
    background: rgb(62, 115, 158, 0.9);
    display: flex;
    align-items: center;

    .title {
        color: white;
        margin-left: 20px;
        font-size: 20px;
    }

    .icon {
        color: white;
        width: 30px;
        height: 30px;
        margin-left: 20px;
    }
}
</style>