<?php
$url = $_GET['url'] ?? '';
if ($url) {
    $response = file_get_contents($url);
    if ($response !== false) {
        header('Content-Type: ' . get_headers($url, 1)['Content-Type']);
        echo $response;
    } else {
        http_response_code(500);
        echo 'Oops! An arcane force disrupted our journey.';
    }
} else {
    echo 'Invalid URL';
}
?>
