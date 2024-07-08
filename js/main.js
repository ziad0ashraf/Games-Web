/// <reference types="../@types/jquery"/>
import { games } from "./games.js";
new games()
$('header').animate({height:'30vh'},1000,()=>{
    $('.col-lg-3').slideDown(1500)
})

$('#openSearch').on('click', () => {
    $('#search').addClass('d-flex').fadeIn(1000, () => {
        $('#search').animate({ width: '75%' },1000, () => {
            $('#openSearch').slideUp(1000)
        })
    })
})

$('goUp').on('click',()=>{
    $('html').animate({scrollTop:0},1000)
})











