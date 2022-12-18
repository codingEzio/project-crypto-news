import LocalForage from 'localforage';
import VuexPersistence from 'vuex-persist';

LocalForage.config({
  name: 'crypto-news',
  storeName: 'crypto-news-store',
  version: 1.0,
});

export default function createPersistedState(options = {}) {
  return store => {
    const VuexForage = new VuexPersistence({
      ...options,

      storage: LocalForage,
      asyncStorage: true,

      restoreState: (key, storage) => {
        return new Promise(resolve => {
          storage.getItem(key).then(data => {
            resolve(data);

            store._vm.$root.$emit('storageReady');
          });
        });
      },
    });

    return VuexForage.plugin(store);
  };
}
