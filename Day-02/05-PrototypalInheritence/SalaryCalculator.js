/*
Create a "SalaryCalculator" class
    - attributes
        * basic
        * hra
        * da
        * tax I(%)
        * salary (default = 0)
    - method
        * calculate()
*/

function SalaryCalculator(){
    this.basic =0;
    this.hra = 0;
    this.da = 0;
    this.tax = 0;
    this.salary = 0;
}
SalaryCalculator.prototype.calculate = function(){
    var gross = this.basic + this.hra + this.da;
    this.salary = gross * ((100-this.tax)/100);
}
