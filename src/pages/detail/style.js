import styled from 'styled-components';


export const DetailWrapper = styled.div`  
    margin: 1em;
    width:100%;
    display: flex;
    font-size: .8em;
`;

export const DetailLeft = styled.div`  
    width: 100%;
    padding: 1em;
    height: 100%;
    background: #fbfbfb;
    margin-right:10px;

    .detailImg{
      width:12em;
      border-radius: 10px;
      display: block;
      margin-right: 1em;
    }
   
`;
export const DetailHeader = styled.div`
    color: #313131;
    display: flex;
    padding-bottom: 1.8em;
`


export const DetailRight = styled.div`  
    width: 40%;
    padding: 1em;
    background: #fbfbfb;
    margin-right: 2em;
`;

export const DetailTitle = styled.div` 
    line-height: 1.5;
    h3{
      font-size: 1.5em;
      font-weight: 600;
    }
    p{
      font-weight:100;
    }
    span{
      color: #D47A21;    
    }
    .fllow-icon{ 
      border: 0.5px solid #D47A21;
      padding: .2em 2em;
      width:fit-content;
      border-radius: 10px;
      font-size:.7em;
      text-align:center;
      color:#D47A21;
      margin-top:1em;
      height: fit-content; 
      cursor: pointer;
    }
`;

export const DetailContent = styled.div` 
    line-height: 1.5;
    color: #5d5d5d;
    h4{
      font-size: 1em;
      font-weight:600;
      margin-bottom: 1em;
    }
    p{
      line-height: 1.7;
    }
`;

export const DetailAuthorInfo = styled.div`
    display:flex;
    position: relative;
    border-bottom: 0.1px solid #c3c3c3;
    padding-bottom: 1em;
    font-size:.9em;
    .detailAvatar{
      width:3.5em;
      height:3em;
      border-radius:100%;
      display: block;
      margin-right:.5em; 
    }
    .authorInfoChildA{
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .authorInfoChild{
      line-height:1.5;
      width: 100%;
    }
    .authorInfoChild>h4{
      color: #313131;
    }
    .authorInfoChild>p{
      color: #5d5d5d;
      font-weight:100;
      
    }
    .fllow-span{
      border: 0.5px solid #D47A21;
      padding: .2em .9em;
      border-radius: 10px;
      font-size: .8em;
      text-align: center;
      color: #D47A21; 
      height: fit-content;
      cursor: pointer;
    }
    
`

export const SuggestReading = styled.div`
    padding: 1.5em 0;
    color: #313131;
    font-weight: 600;
`

export const RelatedList = styled.div`
    margin-top:1em;
    line-height:1.5
    font-weight:100;

    li{
      color: #313131;
      display: grid;
      font-weight:500;
      margin: .5em 0;

    }

    span{
      font-weight:100;
      color: #5d5d5d;
      font-size:.85em;
    }
    
`


