// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
        .title('Filtered Posts')
        .child(
            S.list()
            .title('Filters')
            .items([
                S.listItem()
                .title('Posts By Category')
                .child(
                    S.documentTypeList('category')
                    .title('Posts by Category')
                    .child(categoryId => 
                        S.documentList()
                        .title('Posts')
                        .filter('_type == "post" && $categoryId in categories[]._ref')
                        .params({categoryId})
                    )
                ),
                S.listItem()
                .title('Posts By Author')
                .child(
                    S.documentTypeList('author')
                    .title('Posts By Authors')
                    .child(authorId => 
                        S.documentList()
                        .title('Posts')
                        .filter('_type == "post" && $authorId == author._ref')
                        .params({authorId})
                        )
                )
            ])
        ),
        S.listItem()
        .title('All Posts')
        .child(
            S.documentList()
            .title('All Posts')
            .filter('_type == "post"')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(item => !['post','siteSettings', 'colors', 'navigation'].includes(item.getId())),
        S.divider(),
        S.listItem()
        .title('Settings')
        .child(
            S.list()
            .title('Settings Documents')
            .items([
                S.listItem()
                .title('Metadata')
                .child(
                    S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
                S.listItem()
                .title('Site Colors')
                .child(
                    S.document()
                    .schemaType('colors')
                    .documentId('colors')
                ),
                S.listItem()
                  .title('Main Navigation')
                  .child(
                    S.document()
                      .schemaType('navigation')
                      .documentId('navigation')
                  )
            ])
        )
    ]
)