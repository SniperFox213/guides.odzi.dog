import { writable } from "svelte/store";

function createSettingsStore() {
  let settings = {
    minimalisticView: true
  };

  // Let's now "import" some important
  const { subscribe, update } = writable(settings);

  return {
    subscribe,

    // changeSetting
    // Function, that'll change different settings.
    changeSetting: (setting, value) => {
      update((obj) => {
        obj[setting] = value;

        return obj;
      });
    }
  }
};

export default createSettingsStore();