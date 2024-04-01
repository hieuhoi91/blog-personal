'use client';

import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';

import { BlogApi } from '@/api/blog-api';

// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
async function uploadFile(file: File) {
  try {
    const files = await BlogApi.uploadFiles({
      files: [file],
    });

    return files.data.urls[0];
  } catch (error: any) {
    return error.message;
  }
}

export interface EditorProps {
  setHtml: (html: string) => void;
}

export default function Editor(props: EditorProps) {
  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    props.setHtml(html);
  };

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    uploadFile,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} onChange={onChange} />;
}
