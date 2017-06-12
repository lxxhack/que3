module.exports = function main(str) {
  var ch;
  var sum=0;
  for (var i=0;i<str.length-1;i++)
  {
    ch=str.charAt(i);
    sum+=parseInt(ch);
  }
  return sum;
  // Write your cade here
};
