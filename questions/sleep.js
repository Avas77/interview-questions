function sleep(time){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello")
    }, time)
  })
}

sleep(5000).then((res) => {
  console.log(res)
})