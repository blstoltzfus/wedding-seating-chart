import { useState, useEffect, useRef } from "react";

const GUESTS = [
  {id:0,name:"Hannah Adams",group:"Adams",rel:"Brooke's Family",tableId:null},
  {id:1,name:"Zack Kingsley",group:"Adams",rel:"Brooke's Family",tableId:null},
  {id:2,name:"Megan Addis",group:"Addis",rel:"Brooke's Friend",tableId:null},
  {id:3,name:"Michael Awurumibe",group:"Awurumibe",rel:"Brooke's Friend",tableId:null},
  {id:4,name:"Rachel Awurumibe",group:"Awurumibe",rel:"Brooke's Friend",tableId:null},
  {id:5,name:"Joy Beck",group:"Beck",rel:"Bennett's Family",tableId:null},
  {id:6,name:"John Beck",group:"Beck",rel:"Bennett's Family",tableId:null},
  {id:7,name:"Julie Beck",group:"Beck",rel:"Bennett's Family",tableId:null},
  {id:8,name:"Scarlet Beck",group:"Beck",rel:"Bennett's Family",tableId:null},
  {id:9,name:"Kiersten Bennett",group:"Bennett",rel:"Brooke's Family",tableId:null},
  {id:10,name:"Daren Smith",group:"Bennett",rel:"Brooke's Family",tableId:null},
  {id:11,name:"Michael Berlingieri",group:"Berlingieri",rel:"Bennett's Friend",tableId:null},
  {id:12,name:"Minda Bernhardt",group:"Bernhardt",rel:"Brooke's Family Friend",tableId:null},
  {id:13,name:"Chris Bernhardt",group:"Bernhardt",rel:"Brooke's Family Friend",tableId:null},
  {id:14,name:"Amy Blank",group:"Blank",rel:"Brooke's Family Friend",tableId:null},
  {id:15,name:"Drew Blank",group:"Blank",rel:"Brooke's Family Friend",tableId:null},
  {id:16,name:"Julie Book",group:"Book",rel:"Brooke's Family Friend",tableId:null},
  {id:17,name:"Gary Book",group:"Book",rel:"Brooke's Family Friend",tableId:null},
  {id:18,name:"Thad Book",group:"Book",rel:"Brooke's Family Friend",tableId:null},
  {id:19,name:"Nevin Book",group:"Book",rel:"Brooke's Family Friend",tableId:null},
  {id:20,name:"Jenna Clark",group:"Book",rel:"Brooke's Family Friend",tableId:null},
  {id:21,name:"Hannah Brotz",group:"Brotz",rel:"Brooke's Friend",tableId:null},
  {id:22,name:"Chloe Bucher",group:"Bucher",rel:"Brooke's Family Friend",tableId:null},
  {id:23,name:"Brad Weder",group:"Bucher",rel:"Brooke's Family Friend",tableId:null},
  {id:24,name:"Lori Bucher",group:"Bucher",rel:"Brooke's Family Friend",tableId:null},
  {id:25,name:"Coley Bucher",group:"Bucher",rel:"Brooke's Family Friend",tableId:null},
  {id:26,name:"Molly Bucher",group:"Bucher",rel:"Brooke's Friend",tableId:null},
  {id:27,name:"Payton Cunningham",group:"Bucher",rel:"Brooke's Friend",tableId:null},
  {id:28,name:"Morgan Bucher",group:"Bucher",rel:"Brooke's Family Friend",tableId:null},
  {id:29,name:"Delaney Burns",group:"Burns",rel:"Brooke's Family",tableId:null},
  {id:30,name:"Jack Smith",group:"Burns",rel:"Brooke's Family",tableId:null},
  {id:31,name:"Andrew Buscay",group:"Buscay",rel:"Bennett's Friend",tableId:null},
  {id:32,name:"Janiece Cameron",group:"Cameron",rel:"Brooke's Family",tableId:null},
  {id:33,name:"Lucy Campbell",group:"Campbell",rel:"Brooke's Friend",tableId:null},
  {id:34,name:"Cate Chadwick",group:"Chadwick",rel:"Brooke's Friend",tableId:null},
  {id:35,name:"Keaton Fischer",group:"Chadwick",rel:"Brooke's Friend",tableId:null},
  {id:36,name:"Joey Chapman",group:"Chapman",rel:"Brooke's Family",tableId:null},
  {id:37,name:"Ella Trimble",group:"Chapman",rel:"Brooke's Family",tableId:null},
  {id:38,name:"Kelly Chapman",group:"Chapman",rel:"Brooke's Family",tableId:null},
  {id:39,name:"Brian Chapman",group:"Chapman",rel:"Brooke's Family",tableId:null},
  {id:40,name:"Evan Chapman",group:"Chapman",rel:"Brooke's Family",tableId:null},
  {id:41,name:"Lanie Chapman",group:"Chapman",rel:"Brooke's Family",tableId:null},
  {id:42,name:"Eli Cohen",group:"Cohen",rel:"Bennett's Friend",tableId:null},
  {id:43,name:"Jake Curran",group:"Curran",rel:"Bennett's Friend",tableId:null},
  {id:44,name:"Jenna Daveler",group:"Daveler",rel:"Brooke's Friend",tableId:null},
  {id:45,name:"Brendan Degryse",group:"Degryse",rel:"Bennett's Friend",tableId:null},
  {id:46,name:"James Delia",group:"Delia",rel:"Bennett's Friend",tableId:null},
  {id:47,name:"Barrett Denlinger",group:"Denlinger",rel:"Bennett's Friend",tableId:null},
  {id:48,name:"Hillary Denlinger",group:"Denlinger",rel:"Brooke's Family Friend",tableId:null},
  {id:49,name:"Jim Denlinger",group:"Denlinger",rel:"Brooke's Family Friend",tableId:null},
  {id:50,name:"Leah Denlinger",group:"Denlinger",rel:"Brooke's Friend",tableId:null},
  {id:51,name:"Chase Burig",group:"Denlinger",rel:"Brooke's Friend",tableId:null},
  {id:52,name:"Vilmarie Diaz",group:"Diaz",rel:"Bennett's Family Friend",tableId:null},
  {id:53,name:"Claire Dodds",group:"Dodds",rel:"Brooke's Friend",tableId:null},
  {id:54,name:"Andrew Fink",group:"Fink",rel:"Brooke's Family Friend",tableId:null},
  {id:55,name:"Mariah Garman",group:"Garman",rel:"Brooke's Friend",tableId:null},
  {id:56,name:"Jake Garman",group:"Garman",rel:"Brooke's Friend",tableId:null},
  {id:57,name:"Marybeth Gochnauer",group:"Gochnauer",rel:"Brooke's Family Friend",tableId:null},
  {id:58,name:"Brad Gochnauer",group:"Gochnauer",rel:"Brooke's Family Friend",tableId:null},
  {id:59,name:"Katherine Gordley",group:"Gordley",rel:"Brooke's Friend",tableId:null},
  {id:60,name:"Brayden Gordley",group:"Gordley",rel:"Brooke's Friend",tableId:null},
  {id:61,name:"Janelle Groff",group:"Groff",rel:"Brooke's Family",tableId:null},
  {id:62,name:"Andy Groff",group:"Groff",rel:"Brooke's Family",tableId:null},
  {id:63,name:"Aaron Groff",group:"Groff",rel:"Brooke's Family",tableId:null},
  {id:64,name:"Gavin Groff",group:"Groff",rel:"Brooke's Family",tableId:null},
  {id:65,name:"Sue Groff",group:"Groff",rel:"Brooke's Family",tableId:null},
  {id:66,name:"John Groff",group:"Groff",rel:"Brooke's Family",tableId:null},
  {id:67,name:"Kara Grove",group:"Grove",rel:"Bennett's Family Friend",tableId:null},
  {id:68,name:"Anthony Grove",group:"Grove",rel:"Bennett's Family Friend",tableId:null},
  {id:69,name:"Phil Guse",group:"Guse",rel:"Bennett's Friend",tableId:null},
  {id:70,name:"Heather Hartman",group:"Hartman",rel:"Brooke's Family Friend",tableId:null},
  {id:71,name:"Maria Hess",group:"Hess",rel:"Bennett's Family Friend",tableId:null},
  {id:72,name:"Roman Hess",group:"Hess",rel:"Bennett's Family Friend",tableId:null},
  {id:73,name:"Beau Heyser",group:"Heyser",rel:"Bennett's Friend",tableId:null},
  {id:74,name:"Holly Heyser",group:"Heyser",rel:"Brooke's Family Friend",tableId:null},
  {id:75,name:"Bill Heyser",group:"Heyser",rel:"Brooke's Family Friend",tableId:null},
  {id:76,name:"Austin Hornig",group:"Hornig",rel:"Bennett's Friend",tableId:null},
  {id:77,name:"Tessa Twyman",group:"Hornig",rel:"Bennett's Friend",tableId:null},
  {id:78,name:"Jack Ingram",group:"Ingram",rel:"Brooke's Family Friend",tableId:null},
  {id:79,name:"Mackenzie Roth",group:"Ingram",rel:"Brooke's Family Friend",tableId:null},
  {id:80,name:"Maddie Jones",group:"Jones",rel:"Brooke's Friend",tableId:null},
  {id:81,name:"Wes Mah",group:"Jones",rel:"Brooke's Friend",tableId:null},
  {id:82,name:"Jordan Kane",group:"Kane",rel:"Brooke's Friend",tableId:null},
  {id:83,name:"Diego Gonzalez",group:"Kane",rel:"Brooke's Friend",tableId:null},
  {id:84,name:"Lynda Kane",group:"Kane",rel:"Brooke's Family Friend",tableId:null},
  {id:85,name:"Mike Kane",group:"Kane",rel:"Brooke's Family Friend",tableId:null},
  {id:86,name:"Ellie Kingsley",group:"Kingsley",rel:"Brooke's Family",tableId:null},
  {id:87,name:"Gabe Lopez",group:"Kingsley",rel:"Brooke's Family",tableId:null},
  {id:88,name:"Jackie Kingsley",group:"Kingsley",rel:"Brooke's Family",tableId:null},
  {id:89,name:"Ben Kingsley",group:"Kingsley",rel:"Brooke's Family",tableId:null},
  {id:90,name:"Kim Kingsley",group:"Kingsley",rel:"Brooke's Family",tableId:null},
  {id:91,name:"Pete Kingsley",group:"Kingsley",rel:"Brooke's Family",tableId:null},
  {id:92,name:"Isabelle Kirkpatrick",group:"Kirkpatrick",rel:"Brooke's Friend",tableId:null},
  {id:93,name:"William DeLeon",group:"Kirkpatrick",rel:"Brooke's Friend",tableId:null},
  {id:94,name:"Janelle Kreider",group:"Kreider",rel:"Bennett's Family Friend",tableId:null},
  {id:95,name:"Pat McCafferty",group:"Kreider",rel:"Bennett's Family Friend",tableId:null},
  {id:96,name:"Morgan Lapp",group:"Lapp",rel:"Brooke's Friend",tableId:null},
  {id:97,name:"Zach Machinga",group:"Machinga",rel:"Bennett's Friend",tableId:null},
  {id:98,name:"McKenzie Manning",group:"Manning",rel:"Brooke's Friend",tableId:null},
  {id:99,name:"Missy Manning",group:"Manning",rel:"Brooke's Family Friend",tableId:null},
  {id:100,name:"Dave Manning",group:"Manning",rel:"Brooke's Family Friend",tableId:null},
  {id:101,name:"Lily Mast",group:"Mast",rel:"Bennett's Family",tableId:null},
  {id:102,name:"Preston Mast",group:"Mast",rel:"Bennett's Family",tableId:null},
  {id:103,name:"Halle McGarrigle",group:"McGarrigle",rel:"Brooke's Friend",tableId:null},
  {id:104,name:"Hollyn Miller",group:"Miller",rel:"Brooke's Friend",tableId:null},
  {id:105,name:"Melissa Mullin",group:"Mullin",rel:"Bennett's Family Friend",tableId:null},
  {id:106,name:"Kyle Mullin",group:"Mullin",rel:"Bennett's Family Friend",tableId:null},
  {id:107,name:"Kim Myers",group:"Myers",rel:"Brooke's Family Friend",tableId:null},
  {id:108,name:"Curt Myers",group:"Myers",rel:"Brooke's Family Friend",tableId:null},
  {id:109,name:"Mason Myers",group:"Myers",rel:"Brooke's Family Friend",tableId:null},
  {id:110,name:"Isabelle Macioce",group:"Myers",rel:"Brooke's Family Friend",tableId:null},
  {id:111,name:"Ally Osborne",group:"Osborne",rel:"Bennett's Family Friend",tableId:null},
  {id:112,name:"Noah Patterson",group:"Patterson",rel:"Brooke's Family Friend",tableId:null},
  {id:113,name:"Jen Peterson",group:"Peterson",rel:"Brooke's Family Friend",tableId:null},
  {id:114,name:"Brian Peterson",group:"Peterson",rel:"Brooke's Family Friend",tableId:null},
  {id:115,name:"Anne Marie Pisani",group:"Pisani",rel:"Bennett's Family",tableId:null},
  {id:116,name:"Robert Pisani",group:"Pisani",rel:"Bennett's Family",tableId:null},
  {id:117,name:"Jillian Pisani",group:"Pisani",rel:"Bennett's Family",tableId:null},
  {id:118,name:"Bob Pisani",group:"Pisani",rel:"Bennett's Family",tableId:null},
  {id:119,name:"Lucia Pisani",group:"Pisani",rel:"Bennett's Family",tableId:null},
  {id:120,name:"Nate Pisani",group:"Pisani",rel:"Bennett's Family",tableId:null},
  {id:121,name:"Grant Popp",group:"Popp",rel:"Bennett's Friend",tableId:null},
  {id:122,name:"Sarah Preziuso",group:"Preziuso",rel:"Bennett's Family Friend",tableId:null},
  {id:123,name:"Jonathan Preziuso",group:"Preziuso",rel:"Bennett's Family Friend",tableId:null},
  {id:124,name:"Melissa Rice",group:"Rice",rel:"Bennett's Family Friend",tableId:null},
  {id:125,name:"Neal Rice",group:"Rice",rel:"Bennett's Family Friend",tableId:null},
  {id:126,name:"Lauren Rogers",group:"Rogers",rel:"Bennett's Family Friend",tableId:null},
  {id:127,name:"Joey Rogers",group:"Rogers",rel:"Bennett's Family Friend",tableId:null},
  {id:128,name:"Pamela Rushmer",group:"Rushmer",rel:"Bennett's Family",tableId:null},
  {id:129,name:"Doug Schneider",group:"Schneider",rel:"Brooke's Family Friend",tableId:null},
  {id:130,name:"Ellen Schoellkopf",group:"Schoellkopf",rel:"Bennett's Family",tableId:null},
  {id:131,name:"Karl Schoellkopf",group:"Schoellkopf",rel:"Bennett's Family",tableId:null},
  {id:132,name:"Linda Shaeffer",group:"Shaeffer",rel:"Brooke's Family Friend",tableId:null},
  {id:133,name:"Joe Shaeffer",group:"Shaeffer",rel:"Brooke's Family Friend",tableId:null},
  {id:134,name:"Beth Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:135,name:"Todd Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:136,name:"Luke Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:137,name:"Ella Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:138,name:"Erin Smith",group:"Smith",rel:"Brooke's Family Friend",tableId:null},
  {id:139,name:"Phil Smith",group:"Smith",rel:"Brooke's Family Friend",tableId:null},
  {id:140,name:"Jennifer Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:141,name:"Mark Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:142,name:"Julia Smith",group:"Smith",rel:"Brooke's Family Friend",tableId:null},
  {id:143,name:"Brian Smith",group:"Smith",rel:"Brooke's Family Friend",tableId:null},
  {id:144,name:"Katelyn Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:145,name:"Kimberly Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:146,name:"Craig Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:147,name:"Lanie Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:148,name:"Kenneth Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:149,name:"Sharon Smith",group:"Smith",rel:"Bennett's Family Friend",tableId:null},
  {id:150,name:"David Smith",group:"Smith",rel:"Bennett's Family Friend",tableId:null},
  {id:151,name:"Victoria Smith",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:152,name:"Ezio Guzm\u00e1n-Barron Villar",group:"Smith",rel:"Brooke's Family",tableId:null},
  {id:153,name:"William Smith",group:"Smith",rel:"Bennett's Friend",tableId:null},
  {id:154,name:"Rhyan Socash",group:"Socash",rel:"Brooke's Family",tableId:null},
  {id:155,name:"Drew Smith",group:"Socash",rel:"Brooke's Family",tableId:null},
  {id:156,name:"Elizabeth Stefanosky",group:"Stefanosky",rel:"Bennett's Family",tableId:null},
  {id:157,name:"Timothy Stefanosky",group:"Stefanosky",rel:"Bennett's Family",tableId:null},
  {id:158,name:"Adam Stoltzfus",group:"Stoltzfus",rel:"Brooke's Family Friend",tableId:null},
  {id:159,name:"Andrea Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:160,name:"Matt Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:161,name:"Ila Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:162,name:"Ava Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:163,name:"Gabe Smeltz",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:164,name:"Carol Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:165,name:"John Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:166,name:"Chris Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:167,name:"Grace Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:168,name:"Luke Redcay",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:169,name:"Heidi Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:170,name:"Dave Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:171,name:"Kim Stoltzfus",group:"Stoltzfus",rel:"Brooke's Family Friend",tableId:null},
  {id:172,name:"Arlin Stoltzfus",group:"Stoltzfus",rel:"Brooke's Family Friend",tableId:null},
  {id:173,name:"Rebecca Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:174,name:"Colson Stoltzfus",group:"Stoltzfus",rel:"Bennett's Family",tableId:null},
  {id:175,name:"Lydia Stoner",group:"Stoner",rel:"Brooke's Friend",tableId:null},
  {id:176,name:"Kristen Straub",group:"Straub",rel:"Brooke's Family Friend",tableId:null},
  {id:177,name:"Chris Straub",group:"Straub",rel:"Brooke's Family Friend",tableId:null},
  {id:178,name:"Julia Straub",group:"Straub",rel:"Brooke's Family Friend",tableId:null},
  {id:179,name:"Natalie Straub",group:"Straub",rel:"Brooke's Family Friend",tableId:null},
  {id:180,name:"Jen Sugra",group:"Sugra",rel:"Brooke's Family Friend",tableId:null},
  {id:181,name:"Chris Sugra",group:"Sugra",rel:"Brooke's Family Friend",tableId:null},
  {id:182,name:"Aria Swanson",group:"Swanson",rel:"Brooke's Family",tableId:null},
  {id:183,name:"Julie Swanson",group:"Swanson",rel:"Brooke's Family",tableId:null},
  {id:184,name:"Rob Swanson",group:"Swanson",rel:"Brooke's Family",tableId:null},
  {id:185,name:"Jan Umble",group:"Umble",rel:"Bennett's Family",tableId:null},
  {id:186,name:"Curt Umble",group:"Umble",rel:"Bennett's Family",tableId:null},
  {id:187,name:"Elena Velez",group:"Velez",rel:"Brooke's Friend",tableId:null},
  {id:188,name:"Luka Vranich",group:"Vranich",rel:"Bennett's Friend",tableId:null},
  {id:189,name:"Berkeley Wagner",group:"Wagner",rel:"Both",tableId:null},
  {id:190,name:"Michelle Wagner",group:"Wagner",rel:"Brooke's Family Friend",tableId:null},
  {id:191,name:"Mike Wagner",group:"Wagner",rel:"Brooke's Family Friend",tableId:null},
  {id:192,name:"Alanna Weaver",group:"Weaver",rel:"Brooke's Friend",tableId:null},
  {id:193,name:"Bridget Weed",group:"Weed",rel:"Brooke's Friend",tableId:null},
  {id:194,name:"Ryan Goldschmidt",group:"Weed",rel:"Brooke's Friend",tableId:null},
  {id:195,name:"Julia White",group:"White",rel:"Brooke's Family Friend",tableId:null},
  {id:196,name:"Thomas White",group:"White",rel:"Brooke's Family Friend",tableId:null},
  {id:197,name:"Hannah Williams",group:"Williams",rel:"Brooke's Friend",tableId:null},
  {id:198,name:"Lisa Williams",group:"Williams",rel:"Brooke's Family Friend",tableId:null},
  {id:199,name:"Randy Williams",group:"Williams",rel:"Brooke's Family Friend",tableId:null},
  {id:200,name:"Andrea Wilson",group:"Wilson",rel:"Brooke's Family Friend",tableId:null},
  {id:201,name:"Bob Wilson",group:"Wilson",rel:"Brooke's Family Friend",tableId:null},
  {id:202,name:"Matt Wilson",group:"Wilson",rel:"Bennett's Friend",tableId:null},
];

const DEFAULT_TABLES = [
  ...Array.from({length:22},(_,i)=>{
    const id = i + 1;
    let cap = 8;
    if(id===2 || id===3) cap = 6;
    if(id===13 || id===19) cap = 9;
    return {id,name:`Table ${id}`,cap,section:"main"};
  }),
  {id:23,name:"Loft 1",cap:6,section:"loft"},
  {id:24,name:"Loft 2",cap:6,section:"loft"},
  {id:25,name:"Loft 3",cap:6,section:"loft"},
  {id:26,name:"Loft 4",cap:6,section:"loft"},
  {id:27,name:"Loft 5",cap:6,section:"loft"},
];

const RSVP_TOTAL = GUESTS.length;

const normalizeTables = (savedTables) => {
  if(!Array.isArray(savedTables)) return DEFAULT_TABLES.map(t=>({...t}));
  const defaultsById = Object.fromEntries(DEFAULT_TABLES.map(t=>[t.id,t]));
  const seen = new Set();
  const ordered = savedTables
    .filter(t=>defaultsById[t.id])
    .map(t=>{
      seen.add(t.id);
      return {
        ...defaultsById[t.id],
        ...t,
        cap: Math.max(1, Math.min(20, Number(t.cap)||defaultsById[t.id].cap)),
      };
    });
  return [
    ...ordered,
    ...DEFAULT_TABLES.filter(t=>!seen.has(t.id)).map(t=>({...t})),
  ];
};

const RS = {
  "Bennett's Family":        {bg:"#dbe4ff",tx:"#3b5bdb"},
  "Bennett's Family Friend": {bg:"#d0ebff",tx:"#1864ab"},
  "Bennett's Friend":        {bg:"#d3f9d8",tx:"#2b8a3e"},
  "Brooke's Family":         {bg:"#fce7f3",tx:"#a61e4d"},
  "Brooke's Family Friend":  {bg:"#fff0f6",tx:"#862e5e"},
  "Brooke's Friend":         {bg:"#fff4e6",tx:"#d9480f"},
  "Both":                    {bg:"#f3f0ff",tx:"#6741d9"},
};

const chip = (rel,compact,dragging) => {
  const r = RS[rel]||{bg:"#f1f3f5",tx:"#495057"};
  return {
    background:r.bg, color:r.tx,
    padding: compact?"2px 6px":"4px 8px",
    borderRadius:5, fontSize:compact?11:12.5,
    cursor:"grab", userSelect:"none",
    opacity:dragging?0.35:1,
    display:"flex", alignItems:"center", gap:5,
    marginBottom:compact?2:3,
    transition:"opacity 0.12s",
  };
};

const storage = {
  async get(key) {
    if (typeof window === "undefined") return null;
    if (window.storage?.get) return window.storage.get(key);
    const value = window.localStorage?.getItem(key);
    return value ? { value } : null;
  },
  async set(key, value) {
    if (typeof window === "undefined") return;
    if (window.storage?.set) return window.storage.set(key, value);
    window.localStorage?.setItem(key, value);
  },
};

export default function SeatingChart() {
  const [guests,setGuests]     = useState(()=>GUESTS.map(g=>({...g})));
  const [tNames,setTNames]     = useState({});
  const [tables,setTables]     = useState(()=>normalizeTables());
  const [search,setSearch]     = useState("");
  const [relF,setRelF]         = useState("");
  const [dragging,setDragging] = useState(null);
  const [dragOver,setDragOver] = useState(null);
  const [tableDrag,setTableDrag] = useState(null);
  const [tableDragOver,setTableDragOver] = useState(null);
  const [selectedGuest,setSelectedGuest] = useState(null);
  const [section,setSection]   = useState("main");
  const [editT,setEditT]       = useState(null);
  const [editV,setEditV]       = useState("");
  const [toast,setToast]       = useState("");
  const [loaded,setLoaded]     = useState(false);
  const saveRef  = useRef(null);
  const editRef  = useRef(null);
  const importRef = useRef(null);

  useEffect(()=>{
    (async()=>{
      try {
        const r = await storage.get("seating-v1");
        if(r?.value){
          const d=JSON.parse(r.value);
          if(d.guests)setGuests(d.guests);
          if(d.tNames)setTNames(d.tNames);
          if(d.tables)setTables(normalizeTables(d.tables));
        }
      } catch{}
      setLoaded(true);
    })();
  },[]);

  useEffect(()=>{
    if(!loaded)return;
    clearTimeout(saveRef.current);
    saveRef.current=setTimeout(async()=>{
      try{await storage.set("seating-v1",JSON.stringify({guests,tNames,tables}));flash("Saved");}catch{}
    },900);
  },[guests,tNames,tables,loaded]);

  useEffect(()=>{if(editT&&editRef.current)editRef.current.focus();},[editT]);

  const flash=(m)=>{setToast(m);setTimeout(()=>setToast(""),1800);};

  const totalCap  = tables.reduce((s,t)=>s+t.cap,0);
  const openSeats = totalCap - RSVP_TOTAL;
  const seated    = guests.filter(g=>g.tableId!==null).length;
  const unassign  = guests.filter(g=>g.tableId===null);
  const filtered  = unassign.filter(g=>{
    const ms=!search||g.name.toLowerCase().includes(search.toLowerCase())||g.group.toLowerCase().includes(search.toLowerCase());
    const mr=!relF||g.rel===relF;
    return ms&&mr;
  });
  const grouped   = filtered.reduce((a,g)=>{(a[g.group]=a[g.group]||[]).push(g);return a;},{});
  const tGuests   = (tid)=>guests.filter(g=>g.tableId===tid);
  const tName     = (t)=>tNames[t.id]||t.name;
  const tableOf   = (id)=>tables.find(t=>t.id===id);

  const updateCap=(id,nextCap)=>{
    const cap=Math.max(1,Math.min(20,Number(nextCap)||1));
    const count=tGuests(id).length;
    setTables(p=>p.map(t=>t.id===id?{...t,cap}:t));
    if(count>cap)flash(`Table over capacity: ${count}/${cap}`);
  };

  const moveTable=(fromId,toId)=>{
    if(!fromId||!toId||fromId===toId){setTableDrag(null);setTableDragOver(null);return;}
    setTables(prev=>{
      const from=prev.find(t=>t.id===fromId);
      const to=prev.find(t=>t.id===toId);
      if(!from||!to||from.section!==to.section)return prev;
      const next=[...prev];
      const fromIndex=next.findIndex(t=>t.id===fromId);
      const [item]=next.splice(fromIndex,1);
      const toIndex=next.findIndex(t=>t.id===toId);
      next.splice(toIndex,0,item);
      return next;
    });
    setTableDrag(null);
    setTableDragOver(null);
  };

  const moveGuest=(gid,toId)=>{
    const guest=guests.find(g=>g.id===gid);
    if(!guest)return;
    const from=guest.tableId;
    if(from===toId){setDragging(null);setDragOver(null);setSelectedGuest(null);return;}
    if(toId!==null){const t=tableOf(toId);if(tGuests(toId).length>=t.cap){flash("Table full");setDragging(null);setDragOver(null);return;}}
    setGuests(p=>p.map(g=>g.id===gid?{...g,tableId:toId}:g));
    setDragging(null);setDragOver(null);setSelectedGuest(null);
  };

  const drop=(toId)=>{
    if(!dragging)return;
    moveGuest(dragging.gid,toId);
  };

  const assignSelected=(toId)=>{
    if(selectedGuest===null){flash("Click a guest first");return;}
    moveGuest(selectedGuest,toId);
  };

  const commitEdit=()=>{
    if(editT&&editV.trim())setTNames(p=>({...p,[editT]:editV.trim()}));
    setEditT(null);
  };

  const reset=()=>{
    if(confirm("Clear all seating assignments?"))
    {setGuests(GUESTS.map(g=>({...g})));setTNames({});setTables(normalizeTables());}
  };

  const seatingText=()=>{
    const lines=tables.flatMap(t=>{
      const gs=tGuests(t.id);
      return gs.length?[`${tName(t)} (${gs.length}/${t.cap}):`,
        ...gs.map(g=>`  ${g.name}`),""]:[`${tName(t)}: (empty)`,""];
    });
    if(unassign.length){lines.push(`Unassigned (${unassign.length}):`,
      ...unassign.map(g=>`  ${g.name}`));}
    return lines.join("\n");
  };

  const copyAll=async()=>{
    await navigator.clipboard.writeText(seatingText());
    flash("Copied to clipboard!");
  };

  const exportChart=()=>{
    const stamp = new Date().toISOString().slice(0,10);
    const data = {
      app:"wedding-seating-chart",
      version:2,
      exportedAt:new Date().toISOString(),
      guests,
      tNames,
      tables,
      seatingText:seatingText(),
    };
    const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wedding-seating-chart-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    flash("Exported backup file");
  };

  const importChart=(e)=>{
    const file = e.target.files?.[0];
    if(!file)return;
    const reader = new FileReader();
    reader.onload = () => {
      try{
        const d = JSON.parse(String(reader.result||"{}"));
        if(!Array.isArray(d.guests)) throw new Error("Missing guests");
        setGuests(d.guests);
        setTNames(d.tNames||{});
        setTables(normalizeTables(d.tables));
        setSelectedGuest(null);
        flash("Imported seating chart");
      }catch{
        alert("Could not import that file. Make sure it is a seating chart JSON export from this app.");
      }finally{
        e.target.value = "";
      }
    };
    reader.readAsText(file);
  };

  const Chip=({g,compact=false})=>{
    const r=RS[g.rel]||{bg:"#f1f3f5",tx:"#495057"};
    const isDrag=dragging?.gid===g.id;
    const isSelected=selectedGuest===g.id;
    return(
      <div
        draggable
        onClick={()=>setSelectedGuest(isSelected?null:g.id)}
        onDoubleClick={()=>moveGuest(g.id,null)}
        title={g.tableId===null?"Click to select, then click Seat here on a table":"Click to select, double-click to unseat"}
        onDragStart={e=>{e.dataTransfer.effectAllowed="move";e.dataTransfer.setData("text/plain",String(g.id));setDragging({gid:g.id,from:g.tableId});}}
        onDragEnd={()=>{setDragging(null);setDragOver(null);}}
        style={{...chip(g.rel,compact,isDrag), outline:isSelected?"2px solid #2d2520":"none", outlineOffset:1}}
      >
        <span style={{width:5,height:5,borderRadius:"50%",background:r.tx,flexShrink:0}}/>
        {g.name}
      </div>
    );
  };

  const TCard=({t})=>{
    const gs=tGuests(t.id);
    const full=gs.length>=t.cap;
    const overFull=gs.length>t.cap;
    const over=dragOver===t.id;
    const tableOver=tableDragOver===t.id;
    const nm=tName(t);
    return(
      <div
        onDragOver={e=>{
          e.preventDefault();
          const isTableDrag = tableDrag || Array.from(e.dataTransfer.types || []).includes("application/x-table-id");
          if(isTableDrag){setTableDragOver(t.id);return;}
          setDragOver(t.id);
        }}
        onDragLeave={()=>{setDragOver(null);setTableDragOver(null);}}
        onDrop={e=>{
          e.preventDefault();
          const draggedTableId = Number(e.dataTransfer.getData("application/x-table-id"));
          if(tableDrag || draggedTableId){moveTable(tableDrag || draggedTableId,t.id);return;}
          drop(t.id);
        }}
        style={{
          background:"#fff",
          border:`1.5px solid ${tableOver?"#64748b":over?"#b5945c":overFull?"#dc2626":full?"#fca5a5":"#e8e0d5"}`,
          borderRadius:10,padding:"10px 12px",
          boxShadow:tableOver?"0 0 0 3px rgba(100,116,139,.18)":over?"0 0 0 3px rgba(181,148,92,.18)":"none",
          transition:"border-color .12s,box-shadow .12s",
        }}
      >
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:5,gap:8}}>
          <div style={{display:"flex",alignItems:"center",gap:6,minWidth:0}}>
            <span
              draggable
              onDragStart={e=>{
                e.stopPropagation();
                e.dataTransfer.effectAllowed="move";
                e.dataTransfer.setData("application/x-table-id", String(t.id));
                e.dataTransfer.setData("text/plain", `table-${t.id}`);
                setTableDrag(t.id);
              }}
              onDragEnd={()=>{setTableDrag(null);setTableDragOver(null);}}
              title="Drag this handle onto another table to reorder"
              style={{fontSize:17,cursor:"grab",color:"#7c6d64",lineHeight:1,userSelect:"none",padding:"2px 4px",border:"1px solid #e8e0d5",borderRadius:5,background:"#faf7f4"}}
            >☰</span>
            {editT===t.id?(
              <input ref={editRef} value={editV} onChange={e=>setEditV(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={e=>{if(e.key==="Enter")commitEdit();if(e.key==="Escape")setEditT(null);}}
                style={{fontFamily:"Georgia,serif",fontWeight:"bold",fontSize:13,background:"none",border:"none",
                  borderBottom:"1.5px solid #b5945c",outline:"none",width:120,padding:"0 2px",color:"#2d2520"}}
              />
            ):(
              <button onDoubleClick={()=>{setEditT(t.id);setEditV(nm);}}
                title="Double-click to rename"
                style={{background:"none",border:"none",cursor:"pointer",padding:0,fontFamily:"Georgia,serif",
                  fontWeight:"bold",fontSize:13,color:"#2d2520",textAlign:"left",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                {nm}
              </button>
            )}
          </div>
          <span style={{fontSize:11,fontWeight:600,padding:"2px 7px",borderRadius:20,whiteSpace:"nowrap",
            background:overFull?"#fecaca":full?"#fee2e2":"#f5f0eb",color:overFull?"#991b1b":full?"#dc2626":"#7c6d64"}}>
            {gs.length}/{t.cap}
          </span>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:6,marginBottom:7}}>
          {selectedGuest!==null&&!full?(<button onClick={()=>assignSelected(t.id)}
            style={{fontSize:10.5,padding:"2px 6px",borderRadius:5,border:"1px solid #b5945c",background:"#fffaf0",color:"#7c5c21",cursor:"pointer"}}>
            Seat here
          </button>):<span/>}
          <div style={{display:"flex",alignItems:"center",gap:3,fontSize:10.5,color:"#7c6d64"}}>
            Seats
            <button onClick={()=>updateCap(t.id,t.cap-1)} style={{width:20,height:20,borderRadius:4,border:"1px solid #e8e0d5",background:"#fff",cursor:"pointer",lineHeight:1}}>−</button>
            <input
              type="number"
              min="1"
              max="20"
              value={t.cap}
              onChange={e=>updateCap(t.id,e.target.value)}
              style={{width:34,height:20,boxSizing:"border-box",border:"1px solid #e8e0d5",borderRadius:4,textAlign:"center",fontSize:11,color:"#2d2520",background:"#fff"}}
            />
            <button onClick={()=>updateCap(t.id,t.cap+1)} style={{width:20,height:20,borderRadius:4,border:"1px solid #e8e0d5",background:"#fff",cursor:"pointer",lineHeight:1}}>+</button>
          </div>
        </div>
        <div style={{height:2,background:"#f0ebe6",borderRadius:2,marginBottom:7}}>
          <div style={{height:"100%",borderRadius:2,background:overFull?"#dc2626":full?"#f87171":"#b5945c",
            width:`${Math.min(100,(gs.length/Math.max(1,t.cap))*100)}%`,transition:"width .2s"}}/>
        </div>
        <div style={{minHeight:28}}>
          {gs.map(g=><Chip key={g.id} g={g} compact/>)}
          {gs.length===0&&(
            <div style={{fontSize:11,color:"#c9bdb6",padding:"5px 0",textAlign:"center",
              border:"1px dashed #e8e0d5",borderRadius:5}}>
              drop guests here or click Seat here
            </div>
          )}
        </div>
      </div>
    );
  };

  const vis=tables.filter(t=>t.section===section);
  const BT={display:"flex",alignItems:"center",padding:"9px 16px",background:"none",border:"none",
    borderBottom:"2.5px solid transparent",cursor:"pointer",fontSize:13,outline:"none"};

  return(
    <div style={{display:"flex",flexDirection:"column",height:"100vh",background:"#faf7f4",
      fontFamily:"system-ui,-apple-system,sans-serif",color:"#2d2520",overflow:"hidden"}}>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"9px 16px",
        background:"#fff",borderBottom:"1px solid #e8e0d5",flexShrink:0,flexWrap:"wrap"}}>
        <span style={{fontFamily:"Georgia,serif",fontSize:19,fontWeight:"normal",marginRight:6}}>
          💍 Seating Chart
        </span>
        <span style={{fontSize:12,padding:"3px 9px",background:"#f5f0eb",borderRadius:20,
          color:"#7c6d64",border:"1px solid #e8e0d5"}}>{seated}/{totalCap} seated</span>
        <span style={{fontSize:12,padding:"3px 9px",background:"#f5f0eb",borderRadius:20,
          color:"#7c6d64",border:"1px solid #e8e0d5"}}>{unassign.length} unassigned</span>
        {selectedGuest!==null&&(<span style={{fontSize:12,padding:"3px 9px",background:"#eef2ff",borderRadius:20,
          color:"#3730a3",border:"1px solid #c7d2fe"}}>Selected: {guests.find(g=>g.id===selectedGuest)?.name}</span>)}
        <span style={{fontSize:12,padding:"3px 9px",background:openSeats>=0?"#f0fdf4":"#fff7ed",borderRadius:20,
          color:openSeats>=0?"#15803d":"#c2410c",border:openSeats>=0?"1px solid #86efac":"1px solid #fdba74"}}>
          {openSeats>=0?`✓ ${RSVP_TOTAL} attending · ${totalCap} seats (${openSeats} open)`:`⚠ ${RSVP_TOTAL} attending · ${totalCap} seats (${Math.abs(openSeats)} over)`}
        </span>
        <div style={{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"}}>
          {toast&&<span style={{fontSize:12,color:"#b5945c",fontStyle:"italic"}}>{toast}</span>}
          <button onClick={copyAll} style={{padding:"5px 12px",borderRadius:6,border:"1px solid #e8e0d5",
            background:"#fff",cursor:"pointer",fontSize:12.5,color:"#2d2520"}}>Copy All</button>
          <button onClick={exportChart} style={{padding:"5px 12px",borderRadius:6,border:"1px solid #b5945c",
            background:"#fffaf0",cursor:"pointer",fontSize:12.5,color:"#7c5c21"}}>Export</button>
          <button onClick={()=>importRef.current?.click()} style={{padding:"5px 12px",borderRadius:6,border:"1px solid #e8e0d5",
            background:"#fff",cursor:"pointer",fontSize:12.5,color:"#2d2520"}}>Import</button>
          <input ref={importRef} type="file" accept="application/json,.json" onChange={importChart} style={{display:"none"}} />
          <button onClick={reset} style={{padding:"5px 12px",borderRadius:6,border:"1px solid #e8e0d5",
            background:"#fff",cursor:"pointer",fontSize:12.5,color:"#9e8e83"}}>Reset</button>
        </div>
      </div>

      {/* Body */}
      <div style={{display:"flex",flex:1,overflow:"hidden"}}>

        {/* Sidebar */}
        <div
          style={{width:272,flexShrink:0,background:"#fff",borderRight:"1px solid #e8e0d5",
            display:"flex",flexDirection:"column",overflow:"hidden"}}
          onDragOver={e=>e.preventDefault()}
          onDrop={()=>drop(null)}
        >
          <div style={{padding:"10px 12px 8px",borderBottom:"1px solid #f0ebe6",flexShrink:0}}>
            <div style={{fontSize:10.5,fontWeight:600,color:"#9e8e83",letterSpacing:1,
              textTransform:"uppercase",marginBottom:7}}>
              Unassigned · {unassign.length}
            </div>
            {selectedGuest!==null&&(<button onClick={()=>moveGuest(selectedGuest,null)}
              style={{width:"100%",marginBottom:7,padding:"5px 8px",borderRadius:6,border:"1px solid #e8e0d5",background:"#fff",cursor:"pointer",fontSize:12,color:"#7c6d64"}}>
              Move selected back to unassigned
            </button>)}
            <input placeholder="Search name or family…" value={search}
              onChange={e=>setSearch(e.target.value)}
              style={{width:"100%",padding:"6px 9px",borderRadius:6,border:"1px solid #e8e0d5",
                fontSize:12.5,outline:"none",background:"#faf7f4",boxSizing:"border-box",color:"#2d2520"}}
            />
            <select value={relF} onChange={e=>setRelF(e.target.value)}
              style={{width:"100%",marginTop:6,padding:"5px 8px",borderRadius:6,
                border:"1px solid #e8e0d5",fontSize:12,background:"#faf7f4",
                color:"#2d2520",outline:"none",boxSizing:"border-box"}}>
              <option value="">All relationships</option>
              {Object.keys(RS).map(r=><option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* Color legend */}
          <div style={{padding:"7px 10px",borderBottom:"1px solid #f0ebe6",
            display:"flex",flexWrap:"wrap",gap:3,flexShrink:0}}>
            {Object.entries(RS).map(([r,s])=>(
              <span key={r}
                onClick={()=>setRelF(relF===r?"":r)}
                style={{fontSize:10,padding:"1px 5px",borderRadius:4,
                  background:s.bg,color:s.tx,cursor:"pointer",
                  border:relF===r?`1.5px solid ${s.tx}`:`1px solid ${s.bg}`}}>
                {r.replace("Bennett's","B.").replace("Brooke's","Br.")}
              </span>
            ))}
          </div>

          <div style={{flex:1,overflowY:"auto",padding:"6px 10px"}}>
            {Object.keys(grouped).sort().map(grp=>(
              <div key={grp}>
                <div style={{fontSize:10,fontWeight:600,color:"#b5a89f",letterSpacing:0.8,
                  textTransform:"uppercase",padding:"7px 2px 2px"}}>{grp}</div>
                {grouped[grp].map(g=><Chip key={g.id} g={g}/>)}
              </div>
            ))}
            {filtered.length===0&&(
              <div style={{textAlign:"center",padding:"20px 0",fontSize:12.5,color:"#c9bdb6"}}>
                {unassign.length===0?"All guests seated! 🎉":"No matches"}
              </div>
            )}
          </div>
        </div>

        {/* Table area */}
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{display:"flex",padding:"0 14px",background:"#faf7f4",
            borderBottom:"1px solid #e8e0d5",flexShrink:0}}>
            <button onClick={()=>setSection("main")}
              style={{...BT,borderBottomColor:section==="main"?"#b5945c":"transparent",
                fontWeight:section==="main"?600:400,color:section==="main"?"#2d2520":"#9e8e83"}}>
              Main Floor — {tables.filter(t=>t.section==="main").length} tables
            </button>
            <button onClick={()=>setSection("loft")}
              style={{...BT,borderBottomColor:section==="loft"?"#b5945c":"transparent",
                fontWeight:section==="loft"?600:400,color:section==="loft"?"#2d2520":"#9e8e83"}}>
              Loft — {tables.filter(t=>t.section==="loft").length} tables
            </button>
          </div>
          <div style={{flex:1,overflowY:"auto",padding:12,display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:10,alignContent:"start"}}>
            {vis.map(t=><TCard key={t.id} t={t}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}
