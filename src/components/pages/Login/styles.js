import styled from 'styled-components';

export const ContentIndex = styled.div`    
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    background-image: url("static/img/covid-bg.svg");
    background-color: #4156fa;
    background-repeat: repeat;    
    background-position: center;
    background-size: cover;
    & .container.custom{
      max-width: 600px;
      box-shadow: 0px 0px 3px 3px #293aad;
      padding: 0px;
      background-color: #ffffff;      
    }
`;

export const LeftPanel = styled.div`
    background-color: blue;
`;

export const RightPanel = styled.div`
  background-color: white;    
`;

export const Header = styled.div`
  background-color: #394fe4;
  //background-image: url("static/img/covid-bg.svg");
  //background-repeat: repeat;
  //background-position: 0;
  //background-size: contain cover;
  width: 100%;
  min-height: 70px;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  justify-content: left;
  & .logo {  
    width: 70px;    
    margin-right: 15px;
  }
  & .title{
    color: #ffffff;
    font-size: 1.7em;
    margin: 0;
  }
`;
export const Body = styled.div`
  display: block;
  padding: 15px 30px;
  
  & .success{
    background-color: #b3ffca;
    border-radius: 3px;    
  }
  
  &.login{
    padding-top: 35px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;