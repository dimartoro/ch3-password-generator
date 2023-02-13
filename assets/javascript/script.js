// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



//main function called by the click event of the button
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

