import styled from "styled-components"

export const Container = styled.div`
  position: relative;
`

export const LeftData = styled.div`
position: absolute;
width: 588px;
height: 960px;
left: 0px;
top: 0px;
background: #000000;
`

export const RightData = styled.div`
position: absolute;
width: 1315px;
height: 960px;
left: 588px;
top: 0px;
background: #F5F5F5;

`

export const Title = styled.div`
position: absolute;
width: 246px;
height: 88px;
left: 171px;
top: 415px;

font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 72px;
line-height: 88px;
color: #FFFFFF;

`

export const RightContainer = styled.div` margin-left: 800px;`

export const Sign = styled.div`
/* Sign In */


position: absolute;
width: 131px;
height: 44px;
left: 322px;
top: 110px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 44px;

/* identical to box height */


color: #000000;


`

export const SignInTag = styled.div`
position: absolute;
width: 161px;
height: 19px;
left: 322px;
top: 165px;

font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 580;
font-size: 16px;
line-height: 19px;

color: #000000;
`

export const SignInWith = styled.div`display: flex;`

export const GoogleBtn = styled.button`

position: absolute;
padding: 0;
left: 24.5%;
right: 54%;
top: 30%;
bottom: 66%;
background: #FFFFFF;
border-radius: 10px;
flex: 1;
border:none;
cursor:pointer;
// background-color: yellow;
`
export const AppleBtn = styled.button`
border:none;
flex: 1;
position: absolute;
left: 48.5%;
right: 31%;
top: 30%;
bottom: 66%;

background: #FFFFFF;
border-radius: 10px;
cursor: pointer;
`

export const GoogleIcon = styled.img`
position: relative;
width: 20px;
margin-right: 150px ;
margin-top: 4px;
`

export const GoogleTag = styled.div`
position: absolute;
width: 118px;
height: 15px;
left: 40px;
top: 8px;


font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

/* Secondary Text */

color: #858585;
`
export const AppleIcon = styled.img`
position: relative;
width: 20px;

margin-right: 145px ;
margin-top: 0.5px;
`

export const AppleTag = styled.div`
position: absolute;
// width: 110px;
// height: 15px;
// left: 1083px;
// top: 362px;

width: 118px;
height: 15px;
left: 40px;
top: 8px;


font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

/* Secondary Text */

color: #858585;


`

export const LoginForm = styled.div`
position: absolute;
left: 24.5%;
right: 10%;
top: 38%;
bottom:23%;
width:45%;
background:#FFFFFF;
border-radius: 20px;
// margin-top: -10px
`
export const EmailTag = styled.div`
position: absolute;
// width: 96px;
// height: 19px;
left: 42px;
top: 45px;
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 550;
font-size: 16px;
line-height: 19px;

color: #000000;
`
export const EmailInput = styled.input`
border:none;
position: absolute;
left: 7%;
right: 9%;
top: 20%;
bottom: 67%;


// background-color:yellow;
background: #F5F5F5;
border-radius: 10px;
`
export const PasswordTag = styled.div`
position: absolute;
// width: 68px;
// height: 19px;
left: 42px;
top: 155px;

font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 550;
font-size: 16px;
line-height: 19px;

color: #000000;

`
export const PasswordInput = styled.input`
border:none;
position: absolute;
left: 7%;
right: 9%;
top: 49%;
bottom: 38%;

/* Field color (darker) */

background: #F5F5F5;
border-radius: 10px
`
export const ForgetPassword = styled.div`
position: absolute;
width: 124px;
height: 19px;
left: 8%;
top: 260px; 

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* Link */

color: #346BD5;

`

export const SignInButton = styled.button`
position: absolute;
left: 7%;
right: 9%;
top: 79%;
bottom: 8%;
background: #000000;
border-radius: 10px;
cursor: pointer;
`

export const SignInButtonTag = styled.div`
position: absolute;
width: 101.96px;
height: 21.71px;
left : 200px;
top: 14px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
text-align: center;

color: #FFFFFF;
// background-color: green;
`

export const SignupSuggestion = styled.div`
position: absolute;
// width: 265px;
// height: 19px;
left: 33.3%;
top: 80%;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;

/* Secondary Text */
// background-color: green;
color: #858585;
`