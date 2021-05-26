import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import { useState, useEffect } from "/@npm/preact/hooks";
import { FaTrash } from "/@npm/react-icons/fa";
// import { createNote } from "../../api";
import styles from "./style.module.css.js";

export default function NoteApp() {
  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes.then((res) => {
      setNote(res);
      console.log(res);
    });
  }, []);

  const [currNote, setcurrNote] = useState("");

  const addNote = (e, note_content) => {
    Notes.push({
      id: Notes.length,
      note: note_content,
    });

    // createNote(note_content).then((res) => {
    //   console.log("Expense details added to the database");
    // });

    setcurrNote("");

    e.preventDefault();
  };

  const deleteNoteItem = (note_idx) => {
    const notes = Notes.filter((note) => note.id !== note_idx);
    setNotes(notes);

    deleteNote(note_idx).then((res) => res);
  };

  const extractNotes = () =>
    Object.values(Notes).map((note) => (
      $$html`<li key=${note.id} class=${styles.noteItem}>
        <span
          class=${styles.deleteIcon}
          onClick=${(e) => deleteNoteItem(note.id)}
        >
          <${FaTrash} size=${20} color=${"red"} />
        </span>
        ${note.note}
      </li>`
    ));

  return (
    $$html`<section class=${styles.wmr_app}>
      <h1>Preact WMR Note Application Built With Fauna</h1>
      <div class=${styles.inputArea}>
        <h3>Write and add your Notes.</h3>
        <input
          class=${styles.inputField}
          type="text"
          value=${currNote}
          onChange=${(e) => setcurrNote(e.currentTarget.value)}
          onKeyUp=${(e) => (e.key == "Enter" ? addNote(currNote) : null)}
        />
        <button class=${styles.button} onClick=${(e) => addNote(e, currNote)}>
          Add
        </button>
      </div>
      <div class=${styles.notes_list_wrapper}>
        <ul class=${styles.unstyled_list}>${extractNotes()}</ul>
      </div>
    </section>`
  );
}


import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
