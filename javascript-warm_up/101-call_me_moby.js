let i = 0;
function iterate (x, theFunction){
    while (i < x)
    {
        theFunction();
        i++;
    }
}
module.exports.iterate = iterate;