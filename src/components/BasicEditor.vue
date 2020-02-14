<template>
  <div>
    <b-card>
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">              
        <div class="menubar">
          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <b-icon-type-bold/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <b-icon-type-italic/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <b-icon-type-strikethrough/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <b-icon-type-underline/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <b-icon-code/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <b-icon-list/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            <small>H1</small>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            <small>H2</small>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <small>H3</small>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <b-icon-list-ul/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <b-icon-list-ol/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <b-icon-blockquote-left/>
          </button>

          <button
            class="menubar__button btn-light"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <b-icon-code-slash/>
          </button>

          <button
            class="menubar__button btn-light"
            @click="commands.horizontal_rule"
          >
            <small>HR</small>
          </button>

          <button
            class="menubar__button btn-light"
            @click="commands.undo"
          >
            <b-icon-arrow-counterclockwise/>
          </button>

          <button                    
            class="menubar__button btn-light"
            @click="commands.redo"
          >
            <b-icon-arrow-clockwise/>
          </button>
        </div>
      </editor-menu-bar>
    </b-card>
    <b-card>
      <editor-content class="editor__content" :editor="editor"/>
    </b-card>
  </div>

</template>

<script>
// @ is an alias to /src
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  name: 'BasicEditor',
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {      
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        onUpdate: ({ getHTML }) => {          
          this.$emit('update', getHTML())
        },
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `,
      }),
      show: true,
      form: {

      }
    }
  },
  methods: {
    onSubmit() {

    },
    onReset() {

    },
    onUpdate() {
      console.log('update')
    }
  },
  mounted() {
    
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
