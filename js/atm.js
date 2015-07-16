$(function(){

  //start coding here...
  var input = $("#amount"), submit = $("#submit"), choice = $("#choice"), balance = $("#balance");
  var balanceValue = 0.00;
  input.hide(), submit.hide(); 

  $("#submit").click(function(e){
    // we need this to prevent the form for resubmitting, specifically on the specrunner.html (we have our project's html in here so we don't have to include fixtures in the spec)
    e.preventDefault();
    validateInput();
    updateBalance(choice.val(), parseInt(input.val()));
    
  })

  choice.click(function(e) {
    input.show(), submit.show();
  });

  function validateInput() {
    var error = 'Fool don\'t be playin!';
    var value = input.val();
    if (value === "") { balance.text(error); }
    else if (isNaN(parseInt(value)) === true) { balance.text(error); }
  }

  function updateBalance(option, amount) {
    if (option === "withdrawal") {
      balanceValue -= amount;
    } 
    else if (option === "deposit") {
      balanceValue += amount;
    }
    balance.text("Balance: $" + balanceValue);
  }

});