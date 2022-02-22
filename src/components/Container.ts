import styled from "styled-components";
import { Element } from "./Element";

// < ------ Container props types ------ >
interface IContainer {
  column?: number;

  auto?: boolean;

  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  wrap?: boolean;

  reverse?: boolean;

  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";

  align?: "start" | "end" | "center" | "baseline" | "stretch";

  content?: "start" | "end" | "center" | "stretch" | "between" | "around";

  gap?: number;
}

// < ----- handle justify-content input ----- >
const handleJustify = (value: IContainer["justify"]): string => {
  switch (value) {
    case "start":
      return "flex-start";

    case "end":
      return "flex-end";

    case "center":
      return "center";

    case "between":
      return "space-between";

    case "around":
      return "space-around";

    case "evenly":
      return "space-evenly";

    default:
      return "flex-start";
  }
};

// < ------ handle align-items input ----- >
const handleAlign = (value: IContainer["align"]): string => {
  switch (value) {
    case "start":
      return "flex-start";

    case "end":
      return "flex-end";

    case "center":
      return "center";

    case "baseline":
      return "baseline";

    case "stretch":
      return "stretch";

    default:
      return "flex-start";
  }
};

// < ------ handle align-content input ----- >
const handleContent = (value: IContainer["content"]): string => {
  switch (value) {
    case "start":
      return "flex-start";

    case "end":
      return "flex-end";

    case "center":
      return "center";

    case "between":
      return "space-between";

    case "around":
      return "space-around";

    case "stretch":
      return "stretch";

    default:
      return "normal";
  }
};

// < ------ calculate Element width ----- >
const elementWidth = (column: number): string => {
  const width = 100 / column;
  return `${width}%`;
};

// < ------ Container Component ----- >
export const Container = styled.div<IContainer>`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  width: 100%;

  flex-wrap: ${(p) =>
    typeof p.column === "number"
      ? "wrap"
      : p.wrap
      ? "wrap"
      : p.reverse
      ? "wrap-reverse"
      : "nowrap"};

  justify-content: ${(p) => (p.auto ? "center" : handleJustify(p.justify))};

  align-items: ${(p) => (p.auto ? "center" : handleAlign(p.align))};

  align-content: ${(p) => handleContent(p.content)};

  gap: ${(p) => p.gap + "px" || "0"};

  flex-direction: ${(p) => p.direction || "row"};

  ${Element} {
    width: ${(p) =>
      typeof p.column === "number" ? elementWidth(p.column) : "auto"};
  }
`;
