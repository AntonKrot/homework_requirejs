requirejs(["arr", "sort"],
    function (getArrow, sortNum) {
        var resArr = getArrow(12);
        console.log(resArr.sort(sortNum));

});
