import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora-AngularFrameWork';

  calValue: number = 0;
  funcT: any = 'NoFunction';
  funcText: any = 'NoFunction';

  firstNumber: number = 0;
  secondNumber: number = 0;
  calNumber: string = 'noValue';

  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    }
    else if (type == 'function') {
      this.onClickFunction(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);

  }

  onClickFunction(val: string) {
    if (val == 'C') {
      this.clearAll();
    } else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      //this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
      this.funcText = this.calValue + ' ' + val;
    } else if (this.funcT != 'NoFunction') {
      this.secondNumber = this.calValue;
      //Calculation
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcT == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcT == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcT == '%') {
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(Total, val);
    }
  }

  totalAssignValues(Total: number, val: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    //this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    this.funcText = this.funcText + ' ' + this.secondNumber + ' ' + val;
    if (val == '=') { this.onEqualsPress(); }
  }

  onEqualsPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.funcText = 'NoFunction';
    this.calNumber = 'noValue';
  }

}
