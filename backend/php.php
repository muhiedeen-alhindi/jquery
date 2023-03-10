<?php 

include('connection.php');
header("Access-Control-Allow-Origin: *");

 

// $category_id = $_GET["category_id"];
$query = $mysqli->prepare('select title,content,auther,id,published_date  From newss');
// $query->bind_param('i', $category_id);
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($title, $content, $auther,$id,$published_date);
// $query->fetch();
$response = [];

// echo $query;
if ($num_rows == 0) {
    $response['response'] = "no products";
} else {
    while ($query->fetch() )  {
        $data = array(
        'title' => $title,
        'content' => $content,
        'auther' => $auther,
        'published_date' => $published_date,
        'id'  =>$id,
        ); 
        array_push($response, $data);
    }
}

echo json_encode($response);





?>