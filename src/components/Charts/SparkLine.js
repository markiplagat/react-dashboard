import React from "react";
import {
  Inject,
  SparklineTooltip,
  SparklineComponent,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, data, color, currentColor, width, type }) => {
  return (
    <SparklineComponent
      id={id}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : data ${yval}",
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
