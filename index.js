function scuberGreetingForFeet(num) {

  if (num <= 400) {
    return 'This one is on me!';
  } else {
    if (num >= 2000 && num < 2500) {
      return 'I will gladly take your thirty bucks.';
    } else {
      if (num >= 2500) {
      return 'No can do.';
      }
    }
  }
}

function ternaryCheckCity(city) {

  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {

  if (tip === 'generous') {
    return 'Thank you so much.'
  } else {
    if (tip === 'not so generous') {
      return 'Thank you.'
    } else {
      return 'Bye.'
    }
  }
}
