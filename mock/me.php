<?php
header("Access-Control-Allow-Origin:*");

$postData = '{
	
	"images": "images/erweima.jpg",
	"description": "建筑行业佼佼者",
	"detail": "项目耗时2月，主要处理前端页面及程序嵌套，实现基本内容但没有做移动端，故该网站只适应于PC端应用",
	"tech": "Html5、Css3、JQuery等"
} 
';

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