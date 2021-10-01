export default {
    name: 'miniBanner',
    title: 'Mini banner',
    type: 'document',
    logo: () => '🎋',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
}