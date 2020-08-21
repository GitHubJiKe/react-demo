import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import { usePermissions } from "../../utils";
import "./style.scss";

export interface EChartDemoProps {}

const pieChartStyle = { width: 200, height: 200, display: "inline-block" };

const getOption = () => {
  return {
    title: {
      show: true,
      text: "股票池",
      subtext: "单位（股）",
      left: 70,
      top: 76,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      show: false,
      orient: "horizontal",
      left: 10,
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
    },
    series: [
      {
        left: 0,
        name: "股票池",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "inner",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 30,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 310, name: "已成熟", itemStyle: { color: "#388afa" } },
          { value: 335, name: "未成熟", itemStyle: { color: "#ff7138" } },
        ],
      },
    ],
  };
};

function EChartDemo({}: EChartDemoProps) {
  usePermissions(["1"], "/demo");

  useEffect(() => {
    echarts.registerTheme("my_theme", {
      backgroundColor: "#ffffff",
      color: "black",
    });
  }, []);

  return (
    <div className="echarts-demo-root">
      <ReactEcharts
        echarts={echarts}
        // @ts-ignore
        option={getOption()}
        style={pieChartStyle}
        notMerge={true}
        lazyUpdate={true}
        theme={"my_theme"}
      />
    </div>
  );
}

export default EChartDemo;
