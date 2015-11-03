require(['SalaryCalculatorView', 'text!mainTemplate.html'], function(SalaryCalculatorView, mainTemplate){
    document.body.innerHTML = mainTemplate;
    var view = new SalaryCalculatorView();
    view.init();
});
