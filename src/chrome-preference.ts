import * as fs from 'fs'
import * as os from 'os'

export class ChromePreference {

  private preferences: any = {}

  // flag for preventing save empty settings.
  private configurationOpened = false

  constructor() { }

  // TODO define interface for chrome configuration file.
  async openConfiguration() {
    // This CLI is mac only for now.
    // When we are going to support other OS, we should change this line.
    const preferencePath = this.getMacPreferencesPath()
    // console.log(`your home dir is ${preferenceDir}`)

    return new Promise(resolve => {
      fs.readFile(preferencePath, 'utf8', (err, data) => {
        if (err) { throw err }
        this.preferences = JSON.parse(data)
        this.configurationOpened = true
        resolve()
      })
    })
  }

  async saveConfiguration() {
    // This CLI is mac only for now.
    // When we are going to support other OS, we should change this line.
    const preferencePath = this.getMacPreferencesPath()

    return new Promise(resolve => {
      fs.writeFile(preferencePath, JSON.stringify(this.preferences), err => {
        if (err) { throw err }
        this.configurationOpened = false
        resolve()
      })
    })
  }

  getCustomEmulatedDeviceList() {
    return JSON.parse(this.preferences.devtools.preferences.customEmulatedDeviceList) || []
  }

  setCustomEmulatedDeviceList(list: any[] = []) {
    this.preferences.devtools.preferences.customEmulatedDeviceList = JSON.stringify(list)
  }

  private getMacPreferencesPath() {
    return `${os.homedir()}/Library/Application Support/Google/Chrome/Default/Preferences`
  }

}
