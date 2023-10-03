import React, { useState, useEffect, Component } from "react";
import Modal from "react-modal";
import "./App.css";
import Image from "./components/Image";
import Grid from "./components/Grid";

Modal.setAppElement("#root"); // Ustawienie elementu głównego aplikacji

function App() {
  // Użyj stanu, aby śledzić tryb (jasny/ciemny)
  const [darkMode, setDarkMode] = useState(false);

  // Funkcja do przełączania trybu
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Ustawienie klasy CSS w zależności od trybu
  const bodyClass = darkMode ? "dark" : "light";

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Otwieramy pop-up z opóźnieniem (np. po 3 sekundach)
    const delay = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3000 milisekund = 3 sekundy

    // Czyszczenie timera przy odmontowaniu komponentu
    return () => clearTimeout(delay);
  }, []);

  const [isPopupVisible, setPopupVisible] = useState(false);

  // Funkcja do otwierania i zamykania pop-up
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className={`App ${bodyClass}`}>
      <header>
        <h1>Przełączanie trybu</h1>
      </header>
      <main>
        <p>Kliknij, aby przełączyć tryb.</p>
        <button onClick={toggleDarkMode}>Przełącz tryb</button>
        {/* Komponent modalu */}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Przykładowy modal"
          className="modal"
        >
          <h2>Witaj w naszej stronie!</h2>
          <p>To jest modal wywołany po wejściu na stronę.</p>
          <button onClick={() => setIsOpen(false)}>Zamknij modal</button>
        </Modal>
      </main>

      {/* Warunek wyświetlania pop-up */}
      <button onClick={togglePopup}>Pokaż pop-up</button>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>To jest pop-up!</h2>
            <p>Tu możesz dodać treść pop-upu.</p>
            <button onClick={togglePopup}>Zamknij pop-up</button>
          </div>
        </div>
      )}
      <Image />
      <Grid />
    </div>
  );
}

export default App;
