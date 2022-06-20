let mainName;
let mainValue;
let mainData = [];

$.ajax({
  type: "GET",
  url: "localhost/api/pieChart",
  success: function (response) {
    console.log(response);
    if (response["result"] === "success") {
      mainName = response.name;
      mainValue = response.value;
      for (let i = 0; i < mainName.length; i++) {
        mainData.push({ value: mainValue[i], name: mainName[i] });
      }

      console.log(mainData);

      var myChart = echarts.init(document.getElementById("main"));

      // Specify the configuration items and data for the chart
      var option = {
        legend: {
          orient: "horizontal",
          top: "bottom",
          data: mainName,
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
              emphasis: {
                show: true,
              },
            },
            labelLine: {
              show: true,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            data: mainData,
          },
        ],
      };

      // Display the chart using the configuration items and data just specified.
      myChart.setOption(option);
    }
  },
  error: function (err) {
    console.log(err);
  },
});

var myChart = echarts.init(document.getElementById("main2"));

// Specify the configuration items and data for the chart
var option = {
  xAxis: {
    type: "category",
    data: ["쾌적", "양호", "보통", "불량", "불쾌"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [1, 4, 43, 27, 5],
      type: "bar",
      showBackground: true,
      itemStyle: {
        color: "#AE6BE1",
      },
    },
  ],
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);
