//remove 0s from end

function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}
