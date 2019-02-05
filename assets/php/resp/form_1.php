<?php
  $mood_type = $_GET['mood_type'];
  $difficulty = $_GET['difficulty'];
  $checkbox = $_GET;
  $harm = $_GET['harm'];

  $total_score = 0;

  switch ($mood_type) {
    case "sad":
      $total_score = 5;
    break;

    case "angr":
      $total_score = 10;
    break;

    case "axty":
      $total_score = 15;
    break;
  }

  $total_score = $total_score + ($difficulty * 5);

  if (isset($_GET["death"]))  {
    $total_score = $total_score + 20;
  }

  if (isset($_GET["job"])) {
    $total_score = $total_score + 25;
  }

  if (isset($_GET["job"])) {
    $total_score = $total_score + 30;
  }

  if (isset($_GET["move"])) {
    $total_score = $total_score + 35;
  }
  
  if (isset($_GET["othr"])) {
    $total_score = $total_score + 10;
  }

  switch ($harm) {
    case "tght":
      $total_score = $total_score + 40;
    break;

    case "harm":
      $total_score = $total_score + 75;
    break;

    case "nthr": 
      $total_score = $total_score - 25;
    break;
  }
  
  if ($total_score < 150) {
    $url_string = "index.htm#sctn_1?pos=3";
  } else {
    $url_string = "index.htm#sctn_1?pos=2";
  }
?>

<html><head><script>window.location.href = "http://ameliaxavier.com/sc/resp/<?php echo $url_string; ?>";</script></head></html>