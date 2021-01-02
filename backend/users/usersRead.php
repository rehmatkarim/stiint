<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/database.php';
include_once '../endpoints/getUsers.php';
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$users = new Users($db);
  
// read products will be here
// query products
$stmt = $users->read();
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num>0){
  
    // products array
    $users_arr=array();
    $users_arr["records"]=array();
  
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
  
        $user_num=array(
            "id" => $id,
            "user_name" => $user_name,
            "nationality" => $nationality,
            "dob" => $dob,
            
            "worker_address" => $worker_address,
            "experience" => $experience,
            
            "passport_details"=>$passport_details,
           
            "u_id"=> $u_id
        );
  
        array_push($users_arr["records"], $user_num);
    }
  
    // set response code - 200 OK
    http_response_code(200);
  
    // show products data in json format
    echo json_encode($users_arr);
}
  
// no products found will be here
else{
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "No users found.")
    );
}
