import styled from 'styled-components';
import bgBoxTitle from '../../assets/images/bg-boxTitle-min.png';
import bgHeader from '../../assets/images/bgHeader-min.png';

export const HeaderUI = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px;
  padding: 30px 200px;
  background-image: url(${bgHeader});
  background-position: center;
  background-size: cover;
  background-blend-mode:multiply;
  color: #fab706;
  min-width: 350px;
  
  @media screen and (max-width:900px){
    padding: 20px 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
  width: 100%;
  
  span {
    font-size:18px;
  }
`;

export const Menu = styled.div`
  ul {
    display: flex;
    align-items: center;
    
    li {
      margin-right:20px;
      
      &:last-of-type {
        margin-right: 0;
      }
    }
    
    img {
      width: 25px; 
    }     
     
  }  
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 280px;
  margin-top: 100px;
  background-image: url(${bgBoxTitle});
  background-position: top;
  background-size: cover;
  background-blend-mode:multiply;
  
  h2 {
    font-size: 40px;
    font-family: serif;
    letter-spacing: 2px;
    
    span {
      color: #fff;
    }
  }
`;
