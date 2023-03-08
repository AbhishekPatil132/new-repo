
function bg(){
    var data = document.getElementById('color').value;
    document.getElementById('h1').innerText = "DONE !! "+data;
    //document.getElementById('h1').style.cssText = "background-color:red;";
}

var count = 0;

    var link = document.getElementById('link');
    link.onclick = function(){
        count++;
        document.getElementById('p').innerText = "Total number of clicks: "+count;
    }




