<!-- nohup php nohup.php >/dev/null 2>&1 &
ps
sudo kill -15 69043  
lsof -i -P|grep -i "8889"-->
<?php
try {
    $ip =   "127.0.0.1";
    exec("ping $ip", $output, $status);
    print_r($output);
} catch (Exception $th) {
    echo $th;
}

?>