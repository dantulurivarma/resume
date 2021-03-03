import { keyframes} from "styled-components"

export const moveInLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-20rem);
}

100% {
  opacity: 1;
  transform: translate(0);
}`;

export const moveIn= keyframes`
0% {
  opacity: 0;
  transform: translateY(-100px);
}

100% {
  opacity: 1;
  transform: translate(0);
}`;

export const moveOut= keyframes`
0% {
  opacity: 0;
  transform: translateY(20px);
}

100% {
  opacity: 1;
  transform: translate(0);
}`;


export const moveInNav= keyframes`
0% {
  // background-color: rgb(12, 12, 12);
  transform: translateY(-20rem);
}
50% {
  opacity: 0.7
}
90% {
  opacity: 0.9
}
100% {
  opacity: 1;
  // background-color: transparent;
  transform: translate(0);
}`;


export const moveOutNav = keyframes`
0% {
 opacity : 0.1
}

30% {

}

100% {
  opacity: 1;
  transform: translateY(-20rem);
}`;