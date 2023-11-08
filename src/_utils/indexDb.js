class Store {
  constructor(dbName = 'gameWithComputer', storeName = 'game') {
    this.storeName = storeName;
    this.dbp = new Promise((resolve, reject) => {
      const openreq = indexedDB.open(dbName, 1); /* eslint-disable-line */
      openreq.onerror = () => reject(openreq.error);
      openreq.onsuccess = () => resolve(openreq.result);
      openreq.onupgradeneeded = () => {
        openreq.result.createObjectStore(storeName);
      };
    });
  }

  withIDBStore(type, callback) {
    return this.dbp.then(
      db =>
        new Promise((resolve, reject) => {
          const transaction = db.transaction(this.storeName, type);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error);
          callback(transaction.objectStore(this.storeName));
        }),
    );
  }
}

function getDefaultStore(dbName, storeName) {
  let store;
  if (!store) store = new Store(dbName, storeName);
  return store;
}

function get(key, store = getDefaultStore()) {
  let req;
  return store
    .withIDBStore('readonly', localStore => {
      req = localStore.get(key);
    })
    .then(() => req.result);
}

function set(key, value, store = getDefaultStore()) {
  return store.withIDBStore('readwrite', localStore => {
    localStore.put(value, key);
  });
}

function del(key, store = getDefaultStore()) {
  return store.withIDBStore('readwrite', localStore => {
    localStore.delete(key);
  });
}
function clear(store = getDefaultStore()) {
  return store.withIDBStore('readwrite', localStore => {
    localStore.clear();
  });
}

const getIndexDbData = id => {
  return get(id);
};

function getAllIndexDbData(store = getDefaultStore()) {
  let req;
  return store
    .withIDBStore('readonly', localStore => {
      req = localStore.getAll();
    })
    .then(() => req.result);
}

const setIndexDb = data => {
  set(data.id, data);
};

export default {
  getDefaultStore,
  get,
  set,
  del,
  clear,
  getIndexDbData,
  getAllIndexDbData,
  setIndexDb,
};
