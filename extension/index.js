/* eslint-disable no-unused-vars */

function activate(context, electron) {
    
}

function hooks() {
    return {
        async messageEvent(msg) {
            if (msg.type == 'msg') {
                msg.data.content = msg.data.content.replace(/<span class="kaibai">([^<]*?)<\/span>/g, '<details><summary>$1</summary><img data-action="preview" src="https://sexy.1433.top/$1" class="complate_span" title="神秘代码" alt="你来晚了"/></detail>')
            }
            return msg;
        }
    }
}

module.exports = { activate, hooks }