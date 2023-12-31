import { g, config, connector } from '@grafbase/sdk'

const mongo = connector.MongoDB('blog', {
  url: g.env('MONGODB_API_URL'),
  apiKey: g.env('MONGODB_API_KEY'),
  dataSource: g.env('MONGODB_DATA_SOURCE'),
  database: g.env('MONGODB_DATABASE'),
})

mongo.model('Post', {
  title: g.string(),
  slug: g.string()
}).collection('posts')

g.datasource(mongo)

export default config({ schema: g })
