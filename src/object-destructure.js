const initialState = {
  bookmarked: false,
  incomplete: false,
  project: {},
  query: '',
  sort: {
    defaultOrder: 'desc',
    order: 'desc',
    text: 'Added Date',
    value: 'addedDate'
  },
  readingListSort: {
    defaultOrder: 'desc',
    order: 'desc',
    text: 'Added Date',
    value: 'addedDate'
  },
  tags: [],
  unsorted: false
};

var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
let foo = { ...initialState, tags: ['foo'] };
console.log(foo);
