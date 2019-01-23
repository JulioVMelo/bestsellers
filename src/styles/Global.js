import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

img,
object,
embed,
video,
iframe {
	max-width:100%;
	height: auto;
}

a {
  text-decoration:none;
  color:inherit;
  
    &:hover {
      text-decoration: none;
  }
}

ul {
	list-style:none;
}

body {
  background-color: #F4F6F9;
  font-family: "Helvetica neue", sans-serif;
}

.Books {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 200px;
  margin-top: -450px;
  min-width:350px;
  
  @media screen and (max-width: 900px){
    padding: 30px 0px;
  }
}
`;

export default GlobalStyle;
