<?php
include_once 'class.php';
/*
$db = new BD();
$mas = $db->select('*', 'content', "position='left'");
if($mas){
    foreach($mas as $value)
    {
        echo "<h1>".$value['title']."</h1><br />".$value['content']."";
    }
}

$rss = new RSS();
$rss->connect("http://feeds.feedburner.com/kurilka");
$mas_rss = $rss->items();
foreach($mas_rss as $value)
{
    echo '<br /><a href="'.$value['link'].'">'.$value['title'].'</a> ('.$value['pubDate'].')';
  echo '<p>'.$value['description'].'</p>';
}
*/
//https://twitter.com/statuses/public_timeline.xml
//$t = new twitter();
$t = new summize();
$t->username='haritonmk'; // логин и
$t->password='protege'; // пароль нужны не для всех функций
//$t->type = 'xml';

$res = $t->userTimeline(); // Метод возвращает объект класса SimpleXMLElement.
//$res = $t->publicTimeline();
//$res = $t->search('@haritonmk');
if($res===false){
  echo "ERROR<hr/>";
  echo "<pre>";
  print_r($t->responseInfo);
  echo "</pre>";
}else{
  //foreach($res as $status){
    //echo $status->text .'<p/>';
      echo $res;
  //}
}
?>
<!--
<a href="https://twitter.com/haritonmk" class="twitter-follow-button" data-lang="ru">Читать @haritonmk</a>
<script src="//platform.twitter.com/widgets.js" type="text/javascript"></script> -->