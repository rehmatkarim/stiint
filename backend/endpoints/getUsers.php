<?php
class Users{
  
    // database connection and table name
    private $conn;
    private $table_name = "workers";
  
    // object properties
    public $id;
    public $name;
    public $nationality;
    public $dob;
    public $worker_address;
    public $experience;
    
    public $passport_details;
    
    public $u_id;
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // read products
function read(){
  
    // select all query
    $query = "SELECT * FROM  `workers`";
  
    // prepare query statement
    $stmt = $this->conn->prepare($query);
  
    // execute query
    $stmt->execute();
  
    return $stmt;
}
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                user_name=:user_name, nationality=:nationality, dob=:dob, worker_address=:worker_address, experience=:experience, passport_details=:passport_details,u_id:=u_id";
  
    // prepare query
    $stmt = $this->conn->prepare($query);
  
 
    // sanitize
    
    $this->user_name=htmlspecialchars(strip_tags($this->user_name));
    $this->nationality=htmlspecialchars(strip_tags($this->nationality));
    $this->dob=htmlspecialchars(strip_tags($this->dob));
    $this->worker_address=htmlspecialchars(strip_tags($this->worker_address));
    $this->experience=htmlspecialchars(strip_tags($this->experience));
    $this->passport_details=htmlspecialchars(strip_tags($this->passport_details));
    $this->u_id=htmlspecialchars(strip_tags($this->u_id));
 
    // bind values
   
    $stmt->bindParam(":user_name", $this->user_name);
    $stmt->bindParam(":nationality", $this->nationality);
    $stmt->bindParam(":dob", $this->dob);
    $stmt->bindParam(":worker_address", $this->worker_address);
    $stmt->bindParam(":experience", $this->experience);
    $stmt->bindParam(":passport_details", $this->passport_details);
    $stmt->bindParam(":u_id", $this->u_id);

    
    
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}
?>