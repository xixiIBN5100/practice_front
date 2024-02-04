<template>
    <div class="container">
    <div class="flexBox">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    </div>
    </div>
</template>

<style>
.flexBox{
    background-color: gray;
    height: 70vh;
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;/*space-around space-between*/
    align-items: center;/*flex-start 首对齐 flex-end 尾对齐*/
    flex-wrap: wrap; /*自动换行*/
    align-content: space-around;
}

.container { 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aqua;
}

.box {
    height: 20vh;
    width: 13vw;
    background-color:gray;
    display: flex;
    justify-content: space-evenly;/*space-around space-between*/
    align-items: center;/*flex-start 首对齐 flex-end 尾对齐*/
    box-shadow: inset 8px 8px 8px rgba(0,0,0,0.3),
                inset -8px -8px 8px rgba(255, 255, 255, 0.7),
                -10px -10px 10px rgba(0,0,0,0.4);
}

.box:hover{
    animation: text 0.5s ease forwards;
}
.box:hover::after{
    content: '把鼠标拿开';
}
.box:active{
    background-color: red;
}
.box:active::after{
    content: '谁tm叫你点我的';

}
@keyframes text {
    0%{
        transform: translateY(0);
        border-radius: 0;
    }
    100%{
        transform: translateY(10%);
        border-radius: 20px;
    }
}

</style>