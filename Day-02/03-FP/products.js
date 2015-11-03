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


print("Sort", function(){
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

print("Filter", function(){
   print("Products", function(){
       print("by category = 1", function(){
           function filter(){
               var result = [];
               for(var i=0; i<products.length; i++)
                   if (products[i].category === 1)
                       result.push(products[i]);
               return result;
           }
           var category1Products = filter();
           console.table(category1Products);
       })
       print("by cost > 50", function(){
           function filter(){
               var result = [];
               for(var i=0; i<products.length; i++)
                   if (products[i].cost > 50)
                       result.push(products[i]);
               return result;
           }
           var costlyProducts = filter();
           console.table(costlyProducts);
       })
   });
   print("Any list by any category", function(){
       function filter(list, predicate){
           var result = [];
           for(var i=0; i<list.length; i++)
               if (predicate(list[i]))
                   result.push(list[i]);
           return result;
       };
       var category1Criteria = function(product){
           return product.category === 1;
       };
       var costlyProductCriteria = function(product){
           return product.cost > 50;
       };
       print("product by category === 1", function(){
           var category1Products = filter(products, category1Criteria);
           console.table(category1Products);
       });
       print("coslty produdcts [cost > 50]", function(){
           var costlyProducts = filter(products, costlyProductCriteria);
           console.table(costlyProducts);
       });

       function negate(criteria){
           return function(){
               return !criteria.apply(this, arguments);
           };
       }

       /*var affordableProductCriteria = function(product){
           return !costlyProductCriteria(product);
       }*/
       var affordableProductCriteria = negate(costlyProductCriteria);

       print("affordable produdcts [!costly]", function(){
           var affordableProducts = filter(products, affordableProductCriteria);
           console.table(affordableProducts);
       });
       /*var nonCategory1ProductCriteria = function(product){
           return !category1Criteria(product);
       };*/
       var nonCategory1ProductCriteria = negate(category1Criteria);

       print("non category 1 products", function(){
           //var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
           var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
           console.table(nonCategory1Products);
       });
   })
});
