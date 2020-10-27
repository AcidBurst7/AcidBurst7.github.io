<?php

if (version_compare(phpversion(), "5.3.0", ">=")  == 1)
  error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
else error_reporting(E_ALL & ~E_NOTICE); 

require_once('classes/CMySQL.php');

$sParam = $GLOBALS['MySQL']->escape($_GET['q']); // Выход по чтению внешних данных
if (! $sParam) exit;

switch ($_GET['mode']) {
    case 'sql': // Используем базу данных как источник данных
    $sRequest = "SELECT `icao`,`iato`,`town`,`answer`,`country`
    FROM `baza` WHERE ((`icao` LIKE '{$sParam}%') OR (`iato` LIKE '{$sParam}%') OR (`town` LIKE '{$sParam}%') OR (`country` LIKE '{$sParam}%') ) ORDER BY `town`";
        $aItemInfo = $GLOBALS['MySQL']->getAll($sRequest);
        foreach ($aItemInfo as $aValues) {
            echo $aValues['answer'] . "\n";
        }
        break;
}




