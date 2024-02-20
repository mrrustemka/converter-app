import React from "react";
import { useSelector } from "react-redux";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";

function Chart() {
  const { to: curTo, histData: data } = useSelector((state) => state);
  const series = Object.values(data).map((el) => el[curTo]);
  const labels = Object.keys(data);
  console.log(series);
  return (
    <Box sx={{ gridArea: "chart", mx: "auto" }}>
      <LineChart
        width={1000}
        height={600}
        series={[
          {
            data: series,
            area: true,
            showMark: false,
            color: `${
              series[0] > series[series.length - 1]
                ? "rgb(234, 67, 53)"
                : "rgb(52, 168, 83)"
            }`,
          },
        ]}
        xAxis={[{ scaleType: "point", data: labels }]}
        sx={{
          ".MuiLineElement-root": {
            display: "block",
          },
        }}
      />
    </Box>
  );
}

export default Chart;
