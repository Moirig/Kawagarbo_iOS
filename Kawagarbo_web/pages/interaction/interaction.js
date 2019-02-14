
function showToastTitle() {
    wx.showToast({
        icon: 'none',
        title: '标题标题标题'
    })
}

function showToastSuccess() {
    wx.showToast({
        icon: 'success',
        title: '标题标题标题'
    })
}

function showToastFail() {
    wx.showToast({
        icon: 'fail',
        title: '标题标题标题'
    })
}

function showToastImage() {
    wx.showToast({
        image: 'testImage.png',
        title: '标题标题标题'
    })
}

function showToastLoading() {
    wx.showToast({
        icon: 'loading',
        title: '加载中...'
    })
}

function showLoading() {
    wx.showLoading({
        title: ''
    })
}

function hideToast() {
    wx.hideToast()
}

function hideLoading() {
    wx.hideLoading()
}

function showModal() {
    wx.showModal({
        title: 'title',
        content: 'content'
    })
}

function showActionSheet() {
    wx.showActionSheet({
        itemList: ['a', 'b', 'c'],
        success: function (res) {
            alert(JSON.stringify(res))
        },
        fail: function (res) {
            alert(JSON.stringify(res))
        }
    })
}