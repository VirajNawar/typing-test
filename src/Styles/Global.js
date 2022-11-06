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
    color:${ ({theme}) => theme.title};
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
    width: 100vw;
  }
  
  .type-box{
    display: block;
    max-width: 1000px;
    height: 150px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: 8px;
    border-radius: 15px;
    background-color: ${ ({theme}) => theme.upperBg};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }

 
  

  .words{
    font-size: 24px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    font-family:Poppins,'san-serif';
    color:${ ({theme}) => theme.typeBoxText};
  }
  
  .word{
    margin: 5px 5px;
    padding-right: 2px;
    scroll-margin: 4px;
  }
  .heading{
    font-family: Inter;
    text-align:center;
}

.logo{
  color: ${ ({theme}) => theme.title};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;

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
    0% {border-right-color:${ ({theme}) => theme.title};}
    25% {border-right-color:${ ({theme}) => theme.background};}
    50% {border-right-color:${ ({theme}) => theme.title};}
    75% {border-right-color:${ ({theme}) => theme.background};}
    100% {border-right-color:${ ({theme}) => theme.title};}
}
}
.right{
  border-right: 1px solid;
  animation: blinkingRight 2s infinite;
  animation-timing-function: ease;
  @keyframes blinkingRight{
      0% {border-right-color:${ ({theme}) => theme.title};}
      25% {border-right-color:${ ({theme}) => theme.background};}
      50% {border-right-color:${ ({theme}) => theme.title};}
      75% {border-right-color:${ ({theme}) => theme.background};}
      100% {border-right-color:${ ({theme}) => theme.title};}
  }
}

.upper-menu{
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding:1rem;
  color: ${ ({theme}) => theme.typeBoxText};
  background-color: ${ ({theme}) => theme.upperBg};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.modes{
  background-color: ${ ({theme}) => theme.modesBg};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
}
.time-mode,
.word-mode{
  display: flex;
  column-gap:10px;
}
.time{
  font-size: 20px;
  margin-right: 15px;
}

.no-of-words,
.time,
.counter{
  background-color: ${ ({theme}) => theme.background};
  padding: 10px;
  border: 3px solid ${ ({theme}) => theme.typeBoxText};
  border-radius: 50%;
  font-weight: 500;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

}

#time:hover,
#words:hover{
   background-color: ${ ({theme}) => theme.hoverBg}; 
   color: ${ ({theme}) => theme.hoverColor}; 
  padding: 3px ;

}


.no-of-words{
  font-size: 20px;
  margin-right: 15px;
}
.time:hover,
.no-of-words:hover,
.counter:hover{
  background-color: ${ ({theme}) => theme.hoverBg}; 
  border: 3px solid ${ ({theme}) => theme.modesBg};
  color:${ ({theme}) => theme.hoverColor};
  cursor:pointer;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

}

.heading-words,
.heading-time{
  font-family: Inter;
  font-size: 20px;
    text-align:center;
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
  column-gap:25px;
}
.left-stats{
  padding:30px;
  width:30%;
}
.title{
  font-size: 20px;
  color: ${ ({theme}) => theme.typeBoxText};
}
.subtitle{
  font-size: 30px;
  color: ${ ({theme}) => theme.title};
}
.right-stats{
  width:67%;
  padding:15px;
}

.left-stats,
.right-stats{
  background-color: ${ ({theme}) => theme.upperBg};
  font-family: 'Inter',sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 15px;
}

.hidden-input{
  opacity: 0;
}



.header{
  display: flex;
  width: 100%;
  height: 60px;
  align-items:center;
  justify-content: space-between;
  // background: ${ ({theme}) => theme.upperBg};
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

}
.footer{
  display: flex;
  width: 1000px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
}

.actual-footer{
  display: flex;
 column-gap: 100px;
 align-items: center;
}

.tab{
  background-color: ${ ({theme}) => theme.upperBg};
  padding: 5px 10px;
  border-radius: 5px ;
  color: ${ ({theme}) => theme.typeBoxText};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}


.theme-options{

  background:transparent;
  min-width: 100px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.select{
 color: ${ ({theme}) => theme.color};
  min-width: 90px;
}

.footer-links a{
  color: black;
}

.footer-links a:hover{
  color: ${ ({theme}) => theme.linkHover};
}

.reset-btn{
  display:block;
  margin:auto;
  transform: scale(1.5);
}
.reset-btn:hover{
  cursor:pointer;
  transform: scale(1.5);
}
.user-profile{
  width:1000px;
  margin:auto;
  display:flex;
  min-height:15rem;
 background:  ${ ({theme})=> theme.upperBg };
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

}
.user{
  display:flex;  
  flex-direction: column;
  gap:18px;
  width:40%;
  justify-content:center;
  align-items:center;
  margin-top:30px;
  margin-bottom:30px;
  padding:1rem;
  border-right: 2px solid
}

.user-profile{
  font-family:'Poppins',san-serif;
  // font-size: 8px;
  margin-top:15px;

}

.joined-on{
  font-size:18px;
  margin-top:3px;
}
.result-graph, .table{
  width:1000px;
  margin:auto;
  background:  ${ ({theme})=> theme.upperBg };
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.result-graph{
  margin-top:15px;
  margin-bottom:15px; 
}

.table{
  border: 2px solid ;
}

.picture{
  position:relative;
  width:50%;
  min-height:5rem;
  min-width:5rem;
}
.info{
  width:50%;
  margin-top:1rem;
  text-align:center;
  padding:1rem;
  font-size:1.5rem;
}
.central-data{
  width:1000px;
  margin: auto;
  margin-top:2rem;
  margin-bottom: 3rem;
}
.total-times{
  width:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:3rem;
}
.central-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
a{ 
  color: inherit; 
  text-decoration: none;
} 

.instruction{
  color: ${ ({theme})=> theme.title };
}

`
export default GlobalStyles;