<script>
  export let hovered = false;
  
  // Let's now export our settings object
  export let options = {
    active: false,

    // Width + Height
    width: "",
    height: "",

    // Text Color
    textColor: "",

    // Hovered Text Color
    hTextColor: "",

    // Background Color
    backgroundColor: "",

    // Hovered Background Color
    hBackgroundColor: "",

    // Custom Classes
    classes: ""
  };
</script>

<div class="w-{ options.width } h-{ options.height } p-3 relative">
  <div on:mouseover={(e) => hovered = true} on:mouseout={(e) => hovered = false} on:click class="transition duration-200 ease-in-out transform relative w-full h-full rounded-md { options.active ? `bg-${ options.hBackgroundColor } scale-105` : `cursor-pointer bg-${ options.backgroundColor } hover:scale-105 hover:bg-${ options.hBackgroundColor }` } flex flex-col justify-center items-center { options.classes }">
    <slot>
    </slot>
  </div>
</div>
