startSet()
function startSet() {
    $('.window img:nth-child(1)').addClass('enter')
        .siblings().addClass('stay')
}


var index = $('.window img').length
var n = 0
var timer = setInterval(function () {
    let tarGet = n % index + 1
    let next = n % index + 2
    if (next === 5) {
        next = 1
    }
    n += 1

    $('.window img:nth-child(' + tarGet + ')').removeClass('enter').addClass('leave')
    $('.window img:nth-child(' + tarGet + ')').one('transitionend', function () {
        $('.window img:nth-child(' + tarGet + ')').removeClass('leave').addClass('stay')
    })
    $('.window img:nth-child(' + next + ')').removeClass('stay').addClass('enter')
}, 2000)