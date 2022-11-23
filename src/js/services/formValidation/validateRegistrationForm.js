// Notice the export statement and the import in home.js
// Notice the structure of the parameter and the return value
//  NOTE youll have to package up all individual values and put into an object, 
//    THEN pass whole object into this vvv function
export default function validateRegistrationForm(formValues) {

  const result = {
    username: validateUserName(formValues.username),
    email: validateEmail(formValues.email),
    phone: validatePhone(formValues.phone),
    age: validateAge(formValues.age),
    profession: validateProfession(formValues.profession),
    experience: validateExperience(formValues.experience),
  };

  let field, isValid = true;
  for(field in result) {
    isValid = isValid && result[field];
  }

  //  Returns bool saying is all the data valid(?)
  //    as well as the results of the individual values
  return {
    isValid,
    result,
  };

}

/* Part 1 - Regular expressions 
   Write each of the functions below using a regular expression
   to do the actual validation whenever possible.  
   
   You can write the expressions yourself or find one on the internet.  
   
   You might test your regular expressions
   in the html page I gave you OR you might create a codepen or jsfiddle
   playground to test your functions as you write them.

   The function above calls all of these functions.  You're ready to add 
   validation to home.js.
*/

// must be longer than 3 chars.  Use a regular expression.
function validateUserName(name) {
  const pattern = /^.{3,}$/
  return pattern.test(name);
}

// must be a valid email address.  Use a regular expression
function validateEmail(email) {
  const pattern = /^\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,8}$/ 
  return pattern.test(email);
}

// must be a valid 10 digit phone number.  Use a regular expression
function validatePhone(phone) {
  const pattern = /^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$/;
  return pattern.test(phone);
}

// must be between 10 and 25 inclusive.  Use a regular expression
// to make sure that the age is a 2 digit number before checking the range.
function validateAge(age) {
  const pattern = /^[0-9]{2}[:.,-]?$/
  return pattern.test(age);
}

// must be either school, college, trainee or employee.  No reg exp.
function validateProfession(profession) {
  return true;
}

// must be between 0 and 4 years exclusive.  Use a regular expression.
function validateExperience(experience) {
  const pattern = /^([0-4])$/
  return pattern.test(experience);
}
