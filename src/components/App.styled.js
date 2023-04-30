import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  gap: 20px;
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  min-height: 350px;
  max-height: max-content;
  border-radius: 5px;
  background-color: #c5d0e6;
  /* background-image: url('./../image/phone.jpg'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
