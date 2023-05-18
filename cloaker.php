<?php
$url = $_GET['url'] ?? '';
if ($url) {
    header('Location: ' . $url);
    exit;
} else {
    echo 'Invalid URL';
}
?>
