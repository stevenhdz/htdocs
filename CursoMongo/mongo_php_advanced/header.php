<div>
    <span>Welcome, <?php echo $userData['username']; ?>!</span><br>
    [ <a href="home.php">Home</a> ]
    [ <a href="profile.php?id=<?php echo $_SESSION['user']; ?>">View profile</a> ]
    [ <a href="userlist.php">View Users list</a> ]
    [ <a href="logout.php">Log out</a> ]
</div>