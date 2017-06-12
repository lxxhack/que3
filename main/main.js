module.exports = function main(str) {
  var ch;
  var sum=0;
  for (var i=0;i<str.length;i++)
  {
    ch=str.charAt(i);
    sum+=parseInt(ch);
  }
  return sum;
  // Write your cade here
};
