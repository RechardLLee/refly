import {
  AIHighlight,
  CharacterCount,
  CodeBlockLowlight,
  HorizontalRule,
  StarterKit,
  TaskItem,
  TaskList,
  TiptapLink,
  UpdatedImage,
  Youtube,
  SpaceAICommand,
  DoublePlusAICommand,
  Placeholder,
} from '@refly-packages/ai-workspace-common/components/editor/core/extensions';
import { UploadImagesPlugin } from '@refly-packages/ai-workspace-common/components/editor/core/plugins';
import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { DOMParser } from '@tiptap/pm/model';
import { cx } from 'class-variance-authority';
import { common, createLowlight } from 'lowlight';
import {
  Table,
  TableCell,
  TableHeader,
  TableRow,
  ParagraphAfterTable,
} from '@refly-packages/ai-workspace-common/components/editor/extensions/Table';

const PasteRuleExtension = Extension.create({
  name: 'pasteRule',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('pasteRule'),
        props: {
          handlePaste: (view, event) => {
            const clipboardData = event.clipboardData;
            if (!clipboardData) return false;

            // Try to get HTML content first
            const html = clipboardData.getData('text/html');
            const text = clipboardData.getData('text/plain');

            if (html) {
              // Create a temporary div to parse HTML
              const div = document.createElement('div');
              div.innerHTML = html;

              // Remove all style attributes recursively
              const removeStyles = (element: Element) => {
                // Remove style attribute but keep specific attributes for links
                if (element.tagName.toLowerCase() !== 'a') {
                  element.removeAttribute('style');
                  element.removeAttribute('class');
                }

                // Keep only allowed tags and their attributes
                if (element.tagName.toLowerCase() === 'span') {
                  // Convert span with specific styles to semantic elements
                  const style = element.getAttribute('style') || '';
                  if (style.includes('font-weight: bold') || style.includes('font-weight:bold')) {
                    const strong = document.createElement('strong');
                    strong.innerHTML = element.innerHTML;
                    element.replaceWith(strong);
                  } else if (
                    style.includes('font-style: italic') ||
                    style.includes('font-style:italic')
                  ) {
                    const em = document.createElement('em');
                    em.innerHTML = element.innerHTML;
                    element.replaceWith(em);
                  } else {
                    // Remove span if it doesn't represent bold or italic
                    element.replaceWith(...Array.from(element.childNodes));
                  }
                }

                Array.from(element.children).forEach(removeStyles);
              };

              removeStyles(div);

              // Parse the cleaned HTML with prosemirror
              const parser = DOMParser.fromSchema(view.state.schema);
              const doc = parser.parse(div);

              // Get current node type at cursor position
              const { from, to } = view.state.selection;
              const { tr } = view.state;
              const $from = view.state.doc.resolve(from);
              const currentNode = $from.parent;

              // Check if current node is an empty paragraph
              if (currentNode.type.name === 'paragraph' && currentNode.content.size === 0) {
                // Replace the empty paragraph with the pasted content
                tr.replaceWith($from.before($from.depth), $from.after($from.depth), doc.content);
                view.dispatch(tr);
                return true;
              }

              // Check if current node is a paragraph and pasted content is a single paragraph
              if (
                currentNode.type.name === 'paragraph' &&
                doc.content.childCount === 1 &&
                doc.content.firstChild?.type.name === 'paragraph'
              ) {
                // Merge paragraphs by inserting only the content of the pasted paragraph
                const pastedContent = doc.content.firstChild.content;

                if (from !== to) {
                  tr.delete(from, to);
                }

                tr.insert(from, pastedContent);
                view.dispatch(tr);
                return true;
              }

              // Default handling for other cases
              if (from !== to) {
                tr.delete(from, to);
              }

              tr.insert(from, doc.content);
              view.dispatch(tr);
              return true;
            }
            if (text) {
              // Fallback to plain text handling
              const { tr } = view.state;
              const { from, to } = view.state.selection;

              if (from !== to) {
                tr.delete(from, to);
              }

              tr.insertText(text, from);
              view.dispatch(tr);
              return true;
            }

            return false;
          },
        },
      }),
    ];
  },
});

//TODO I am using cx here to get tailwind autocomplete working, idk if someone else can write a regex to just capture the class key in objects
const aiHighlight = AIHighlight;
//You can overwrite the placeholder with your own configuration
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class: cx(
      'text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer',
    ),
  },
});

const tiptapImage = UpdatedImage.extend({
  addProseMirrorPlugins() {
    return [
      UploadImagesPlugin({
        imageClass: cx('opacity-40 rounded-lg border border-stone-200'),
      }),
    ];
  },
  selectable: true,
  draggable: true,
}).configure({
  allowBase64: true,
  HTMLAttributes: {
    class: cx('rounded-lg border border-muted cursor-pointer'),
  },
});

const taskList = TaskList.configure({
  HTMLAttributes: {
    class: cx('not-prose pl-2 '),
  },
});
const taskItem = TaskItem.configure({
  HTMLAttributes: {
    class: cx('flex gap-2 items-start my-4'),
  },
  nested: true,
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: cx('mt-4 mb-6 border-t border-muted-foreground'),
  },
});

const starterKit = StarterKit.configure({
  bulletList: {
    HTMLAttributes: {
      class: cx('list-disc list-outside leading-3 -mt-2'),
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: cx('list-decimal list-outside leading-3 -mt-2'),
    },
  },
  listItem: {
    HTMLAttributes: {
      class: cx('leading-normal -mb-2'),
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: cx('border-l-4 border-primary'),
    },
  },
  codeBlock: {
    HTMLAttributes: {
      class: cx('rounded-md bg-muted text-muted-foreground border p-5 font-mono font-medium'),
    },
  },
  code: {
    HTMLAttributes: {
      class: cx('rounded-md bg-muted  px-1.5 py-1 font-mono font-medium'),
      spellcheck: 'false',
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: '#DBEAFE',
    width: 4,
  },
  gapcursor: false,
  history: false,
});

const _codeBlockLowlight = CodeBlockLowlight.configure({
  // configure lowlight: common /  all / use highlightJS in case there is a need to specify certain language grammars only
  // common: covers 37 language grammars which should be good enough in most cases
  lowlight: createLowlight(common),
});

const youtube = Youtube.configure({
  HTMLAttributes: {
    class: cx('rounded-lg border border-muted'),
  },
  inline: false,
});

const characterCount = CharacterCount.configure();

const tableExtensions = [Table, TableRow, TableHeader, TableCell, ParagraphAfterTable];

export const defaultExtensions = [
  starterKit,
  ...tableExtensions,
  tiptapLink,
  tiptapImage,
  taskList,
  taskItem,
  horizontalRule,
  aiHighlight,
  youtube,
  characterCount,
  SpaceAICommand,
  DoublePlusAICommand,
  PasteRuleExtension,
];

export { Placeholder };
