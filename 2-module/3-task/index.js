let calculator = {
  
  sum(a, b){
    return this.a + this.b;
  },
  mul(a, b) {
    return this.a * this.b;
  },
  read(a, b) {
    this.a = a;
    this.b = b;
  },

};
//alert(calculator.read());
calculator.read(3, 5);
( calculator.sum(3, 5) );
( calculator.mul(3, 5) ); 

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
