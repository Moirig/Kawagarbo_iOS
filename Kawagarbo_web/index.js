
wx.onReady(function () {

})

function toAlert() {
    window.location.href = 'pages/alert/alert.html'
}

function toGoback() {
    window.location.href = 'pages/goback/goback.html'
}

function setTitle() {
    wx.setNavigationBarTitle({
        title: '当前页面'
    })
}

function getSystemInfo() {
    wx.getSystemInfo({
        success: function (res) {
            alert(JSON.stringify(res))
        }
    })
}