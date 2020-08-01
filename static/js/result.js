function showChange(num){
    var real_num = parseInt(num, 10);
    
    for(var i = 5; i <= real_num; i += 5){
        var childs = document.getElementsByClassName("upto"+i.toString(10));
        for(k = 0; k < childs.length; k++) {
            childs[k].style.display = 'table-row';
        }
    }
    for(var j = real_num + 5; j <= 30; j += 5){
        var childs = document.getElementsByClassName("upto"+j.toString(10));
        for(l = 0; l < childs.length; l++) {
            childs[l].style.display = 'none';
        }
    }
}

function new_modalOpen(){
    document.getElementById("new_info_modal").style.display="block";
  }
  
function new_modalClose(){
    document.getElementById("new_info_modal").style.display="none";
  }