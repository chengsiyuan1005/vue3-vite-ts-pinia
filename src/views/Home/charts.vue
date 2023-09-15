<template>
	<div class="charts">
		<!-- <div id="chart"></div> -->
		<div id="myEChartsBar"></div>
		<div id="myEChartsBand"></div>
		<div id="myEChartsAniLine"></div>
		<div id="myEChartsCustomPie"></div>
		<!-- <div id="myEChartsBarToMap"></div> -->
		<div id="myEChartsMap"></div>
		<div id="Map1"></div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import { cellVolHis, cellTempHis } from '@/api/charts';
	import china from '@/assets/mapJson/china.json';
	import preBusLines from '@/assets/mapJson/line-bus.json';
	import { randomData } from '@/utils/tools';
	import axios from 'axios';

	const eCharts = ref(getCurrentInstance()?.appContext.config.globalProperties.$echarts);

	const timer1 = ref(0); // charts 刷新

	onMounted(() => {
		console.log('this is charts', eCharts.value);
		getCellHis();
		showColumnCharts();
		showBandLineCharts();
		showAniLineCharts();
		showCustomPieCharts();
		showMapCharts();
		showMap1();
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
		const data = [];
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

	const showMapCharts = () => {
		const myMapECharts = eCharts.value.init(document.getElementById('myEChartsMap'));
		// 注册当前使用地图名
		eCharts.value.registerMap('ChinaMap', china);
		// 移动map

		const optionMap = {
			tooltip: {
				formatter: function (params) {
					console.log(params);
					return [
						params.name + ':',
						'xxxxxxxxxxxxxxxx',
						'xxxxxxxxxxxxxxxx',
						'xxxxxxxxxxxxxxxx',
					].join('<br>');
				},
			},
			geo: {
				//地理坐标组件
				type: 'map',
				map: 'ChinaMap',
				roam: true, //开启平移
				zoom: 2,
				tooltip: {
					show: true,
					confine: true,
					formatter: function (params) {
						return [
							'This is the introduction:',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
							'xxxxxxxxxxxxxxxxxxxxx',
						].join('<br>');
					},
				},
				// center:[119.306345,26.080429]//福州市
			},
		};
		myMapECharts.setOption(optionMap);
	};

	// map1
	const showMap1 = () => {
		let busLines = [].concat.apply(
			[],
			preBusLines.map(function (busLine, idx) {
				let prevPt = [];
				let points = [];
				for (let i = 0; i < busLine.length; i += 2) {
					let pt = [busLine[i], busLine[i + 1]];
					if (i > 0) {
						pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
					}
					prevPt = pt;
					points.push([pt[0] / 1e4, pt[1] / 1e4]);
				}
				return {
					coords: points,
				};
			})
		);
		console.log('busLines', busLines);

		const myShowMap1 = eCharts.value.init(document.getElementById('Map1'));

		eCharts.value.registerMap('map1', china);

		myShowMap1.setOption({
			geo: {
				map: 'map1',
				roam: true,
				zoom: 2,
			},
			mapStyle: {
				styleJson: [
					{
						featureType: 'water',
						elementType: 'all',
						stylers: {
							color: '#d1d1d1',
						},
					},
					{
						featureType: 'land',
						elementType: 'all',
						stylers: {
							color: '#f3f3f3',
						},
					},
					{
						featureType: 'railway',
						elementType: 'all',
						stylers: {
							visibility: 'off',
						},
					},
					{
						featureType: 'highway',
						elementType: 'all',
						stylers: {
							color: '#fdfdfd',
						},
					},
					{
						featureType: 'highway',
						elementType: 'labels',
						stylers: {
							visibility: 'off',
						},
					},
					{
						featureType: 'arterial',
						elementType: 'geometry',
						stylers: {
							color: '#fefefe',
						},
					},
					{
						featureType: 'arterial',
						elementType: 'geometry.fill',
						stylers: {
							color: '#fefefe',
						},
					},
					{
						featureType: 'poi',
						elementType: 'all',
						stylers: {
							visibility: 'off',
						},
					},
					{
						featureType: 'green',
						elementType: 'all',
						stylers: {
							visibility: 'off',
						},
					},
					{
						featureType: 'subway',
						elementType: 'all',
						stylers: {
							visibility: 'off',
						},
					},
					{
						featureType: 'manmade',
						elementType: 'all',
						stylers: {
							color: '#d1d1d1',
						},
					},
					{
						featureType: 'local',
						elementType: 'all',
						stylers: {
							color: '#d1d1d1',
						},
					},
					{
						featureType: 'arterial',
						elementType: 'labels',
						stylers: {
							visibility: 'off',
						},
					},
					{
						featureType: 'boundary',
						elementType: 'all',
						stylers: {
							color: '#fefefe',
						},
					},
					{
						featureType: 'building',
						elementType: 'all',
						stylers: {
							color: '#d1d1d1',
						},
					},
					{
						featureType: 'label',
						elementType: 'labels.text.fill',
						stylers: {
							color: '#999999',
						},
					},
				],
			},
			series: [
        {
          type: 'lines',
          coordinateSystem: 'amap',
          polyline: true,
          data: busLines,
          silent: true,
          lineStyle: {
            color: 'rgb(200, 35, 45)',
            opacity: 0.2,
            width: 1
          },
          progressiveThreshold: 500,
          progressive: 200
        }
      ]
		});
	};
</script>

<style lang="scss" scoped>
	.charts {
		display: flex;
		flex-flow: wrap;

		div {
			width: 500px;
			height: 300px;
		}
	}
</style>
