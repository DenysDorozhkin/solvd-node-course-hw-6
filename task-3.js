function multiline(strings, ...values) {
  const result = strings.reduce(
    (prev, curr, i) => prev + curr + (values[i] || ""),
    ""
  );
  const lines = result.split("\n");
  let lineNumber = 1;
  const numberedLines = lines.map((line) => {
    if (line.trim() === "") return "";
    return `${lineNumber++} ${line}`;
  });
  return numberedLines.join("\n").trim();
}

const code = multiline`
function add(a, b) {
    return a + b;
}
`;

console.log(code);
