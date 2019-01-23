import styled from 'styled-components';

export const BoxBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  padding: 20px 30px;
  background-color: #fff;
  position: relative;
  margin-right: 30px;
  min-width: 300px;
  margin-bottom: 120px;
  
  img {
    width: 130px;
    height: auto;
  }
`;

export const Position = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F7B844;
  position: absolute;
  top: -60px;
  left: 10px;
  font-size: 40px;
  border-bottom: 3px solid #F7B844;
`;

export const Author = styled.span`
  font-style: italic;
  color: #373254;
  margin-top: 15px;
  text-align:center;
  font-size:13px;
`;


export const Title = styled.span`
  color: #373254;
  margin-top: 15px;
  font-size: 16px;
  text-transform: capitalize;
`;

export const Description = styled.span`
  margin-top: 10px; 
  font-size:14px;
  text-align: justify;
`;

export const Plus = styled.a`
  position: absolute;
  color: #fff;
  top: 200px;
  right: -25px;
  width:50px;
  height: 50px;
  border-radius: 50%;
  background-color: #373254;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size:18px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items:center;
`;
