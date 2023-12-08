import styled from "styled-components";
import { TMenuLeft } from "@/types";
export const Wrapper = styled.div<TMenuLeft>`
  position: absolute;
  height: 100%;
  width: 100%;
  display: ${({ visibleMenuLeftMobile }) =>
    visibleMenuLeftMobile ? "flex" : "none"};
  background-color: #82008271;
  z-index: 1;

  .ContentMenuMobile {
    padding: 5rem 1rem;
    width: 72%;
    background-color: #832883;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .headerMenuMobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        color: #e4f3d8;
      }
      svg {
        fill: #e4f3d8;
      }
    }
    .textMenuMobile {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      
      h2 {
        font-weight: 300;
        color: #e4f3d8;
        font-size: 1.35rem;
        cursor: pointer;
      }
      svg {
        fill: #e4f3d8;
        cursor: pointer;
      }
    }
  }
`;
