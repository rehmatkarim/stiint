<?php
class Contractors{
  
    // database connection and table name
    private $conn;
    // private $table_name = "contractors";
  
    // object properties
  
    
    public $first_name;
    public $last_name;
    public $email;
    public $password;
    
    public $confirm_password;
    public $user_type;
    
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // read products
function read(){
  
    // select all query
    $query = "SELECT * FROM  `contractors`";
  
    // prepare query statement
    $stmt = $this->conn->prepare($query);
  
    // execute query
    $stmt->execute();
  
    return $stmt;
}
function create(){
 
    // query to insert record
    $query = "
    INSERT INTO `contractors`(`first_name`,`last_name`) VALUES (:first_name, :last_name);
    INSERT INTO `login`(`email`,`password`,`cofirm_password`,`user_type`) VALUES (:email, :password, :confirm_password,:user_type);
";

  
    // prepare query
    $stmt = $this->conn->prepare($query);
    
  
 
    // sanitize
    
    $this->first_name=htmlspecialchars(strip_tags($this->first_name));
    $this->last_name=htmlspecialchars(strip_tags($this->last_name));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->password=htmlspecialchars(strip_tags($this->password));
    $this->confirm_password=htmlspecialchars(strip_tags($this->confirm_password));
    $this->user_type=htmlspecialchars(strip_tags($this->user_type));

   
    
 
    // bind values
   
    $stmt->bindParam(":first_name", $this->first_name,PDO::PARAM_STR,12);
    $stmt->bindParam(":last_name", $this->last_name,PDO::PARAM_STR,12);
    $stmt->bindParam(":email", $this->email,PDO::PARAM_STR,12);
    $stmt->bindParam(":password", $this->password,PDO::PARAM_STR,12);
    $stmt->bindParam(":confirm_password", $this->confirm_password,PDO::PARAM_STR,12);
    $stmt->bindParam(":user_type", $this->user_type,PDO::PARAM_STR,12);
   
  

    
   
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}
?>