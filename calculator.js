
let b, c, st = '', ans = 0, result = '';
let input = document.getElementById('input');
let all = document.querySelectorAll('.btn');
  window.addEventListener('load', ()=> {
       alert("Hello");
  });
let buttons = Array.from(all);

buttons.forEach(button => {
    button.addEventListener('click', (btn) => {
        b = btn.target.innerHTML;
        
        if (input.innerHTML == '') {
            result = '';
        }
        
        if (b === '=') {
            if (result[result.length - 1] == '/' || result[result.length - 1] == '*' || result[result.length - 1] == '-' || result[result.length - 1] == '+') {
                result = result.substring(0, result.length - 1);
            }
            if(input.innerHTML === undefined || result === undefined)
            {
                result = '0';
            }
         else if (!result.includes('+') && !result.includes('-') && !result.includes('*') && !result.includes('/')) {
                result = input.innerHTML;
         }
              
               
            if (result.includes('+') || result.includes('-') || result.includes('*') || result.includes('/'))
                {
                    result = eval(result);
                    if(result % 1 != 0)
                    {
                        result = result.toFixed(3);
                    }
                ans = 0;
            c = result;
            }
        }
        else if (b == 'AC') {
            result = '';
        }
        else if (b == 'C') {
            ans = 1;
            result = result + '';
            result = result.substring(0, result.length - 1);
        }
        else if (b == 'X<sup>2</sup>') {
            ans = 1;
            result = result * result;
        }
        else if (b == '00' && result == '' || b == '00' && result == '0') {
            result = '0';
            c = result;
            ans = 1;
        }
        else {
              if(input.innerHTML.length >= 13)
        {
            b.preventDefault();
        }
            if (b == '-' || b == '*' || b == '+' || b == '/') {
                if (result == '') {
                    result = '0';
                }

                if (result[result.length - 1] == '/' || result[result.length - 1] == '*' || result[result.length - 1] == '-' || result[result.length - 1] == '+') {

                    result = result.substring(0, result.length - 1);
                }
                ans = 1;
            }

            if (b == '.') {
                ans = 1;
                if (result[result.length - 1] == '+' || result[result.length - 1] == '-' || result[result.length - 1] == '/' || result[result.length - 1] == '*' || result == '') {
                    result = result + '0';
                }
                result = result + '';
                let operators = ["+", "-", "*", "/"];;
                result = result.split(new RegExp(`[${operators.join("\\")}]`));

                if (result[result.length - 1].includes('.')) {
                    b = '';
                }
                result = result.join(operators[0]);
            }
            if (b == '0' && result == '0') {
                b = '';
            }
            if (ans == 0) {
                result = '';
                ans = 1;
            }
            if (result == '0' || result == '00') {
                if (b !== '-' && b !== '*' && b !== '+' && b !== '/') {
                    result = '';
                }
            }
            result = result + b;
            c = result;
        }
        input.innerHTML = result;
    });
});
