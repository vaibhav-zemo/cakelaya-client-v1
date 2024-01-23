import styled from "styled-components";

export const Styledbutton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;

  &.register-btn {
    background: none;
    border: 1px solid hsl(0, 0%, 41%);

    &:hover {
      color: hsl(0, 0%, 8%);
      border: 1.3px solid hsl(0, 0%, 8%);
    }
  }

  &.cta-btn {
    background: hsl(0, 0%, 8%);
    border: none;
    color: hsl(0, 0%, 98%);
    font-weight: bolder;
    letter-spacing: 0.35px;

    &:hover {
      background: transparent;
      color: hsl(0, 0%, 8%);
      border: 1.3px solid hsl(0, 0%, 8%);
    }
  }
`;
