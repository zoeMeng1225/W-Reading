import styled from 'styled-components';

export const LoginWrapper = styled.div`  
    width: 100%;
    height: 100vh;
    position:absolute;
    background: #f1f1f1;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
`;


export const LoginBox = styled.div`  
    width: 20em;
    border-radius: 8px;
    background: #fff;
    margin: 10em auto;
    box-shadow: 5px 5px 8px #d4d4d4;
    padding: 3em 2em;
    box-sizing: border-box;
    position:relative;

    .title-box{
      text-align: center;
    }

    span{
      color: #d6d6d6;
    }

    .title-box span {
      margin: 0 .7em;
      font-size: 1.1em;
      color: #d6d6d6;
      cursor: pointer;
    }  

    span#highlight{
      color: #D47A21;
    }

    #cancel{
      position: absolute;
      top: 1.2em;
      right: 1.5em;
    }
`;

export const Input = styled.div` 
    display: grid;
    margin-top: 2em;
    border-radius: 8px;
    border: .5px solid #b5b5b5;
    
    
    input{
      height: 3.5em;
      border: transparent;
      background: #e5ecf3;
      padding: .5em 1em;
      box-sizing: border-box;
      border-radius: 8px;
    }

    #input1{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: .5px solid #b5b5b5;
    }

    #input2{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
`;
export const Button = styled.div`
    margin-top:2em;

    button{
      width:100%;   
      padding: .8em;
      border-radius: 8px;
      border: transparent;
      background: #6cb5f5;
      color: #fff;
    }
`;
