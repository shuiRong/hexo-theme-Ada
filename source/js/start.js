(function(){
    //运行highlight.js
    hljs.initHighlightingOnLoad();
    //根据屏幕
    var width = document.documentElement.clientWidth;
    if(width < 500){
        $('#postContainer').css({
            'width': width * 0.9 + 'px',
            'margin': '10px auto'
        })
    }

})();