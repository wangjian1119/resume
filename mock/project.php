<?php
header("Access-Control-Allow-Origin:*");

$postData = '[
	{
		"category":"企业网站",
		"name":"中国建筑",
		"url":"http://www.baidu.com",
		"images":"images/baidu.jpg",
		"description":"建筑行业佼佼者",
		"detail":"项目耗时2月，主要处理前端页面及程序嵌套，实现基本内容但没有做移动端，故该网站只适应于PC端应用",
		"tech":"Html5、Css3、JQuery等"
	},
	{
		"category":"企业网站",
		"name":"卧龙集团",
		"url":"http://wj321.top/qianfeng/homework1/",
		"images":"images/wulong.png",
		"description":"大型企业",
		"detail":"长期维护，功能迭代，包括平台整体UI改进以及功能模块的增加与性能的优化",
		"tech":"Html、Css2、Javascript、Jquery、Java等"
	},
	{
		"category":"教育平台",
		"name":"北京大学",
		"url":"http://wj321.top/qianfeng/homework11/",
		"images":"images/beijingdaxue.jpg",
		"description":"大学中的大哥大，网站中的大哥大",
		"detail":"项目初建耗时4月，从需求到页面设计，从页面设计到前端实现，从页面实现到功能开发和集成，从本地测试到平台上线等全程处理",
		"tech":"Html、Css2、Javascript、Jquery、Coldfusion等"
	},
	{
		"category":"电子平台",
		"name":"美丽说",
		"url":"http://wj321.top/qianfeng/homework9/",
		"images":"images/meili.jpg",
		"description":"打造女人的美丽",
		"detail":"项目初建耗时3月，主要包括数据支撑平台的建设、移动端Hybrid模式的应用及开发",
		"tech":"Html5、Css3、Jquery、AngularJs、Java等"
	}
]';

//$dataArr =  json_decode($postData);
//echo json_encode($dataArr[2]);
function json_clean_decode($json, $assoc = false, $depth = 512, $options = 0) {
    // search and remove comments like /* */ and //
    $json = preg_replace("#(/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/)|([\s\t]//.*)|(^//.*)#", '', $json);
    
    if(version_compare(phpversion(), '5.4.0', '>=')) {
        $json = json_decode($json, $assoc, $depth, $options);
    }
    elseif(version_compare(phpversion(), '5.3.0', '>=')) {
        $json = json_decode($json, $assoc, $depth);
    }
    else {
        $json = json_decode($json, $assoc);
    }

    return $json;
}

echo json_encode(json_clean_decode($postData));
?>