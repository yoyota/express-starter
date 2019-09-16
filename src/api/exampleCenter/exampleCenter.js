exports.asyncExample = async (req, res) => {
  // eslint-disable-next-line no-console
  await setTimeout(() => console.log('async stdout'), 1000)
  res.send('hello async example!')
}

exports.example = (req, res) => {
  res.send('hello example!')
}
