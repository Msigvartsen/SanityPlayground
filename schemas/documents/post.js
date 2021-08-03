import EmojiString from '../../src/EmojiString'
import { FcDocument } from "react-icons/fc"
import client from 'part:@sanity/base/client'


export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: FcDocument,
  initialValue: async () => ({
    featured: false,
    publishedAt: new Date().toISOString(),
    // categories: await client.fetch(`//groq 
    // *[_type == "category"] {
    //   "_type: reference",
    //   "_ref": _id,
    // }
    // `)
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage.image',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
