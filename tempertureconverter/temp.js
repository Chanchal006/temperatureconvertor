const calculateTemp =() => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celTofeh = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    } 
    const fehTocel = (fehr) => {
        let celsius = Math.round((fehr-32)*5/9);
        return celsius;
    } 

    let result;
    if(valueTemp = 'cel'){
        result = celTofeh(numberTemp);
        document.getElementById("resultcontainer").innerHTML= '${result} degree Fahrenheit';
    }
    else{
        result = fehTocel(numberTemp);
        document.getElementById("resultcontainer").innerHTML= '${result} degreecelsius';

    }
}
