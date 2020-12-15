<script>
  // Let's export some variables
  export let type = "horizontal";

  export let height = "1px";
  export let margin = "x-2";
  export let color = "gray-600";
</script>

{ #if type == "horizontal" }
  <div style="height: 100%; width: { height };" class="rounded-lg bg-{ color } m{ margin }"></div>
{ :else }
  <div style="height: { height }; width: 100%;" class="rounded-lg bg-{ color } m{ margin }"></div>
{ /if }