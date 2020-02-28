function preventWidows(str) {
  if (!str) return null;
  const words = str.trim().split(" ");
  if (str.length < 3) return str;
  const nbsp = "\u00a0";
  const lastWord = words.pop();
  return words.join(" ") + nbsp + lastWord;
}

module.exports = preventWidows;
