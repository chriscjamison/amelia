<?php
  $num_in_household = $_GET['num_in_household'];
  $monthly_income = $_GET['monthly_income'];
  
  $rate_value = ($monthly_income - $num_in_household) * 50;

  if ($rate_value < 1)  {
    $final_rate_value = 0;
  } else {
    $final_rate_value = $rate_value;
  }
  
  $form_url_string = "rateValue=" . urlencode($final_rate_value);
  $form_url_string = "\"http://localhost/amelia/sc/resp/index.htm#sctn_5?pos=2&" . $form_url_string . "\"";
?>

<html>
  <head><script>window.location.href = <?php echo $form_url_string; ?>;</script></head>
</html>