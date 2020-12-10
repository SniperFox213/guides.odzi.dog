<script>
  // Exporting some variables
  export let options = {
    // Badge's Custom Classes
    classes: ""
  }
</script>

<span style="border-radius: 1.5rem;" class="px-3 py-1 bg-white text-black { options.classes }">
  <slot></slot>
</span>