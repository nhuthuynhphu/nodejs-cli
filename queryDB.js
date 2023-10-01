import fs from 'fs';

export default async function queryDB(externalFunction) {
  try {
    let info = [];

    if (fs.existsSync('db.json')) {
      await fs.readFile('db.json', async function (err, data) {
        info = JSON.parse(data.toString());

        if (err) {
          console.log(err);
          return;
        }

        if (externalFunction && !err) {
          await externalFunction(info);
          return;
        }
        console.log(info);
      });
    } else {
      if (externalFunction) {
        await externalFunction(info);
        return;
      }
    }
  } catch (error) {
    console.error(`Something Happened: ${error.message}`);
  }
}
