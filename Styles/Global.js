import {createGlobalStyle} from 'styled-components'

 const GlobalStyles = createGlobalStyle
`
*,
*::after,
*::before{
    box-sizing: border-box;
}

body{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
    background:${ ({theme}) => theme.background};
    color:${ ({theme}) => theme.color};
    padding:0;
    margin:0;
    transition:all 0.25s linear;
}

.canvas{
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    padding: 1rem;
    max-width: 100vw;
  }
  
  .type-box{
    display: block;
    max-width: 1000px;
    height: 150px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    position: relative;
   
  }

  .words{
    font-size: 28px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    font-family:Poppins,'san-serif';
    color:${ ({theme}) => theme.color};
  }
  
  .word{
    margin: 5px 5px;
    padding-right: 2px;
    scroll-margin: 4px;
  }
  .heading{
    font-family: Inter;
    color:#f4fffd;
    text-align:center;
}

.char.correct{
  color:#10B981;
}
.char.incorrect{
  color:#e63946;
}
.current{
  border-left: 1px solid;
  animation: blinking 2s infinite;
  animation-timing-function: ease;
  @keyframes blinking{
      0% {border-left-color:#fff;}
      25% {border-left-color:#293241;}
      50% {border-left-color:#fff;}
      75% {border-left-color:#293241;}
      100% {border-left-color:#fff;}
  }
}
.right{
  border-right: 1px solid;
  animation: blinkingRight 2s infinite;
  animation-timing-function: ease;
  @keyframes blinkingRight{
      0% {border-right-color:#fff;}
      25% {border-right-color:#293241;}
      50% {border-right-color:#fff;}
      75% {border-right-color:#293241;}
      100% {border-right-color:#fff;}
  }
}

.upper-menu{
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  // padding-left:0.5rem;
  justify-content: space-between;
  padding:1rem;
}
.time-mode{
  display: flex;
}
.time{
  font-size: 20px;
  margin-right: 15px;
}
.time:hover{
  color:red;
  cursor:pointer;
}
.counter{
  font-size: 20px;
}
.stats-box{
  display:flex;
  max-width:1000px;
  height:auto;
  margin-left:auto;
  margin-right:auto;
  position:relative;
}
.left-stats{
  padding:30px;
  width:30%;
}
.title{
  font-size: 20px;
  color: grey;
}
.subtitle{
  font-size: 30px;
  color: gold;
}
.right-stats{
  width:70%;
}

.hidden-input{
  opacity: 0;
}
.header{
  display: flex;
  width: 1000px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between
}
.footer{
  display: flex;
  width: 1000px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between
}
.theme-options{
  background:${ ({theme}) => theme.background};
  min-width: 100px;
}
.select{
 color: ${ ({theme}) => theme.color};
  min-width: 90px;
}

`
export default GlobalStyles;