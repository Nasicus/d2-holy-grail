import styled from "../../../../TypedStyledComponents";

export const NoMarginList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
`;

export const ItemInfosContainer = styled.div`
  margin-top: ${p => p.theme.spacing.unit * 2}px;
`;

export const ItemInfosDetails = styled.div`
  display: flex;
  margin-top: ${p => p.theme.spacing.unit}px;
`;
