let i = 0;
function callMeMoby (x, theFunction){
    while (i < x)
    {
        theFunction();
        i++;
    }
}
module.exports.callMeMoby = callMeMoby;