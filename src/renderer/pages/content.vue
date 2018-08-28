<template>
  <section class="section">
     <div class="page_content">aaaaa</div>
     <el-row class="page_next">
  <el-button>上一张</el-button>
  <el-button>目录</el-button>
  <el-button>下一章</el-button>
</el-row>
  </section>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style  scoped>

.page_content{
    height: calc(100vh - 150px);
    background: #eee;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
}
 .page_next{
     text-align: center;
 }
</style>

