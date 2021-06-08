// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items(
        [
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
        ),
        S.divider(),
      ...S.documentTypeListItems().filter(item => !['siteSettings', 'colors', 'navigation'].includes(item.getId()))
    ]
)