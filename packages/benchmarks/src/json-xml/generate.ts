import fs from 'node:fs'
import path from 'node:path'
import { faker } from '@faker-js/faker'
import { Builder } from 'xml2js'
import { jsonFolder, xmlFolder } from './common'

const builder = new Builder()

/**
 * 生成随机 JSON
 */
function generateRandomJson() {
  const name = faker.person.fullName()
  return {
    scene: {
      characters: [
        {
          avatar: faker.image.url(),
          name,
        },
        {
          avatar: faker.image.url(),
          name: faker.person.fullName(),
        },
      ],
      dialog: {
        text: faker.lorem.text(),
        name,
      },
    },
  }
}

/**
 * 生成测试数据
 * @param dataLength 长度
 */
function generateTestData(dataLength = 100) {
  fs.mkdirSync(jsonFolder, { recursive: true })
  fs.mkdirSync(xmlFolder, { recursive: true })

  for (let i = 0; i < dataLength; i++) {
    const jsonDemo = generateRandomJson()
    fs.writeFileSync(path.resolve(jsonFolder, `${i + 1}.json`), JSON.stringify(jsonDemo, null, 2))

    const xmlDemo = builder.buildObject(jsonDemo)
    fs.writeFileSync(path.resolve(xmlFolder, `${i + 1}.xml`), xmlDemo)
  }
}

generateTestData(1000)
