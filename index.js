const count = require('text-count');

function zong() {
  const text = "Z O N G"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Zong
