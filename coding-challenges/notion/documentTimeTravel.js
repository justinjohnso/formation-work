class DocumentStore {
  constructor(documentName) {
    this.data = []; // arr of docs
    // data itself is an arr
    // each doc is object in arr
    // doc (obj) -> time, text
    // {
    //   name,
    //   entries: [], -> [time, text]
    // }
  }
  /* Stores the text content for documentName */
  save(documentName, text) {
    if (!this.data.find((el) => el.name === documentName)) {
      this.data.push({
        name: documentName,
        entries: [],
      });
    }

    // text, dateTime
    let now = new Date(Date.now());
    let entry = {
      text: text,
      time: now,
    };
    let doc = this.data.find((el) => el.name === documentName);
    doc.entries.push(entry);
  }

  /* Returns the current content for documentName */
  load(documentName) {
    // load text, given documentName, at most recent datetime
    let doc = this.data.find((el) => el.name === documentName);
    console.log(doc);
    return doc.entries[doc.entries.length - 1].text;
  }

  /* Returns what the contents of documentName was at the given time. */
  loadFromTime(documentName, time) {
    // return last entry where time is less than given time
    // load text, given documentName, at savepoint closest to time

    let doc = this.data.find((el) => el.name === documentName);
    let entries = doc.entries;

    let filtered = entries.filter((el) => el.time < time);
    return filtered[filtered.length - 1].text;
  }
}

let store1 = new DocumentStore();
store1.save("test1", "hello world");
store1.save("test1", "hello pluto");
// console.log(store1.load("test1"));
console.log(store1.loadFromTime("test1", "2020-10-19T22:20:56.097Z"));
// console.log([1, 2, 3].find((el) => el === 4));

// ill try that
