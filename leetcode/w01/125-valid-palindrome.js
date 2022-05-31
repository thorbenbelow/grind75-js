function isPalindrome(s) {
  let l = 0, r = s.length - 1;
  const lower = s.toLowerCase()

  while(l < r) {
    if(isAlphaNum(lower[l]) && isAlphaNum(lower[r])) {
      if(lower[l] === lower[r]) {
	l++;
	r--;
      }else {
	return false
      }
    } else if(isAlphaNum(lower[l])) {
      r--
    } else {
      l++
    }
  }
  return true;
}


function isAlphaNum(c) {
  const n = c.charCodeAt(0)
  return n >= 48 && n <= 57 || n >= 97 && n <= 122
}

