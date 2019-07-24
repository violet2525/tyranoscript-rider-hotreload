(function(){
    var _nw = require("nw.gui")
    if(global.__hotreload === undefined){
        global.__hotreload = {
			"rider": global.__nwWindowsStore["1"],
			"game" : _nw.Window.get(),
        }
    }
    window.rWin = global.__hotreload["rider"];
    window.gWin = global.__hotreload["game"];

    var option = {
        key : tyrano.plugin.kag.variable.tf._hotreload.key,
        active : function() {
            // キー登録　ティラノライダーの「ゲーム開始」ボタンクリック
            rWin.window.$(".button_preview")[0].click()
        },
        failed : function(msg) {
            // キー登録失敗時
            console.log(msg);
        }
    };

    var shortcut = new _nw.Shortcut(option);
    
    // 一旦登録削除してから登録
    _nw.App.unregisterGlobalHotKey(shortcut)
    _nw.App.registerGlobalHotKey(shortcut);
    

    //終了処理
    if(gWin){

        gWin.on("close", function(){
            global.__hotreload = undefined
            _nw.App.unregisterGlobalHotKey(shortcut)
            gWin.close(true)
        });
    
    }

})()

