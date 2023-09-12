<template>
	<div class="charts">
		<!-- <div id="chart"></div> -->
		<div id="myEChartsBar"></div>
		<div id="myEChartsBand"></div>
		<div id="myEChartsAniLine"></div>
		<div id="myEChartsCustomPie"></div>
    <div id="myEChartsBarToMap"></div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { cellVolHis, cellTempHis } from '@/api/charts';

	const eCharts = ref(getCurrentInstance()?.appContext.config.globalProperties.$echarts);

	const timer1 = ref(0); // charts 刷新 

	onMounted(() => {
		console.log('this is charts', eCharts.value);
		getCellHis();
		showColumnCharts();
		showBandLineCharts();
		showAniLineCharts();
		showCustomPieCharts();
	});

	onBeforeUnmount(() => {
		console.log('charts clear');
		clearInterval(timer1.value);
	});

	const getCellHis = async () => {
		let resVol = await cellVolHis('000016');
		let resTemp = await cellTempHis('000016');
		console.log('cell', resVol, resTemp);
	};

	// 列表
	const showColumnCharts = () => {
		const myColumnECharts = eCharts.value.init(document.getElementById('myEChartsBar'), null, {
			renderer: 'svg',
		});
		const columnRun = () => {
			let option = {
				xAxis: {
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
				yAxis: {},
				series: [
					{
						type: 'bar',
						data: [
							Math.random() * 100,
							Math.random() * 100,
							Math.random() * 100,
							Math.random() * 100,
							Math.random() * 100,
							Math.random() * 100,
							Math.random() * 100,
						],
					},
				],
			};
			myColumnECharts.setOption(option);
		};
		// 首次渲染
		setTimeout(() => {
			columnRun();
		}, 0);
		timer1.value = setInterval(() => {
			columnRun();
		}, 2000);
		// 根据页面大小
		window.addEventListener('resize', function () {
			myColumnECharts.resize();
		});
	};

	// band line charts
	const showBandLineCharts = () => {
		const myBandECharts = eCharts.value.init(document.getElementById('myEChartsBand'), null, {
			renderer: 'canvas',
		});
		const optionBand = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow',
				},
			},
			legend: {},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true,
			},
			xAxis: [
				{
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
			],
			yAxis: [
				{
					type: 'value',
				},
			],
			series: [
				{
					name: 'Direct',
					type: 'bar',
					emphasis: {
						focus: 'series',
					},
					data: [320, 332, 301, 334, 390, 330, 320],
				},
				{
					name: 'Email',
					type: 'bar',
					stack: 'Ad',
					emphasis: {
						focus: 'series',
					},
					data: [120, 132, 101, 134, 90, 230, 210],
				},
				{
					name: 'Union Ads',
					type: 'bar',
					stack: 'Ad',
					emphasis: {
						focus: 'series',
					},
					data: [220, 182, 191, 234, 290, 330, 310],
				},
				{
					name: 'Video Ads',
					type: 'bar',
					stack: 'Ad',
					emphasis: {
						focus: 'series',
					},
					data: [150, 232, 201, 154, 190, 330, 410],
				},
				{
					name: 'Search Engine',
					type: 'bar',
					data: [862, 1018, 964, 1026, 1679, 1600, 1570],
					emphasis: {
						focus: 'series',
					},
					markLine: {
						lineStyle: {
							type: 'dashed',
						},
						data: [[{ type: 'min' }, { type: 'max' }]],
					},
				},
				{
					name: 'Baidu',
					type: 'bar',
					barWidth: 5,
					stack: 'Search Engine',
					emphasis: {
						focus: 'series',
					},
					data: [620, 732, 701, 734, 1090, 1130, 1120],
				},
				{
					name: 'Google',
					type: 'bar',
					stack: 'Search Engine',
					emphasis: {
						focus: 'series',
					},
					data: [120, 132, 101, 134, 290, 230, 220],
				},
				{
					name: 'Bing',
					type: 'bar',
					stack: 'Search Engine',
					emphasis: {
						focus: 'series',
					},
					data: [60, 72, 71, 74, 190, 130, 110],
				},
				{
					name: 'Others',
					type: 'bar',
					stack: 'Search Engine',
					emphasis: {
						focus: 'series',
					},
					data: [62, 82, 91, 84, 109, 110, 120],
				},
			],
		};

		myBandECharts.setOption(optionBand);
		// 根据页面大小
		window.addEventListener('resize', function () {
			myBandECharts.resize();
		});
	};

	// ani line charts
	const showAniLineCharts = () => {
		const myAniLineECharts = eCharts.value.init(document.getElementById('myEChartsAniLine'), null, {
			renderer: 'canvas',
		});
		const data: number[] = [];
		for (let i = 0; i < 5; ++i) {
			data.push(Math.round(Math.random() * 200));
		}

		let optionAniLine = {
			xAxis: {
				max: 'dataMax',
			},
			yAxis: {
				type: 'category',
				data: ['A', 'B', 'C', 'D', 'E'],
				inverse: true,
				animationDuration: 300,
				animationDurationUpdate: 300,
				max: 2, // only the largest 3 bars will be displayed
			},
			series: [
				{
					realtimeSort: true,
					name: 'X',
					type: 'bar',
					data: data,
					label: {
						show: true,
						position: 'right',
						valueAnimation: true,
					},
				},
			],
			legend: {
				show: true,
			},
			animationDuration: 0,
			animationDurationUpdate: 3000,
			animationEasing: 'linear',
			animationEasingUpdate: 'linear',
		};

		function run() {
			for (var i = 0; i < data.length; ++i) {
				if (Math.random() > 0.9) {
					data[i] += Math.round(Math.random() * 2000);
				} else {
					data[i] += Math.round(Math.random() * 200);
				}
			}

			myAniLineECharts.setOption(optionAniLine);
		}

		// 首次加载
		setTimeout(function () {
			run();
		}, 0);
		setInterval(function () {
			run();
		}, 3000);
	};

	// custom pie charts
	const showCustomPieCharts = () => {
		const myAniLineECharts = eCharts.value.init(
			document.getElementById('myEChartsCustomPie'),
			null,
			{
				renderer: 'canvas',
			}
		);

		let optionCustomPie = {
			backgroundColor: '#2c343c',
			title: {
				text: 'Customized Pie',
				left: 'center',
				top: 20,
				textStyle: {
					color: '#ccc',
				},
			},
			tooltip: {
				trigger: 'item',
			},
			visualMap: {
				show: false,
				min: 80,
				max: 600,
				inRange: {
					colorLightness: [0, 1],
				},
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: '55%',
					center: ['50%', '50%'],
					data: [
						{ value: 335, name: 'Direct' },
						{ value: 310, name: 'Email' },
						{ value: 274, name: 'Union Ads' },
						{ value: 235, name: 'Video Ads' },
						{ value: 400, name: 'Search Engine' },
					].sort(function (a, b) {
						return a.value - b.value;
					}),
					roseType: 'radius',
					label: {
						color: 'rgba(255, 255, 255, 0.3)',
					},
					labelLine: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.3)',
						},
						smooth: 0.2,
						length: 10,
						length2: 20,
					},
					itemStyle: {
						color: '#c23531',
						shadowBlur: 200,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
					},
					animationType: 'scale',
					animationEasing: 'elasticOut',
					animationDelay: function (idx) {
						return Math.random() * 200;
					},
				},
			],
		};

		myAniLineECharts.setOption(optionCustomPie);
	};

  const showBarToMapCharts = () => {
    const myBarToMapECharts = eCharts.value.init(document.getElementById('myEChartsBarToMap'))

    // 移动map
    
    
    const optionBarToMap = {

    }
    myBarToMapECharts.setOption(optionBarToMap)
  }
</script>

<style lang="scss" scoped>
	.charts {
		display: flex;

		div {
			width: 500px;
			height: 300px;
		}
	}
</style>
