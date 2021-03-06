import { writable } from "svelte/store";
import axios from "axios";

function createProfileStore() {
  let profile = {
    id: null,
    
    displayName: null,
    email: null,

    avatar: null,
    provider: null
  };

  // Let's now "import" some important
  const { subscribe, update } = writable(profile);

  return {
    subscribe,

    // Function, that'll load our user information
    loadProfile: (token) => {
      return new Promise((resolve, reject) => {
        // Let's now try to connect to authed
        // servers and try to get some information
        // about this token.
        axios.get(`https://authed.unfull.ml/api/token/${token}`)
        .then((response) => {
          const data = response.data;

          // And now let's update our store.
          update((store) => {
            store.id = data.profile.id;
            
            store.displayName = data.profile.displayName;
            store.email = data.profile.emails[0].value;

            store.avatar = data.profile.photos[0].value;
            store.provider = data.profile.provider;
            
            store.pets = [
              // {
              //   id: 1,

              //   name: "Хантер",
              //   avatar: "https://taiken.co/uploads/2020/07/Akita-Inu-scaled-e1595821902820-1200x702.jpg",

              //   breed: "Akita-Inu",
                
              //   division: 3,
              //   level: 1,

              //   courses: [],
              //   medals: []
              // }
            ];

            setTimeout(() => {
              resolve(store);
            }, 10);
            return store;
          });
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // Function, that'll force our user's profile
    // data to the store.
    forceProfile: (profile) => {
      update(() => {
        return profile;
      });
    }
  }
};

export default createProfileStore();