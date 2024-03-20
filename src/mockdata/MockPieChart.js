import { Box } from "@mui/material";
import ReactEcharts from "echarts-for-react";

export default function MockPieChart() {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      right: "10%",
      top: "25%",
      orient: "vertical",
      left: "75%",
    },
    series: [
      {
        name: "Total Portfolio Allocation",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
            formatter: "{d}%",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 36.5, name: "Reksadana Saham" , itemStyle : { color : "#172B4D"}},
          { value: 26.5, name: "SBN Retail" , itemStyle : { color : "#00A9A5"}},
          { value: 23, name: "Cash" , itemStyle : { color : "#4E8098"}},
          { value: 23, name: "Lainnya" , itemStyle : { color : "#90C2E7"}},
        ],
      },
    ],
  };

  return (
    <>
      <Box sx={{ height: "225px" }}>
        <ReactEcharts
          option={option}
          style={{ height: "225px", marginLeft: "-50%" }}
        />
      </Box>
    </>
  );
}

export let personalData = [];
