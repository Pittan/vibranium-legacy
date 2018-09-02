import {Command, flags} from '@oclif/command'
import * as fs from 'fs'

import {ChromePreference} from '../chrome-preference'
import {isChromeLaunching} from '../detect-chrome'

export default class Add extends Command {
  static description = 'Add custom emulated devices from a json config file.'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Add)

    // make sure Chrome is not launching for applying new settings.
    // If chrome is launching and no force flag is given, this command should quit.
    const launching = await isChromeLaunching().catch(err => { this.log('error!!', err) })
    if (launching && !flags.force) {
      this.error('Chrome must not be launched. Use --force to run anyway.')
      return
    }

    // set up chrome configuration
    const preferences = new ChromePreference()
    await preferences.openConfiguration()

    let devices: any[] = preferences.getCustomEmulatedDeviceList()

    if (args.file) {
      const devicesFromFile: any[] = await this.getVibraniumPreference(args.file)
      devicesFromFile.forEach(device => {
        devices.push(device)
        this.log(`  -> Added: ${device.title}`)
      })
    } else {
      // Maybe adding one device interactive will be nice.
      // But now, I'm going to throw an error.
      this.error('Configuration file required!')
      return
    }

    preferences.setCustomEmulatedDeviceList(devices)
    await preferences.saveConfiguration()
  }

  async getVibraniumPreference(path: string): Promise<any> {
    return new Promise(resolve => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) { throw err }
        resolve(JSON.parse(data))
      })
    })
  }
}
