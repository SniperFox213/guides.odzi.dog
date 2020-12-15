<script>
  // Exporting some variables
  export let options = {
    // Badge's Custom Classes
    classes: "",

    // Badge's Background Color
    backgroundColor: "",

    // Badge's Text Color
    textColor: ""
  }
</script>

<span style="border-radius: 1.5rem;" class="px-3 py-1 bg-{ options.backgroundColor } text-{ options.textColor } { options.classes }">
  <slot></slot>
</span>