import { englishPostType } from '@/sanity/schemaTypes/englishPostType'
import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, englishPostType],
}
