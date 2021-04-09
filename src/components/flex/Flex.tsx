import React from "react";

interface FlexProps {
  jc?: "center" | "flex-start" | "flex-end" | "space-between";
  ai?: "center" | "flex-start" | "flex-end";
  classname?: string;
}

export const Flex: React.FC<FlexProps> = ({ jc, ai, children, classname }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: ai ? ai : "center",
        justifyContent: jc ? jc : "center",
      }}
      className={classname}
    >
      {children}
    </div>
  );
};
