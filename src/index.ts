import app from './app'
import { dbConnection } from './database'

async function main () {
  dbConnection()
  await app.listen(app.get('port'))
  console.log(`Server on port ${app.get('port')}`)
}

main()
