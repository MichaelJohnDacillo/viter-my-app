<?php

//check database
$conn = null;
$conn = checkDatabaseConnection();
// use models
$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

checkPayLoad($data);

$testimonials->testimonials_is_active = 1;
$testimonials->testimonials_name = checkIndex($data, 'testimonials_name'); // IS REQUIRED
$testimonials->testimonials_testimony = $data['testimonials_testimony']; // NOT REQUIRED
$testimonials->testimonials_image = $data['testimonials_image'];
$testimonials->testimonials_position = $data['testimonials_position'];
$testimonials->testimonials_created = date('Y-m-d H:i:s');
$testimonials->testimonials_updated = date('Y-m-d H:i:s');

$query = checkCreate($testimonials);
returnSuccess($testimonials, 'testimonials create', $query);