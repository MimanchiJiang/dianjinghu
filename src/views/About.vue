<template>
  <div class="aboutView">
    <div class="title">
      <span>关于电竞虎</span>
    </div>
    <div class="content">
    </div>
  </div>
</template>
<script>
export default {
  setup() { }
}
</script>
<style scoped lang="scss">
@import '../style/style.scss';

.aboutView {
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
