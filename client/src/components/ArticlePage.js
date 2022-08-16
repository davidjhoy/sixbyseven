
// import { generateHTML } from '@tiptap/html'
import React, { useMemo } from 'react'
import Bold from '@tiptap/extension-bold'
import { generateHTML } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

const ArticlePage = () => {

  const json = {"type":"doc","content":[{"type":"heading","attrs":{"level":3},"content":[{"type":"text","text":"Your next great idea starts here ..."}]}]}

  const output = useMemo(() => {
    return generateHTML(json, [
      Document,
      Paragraph,
      Text,
      Bold,
      Heading,
      // other extensions …
    ])
  }, [json])
  

  const renderer = (input) => {
    return 
  }

  console.log(output)

  return (
    <>
      <div>ArticlePage</div>
      
      <div dangerouslySetInnerHTML={{ __html: output }}>
         </div>
      
    </>
  )
}

export default ArticlePage;

