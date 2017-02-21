define([], function () {

    function sortNum(i, ii) {
        if (i > ii)
            return 1;
        else if (i < ii)
            return -1;
        else
            return 0;
    }

    return sortNum;

});