/*
REVOEMAG STARTING PAGE'S SCRIPTS
BY: ZzP 2018/2019 INF
VERSION: 1.1*/
let infosMenuButton = document.getElementById('infosMenuButton');
let hrDividionTopAndMain = document.getElementById('hrDividionTopAndMain');
let infosMenuSpan = document.getElementById('infosMenuSpan')
function Dropdown() {
  if (hrDividionTopAndMain.style.display === "none") {
    hrDividionTopAndMain.style.display = "block";
  }else{
    hrDividionTopAndMain.style.display = "none";
  }
  infosMenuSpan.innerHTML='<ul><li>wikipedia</li><li>github repo</li><li>help</li><li>bug report</li><ul>'
}
