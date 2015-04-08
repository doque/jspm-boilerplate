class Time {
  load() {
    let time = new Date().toString();
    console.log(`file was loaded on ${time}`);
  }
}

export default new Time()