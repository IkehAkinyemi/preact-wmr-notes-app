import { client, q } from "../config/db";

const getAllNotes = client
  .query(q.Paginate(q.Match(q.Ref("indexes/all_notes"))))
  .then((res) => {
    const noteRef = res.data;
    const getAllDataQuery = noteRef.map((ref) => {
      return q.Get(ref);
    });
    return client.query(getAllDataQuery).then((data) => data);
  })
  .catch((err) => err.message);

const createNote = (note) =>
  client
    .query(q.Create(q.Collection("notes"), { data: { note } }))
    .then((ref) => ref)
    .catch((err) => err.message);

const deleteNote = (noteId) =>
  client
    .query(q.Delete(q.Ref(q.Collection("notes"), noteId)))
    .then((ref) => ref)
    .catch((err) => err.message);

export { getAllNotes, createNote, deleteNote };
