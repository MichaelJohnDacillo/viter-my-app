<?php
//database variaable
$connection = null;
// connect to database and store in connection cariable
$conn = checkDatabaseConnection();

// use models
$header = new Header($conn);

// no id shall pass
if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$header->header_is_active = 1;
$header->header_name = checkIndex($data, 'header_name');
$header->header_link = checkIndex($data, 'header_link');
$header->header_created = date("Y-m-d H:i:s");
$header->header_updated = date("Y-m-d H:i:s");

isNameExist($header, $header->header_name);

$query = checkCreate($header);
returnSuccess($header, 'header create', $query);

//import header
require '../../../core/header.php';
//import function
require '../../../core/functions.php';
//import mysql
require '../../../models/developer/header/Header.php';

$body = file_get_contents('php://input');
// $body->header_name;

$data = json_decode($body, true);
// $data['header_name'];


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    //GET = READ
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
    //PUT - UPDATE
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        // returnError('update');
        $result = require 'update.php';
        sendResponse($result);
        exit;
    }
}
checkEndpoint();
