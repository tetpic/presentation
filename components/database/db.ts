import Dexie, { type EntityTable } from 'dexie';

interface Card {
  id: number;
  imageLink: string | null;
  face: string;
  back: string;
  faceLang: string;
  backLang: string;
  setName: string;
  setLabel: string;
}

interface Sets {
  id: number;
  label: string;
  name: string;
  faceLang: string;
  backLang: string;
}

const db = new Dexie('CardsDatabase') as Dexie & {
  cards: EntityTable<
    Card,
    'id' // primary key "id" (for the typings only)
  >;
  sets: EntityTable<
    Sets,
    'id'
  >
};

// Schema declaration:
db.version(1).stores({
  cards: '++id, imageLink, face, back, faceLang, backLang, setName',
  sets: '++id, label, name, faceLang, backLang',
});

export type { Card, Sets };
export { db };