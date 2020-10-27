<?php
      $db = mysql_connect ("localhost","topbaza4_root","LO1=#K-[kZmD");
      mysql_select_db ("topbaza4_bd",$db);
      mysql_query('SET NAMES utf8');
      
      $user_name2=$_POST['user_name2'];

      $resultx2 = mysql_query("SELECT * FROM baza WHERE answer='$user_name2'");
      $myrowx2 = mysql_num_rows($resultx2);

      if(mysql_num_rows($resultx2)) echo 'yes';
      else echo 'no';
?>