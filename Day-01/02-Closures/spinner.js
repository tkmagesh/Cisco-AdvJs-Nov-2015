//Create an object and assign it to a variable "spinner"

//revealing module pattern
function createSpinner(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    }
}

var spinner = createSpinner();

//the object is expected to exhibit the following behavior

/*spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1*/

var spinnerFactory = (function(){
    function increment(){
        return ++this.__count;
    }
    function decrement(){
        return --this.__count;
    }
    return function(){
        return {
            __count : 0,
            up : increment,
            down : decrement
        }
    }
})();

var Spinner = (function(){
    function Spinner(){
        this.__count = 0;
    }
    Spinner.prototype.up = function(){
        return ++this.__count;
    }
    Spinner.prototype.down = function(){
        return --this.__count;
    }
    return Spinner;
})();

/*var spinnerFactory = (function(){

    function Spinner(){}
    Spinner.prototype.up = function(){
        return ++this.__count;
    }
    Spinner.prototype.down = function(){
        return --this.__count;
    }
    return function(){
        var result = {
            __count : 0
        };

        result.constructor = Spinner;
        Spinner.apply(result);
        return result;
    }
})();*/
