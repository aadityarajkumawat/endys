import React from "react";
import { ItemContainer, MovingWave } from "./genericItem.styles";

interface Props {
  holderType: "image" | "name" | "price";
}

export const GenericItemPlaceholder: React.FC<Props> = ({ holderType }) => {
  let typeH;
  if (holderType === "image") {
    typeH = {
      height: "170px",
      width: "170px",
      marginTop: "15px",
    };
  } else if (holderType === "name") {
    typeH = {
      width: "150px",
      height: "22px",
      marginTop: "10px",
    };
  } else {
    typeH = {
      width: "100px",
      height: "22px",
      marginTop: "5px",
    };
  }
  return (
    <ItemContainer {...typeH}>
      <MovingWave></MovingWave>
    </ItemContainer>
  );
};
