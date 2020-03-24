function takeValue(x)
{
    document.getElementById('window').value += x ;
}
function clearInput(y)                                //y gets the value ''
{
    document.getElementById('window').value =y;
}
function findResult()
{
    var  result=eval(document.getElementById('window').value);

    document.getElementById('window').value=result;

    console.log('Value After ', result);
}