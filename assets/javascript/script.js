
//main function called by the click event of the button // 
//clean screen, after password is populated, using spn.textContent = "" and setTimeout to set the screen clean until the popup dialog box start asking questions
//to generate the next password.

function passWordDialogs(){
    var spn = document.getElementById('spnResult');
    spn.textContent = "";
    setTimeout(function(){
        
    var pwLength = prompt("enter length");


    //condition to check that value is numeric and between the permitted range.
    if(isNaN(pwLength) || pwLength < 8 || pwLength > 128){
        alert("Please enter only numeric values between 8 and 128 characters. Please try again");
        return;
    }

    //Variables to hold questions about password configuration
    var upperValues ;
    var lowerValues ;
    var numericValues ;
    var specialValues ;
    
    //questions and assignments about password configuration
    var upperValues = confirm("Do you want Upper Case Values?");
    var lowerValues = confirm("Do you want Lower Case Values?");
    var numericValues = confirm("Do you want Numeric Values?");
    var specialValues = confirm("Do you want Special Caracters?");
    
    
    //Verification that at least one of the passwored configuration questions is true
    if(upperValues==false && lowerValues==false && numericValues==false && specialValues==false){
        alert("At least one of the options must be true. ");
    }

    //call to createPassword function with paramenters to create password based on configuration variables.
    var newPassword = createPassword(pwLength, upperValues, lowerValues, numericValues, specialValues);
    spn.innerHTML = newPassword;
    },1);

}

function createPassword(length, pUpper, pLower, pNumeric, pSpecial) {
    let result = '';

    //constantas for each configuration section
    const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const numericCharacters = '0123456789';
    const SpecialCharacters = '*#@$%^&';
    var characters = "";

    //conditions to concatenate the final range of character based on configuration questions
    if(pUpper==true){
        characters += upperCharacters;
    }
    if(pLower==true){
        characters += lowerCharacters;
    }
    if(pNumeric==true){
        characters += numericCharacters;
    }
    if(pSpecial==true){
        characters += SpecialCharacters;
    }



    const charactersLength = characters.length;

    //Condition to guarantee that configuration password is genearated as many times as needed until mtaching configuration conditions.,
    let isValid = false;
    //Loop that will repeat until isValid variable is true based on evaluation for password rules meeting criteria. 
    while(isValid == false)
    {
        //loop to generate password randomly based on consolidated characacters range variable. 
        result='';
        let counter = 0;
        while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        }


        //Conditions to verify that the final result is valid. isValid Variable will be set to false if any of the criteria is not met. 
        isValid=true;
        if(pUpper==true && isValid==true){
            for(var x=0;x<result.length;x++){
                var y = result[x];
                if(upperCharacters.indexOf(y)>=0){
                    isValid=true;
                    break;
                }else{
                    if(x==result.length-1){
                        isValid=false;
                    }
                }
            }
        }
        if(pLower==true && isValid==true){
            for(var x=0;x<result.length;x++){
                var y = result[x];
                if(lowerCharacters.indexOf(y)>=0){
                    isValid=true;
                    break;
                }else{
                    if(x==result.length-1){
                        isValid=false;
                    }
                }
            }
        }
        if(pNumeric==true && isValid==true){
            for(var x=0;x<result.length;x++){
                var y = result[x];
                if(numericCharacters.indexOf(y)>=0){
                    isValid=true;
                    break;
                }else{
                    if(x==result.length-1){
                        isValid=false;
                    }
                }
            }
        }
        if(pSpecial==true && isValid==true){
            for(var x=0;x<result.length;x++){
                var y = result[x];
                if(SpecialCharacters.indexOf(y)>=0){
                    isValid=true;
                    break;
                }else{
                    if(x==result.length-1){
                        isValid=false;
                    }
                }
            }
        }
    }
    return result;
}

