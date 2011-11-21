<?php
include_once 'class.php';

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
?>
