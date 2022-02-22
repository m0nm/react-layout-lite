import styled from "styled-components";

// < ------ Element Interface ----- >
interface IElement {
  order?: number;

  grow?: number;

  shrink?: number;

  self?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
}

// < ------ handle align-self input ----- >
const handleSelf = (value: IElement["self"]): string => {
  switch (value) {
    case "auto":
      return "auto";

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
      return "normal";
  }
};

export const Element = styled.div<IElement>`
  order: ${(p) => p.order};

  flex-shrink: ${(p) => p.shrink};

  flex-grow: ${(p) => p.grow};

  align-self: ${(p) => handleSelf(p.self)};
`;
