function isPositive(number) {
    if (number > 0) {
      return 'Positivo';
    } else if (number === 0){
      return 'Zero';
    }

    return 'Negativo'
  }
  
  console.log(isPositive(-5));