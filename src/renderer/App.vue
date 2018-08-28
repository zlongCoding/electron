<template>
  <div id="app">
    <el-header class="el-header">
        <div class="browser-title">
           <img src="./assets/novel.jpg" alt="" class="app-icon">
           <span class="app-name">novel1</span>
        </div>
        <div class="header-right">
         <button class="ctrl-icon minimize" title="最小化窗口"  @click="handleMinimize"></button>
         <button class="ctrl-icon maximize" title="最大化窗口" @click="handleMaximize"></button>
         <button class="ctrl-icon close" title="关闭窗口" @click="handleClose"></button>
        </div>
      </el-header>
    <el-container class="container">
      <el-aside width="180px">
         <my-aside></my-aside>
      </el-aside>
      <div class="novel_content">
          <router-view></router-view>
      </div>
    </el-container>
    <p class="footer">个人项目不用于任何商业用途</p>
  </div>
</template>

<script>
import myAside from "./pages/aside.vue"
export default {
  name: "novel",
  components: {
    myAside
  },
  methods: {
    currentWindow() {
      return this.$electron.remote.getCurrentWindow()
    },
    handleMinimize() {
      var win = this.currentWindow()
      win.minimize()
    },
    handleMaximize() {
      var win = this.currentWindow()
      if (win.isMaximized()) {
        win.unmaximize()
      } else {
        win.maximize()
      }
    },
    handleClose() {
      let win = this.currentWindow()
      this.$confirm("你确定要关闭novel客户端吗？?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          win.close()
        })
        .catch(() => {})
    }
  }
};
</script>

<style type="text/css" scoped>
#app {
  margin: 0 auto;
  width: 100%;
  height: 100%;
 
}
.el-container{
  display: flex;
   height: calc(100vh - 30px);
}
.container{
  padding-top:40px;
}
::-webkit-scrollbar{
  width: 0;
  height: 0;
}
.novel_content{
  width: calc(100% - 180px);
  padding: 0 10px;
  background: #333;
}
.browser {
  height: 100%;
}
.el-header {
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 40px !important;
  background: #000;
  color: #fff;
  -webkit-app-region: drag;
  user-select: none;
  top: 0;
  z-index: 9999;
}

.app-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-top: -5px;
  margin-right: 5px;
  -webkit-app-region: no-drag;
}

.app-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-top: -5px;
  margin-right: 5px;
  -webkit-app-region: no-drag;
}

.ctrl-icon {
  display: inline-block;
  outline: none;
  border: none;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background: #bfbfbf;
  -webkit-app-region: no-drag;
}
.ctrl-icon:active {
  opacity: 0.7;
}
.ctrl-icon:last-child {
  margin-right: 0;
}
.ctrl-icon.minimize {
  background: #35cb4b;
}
.ctrl-icon.maximize {
  background: #fdbd41;
}
.ctrl-icon.close {
  background: #fc625d;
}
.footer{
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #333;
}
</style>
