import styled from "@emotion/styled/macro";

export const MovieBox = styled.div`
  max-width: 300px;

  figure {
    position: relative;
    &:hover {
      border-color: "color-secondary";
      figcaption {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  figcaption {
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    opacity: 0;
    transition: all 250ms ease-in-out;
  }
`;
