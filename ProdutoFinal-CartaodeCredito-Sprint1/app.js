var cardNumber = prompt('Digite o número do cartão de crédito:');

if(cardNumber === '' || isNaN(cardNumber)) {
  alert('Ops, digite novamente, por favor, somente números.');
  window.location.reload();
} else {
  isValidCard(cardNumber);
}

function isValidCard(cardNumber) {
  var cardNumberInArray = cardNumber.split('');
  var cardNumberInReverseArray = cardNumberInArray.reverse();
  var numbersToSum = [];
  for(i = 0; i < cardNumberInReverseArray.length; i++) {
    if(i % 2 !== 0) {
      var evenPosition = cardNumberInReverseArray[i] * 2;
      if(evenPosition >= 10) {
        evenPosition = evenPosition.toString();
        var digitsToSum = [0];
        for(j = 0; j < evenPosition.length; j++) {
          digitsToSum[0] += parseInt(evenPosition[j]);
        }
        numbersToSum.push(digitsToSum[0]);
      } else {
        numbersToSum.push(evenPosition);
      }
    } else {
      numbersToSum.push(parseInt(cardNumberInReverseArray[i]));
    }
  }
  var totalSum = [0];
  for(i = 0; i < numbersToSum.length; i++) {
    totalSum[0] += numbersToSum[i];
  }
  if(totalSum[0] % 10 === 0) {
    alert('Cartão Válido!');
  } else {
    alert('Cartão Inválido! Tente novamente.');
    window.location.reload();
  }
}