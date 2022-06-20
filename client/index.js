$("#zoomPlus").on("click", function () {
  $("progress").val($("progress").val() + 5);
  return false;
});
$("#zoomMinus").on("click", function () {
  $("progress").val($("progress").val() - 5);
  return false;
});

// Initialize the echarts instance based on the prepared dom
