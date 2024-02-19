import React from "react";
import { useSelector } from "react-redux";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";

function Chart() {
  const { to: curTo, histData: data } = useSelector((state) => state);
  const series = Object.values(data).map((el) => el[curTo]);
  const labels = Object.keys(data);
  return (
    <Box sx={{ gridArea: "chart", mx: "auto" }}>
      <LineChart
        width={500}
        height={300}
        series={[{ data: series, area: true, showMark: false }]}
        xAxis={[{ scaleType: "point", data: labels }]}
        sx={{
          ".MuiLineElement-root": {
            display: "none",
          },
        }}
      />
    </Box>
  );
}

export default Chart;
