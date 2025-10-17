<?php

class A {
    const string FOO = "bar";  // antes esto era error de sintaxis
}

echo A::FOO;