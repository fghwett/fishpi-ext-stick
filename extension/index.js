/* eslint-disable no-unused-vars */

function activate(context, electron) {
    
}

function hooks() {
    return {
        async messageEvent(msg) {
            if (msg.type == 'msg') {
                msg.data.content = msg.data.content.replace(/<span class="kaibai">([^<]*?)<\/span>/g, `<details><summary onclick="this.parentNode.querySelector('img').src='https://sexy.1433.top/$1'">$1</summary><img data-action="preview" class="complate_span" title="神秘代码" alt="你来晚了"/></detail>`)
            }
            return msg;
        }
    }
}

module.exports = { activate, hooks }
