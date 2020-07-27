const result = document.querySelector('span')
const number = document.querySelectorAll('.num')
const operation = document.querySelectorAll('.op')
const start = document.querySelector('h2')

var res=null;
var operator = ''
var val='';
var str = '';
var one = ''
start.addEventListener('mousedown',()=>{
    location.reload();
})

number.forEach(num => {
    num.addEventListener('mousedown',()=>{
        if(num.id==='equal'){
            for(i=0; i<val.length;++i){
                if(val.charAt(i)!="_"){
                    one +=val.charAt(i)
                    //console.log('inside if condition',one)
                }
                else{
                    if(res != null){
                        a = operator.charAt(0)
                    //console.log('inside else with operator ',a)
                    operator = operator.slice(1,)
                    //console.log('inside else with remaining operator ',operator)
                    if(a=='+'){
                        res += parseFloat(one)
                        one=''
                        //console.log('inside if == + with res and one ',res, one)
                    }
                    if(a=='-'){
                        res -= parseFloat(one)
                        one=''
                        //console.log('inside if == - with res and one ',res, one)
                    }
                    if(a=='*'){
                        res *= parseFloat(one)
                        one=''
                        //console.log('inside if == * with res and one ',res, one)
                    }
                    if(a=='/'){
                        if(parseFloat(one)===0){
                            res = "Error:division by zero"
                            //console.log('inside if == / with res and one ',res, one)
                        }
                        else{
                            res /= parseFloat(one)
                            one=''
                            //console.log('inside if == / with res and one ',res, one)
                        }
                    }
                    }
                    else{
                        res = parseFloat(one)
                        one = ''
                    }
                }
            }
            a = operator.charAt(0)
                    //console.log('inside else with operator ',a)
                    operator = operator.slice(1,)
                    //console.log('inside else with remaining operator ',operator)
                    if(a=='+'){
                        res += parseFloat(one)
                        one=''
                        //console.log('inside if == + with res and one ',res, one)
                    }
                    if(a=='-'){
                        res -= parseFloat(one)
                        one=''
                        //console.log('inside if == - with res and one ',res, one)
                    }
                    if(a=='*'){
                        res *= parseFloat(one)
                        one=''
                        //console.log('inside if == * with res and one ',res, one)
                    }
                    if(a=='/'){
                        if(parseFloat(one)===0){
                            res = "Error division by zero"
                            //console.log('inside if == / with res and one ',res, one)
                        }
                        else{
                            res /= parseFloat(one)
                            one=''
                            //console.log('inside if == / with res and one ',res, one)
                        }
                    }
            if (res.toString().length > 20){
                res = res.toString().slice(0,21)+'(+)'
            }
            result.textContent = res
            res=null;
            operator = '';
            val='';
            str = '';
            one = '';

        }
        else{
            val += num.id.toString()
            str += num.id.toString()
            if(str.length>20){
                console.log('imtrapper here')
                str = str.slice(str.length-21,)
            }
            result.textContent = str
        }
    })
})

operation.forEach(op => {
    op.addEventListener('mouseup',()=>{
        
        //console.log('op.id ',op.id)
        if(op.id==='add'){
            operator +='+'
            str += '+'
        }
        if(op.id==='sub'){
            operator +='-'
            str += '-'
        }
        if(op.id==='mul'){
            operator +='*'
            str += '*'
        }
        if(op.id==='div'){
            operator +='/'
            str += '/'
        }
        result.textContent = str
        val += '_'
    })
})