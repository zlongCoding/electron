<template>
  <div id="app">
    <el-container>
      <el-header class="el-header">
        <div class="browser-title">
           <img src="./assets/logo.png" alt="" class="app-icon">
           <span class="app-name">novel1</span>
           <!-- <span class="app-title" >&nbsp;-&nbsp;{{title}}</span> -->
        </div>
        <div class="header-right">
         <button class="ctrl-icon minimize" title="最小化窗口"  @click="handleMinimize"></button>
         <button class="ctrl-icon maximize" title="最大化窗口" @click="handleMaximize"></button>
         <button class="ctrl-icon close" title="关闭窗口" @click="handleClose"></button>
        </div>
      </el-header>
      <el-aside>11</el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
    
  </div>
</template>

<script>
export default {
  name: "novel",
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

<style type="text/css">
#app {
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100%;
  border: solid 1px #181a1f;
}
::-webkit-scrollbar{
  width: 0;
  height: 0;
}

.browser {
  height: 100%;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px !important;
  background: #000;
  color: #fff;
  -webkit-app-region: drag;
  user-select: none;
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
</style>
