<?php

session_start();

if(isset($_POST['submit_login'])){
    $db = new BD();
    $login = htmlspecialchars($_POST['get_login_name']);
    $pass = md5(htmlspecialchars($_POST['get_login_password']));
    $mas = $db->select("*", "users", "login='".$login."' AND pass='".$pass."'");
    if($mas){
        $_SESSION['right'] = $mas[0]['right'];
        $_SESSION['admin'] = $mas[0]['login'];
    }
}

if(isset ($_GET['logout'])){
    unset ($_SESSION['right']);
    unset ($_SESSION['admin']);
}
if(!isset($_SESSION['admin']) || $_SESSION['admin'] == ''){
?>
<div id="page">
    <div id="header">
      <h1  id="logo">Administrative Area for: <br /><b>Haritonmk</b></h1>
      <ul id="nav">
        <li><a href="<?php echo "http://".$_SERVER['SERVER_NAME'];?>">Home</a></li>
      </ul>
    </div>
    <div id="login">
        <h2>Log In</h2>
                <form accept-charset="UTF-8" enctype="multipart/form-data" name="LoginForm" action="?login=true" method="post">

          <table cellspacing="0" cellpadding="0" width="100%">
            <tbody><tr>
              <td width="25%"><label for="get_login_name"><b>Username</b></label></td>
              <td><input type="text" id="get_login_name" size="30" value="" name="get_login_name" /></td>                                                
            </tr>
            <tr>
              <td><label for="get_login_password"><b>Password</b></label></td>
              <td><input type="password" id="get_login_password" size="30" value="" name="get_login_password" /></td>                                                
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Login" name="submit_login" /></td>
            </tr>
          </tbody></table>
        </form>
    </div>
    <div id="footer">
      &copy; 2011 <b>Haritonmk.</b> All rights reserved.
    </div>
  </div>
<?php 
exit();
} else{
?>
    <div id="page">
        <div id="header">
            <h1  id="logo">Administrative Area for: <br /><b>Haritonmk</b></h1>
            <ul id="nav">
                <li><a href="<?php echo "http://" . $_SERVER['SERVER_NAME'] . "/haritonmk"; ?>">Admin</a></li>
                <li><a href="<?php echo "http://" . $_SERVER['SERVER_NAME'] ; ?>">Home</a></li>
                <li><a href="<?php echo "http://" . $_SERVER['SERVER_NAME'] . "/haritonmk?logout=true"; ?>">Log out</a></li>
            </ul>
        </div>
<?php } ?>
