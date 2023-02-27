<template>
  <div class="data-page">
    <div class="data">
      <div class="temp item">
        <el-card shadow="hover" class="box-card">
          <template #header>
            <div class="card-header">
              <span>温度</span>
              <el-button class="button" text>开/关灯</el-button>
            </div>
          </template>
          <div>数值:</div>
        </el-card>
      </div>
      <div class="humi item"> <el-card shadow="hover" class="box-card">
          <template #header>
            <div class="card-header">
              <span>湿度</span>
              <el-button class="button" text>开/关灯</el-button>
            </div>
          </template>
          <div>数值:</div>
        </el-card></div>
      <div class="gas item"> <el-card shadow="hover" class="box-card">
          <template #header>
            <div class="card-header">
              <span>气体</span>
              <el-button class="button" text>开/关灯</el-button>
            </div>
          </template>
          <div>数值:</div>
        </el-card></div>
      <div class="light item"> <el-card shadow="hover" class="box-card">
          <template #header>
            <div class="card-header">
              <span>光线</span>
              <el-button class="button" text>开/关灯</el-button>
            </div>
          </template>
          <div>数值:</div>
        </el-card></div>
    </div>
    <div class="echart">
      <div class="temp-humi-echart">
        <TempHumiEchart></TempHumiEchart>
      </div>
      <div class="gas-echart">
        <GasEchart></GasEchart>
      </div>
    </div>
  </div>
</template>
<script>
import TempHumiEchart from '@/components/TempHumiEchart.vue';
import GasEchart from '@/components/GasEchart.vue';
export default {
  components: { TempHumiEchart, GasEchart },
  setup() { }
}
</script>
<style scoped lang="scss">
.data-page {
  display: flex;
  height: 100%;
  flex-direction: column;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }



  .box-card {
    width: 200px;
  }

  .data {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30%;
    justify-content: center;
    align-items: center;

    .item {
      width: 20%;
    }

  }

  .echart {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .temp-humi-echart {
      background-color: white;
      border-radius: 5px;
      border: 1px solid white;
      padding: 20px;
      width: 45%;
      padding-right: 20px;
      margin-right: 20px;
      height: 80%;
    }

    .gas-echart {
      background-color: white;
      border-radius: 5px;
      border: 1px solid white;
      padding: 20px;
      width: 45%;
      height: 80%;


    }
  }

}
</style>
