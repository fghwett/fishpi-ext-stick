/* eslint-disable no-unused-vars */
const path = require('path');
const { LocalStorage } = require('node-localstorage');

let localstorage = new LocalStorage(path.resolve(__dirname, "local"));
let settings = localstorage.getItem('setting');
settings = settings ? JSON.parse(settings) : null;

function activate(context, electron) {
  context.on('command', (command, args, callback) => {
    switch(command) {
        case 'fishpi.get.setting':
        {
            let rsp = settings
            callback(rsp);
            break;
        }
        case 'fishpi.set.setting':
        {
            settings = args
            localstorage.setItem('setting', JSON.stringify(settings));
            break;
        }
    }
})
}

function getSettingUrl() {
    let Url = process.env.EXT_ENV == 'development' ? 
        "http://127.0.0.1:8080" :
        path.join(__dirname, "..", "dist", "index.html");
    return Url;
}

function hooks() {
    return {
        async messageEvent(msg) {
            if (msg.type == 'msg' && settings.enable) {
                if (settings.click) msg.data.content = msg.data.content.replace(/<span class="kaibai">([^<]*?)<\/span>/g, `<details><summary onclick="this.parentNode.querySelector('img').src='https://sexy.1433.top/$1?token=${settings.cdkey}'">$1</summary><img data-action="preview" class="complate_span" title="神秘代码" alt="你来晚了"/></detail>`)
                else msg.data.content = msg.data.content.replace(/<span class="kaibai">([^<]*?)<\/span>/g, `<details><summary>$1</summary><img data-action="preview" class="complate_span" title="神秘代码" alt="你来晚了" src="https://sexy.1433.top/$1?token=${settings.cdkey}"/></detail>`)
            }
            return msg;
        }
    }
}
module.exports = { activate, getSettingUrl, hooks }