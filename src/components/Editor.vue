<template>
  <div class="main">
    <input class="title" type="text" placeholder="标题"/>
    <textarea class="content" placeholder="想说的..."></textarea>
    <button class="submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'editor'
}
</script>

<style lang="less" scoped>
.main {
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  .title {
    width: 600px;
    height: 40px;
    margin: 20px 0px;
    font-size: 24px;
    border-radius: 3px;
  }
  .content {
    width: 600px;
    height: 480px;
    resize: none;
    font-size: 16px;
    border-radius: 3px;
  }
  .submit {
    align-self: flex-end;
    margin: 20px 0px;
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    color: white;
    background: rgb(58, 139, 250);
  }
}

</style>
