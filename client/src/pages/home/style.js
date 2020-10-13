import styled from 'styled-components';

export const HomeWrapper = styled.div`
  margin: 1em 3em;
  height: 100vh;
  display: flex;
`;

export const HomeLeft = styled.div`
  width: 100%;
  padding: 1em;
  .banner-img{
    width: 100%;
    border-radius: 5px;
  }
`;

export const HomeRight = styled.div`
  width: 40%;
  padding: 1em;
`;

export const WriterWrapper = styled.div`
  margin-bottom: 1em;
`

export const WriterUp = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  color: #5d5d5d;
  div{
    font-size: .7em; 
    cursor: pointer;
    color: #909090;
  }
  span{
    font-size: .8em; 
  }

  .auUpdata{
    margin-right: .2em
  }
`;

export const WriterDown = styled.div`
  padding: 1em 0;
  display: flex;
  font-size:.7em;
  color: #5d5d5d;
  position: relative;
  font-weight: 300;
  h4{
    color: #000;
    font-weight: 500;
  }
  img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  .writerInfo{
    margin: 0 5px;
    line-height: 1.5;
  }

  .follow{
    position: absolute;
    font-size: .8em;
    display: flex;
    line-height: initial;
    color:#D47A21;
    top:0.3em;
    right: 1px;
  }
`;

export const WriterAll = styled.div`
  margin: 1em 0;
  button{
    border: 0.5px solid #dadada;
    width: 100%;
    color: #545454;
    border-radius: 10px;
    padding: .9em;
    font-size: .7em;
    cursor: pointer; 
    background: #f1f1f1;
  }
`

export const TopicWrapper = styled.div`
 width: 100%;
 display:flex;   
 padding:20px 0;
 box-sizing: content-box;
 flex-wrap: wrap; 
 font-size: .5em;
 border-bottom: .5px solid #dedede;

`;

export const TopicItem = styled.div`
  padding: .1em .5em .1em .1em;
  margin-right: 1em;
  margin-bottom: 1em;
  color: #545454;
  display: flex;
  word-wrap:break-word;
  border-radius: 5px;
  border: 0.5px solid #e4e4e4;
  height: 3em;
  word-break:break-all;
  line-height: 3;
  overflow: hidden;
  box-sizing: content-box;

  .lableImage1{
    width:30px;
    display: block;
    border-radius: 5px;
    margin-right: 5px;
  }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: .5px solid #dedede;
    color: #1f1f1f;
    display: flex;
    height: 5em;

    .listImg{
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 8px;
    }
`;

export const ListInfo = styled.div`
  line-height: 1.5;
  padding-right: 1em;
  overflow: hidden;
  width: 100%;
  
  h3{
    font-weight: 600;
  }

  p{
    font-size: 16px;
    font-weight: 100;
    color: #5d5d5d;
  }
  #author{
    font-weight: 500;
    font-size: 15px;
  }
  span{
    color: #D47A21;
    font-weight:100;
  }
`;

export const RecommendWrapper = styled.div`
  
`

export const LoadMore = styled.div`
   width: 95%;
   margin: 2em 0;
   border: 0.5px solid #dadada;
   padding: .9em;
   border-radius: 10px;
   font-size: .7em;
   color: #545454;
   text-align: center;
   cursor: pointer; 
   background: #f1f1f1;
`

export const BackTop = styled.div`
    background: #f1f1f1;
    border: 0.5px solid #dadada;
    border-radius: 10px;
    text-align: center;
    padding: 1em;
    position: fixed;
    right: 1.5em;
    bottom: 1em;
    font-size: .8em;
`