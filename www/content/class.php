<?php
require_once("class.twitter.php");

class BD {
    
    private $host = 'localhost';
    private $user = 'root';
    private $password = '';
    private $db = 'qwerty';
    
    function __construct()
    {
        mysql_connect($this->host, $this->user, $this->password);
        mysql_select_db($this->db);
    }
    
    public function select($name, $from, $where='', $limit=''){
        $res = array();
        $result = "SELECT ".$name." FROM ".$from;
        if(!empty ($where)){
            $result.=" WHERE ".$where;
        }
        if(!empty($limit)){
            $result.=" LIMIT ".$limit;
        }
        $q = mysql_query ($result);
        if($q){
            while($f = mysql_fetch_array($q)){
                $res[] = $f;
            }
        } else { return false; }
        return $res;
    }
    
    public function update($result){
        return mysql_query ($result);
    }
    
    public function delete($result){
        return mysql_query ($result);
    }
    
    public function insert($result){
        return mysql_query($result);
    }
}

class RSS {
    public $path='';
    private $xml;

    function __construct()
    {
        
    }
    
    public function connect($path=''){
        if($path != ''){
            $this->xml = @simplexml_load_file($path);
            $this->path = $path;
        } else {
            $this->xml = @simplexml_load_file($this->path);}
        if ($this->xml===false ) return false;
    }
    
    public function items($start=0, $end=5){
        $mas = array();
        $i = 0;
        $items = array_slice($this->xml->xpath('//item'),$start,$end);
        foreach ( $items as $item ) {
            $mas[$i]['link'] = $item->link;
            $mas[$i]['title'] = $item->title;
            $mas[$i]['pubDate'] = $item->pubDate;
            $mas[$i]['description'] = $item->description;
            $i++;
        }
        return $mas;
    }
}
?>
