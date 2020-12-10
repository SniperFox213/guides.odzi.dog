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
    // Hovered Background Color
    hBackgroundColor: "",

    // 
    // Border Color
    borderColor: "",

    // Hovered Border Color
    hBorderColor: "",

    //
    // Custom Classes
    classes: ""
  };
</script>

<!-- Button's Layout -->
<button on:mouseover={(e) => hovered = true} on:mouseout={(e) => hovered = false} class="{ options.classes } border-1 border-{ options.borderColor } text-{ options.textColor } hover:text-{ options.hTextColor } hover:bg-{ options.hBackgroundColor } hover:border-{ options.hBorderColor } transition duration-300 ease-in-out py-1 px-4 rounded-md text-sm hover:shadow-md">
  <slot></slot>
</button>