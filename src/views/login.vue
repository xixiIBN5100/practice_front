<template>
<div class="background">
    <div class="contain">
        <div class="glass">
        </div>
    </div>
</div>
</template>

<style>
.background{
    width: 100vw;
    height: 100vh;
    background-color: #2fee0836 ;
}
.contain{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aqua;
}
.glass{
    height: 70vh;
    width: 30vw;
}
</style>