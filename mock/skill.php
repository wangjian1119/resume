<?php
header("Access-Control-Allow-Origin:*");

$postData = '[
    {
        "category":"规范",
        "name":"HTML4、HTML5、ES5、ES6、CommonJS、CMD、AMD等",
        "images":"images/H5.jpg",
        "time":"1年",
        "level":"了解"
    },
    {
        "category":"框架",
        "name":"Jquery、Zepto、AngularJs、Recat、Avalon、vue、jquery easyui、mui（hbuilder）、yo(去哪儿)纯样式框架（scss）等",
        "images":"images/angularjs.jpg",
        "time":"2年",
        "level":"熟悉"
    },
    {
        "category":"类库",
        "name":"Swiper、Iscroll、moment等",
        "images":"images/logo-swiper.png",
        "time":"2年",
        "level":"熟悉"
    },
    {
        "category":"插件",
        "name":"Jquery menu plugin、Jquery nav plugin、zepto emoji-expression-plugin等",
        "images":"images/JQ.jpg",
        "time":"2年",
        "level":"熟悉"
    },
    {
        "category":"布局",
        "name":"Fixed、Fulid、Flex、Responsive",
        "images":"images/css3.jpg",
        "time":"3年",
        "level":"精通"
    },
    {
        "category":"程序",
        "name":"Javascript原生、Jquery及Zepto插件、AngularJs等",
        "images":"images/js.jpg",
        "time":"3年",
        "level":"精通"
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