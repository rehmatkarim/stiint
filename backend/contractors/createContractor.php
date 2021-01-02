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
include_once '../endpoints/contractors.php';
 
$database = new Database();
$db = $database->getConnection();
 
$contractors = new Contractors($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    
    !empty($data->first_name) &&
    !empty($data->last_name) &&
    !empty($data->email) &&
    !empty($data->password) &&
    !empty($data->confirm_password)&&
    !empty($data->user_type)    
){
 
    // set product property values

    $contractors->first_name = $data->first_name;
    $contractors->last_name = $data->last_name;
    $contractors->email = $data->email;
    $contractors->password = $data->password;
    $contractors->confirm_password = $data->confirm_password;
    $contractors->user_type = $data->user_type;
    
   
   
   
    // create the product
    if($contractors->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "contractor is created."));
       
    }
   
 
    // if unable to create the product, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Unable to create contractor"));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Unable to create contractor. Data is incomplete."));
}
?>