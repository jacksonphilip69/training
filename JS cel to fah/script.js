function conv()
{
    var cel = parseFloat(document.getElementById('a').value)
    var temp=((cel*(9/5)) + 32)
    document.getElementById('b').value = temp
 
}
 
function fah(){
    var fah = parseFloat(document.getElementById('c').value)
    var temp2  = ((fah-32)*(5/9))
    document.getElementById('d').value = temp2
}
