var products = [
    {id :6 , name : "Pen", cost : 50, units : 70, category : 2},
    {id :4 , name : "Hen", cost : 60, units : 80, category : 1},
    {id :9 , name : "Ten", cost : 40, units : 50, category : 1},
    {id :5 , name : "Den", cost : 80, units : 90, category : 2},
    {id :2 , name : "Zen", cost : 70, units : 40, category : 1}
];

/*
1. sort
2. filter
3. all
4. any
5. sum
6. countBy
7. min
8. max
9. reduce
10. transform
11. groupBy
*/

function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

print("Default List", function(){
    console.table(products);
});


print("Sorting", function(){
    print("Sorting products - default (id)", function(){
        function sort(list){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (list[i].id > list[j].id){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        sort(products);
        console.table(products);
    });
    print("Sorting any list by any attribute", function(){
        function sort(list, attrName){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        print("By name", function(){
            sort(products, "name");
            console.table(products);
        });
        print("By cost", function(){
            sort(products, "cost");
            console.table(products);
        });
    });
    print("Sorting any list by any comparer", function(){
        function sort(list, comparerFn){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (comparerFn(list[i], list[j]) > 0  ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        print("By value (cost * units)", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            }
            sort(products, productComparerByValue);
            console.table(products);
        });
    });
});
