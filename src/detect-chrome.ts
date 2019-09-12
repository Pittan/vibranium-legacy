import find = require('find-process')

// TODO I tested this code on mac only.
export async function isChromeLaunching() {
  return new Promise(resolve => {
    find('name', 'Google Chrome')
    .then((list: any[]) => {
      resolve(list.length > 0)
    }, (err: any) => {
      throw new Error(err)
    })
  })
}
