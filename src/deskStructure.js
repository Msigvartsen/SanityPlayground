// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import  * as Icons from "react-icons/fc"
import PreviewIFrame from './previewIFrame'

export default () =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
        .title('Filtered Posts')
        .icon(Icons.FcFeedIn)
        .child(
            S.list()
            .title('Filters')
            .items([
                S.listItem()
                .title('Posts By Category')
                .icon(Icons.FcTimeline)
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
                .icon(Icons.FcVoicePresentation)
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
        .icon(Icons.FcEnteringHeavenAlive)
        .child(
            S.documentList()
                .title('All Posts')
                .filter('_type == "post"')
                .child((documentId) =>
                S.document()
                    .documentId(documentId)
                    .schemaType('post')
                    .views([S.view.form(), PreviewIFrame()])
            )
        ),
        S.listItem()
        .title('Minibanners')
        .icon(() => '🤷‍♂️')
        .child(
            S.list()
            .title('Filters')
            .items([
                S.listItem()
                .title('Unpublished')
                .icon(() => '🛑')
                .child(
                    S.documentList()
                    .title('Banners')
                    .filter('_type == "miniBanner" && _id in path("drafts.**")')
                ),
                S.listItem()
                .title('Published')
                .icon(() => '✔')
                .child(
                    S.documentList()
                    .title('Banners')
                    .filter('_type == "miniBanner" && !(_id in path("drafts.**"))')
                )
            ])
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(item => !['post','siteSettings', 'colors', 'navigation', 'miniBanner'].includes(item.getId())),
        S.divider(),
        S.listItem()
        .title('Settings')
        .icon(Icons.FcEngineering)
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