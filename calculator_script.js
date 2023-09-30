/* Copyright of GENIAL INGELE (2023). This calculator is merely an estimation of what your bond would cost and the other costs associated with it.
    Hence, GENIAL INGELE is not liable for any inaccuracies found in this code. We are trying to guide you in making a decision in the best way we can, 
    but the accurate information will be given to you by your bank.
    NOTE: Data found on this code is based on South African laws and fees.
    
    DATE: 25 SEPTEMBER 2023
    
    GENIAL INGELE */


    /*TODO 
    * Automatically separate large numbers with comma or point when typed in
    * Loop through 2 arrays to compare and assign values based on a set of conditions. E.g. loan amount vs deeds office fees matching. 
    */

//an Array of input fields as objects
var input_fields = [document.getElementById("purchase_price"), document.getElementById("deposit"), document.getElementById("interest_rate"), document.getElementById("number_of_years")]


//A validation function to ensure that only numbers between 0 - 9 are entered
function isNumber(evt) {
      // The 'evt' parameter represents the event object passed to this function,
    // typically an event like keypress or keydown.

    // The following line determines the character code of the key pressed.
    // It checks both 'which' and 'keyCode' properties, as these can vary
    // depending on the browser being used.
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Now, it checks whether the character code corresponds to a numeric key (0-9).
    // The condition checks if the charCode is greater than 31 (to exclude control characters)
    // and if it's not in the range of 48-57 (ASCII codes for 0 to 9).
    if (charCode > 31 && (charCode < 48 || charCode > 57 ) ) {
        // If the character code is not within the range of 0-9, the function returns false,
        // indicating that the input should be rejected.
        return false;
    }

    // If the character code is within the range of 0-9, the function returns true,
    // allowing the input to be processed as a valid number.
    return true;

}


//A validation function to ensure that DECIMAL numbers only entered
function isDecimalNumber(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;

  // Check if a period has already been typed.
  var hasPeriod = evt.target.value.includes(".");

  // Allow numbers (0-9) and the period (.) character if it hasn't been typed.
  if ((charCode >= 48 && charCode <= 57) || (charCode === 46 && !hasPeriod)) {
      // If it's a period, set the hasPeriod flag to true.
      if (charCode === 46) {
          hasPeriod = true;
      }
      return true;
  } else {
      return false;
  }
}


//Use the enter key to trigger calculation
for (let i = 0 ; i < input_fields.length ; i++){
  //Ensure that there is data when the loop runs
  if (input_fields[i].value != null){
 
    // Execute a function when the user presses a key on the keyboard
    input_fields[i].addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit_btn").click();

        }
    });     
  }
}

//let loan_capital, interest_rate, years, deposit;

//Bond calculator algorithm. It takes in 3 parameters : price, interest, years, deposit amount (if available)
function bondCalculator(purchase_price, interest_rate, years, deposit){
    //the mathematical formula is A = P * ( r * (1+r)^n ) / ( (1+r)^n - 1 )
    /*
    A = repayment amount 
    P = loan amount
    r = rate (e.g. 10% per year for 12 months = (10/100)/12 = 0.008333)
    n = number of repayments. (e.g 5 years = 5*12months = 60 payments)
    */
    var repayment_amount;
    var period = [12, 6, 0.5, 1] //12 is monthly, 0.5 bi-annually, 1 annually, etc. 
    var calculated_rates = interest_rate/100/12;
    var number_of_repayments = years * period[0]; 
    var total_interest;
    var bank_initiation_fee = 6037.50; //as of FEBRUARY 2023/2024 National Credit Act

    var deeds_office_fee_transfer= [45, 101, 642, 800, 1126, 1293, 1453, 2014, 2443, 2909, 3401, 4048, 4863, 6477]; //as of FEBRUARY 2023/2024 FROM Deeds office website https://deeds.gov.za/fees.php
    var deeds_office_fee_bond= [496, 642, 800, 1126, 1293, 1453, 2014, 2443, 2909, 3401, 4048, 4863, 5667, 8098]; //as of FEBRUARY 2023/2024 FROM Deeds office website https://deeds.gov.za/fees.php
    var deeds_office_transfer_brackets = [100_000, 200_000, 300_000, 600_000, 800_000, 1_000_000, 2_000_000, 4_000_000, 6_000_000, 8_000_000, 10_000_000, 15_000_000, 20_000_000 ];
    var deeds_office_bond_brackets = [150_000, 300_000, 600_000, 800_000, 1_000_000, 2_000_000, 4_000_000, 6_000_000, 8_000_000, 10_000_000, 15_000_000, 20_000_000, 30_000_000];

    var bond_registration_cost;
    var other_bond_fees = 2300; document.getElementById("other_bond_fees").innerHTML = numberWithSpaces(other_bond_fees); //assign other fees to its HTML element since it is a fixed value
    var total_bond_registration_costs;

    var transfer_cost;
    var transfer_duty;
    var transfer_duty_tax= [0, 0, 12_375, 48_675, 97_075, 1_128_600 ]; //2024 (1 March 2023 – 29 February 2024)  FROM Sars website https://www.sars.gov.za/tax-rates/transfer-duty/
    var transfer_duty_tax_percentage= [(0/100), (3/100), (6/100), (8/100), (11/100), (13/100)  ]; //2024 (1 March 2023 – 29 February 2024)  FROM Sars website https://www.sars.gov.za/tax-rates/transfer-duty/
    var transfer_duty_tax_brackets = [1_100_000, 1_512_500, 2_117_500, 2_722_500, 12_100_000];
 
    var other_transfer_fees = 2300; document.getElementById("other_transfer_fees").innerHTML = numberWithSpaces(other_transfer_fees); //assign other fees to its HTML element since it is a fixed value
    var total_transfer_costs;

    var once_off_cost;

    var salary;
    var total_repayment= 0;

    purchase_price = Number(purchase_price);
    deposit = Number(deposit);
    var loan_capital = purchase_price - deposit;

        //repayment calculator as shown earlier
        repayment_amount = loan_capital * ( calculated_rates * ((1 + calculated_rates)**number_of_repayments) ) / ( ((1+calculated_rates) ** number_of_repayments)- 1 );
  
        
        repayment_amount = Number(repayment_amount.toFixed(2));//round the repayment number to 2 decimal places
        
        //display the repayment value on the HTML page by using the id of "monthly_repayment"
        document.getElementById("monthly_repayment").innerHTML = numberWithSpaces(repayment_amount); 

        //calculate the minimum gross salary an individual should earn to qualify for this loan and display on HTML element of id "salary"
        salary = repayment_amount*3.5; 
        salary = Number(salary.toFixed(2));
        document.getElementById("salary").innerHTML = numberWithSpaces(salary);
        
        //calculate the total interest
        total_interest = parseFloat( (repayment_amount * number_of_repayments ) - loan_capital);
        total_interest = Number(total_interest.toFixed(2));
        document.getElementById("total_interest").innerHTML = numberWithSpaces(total_interest); 


        //bank initiation fee 
        document.getElementById("bank_initiation_fee").innerHTML= numberWithSpaces(bank_initiation_fee);


        //calculate deeds office transfer fee
        function deeds_transfer(){
   
        
      
          //Does Not Exceed R 100 000.00
          if(purchase_price <= deeds_office_transfer_brackets[0]){
              transfer_deeds_office_fee = deeds_office_fee_transfer[0];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 100 000.00 but does not exceed R 200 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[0]) && (purchase_price <= deeds_office_transfer_brackets[1])){
              transfer_deeds_office_fee = deeds_office_fee_transfer[1];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 200 000.00 but does not exceed R 300 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[1]) && (purchase_price<= deeds_office_transfer_brackets[2]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[2];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 300 000.00 but does not exceed R 600 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[2]) && (purchase_price <= deeds_office_transfer_brackets[3]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[3];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 600 000.00 but does not exceed R 800 000.00
           else if ( (purchase_price > deeds_office_transfer_brackets[3]) && (purchase_price <= deeds_office_transfer_brackets[4]) ){
           transfer_deeds_office_fee = deeds_office_fee_transfer[4];
           return transfer_deeds_office_fee;
          }
      
          //Exceeds R 800 000.00 but does not exceed R 1 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[4]) && (purchase_price<= deeds_office_transfer_brackets[5]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[5];
              return transfer_deeds_office_fee;
          }
      
      
          //Exceeds R 1 000 000.00 but does not exceed R 2 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[5]) && (purchase_price <= deeds_office_transfer_brackets[6]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[6];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 2 000 000.00 but does not exceed R 4 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[6]) && (purchase_price <= deeds_office_transfer_brackets[7]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[7];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 4 000 000.00 but does not exceed R 6 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[7]) && (purchase_price <= deeds_office_transfer_brackets[8]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[8];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 6 000 000.00 but does not exceed R 8 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[8]) && (purchase_price <= deeds_office_transfer_brackets[9]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[9];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 8 000 000.00 but does not exceed R 10 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[9]) && (purchase_price <= deeds_office_transfer_brackets[10]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[10];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 10 000 000.00 but does not exceed R 15 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[10]) && (purchase_price <= deeds_office_transfer_brackets[11]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[11];
              return transfer_deeds_office_fee;
          }
      
      
          //Exceeds R 15 000 000.00 but does not exceed R 20 000 000.00
          else if ( (purchase_price > deeds_office_transfer_brackets[11]) && (purchase_price <= deeds_office_transfer_brackets[12]) ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[12];
              return transfer_deeds_office_fee;
          }
      
          //Exceeds R 20 000 000.00
          else if ( purchase_price > deeds_office_transfer_brackets[12] ){
              transfer_deeds_office_fee = deeds_office_fee_transfer[13];
              return transfer_deeds_office_fee;
          }
      
          else {
              alert("WRONG INPUT FOR DEEDS FEE (Transfer)")
              return 0;
          }
                        
        }
        
        document.getElementById("deeds_office_transfer_fee").innerHTML = numberWithSpaces(deeds_transfer());

        


        //calculate deeds office bond fee
        function deeds_bond(){
        
            //Does Not Exceed R 100 000.00
            if(loan_capital <= deeds_office_bond_brackets[0]){
                return  bond_deeds_office_fee = deeds_office_fee_bond[0];
            }
        
            //Exceeds R 100 000.00 but does not exceed R 200 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[0]) && (loan_capital <= deeds_office_bond_brackets[1])){
                bond_deeds_office_fee = deeds_office_fee_bond[1];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 200 000.00 but does not exceed R 300 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[1]) && (loan_capital <= deeds_office_bond_brackets[2]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[2];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 300 000.00 but does not exceed R 600 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[2]) && (loan_capital <= deeds_office_bond_brackets[3]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[3];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 600 000.00 but does not exceed R 800 000.00
                else if ( (loan_capital > deeds_office_bond_brackets[3]) && (loan_capital <= deeds_office_bond_brackets[4]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[4];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 800 000.00 but does not exceed R 1 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[4]) && (loan_capital <= deeds_office_bond_brackets[5]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[5];
                return bond_deeds_office_fee;
            }
        
        
            //Exceeds R 1 000 000.00 but does not exceed R 2 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[5]) && (loan_capital <= deeds_office_bond_brackets[6]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[6];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 2 000 000.00 but does not exceed R 4 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[6]) && (loan_capital <= deeds_office_bond_brackets[7]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[7];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 4 000 000.00 but does not exceed R 6 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[7]) && (loan_capital <= deeds_office_bond_brackets[8]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[8];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 6 000 000.00 but does not exceed R 8 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[8]) && (loan_capital <= deeds_office_bond_brackets[9]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[9];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 8 000 000.00 but does not exceed R 10 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[9]) && (loan_capital <= deeds_office_bond_brackets[10]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[10];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 10 000 000.00 but does not exceed R 15 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[10]) && (loan_capital <= deeds_office_bond_brackets[11]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[11];
                return bond_deeds_office_fee;
            }
        
        
            //Exceeds R 15 000 000.00 but does not exceed R 20 000 000.00
            else if ( (loan_capital > deeds_office_bond_brackets[11]) && (loan_capital <= deeds_office_bond_brackets[12]) ){
                bond_deeds_office_fee = deeds_office_fee_bond[12];
                return bond_deeds_office_fee;
            }
        
            //Exceeds R 20 000 000.00
            else if ( loan_capital > deeds_office_bond_brackets[12] ){
                bond_deeds_office_fee = deeds_office_fee_bond[13];
                return bond_deeds_office_fee;
            }
        
            else {
                alert("WRONG INPUT FOR DEEDS FEE (bond)")
                return 0;
            }
                            
            }

            bond_deeds_office_fee = deeds_bond();
            document.getElementById("deeds_office_bond_fee").innerHTML = numberWithSpaces(bond_deeds_office_fee);

        
        //calculate total bond registration costs

        //first calculate the bond registration cost (bank attorney fee)
        if (loan_capital > 100_000){
        bond_registration_cost = (0.01411789 * (loan_capital+ 8272.897)) + 8300; //values we got from regression and probability
        document.getElementById("bond_registration_cost").innerHTML =numberWithSpaces( bond_registration_cost.toFixed(2));
        bond_registration_cost = Number(bond_registration_cost);
        }
        else {
            bond_registration_cost = 6095;
             document.getElementById("bond_registration_cost").innerHTML =numberWithSpaces(bond_registration_cost.toFixed(2));
             bond_registration_cost = Number(bond_registration_cost);
        }

        //then use that value to find the total bond registration cost
        total_bond_registration_costs = deeds_bond() + bond_registration_cost + bank_initiation_fee + other_bond_fees;
        document.getElementById("total_bond_registration_costs").innerHTML = numberWithSpaces(total_bond_registration_costs.toFixed(2));
        total_bond_registration_costs = Number(total_bond_registration_costs);

        //calculate total transfer costs

        //first calculate the transfer cost (seller's attorney fee)
        if (purchase_price > 100_000){
            transfer_cost = (0.01411789 * (purchase_price+ 8272.897)) + 16600;
            document.getElementById("transfer_cost").innerHTML = numberWithSpaces(transfer_cost.toFixed(2));
            transfer_cost = Number(transfer_cost);
            }
        else {
            transfer_cost = 6095;
            document.getElementById("transfer_cost").innerHTML = numberWithSpaces(transfer_cost.toFixed(2));
            transfer_cost = Number(transfer_cost);
        }

        //calculate transfer duty rate
        function transfer_duty_calculator(){
        
            //Does Not Exceed R 1 100 000
            if(purchase_price <= transfer_duty_tax_brackets[0]){
               transfer_duty = transfer_duty_tax[0] + (transfer_duty_tax[0]);
                return transfer_duty;      
            }
            //Exceeds R 1 100 000 but does not exceed R 1 512 500
            else if( (purchase_price >= transfer_duty_tax_brackets[0]) && (purchase_price <= transfer_duty_tax_brackets[1]) ) {
                transfer_duty = transfer_duty_tax[1] +(transfer_duty_tax_percentage[1] * (purchase_price - transfer_duty_tax_brackets[0]));
                return transfer_duty; 
             }

            //Exceeds R 1 512 500 but does not exceed R 2 117 500
            else if( (purchase_price >= transfer_duty_tax_brackets[1]) && (purchase_price <= transfer_duty_tax_brackets[2]) ) {
                transfer_duty = transfer_duty_tax[2] + (transfer_duty_tax_percentage[2] * (purchase_price - transfer_duty_tax_brackets[1]));
                return transfer_duty; 
             }

            //Exceeds R 2 117 500 but does not exceed R 2 722 500
            else if( (purchase_price >= transfer_duty_tax_brackets[2]) && (purchase_price <= transfer_duty_tax_brackets[3]) ) {
                transfer_duty = transfer_duty_tax[3] + (transfer_duty_tax_percentage[3] * (purchase_price - transfer_duty_tax_brackets[2]));
                return transfer_duty; 
             }

            //Exceeds R 2 722 500 but does not exceed R 12 100 000
            else if( (purchase_price >= transfer_duty_tax_brackets[3]) && (purchase_price <= transfer_duty_tax_brackets[4]) ) {
                transfer_duty = transfer_duty_tax[4] + (transfer_duty_tax_percentage[4] * (purchase_price - transfer_duty_tax_brackets[3]));
                return transfer_duty; 
             }

            //Exceeds R 12 100 000
            else if( purchase_price >= transfer_duty_tax_brackets[4] ) {
                transfer_duty = transfer_duty_tax[5] + (transfer_duty_tax_percentage[5] * (purchase_price - transfer_duty_tax_brackets[4]));
                return transfer_duty; 
             }

                     
        }

        //assign the value for transfer duty from the function to its variable
        transfer_duty = transfer_duty_calculator();
        document.getElementById("transfer_duty_cost").innerHTML = numberWithSpaces(transfer_duty.toFixed(2));
        transfer_duty = Number(transfer_duty);

    

        //then use that value to find the total transfer cost
        total_transfer_costs = deeds_transfer() + transfer_cost + transfer_duty + other_transfer_fees;
        document.getElementById("total_transfer_costs").innerHTML = numberWithSpaces(total_transfer_costs.toFixed(2));
        total_transfer_costs = Number(total_transfer_costs); 
        
        //now, let's add all the once-off costs together
        once_off_cost = total_bond_registration_costs + total_transfer_costs;
        document.getElementById("once_off_cost").innerHTML = numberWithSpaces(once_off_cost.toFixed(2)); 
        once_off_cost = Number(once_off_cost);
};

// Spit results by the thousands. 
function numberWithSpaces(variable_to_split) {
  return variable_to_split.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

//reset form values
function reset(){
var form = document.getElementById("calculator_input_form");
form.reset();

}