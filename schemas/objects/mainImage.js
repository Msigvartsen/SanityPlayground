export default {
    name: 'mainImage',
    title: 'Main image',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'alternativeText',
            title: 'Alternative Text',
            type: 'string',
        }
    ]
}