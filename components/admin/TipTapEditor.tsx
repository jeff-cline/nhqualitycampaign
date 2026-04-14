'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import { useEffect } from 'react'

type Props = { value: string; onChange: (html: string) => void }

export function TipTapEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Link.configure({ openOnClick: false }),
      Image,
      Table.configure({ resizable: false }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: value,
    editorProps: {
      attributes: { class: 'prose-article min-h-[400px] p-4 focus:outline-none' },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    immediatelyRender: false,
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) editor.commands.setContent(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (!editor) return <div className="border rounded p-4 text-gray-400">Loading editor…</div>

  const btn = 'px-2 py-1 border rounded text-sm hover:bg-gray-100'
  const wordCount = editor.getText().trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="border-b border-gray-200 bg-gray-50 p-2 flex flex-wrap gap-1">
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
        <button type="button" className={btn} onClick={() => {
          const url = prompt('URL')
          if (url) editor.chain().focus().setLink({ href: url }).run()
        }}>Link</button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>Table</button>
        <button type="button" className={btn} onClick={() => {
          const url = prompt('Image URL')
          if (url) editor.chain().focus().setImage({ src: url }).run()
        }}>Image</button>
        <span className="ml-auto text-xs text-gray-500 self-center">{wordCount} words</span>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}
