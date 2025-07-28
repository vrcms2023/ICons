import styled from "styled-components";

export const EditStyled = styled.div`
.editIcon {
  right: 0px;
  z-index: 999;
  display: block;
  margin-top: 5px;
  cursor: pointer;
  padding: 4px 10px;
  width: auto !important;
  background-color: ${({ theme }) => theme.white};
  border: 1px dashed rgba(255, 193, 7, 1);
}

.editIcon i {
  font-size: 1.3rem;
  color: rgba(255, 193, 7, 1);
  transition: transform 0.3s ease, color 0.3s ease;
}
.editIcon i:hover {
  color: #000 !important;
  transform: rotate(-180deg);
}

.carousel .editIcon {
  top: 150px !important;
}

.componentType {
  position: absolute;
  display: block;
  background-color: rgba(255, 193, 7, 1);
  color: ${({ theme }) => theme.white};
  text-align: right;
  letter-spacing: 1px;
  text-transform: uppercase;
  right: -1px;
  top: 34px;
  padding: 5px;
  font-size: .55rem;
}

`