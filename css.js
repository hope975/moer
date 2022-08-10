const string = `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.face {
    top: 5vh;
    border:5px solid black;
    width: 300px;
    height: 300px;
    position: relative;
    left: 50%;
    margin-left: -150px;
    border-radius: 50%;
}
.nose {
    border: 5px solid black;
    width: 92px;
    height: 92px;
    left: 50%;
    top: 50%;
    margin-left: -46px;
    margin-top: -46px;
    position: absolute;
    border-radius: 50%;
    z-index: 22;
}
@keyframes eyeMove {
    0% {
        transform: translateX(0px);
}

    50% {
        transform: translateX(5px) translateY(2px);
}

    100% {
        transform: translateX(-5px) translateY(-2px);
}
}
.eye{
    border: 3px solid black;
    position: absolute;
    height: 64px;
    width: 42px;
    border-radius: 50%;
    top: 66px;
    background: black;
    animation: eyeMove 2000ms linear alternate infinite;
}
.eye.right{
    right: 70px;
}
.eye.left{
    left: 70px;
}
@keyframes eyeballMove{
    0%{
        transform: scaleX(1.2) translateX(0px) translateY(10px);
}
    25%{
        transform: scaleX(1.1) translateX(-10px) translateY(20px);
}
    50% {
        transform: scale(0.90) translateX(-10px) translateY(20px);
}
    100%{
        transform: scale(0.80) translateY(10px);
}
}

.eyeball{
    width: 10px;
    height: 20px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 8px;
    right: 5px;
    animation: eyeballMove 2000ms infinite alternate linear;
}
.nose::after,.nose::before{
    content: '';
    position: absolute;
    border: 3px solid black;
    border-radius: 50%;
    width: 112px;
    height: 70px;
    border-bottom: transparent;
    border-right: transparent;
    border-left: transparent;
}
.nose::after {
    right: 82px;
    top: 28px;
    transform: rotateY(18deg);
    animation: noseMove 1000ms linear alternate i;
}
.nose::before {
    left: 82px;
    top: 28px;
    transform: rotateY(-18deg);
}
@keyframes mouth_active{
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
}
.mouth {
    position: absolute;
    height: 90px;
    width: 86px;
    left: 50%;
    margin-left: -43px;
    top: 200px;
    overflow: hidden;
    animation: mouth_active 3000ms  infinite;
}
.circle1 {
    width: 86px;
    height: 10px;
    border: 3px solid black;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    border-top: none;
}
.circle2{
    width: 86px;
    height: 80px;
    position: absolute;
    top: 0px;
    border: 3px solid black;
    border-radius: 0 0 50% 50%/20% 0 100% 100%;
    border-top: none;
}
.circle3{
    width: 48px;
    height: 14px;
    border: 3px solid black;
    border-radius: 0 0 50% 50%/65% 0 100% 100%;
    border-top: none;
    position: absolute;
    top: 8px;
    left: 50%;
    margin-left: -25px;
}
.circle4{
    width: 64px;
    height: 16px;
    border: 3px solid black;
    border-radius: 50% 50% 0 0/100% 100% 0 0;
    position: absolute;
    left: 50%;
    top: 45px;
    margin-left: -32px;
    border-bottom: none;
}
`
export default string;