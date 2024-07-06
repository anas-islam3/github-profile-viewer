import React from "react";
import "./Pichart.css";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        const response = await axios.get("https://api.example.com/data");
        const apiData = response.data;

        // Assuming API response is like { labels: [...], data: [...] }
        setChartData({
          labels: apiData.labels,
          datasets: [
            {
              label: "My Pie Chart",
              data: apiData.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
              ],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pie-chart">
      <h2>Pie Chart</h2>
      <div className="chart-container">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
