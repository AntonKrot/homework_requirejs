define([], function () {
    function getArrow(number){
        var arr = [];
        for (i = 0; i < number; i++) {
            var value = Math.floor(Math.random() * 10);
            arr.push(value);
        }
        return arr
    }
   return getArrow;

});