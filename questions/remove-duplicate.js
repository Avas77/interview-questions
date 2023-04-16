const str = "This is is a test test buddy"

function remove(str){
  const newStr = str.split(" ");
  const arr = newStr.filter((str , index) => newStr.indexOf(str) === index)
  return arr.join(" ")
}

remove(str)