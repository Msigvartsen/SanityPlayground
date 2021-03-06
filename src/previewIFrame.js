import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import resolveUrl from '../resolvePreviewUrl'

const env = process.env.NODE_ENV || 'development'

const PreviewIFrame = () =>
  S.view
    .component(({document}) => {
      const {displayed} = document
      if (!displayed) {
        return <p>Nothing to display</p>
      }
      const url = resolveUrl(displayed)
      return (
        <React.Fragment>
            <p>{url}</p>
        <iframe
          style={{
            width: '100%',
            height: '100%'
          }}
          frameBorder={'0'}
          src={url}
        />
        </React.Fragment>
      )
    })
    .icon( () => '🌐')
    .title('Web preview')

export default PreviewIFrame