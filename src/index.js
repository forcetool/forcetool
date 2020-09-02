class ForceTool{
  constructor() {
    this.version = '0.0.1';
    this.cacheList = {};
  }
  setCache(key, value) {
    this.cacheList[key] = value;
  }
  getCache(key) {
    return this.cacheList[key];
  }
}

window.ForceTool = ForceTool;