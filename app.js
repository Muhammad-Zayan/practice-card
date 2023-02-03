const Calculatetem = () => {
 
    const numberTem = document.getElementById('temp').value 

    const temSelected = document.getElementById('temp_diff')
    
    const valueTem = temp_diff.options[temSelected.selectedIndex].value

    const celTofah = (cel) =>{
        let  fahrenheit = Math.round((cel * 9/5) + 32)
        return fahrenheit;
    }

    const fahTocel = (feh) =>{
        let celsius = Math.round((feh - 32) * 5/9)
        return celsius;
    }


    let result;

if(valueTem == 'cel'){
result = celTofah(numberTem)
document.getElementById('resultContain').innerHTML = ` = ${result}°Fahrenheit`;
}else{
    result = fahTocel(numberTem)
    document.getElementById('resultContain').innerHTML = ` = ${result}°Celsius`;
    
    }

}