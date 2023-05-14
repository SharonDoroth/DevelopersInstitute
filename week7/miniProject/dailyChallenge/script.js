function isAnagram(str1, str2) {

  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");


  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charMap1 = getCharMap(cleanStr1);
  const charMap2 = getCharMap(cleanStr2);

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}


function getCharMap(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
