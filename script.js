const form = document.querySelector("form");
// **const weight_value = parseInt(document.querySelector("#weight").value ) => will give empty string
form.addEventListener("submit",function(e){
    e.preventDefault()
  const height_value  = parseInt(document.querySelector("#height").value );
  const weight_value = parseInt(document.querySelector("#weight").value );
  let result = document.querySelector("#result")
  let condition = document.querySelector("#condition")
  console.log(condition)
// hight al and weight val agr form event handler s phle uper likh di to gese h page load hoga values agaegnge chonke hm n form abh fill h nh kia , empty value ayegi
// & height != Nan => old way to check the value has to be a number
// & isNaN(height_value) => Modern way to check the value has to be a number
 function validator(value){
    if(value === "" || value <=0 || isNaN(value)){
        result.innerHTML = " Please Enter valid value !"

        return false ;
    }
    else{
        return true;
    };
}
function Bmi_Conclusion(bmi){
    if (18.6 >bmi){
        condition.innerHTML = "<span>You are under-Weight</span>";
        return;
    }
    else if(18.6 <=bmi<24.9){
        condition.innerHTML = "<span>You have normal weight</span>";
        return;
    }
    else if (24.9 <=bmi){
        condition.innerHTML = "<span>You are Over-Weight</span>";
        return;
    }

 }
 if (validator(height_value) && validator(weight_value)){
     let bmi = (weight_value / ((height_value*height_value) /10000)).toFixed(2)
     result.innerHTML = `<span>Your BMI : ${bmi} kg/m<sup>2</sup></span>`;
     Bmi_Conclusion(bmi);

 }
});
