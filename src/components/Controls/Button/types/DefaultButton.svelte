<script>
  export let hovered = false;

  // Let's export some variables
  export let options = {
    //
    // Text Color
    textColor: "",

    // Hovered Text Color
    hTextColor: "",

    //
    // Background Color
    backgroundColor: "",

    // Hovered Background Color
    hBackgroundColor: "",

    //
    // Custom Classes
    classes: ""
  };
</script>

<!-- Button's Layout -->
<button on:click on:mouseover={(e) => hovered = true} on:mouseout={(e) => hovered = false} class="{ options.classes } text-{ options.textColor } bg-{ options.backgroundColor } hover:text-{ options.hTextColor } hover:bg-{ options.hBackgroundColor } transition duration-300 ease-in-out py-1 px-4 rounded-md text-sm hover:shadow-md">
  <slot></slot>
</button>