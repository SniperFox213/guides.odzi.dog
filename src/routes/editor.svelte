<script>
  // Importing modules and components
  import { onMount } from "svelte";

  onMount(async () => {
    const module    = await import("@editorjs/editorjs");
    const EditorJS  = module.default;

    // Header Module
    const header    = await import("@editorjs/header")
    const Header    = header.default;

    // Marker Module
    const marker    = await import("@editorjs/marker");
    const Marker    = marker.default;

    // List Module
    const list      = await import("@editorjs/list");
    const List      = list.default;

    // Delimiter Module
    const delimiter = await import("@editorjs/delimiter");
    const Delimiter = delimiter.default;

    // Warning Module
    const warning   = await import("@editorjs/warning");
    const Warning   = warning.default;

    // Table Module
    const table     = await import("@editorjs/table");
    const Table     = table.default;

    const editor = new EditorJS({
      holder: 'editor',
      tools: {
        header: Header,
        Marker: Marker,
        list: List,
        delimiter: Delimiter,
        warning: Warning,

        table: {
          class: Table
        },
      }
    });
  });
</script>

<main class="w-full h-screen relative">
  <div id="editor" class="w-full h-full"></div>
</main>