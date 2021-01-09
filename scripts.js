// var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
// var collapseList = collapseElementList.map(function (collapseEl) {
//   return new bootstrap.Collapse(collapseEl)
// })



$(document).ready(function(){
 
    if(window.innerWidth < 768){
        $('.btn').addClass('btn-sm');
    }
 
});