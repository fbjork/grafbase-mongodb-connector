import { g, config, connector } from '@grafbase/sdk'

const mongo = connector.MongoDB({
  name: 'blog',
  apiKey: g.env('MONGODB_API_KEY'),
  appId: g.env('MONGODB_API_ID'),
  dataSource: g.env('MONGODB_DATA_SOURCE'),
  database: g.env('MONGODB_DATABASE'),
})

mongo.model('Post', {
  title: g.string(),
  slug: g.string()
}).collection('posts')

g.datasource(mongo, { namespace: 'blog' })

export default config({ schema: g })
