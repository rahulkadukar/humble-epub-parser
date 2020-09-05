const fs = require('fs')
const cl = console.log

readFile().then(() => cl('COMPLETED'))

function timeToMs(hrtime) {
  return Math.ceil((hrtime[0] * 1e9 + hrtime[1]) / 1e6)
}

async function readFile() {
  const fileToRead = './file.list'
  const fileList = fs.readFileSync(fileToRead, 'utf-8').split(`\n`)

  fileList.forEach((f, i) => {
    const r = f.slice(2).split(`/`)
    if (r.length > 1) {
      const d = `/home/rahul/data/epub/humble/${r[1].split(`_`)[0]}_${r[4]}`
      const s = `/home/rahul/nas/${f.slice(2)}`
      const t1 = process.hrtime()
      fs.copyFileSync(s, d, (err) => { if (err) { cl(`[COPY ERROR]: ${err}`) } })
      const t2 = process.hrtime(t1)
      cl(`[${i}] Time taken to copy: ${timeToMs(t2)}`)
    }
  })
}
