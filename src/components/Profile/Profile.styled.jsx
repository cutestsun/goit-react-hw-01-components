import styled from 'styled-components';

export const ProfileWrap = styled.div`
  /* display: flex; */
  margin-left: auto;
  margin-right: auto;
  width: 270px;
  background-color: aquamarine;
  margin-top: 32px;
`;
export const Description = styled.div`
  padding: 20px;
`;
export const Img = styled.img`
  width: 230px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
`;

export const Tag = styled.p`
  text-align: center;
  margin-top: 8px;
`;

export const Location = styled.p`
  margin-top: 8px;
  text-align: center;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  padding-top: 0;
  li {
    width: calc((100% - 2 * 12) / 3);
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;
