const googleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util')

const creds = require('../client_secret.json');

    async function acessSpreadsheet() {
    const doc = new googleSpreadsheet('1Fw46by2XkBaopBrdb6RKyaalzTShkSuSn8tisyMIHzo')
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
  }

acessSpreadsheet();