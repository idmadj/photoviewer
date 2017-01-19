var exec = require('cordova/exec');

exports.show = function(url, title, options, callback) {
    if( title == undefined ) {
      title = '';
    }

    if(typeof options == "undefined"){
        options = {};
    }

    exec(callback, function(){}, "PhotoViewer", "show", [url, title, options]);
};
