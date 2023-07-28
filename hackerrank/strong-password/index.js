//https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
    const regExps = [/\d/, /[a-z]/, /[A-Z]/, /[!@#$%^&*\(\)\-\+]/];
    let add = regExps.length;
    for (const regexp of regExps) {
      if (regexp.test(password)) add--;
    }
    return add >= 6 - n ? add : 6 - n;
  }