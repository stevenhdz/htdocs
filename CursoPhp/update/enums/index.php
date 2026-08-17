<?php

enum HTTPStatus: int {
    case OK = 200;
    case NotFound = 404;
    case Forbidden = 403;

    public function isError(): bool {
        return $this->value >= 400;
    }
}

// Uso:
$status = HTTPStatus::NotFound;
if ($status->isError()) {
    echo "Error HTTP: " . $status->value;
}
