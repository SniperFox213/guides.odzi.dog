<script>
  // Export options
  export let options = {
    // Icon Color
    iconColor: "",

    // Hovered Icon Color
    hIconColor: "",

    // Background Color
    backgroundColor: "",

    // Hovered Background Color
    hBackgroundColor: "",

    // Custom Classes
    classes: ""
  }
</script>

<button on:click class="transition duration-200 ease-in-out transform p-2 rounded-md bg-{ options.backgroundColor } text-{ options.iconColor } hover:bg-{ options.hBackgroundColor } hover:text-{ options.hIconColor } hover:scale-105 { options.classes }">
  <slot></slot>
</button>