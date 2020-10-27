<?php
      $db = mysql_connect ("localhost","topbaza4_root","LO1=#K-[kZmD");
      mysql_select_db ("topbaza4_bd",$db);
      mysql_query('SET NAMES utf8');
      
      $user_name=$_POST['user_name'];

      $resultx = mysql_query("SELECT * FROM baza WHERE answer='$user_name'");
      $myrowx = mysql_num_rows($resultx);


      if(mysql_num_rows($resultx)) echo 'yes';
      else echo 'no';
?>