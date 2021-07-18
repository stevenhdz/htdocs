<?php

session_start();
require_once('dbconnect.php');

if (!isset($_SESSION['user'])) {
    header('Location: index.php');
}

$userData = $db->users->findOne(array('_id' => $_SESSION['user']));


function get_recent_tweets($db)
{
   $result = $db->following->find(array('follower' => $_SESSION['user']));
   $result = iterator_to_array($result);
   $users_following = array();
   foreach ($result as $key) {
      $users_following[] = $key['user'];
   }
   $result = $db->tweets->find(array('authorId' => array('$in' => $users_following)));
   $recent_tweets = iterator_to_array($result);
   return $recent_tweets;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <?php include('header.php');?>
   <form method="post" action="create_tweet.php">
       <fieldset>   
            <label for="tweet">Whats happening ?? </label><br>
            <textarea name="body" cols="30" rows="10"></textarea>
            <input type="submit" value="Tweet" />
       </fieldset>
   </form>

   <div>
       <p><b>Tweets from people you are following</b></p>
       <?php 
        $recent_tweets = get_recent_tweets($db);
        foreach ($recent_tweets as $tweet) {
            echo '<p><a href="profile.php?id='. $tweet['authorId'] . '">' . $tweet['authorName'] .'</a></p>' ; 
            echo '<p>' . $tweet['body'] . '</p>'; 
            echo '<p>' . $tweet['created'] . '</p>'; 
            echo '<hr>'; 
        }
        ?>
   </div>
</body>
</html>