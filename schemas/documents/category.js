import { FcTimeline } from "react-icons/fc"

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FcTimeline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
