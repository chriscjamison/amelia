<?php
  $mood_type = $_GET['mood_type'];
  $difficulty = $_GET['difficulty'];
  $stressor = $_GET['stressor'];
  $harm = $_GET['harm'];

  $total_score = $mood_type + $difficulty + $stressor + $harm;

  if ($total_score < 25) {
    $url_string = "index.htm#sctn_1?pos=2";
  } else {
    $url_string = "index.htm#sctn_1?pos=3";
  }
?>

<html><head><script>window.location.href = <?php echo "$url_string"; ?>;</script></head></html>