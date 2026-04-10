function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  return str.split("").map(char => [char, pairs[char]]);
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));