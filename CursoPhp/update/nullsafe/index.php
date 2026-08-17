<?php

$user = new User(null);

if ($user !== null && $user->address !== null) {
    $city = $user->address->city;
} else {
    $city = null;
}

$city = $user?->address?->city;