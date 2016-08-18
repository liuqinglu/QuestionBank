/**
 * Created by Administrator on 2016/8/17 0015.
 */
//打印试题
function printme() {
    document.body.style.paddingTop = "0px";
    document.body.innerHTML = document.getElementById('printArea').innerHTML;
    window.print();
    window.location.reload();
}