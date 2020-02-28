function preventWidows(str) {
  const words = str.trim().split(" ");
  if (words.length < 3) return str;
  const nbsp = "\u00a0";
  const lastWord = words.pop();
  return words.join(" ") + nbsp + lastWord;
}

module.exports = preventWidows;
