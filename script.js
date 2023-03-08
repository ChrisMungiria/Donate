function togglePaymentOption(option) {
    const monthlyPaymentBtn = document.getElementById('monthly-payment-btn');
    const oneTimePaymentBtn = document.getElementById('one-time-payment-btn');
  
    if (option === 'monthly') {
      monthlyPaymentBtn.classList.add('active');
      oneTimePaymentBtn.classList.remove('active');
    } else if (option === 'one-time') {
      oneTimePaymentBtn.classList.add('active');
      monthlyPaymentBtn.classList.remove('active');
    }
}

function selectButton(buttonNumber) {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }
    
    var selectedButton = document.getElementById("button" + buttonNumber);
    selectedButton.classList.add("selected");
  }
  