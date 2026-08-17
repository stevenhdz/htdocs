<?php

function process(int|float $value): int|float {
    if (is_int($value)) {
        return $value * 2;
    }
    return $value * 1.5;
}

echo process(10);
echo process(3.2);