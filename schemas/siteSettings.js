export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], // remove create and delete from page
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string',
      },
      {
          name: 'description',
          title: 'Meta Description',
          type: 'text'
      }
    ]
  }
  