<?php
  $num_in_household = $_GET['num_in_household'];
  $monthly_income = $_GET['monthly_income'];
  
  $rate_value = ($monthly_income - $num_in_household) * 50;

  if ($rate_value < 1)  {
    $final_rate_value = 0;
  } else {
    $final_rate_value = $rate_value;
  }
  
  $url_string = "http://chriscjamison.com/amelia/#article=5&position=2&rateValue=" . urlencode($final_rate_value);
?>

<html>
  <head><script>window.location.href = "<?php echo $url_string; ?>";</script></head>
</html>