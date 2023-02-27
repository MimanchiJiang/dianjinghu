<template>
    <div id="TempHumiEchart" class="TempHumiEchart"></div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted, ref, onBeforeUnmount } from 'vue';

export default {
    setup() {
        onMounted(() => {
            TempHumiEcharts()
        })
        const TempHumiEcharts = () => {
            const chartDom = document.getElementById('TempHumiEchart');
            const TempHumiEchart = echarts.init(chartDom);
            // 指定图表的配置项和数据
            const option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            option && TempHumiEchart.setOption(option);
        }

    }
}
</script>
<style scoped>
.TempHumiEchart {
    width: 100%;
    height: 100%;
}
</style>