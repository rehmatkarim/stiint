<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate product object
include_once '../endpoints/getUsers.php';
 
$database = new Database();
$db = $database->getConnection();
 
$users = new Users($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    
    !empty($data->user_name) &&
    !empty($data->nationality) &&
    !empty($data->dob) &&
    !empty($data->worker_address) &&
    !empty($data->experience) &&
    !empty($data->passport_details) &&
    !empty($data->u_id)
){
 
    // set product property values

    $users->user_name = $data->user_name;
    $users->nationality = $data->nationality;
    $users->dob = $data->dob;
    $users->worker_address = $data->worker_address;
    $users->experience = $data->experience;
    $users->passport_details = $data->passport_details;
    $users->u_id = $data->u_id;
 
    // create the product
    if($users->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "user is created."));
    }
 
    // if unable to create the product, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Unable to create user."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Unable to create user. Data is incomplete."));
}
?>