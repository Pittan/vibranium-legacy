import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import * as beautify from 'json-beautify'
import * as process from 'process'

import {ChromePreference} from '../chrome-preference'

export default class Export extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    filename: flags.string({char: 'n', description: 'filename to export'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  async run() {
    const {flags} = this.parse(Export)

    const preferences = new ChromePreference()
    await preferences.openConfiguration()

    const devices = preferences.getCustomEmulatedDeviceList()

    const filename = flags.filename || 'vibranium.json'
    const path = `${process.cwd()}/${filename}`
    await this.saveVibraniumPreference(path, devices)

    this.log(`Custom emulated device list successfully exported on ${path}`)
  }

  async saveVibraniumPreference(path: string, data: any): Promise<any> {
    return new Promise(resolve => {
      fs.writeFile(path, beautify(data, null, 2, 100), err => {
        if (err) { throw err }
        resolve()
      })
    })
  }
}
