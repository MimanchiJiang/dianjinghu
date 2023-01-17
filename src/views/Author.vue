<template>
    <div class="authorView">
        <div class="title">
            <span>成为作者</span>
        </div>
        <div class="content"></div>
    </div>
</template>
<style lang="scss" scoped>
@import '../style/style.scss';

.authorView {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 0 px(25);

    .title {
        height: px(73);
        border-bottom: 1px solid rgb(234, 234, 234);

        span {
            line-height: px(73);
            font-size: px(24);
            font-weight: 400;
            border-bottom: 1px solid $Oranges;
            padding-bottom: px(20);
            border-bottom: 1px solid $Oranges;
        }
    }

    .content {
        flex: 1;
    }
}
</style>