var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.resume=[
	    {
	    	name:'汪伟伟',
	    	job:'web前端开发工程师',
	    	sex:'女',
	    	adress:'上海市浦东新区新场镇',
	    	mail:'m15900815013@163.com',
			education:'大专',
			phone:'15900815013',
			photo:'images/photo.jpg',
			skill:[
				{
					name:'HTML/CSS',
					values:'600'
				},
				{
					name:'JAVASCRIPT',
					values:'500'
				},
				{
					name:'ANGULAR.JS/VUE.JS',
					values:'550'
				},
				{
					name:'HTML5/CSS3',
					values:'550'
				},
				{
					name:'移动端',
					values:'450'
				}
			],
			work:[
				{
					company:'ACC艺术品防伪科技有限公司',
					time:'2016.10-至今',
					experience:'担任前端开发工程师,负责公司PC端内部管理系统(“客户管理”,”任务管理”)的开发和维护, 按照UI设计师提供的psd图完成简单的移动端页面开发及测试功能等'
				}
			],
			project:[
				{
					id:'1',
					proName:' 管理系统（“任务管理”,”客户管理”）',
					proDescribe:' 应公司需求,目前公司需要两个内部管理系统,分别为任务管理和客户管理,任务管理主要是为部分角色分配,领导通过任务列表分配任务给不同的人员,其人员登录系统可以接收到任务, 任务分为紧急或不紧急,,,该人员对于任务每完成一部分可在相应地方打钩显示百分之几,直至完成后归为已完成档,任务过程中也可由领导转给其他人,或者协同其他完成, 客户管理为公司人员对于用户的详情进行查询和规划,管理员可根据条件查询用户信息以及和用户之间的商业交往信息,也可添加新用户',
					proTime:'2016.11-至今',
					img:'images/port01.jpg'
				},
				{
					id:'2',
					proName:' acc制卡扫描客户信息',
					proDescribe:'按公司需求,为客户开发一组特色的移动端个人简介,由UI设计师提供psd格式图,按照规划在pc端进行开发,使用联图功能用微信进行扫描功能查看所开发的网页,同时连接微信公众号jssdk功能实现移动端图片预览放大',
					proTime:'2017.6-2017.8',
					img:'images/port02.jpg'
				},
				{
					id:'3',
					proName:' 仿京东页',
					proDescribe:'初学习前端时，自己练习的小页面',
					proTime:'2016.7-2016.8',
					img:'images/port03.jpg'
				}
			]
	    }
    ]
});
/*$scope.arr='wangweiewi';*/
