<template>
  <div class="layout">
    <p><input placeholder="设置 CDKEY，申请 CDKEY 请聊天室发送：凌 CDKEY" v-model="setting.cdkey" style="width:100%" /></p>
    <p><input class="pretty" type="checkbox" id="enable_stick" v-model="setting.enable"/><label for="filter_tail">开启解析小飞棍</label></p>
    <p><input class="pretty" type="checkbox" id="click_stick" v-model="setting.click"/><label for="add_tail">点击时解析小飞棍</label></p>
    <p><input class="pretty" type="checkbox" id="save_stick" v-model="setting.save"/><label for="add_tail">自动保存解析的图片</label></p>
    <p><input placeholder="保存路径，不填写将保存在扩展目录下的 download" v-model="setting.path" style="width:100%" /></p>
    <p><button @click="save">设置</button></p>
    <p>{{error}}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      setting: {
        enable: true,
        click: true,
        save: false,
        cdkey: '',
        path: '',
      },
      error: ''
    }
  },
  computed: {
  },
  async mounted() {
    // eslint-disable-next-line no-undef
    let setting = await $ipc.invoke('fishpi.get.setting');
    if (setting) this.setting = setting;
  },
  methods: {
    save() {
      // eslint-disable-next-line no-undef
      $ipc.send('fishpi.set.setting', this.setting);
      this.error = '设置成功';
      setTimeout(() => this.error = '', 2000);
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  padding: 10px;
  textarea {
    width: 100%;
  }
  button {
    width: 100%;
    background: var(--global-active-color);
    border: none;
    padding: 10px;
    color: inherit;
    cursor: pointer;
  }
  .form-flex {
    display: flex;
  }
  .form-input {
      padding: 5px;
      height: 30px;
      flex: 1;
      line-height: 30px;
      margin-left: 5px;
      border: 1px solid var(--global-background-color);
      &:focus {
          outline: 0;
      }
  }
}
</style>

