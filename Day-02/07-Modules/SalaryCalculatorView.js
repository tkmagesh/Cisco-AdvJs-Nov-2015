 define(['SalaryCalculator','handlebars', 'text!calculatorTemplate.html','utils'], function(SalaryCalculator, Handlebars, calculatorTemplate){
    function SalaryCalculatorView(){
        var txtBasic = null,
            txtHra = null,
            txtDa = null,
            rangeTax = null,
            divResult = null,
            spanTax = null,
            btnCalculate = null,
            salaryTable = null,
            templateFn = null,
            currentCalculator = new SalaryCalculator(),
            calculators = [];

        this.init = function init(){
            btnCalculate = document.getElementById("btnCalculate");
            btnCalculate.addEventListener("click", onBtnCalculateClick);

            txtBasic = document.getElementById("txtBasic");
            txtHra = document.getElementById("txtHra");
            txtDa = document.getElementById("txtDa");
            rangeTax = document.getElementById("rangeTax");
            rangeTax.addEventListener("change", onRangeTaxChange);
            spanTax = document.getElementById("spanTax");
            divResult = document.getElementById("divResult");
            salaryTable = document.getElementById("list");


            templateFn = Handlebars.compile(calculatorTemplate);

        }
        function onRangeTaxChange(){
            spanTax.innerHTML = this.value;
        }
        function onBtnCalculateClick(){
            currentCalculator.basic = txtBasic.value.toInt();
            currentCalculator.hra = txtHra.value.toInt();
            currentCalculator.da = txtDa.value.toInt();
            currentCalculator.tax = rangeTax.value.toInt();

            currentCalculator.calculate();

            divResult.innerHTML = currentCalculator.salary;
            calculators.push(currentCalculator);
            currentCalculator = new SalaryCalculator();

            var row = templateFn({list : calculators});
            salaryTable.innerHTML = row;

        }
    }
     return SalaryCalculatorView;
 });
