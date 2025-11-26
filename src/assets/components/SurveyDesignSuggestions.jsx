import React, { useState } from "react";
import "../css/Survey.css";
import Header from "./Header";
import Footer from "./Footer";

function SurveyDesignSuggestions({ onMenuClick, onRegisterClick, onGamesClick, onNext, onPrev }) {
  const [score, setScore] = useState(5);
  const [suggestions, setSuggestions] = useState("");

  return (
    <>
      <main className="survey-container survey-design">
        <div className="survey-content">
          <h1 className="survey-title">Encuesta de Sugerencias de Diseño</h1>
          
          <div className="survey-section">
            <label className="survey-label">
              ¿Cómo calificarías el diseño actual de nuestra plataforma?
            </label>
            
            <div className="score-selector">
              <div className="score-display">
                <span className="score-value">{score}</span>
                <span className="score-unit">/ 10</span>
              </div>
              
              <input
                type="range"
                min="1"
                max="10"
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value))}
                className="score-slider"
              />
              
              <div className="score-labels">
                <span>1</span>
                <span>10</span>
              </div>
            </div>
          </div>

          <div className="survey-section">
            <label className="survey-label">Sugerencias para mejorar el diseño (máximo 500 caracteres)</label>
            <textarea
              className="survey-textarea"
              placeholder="Cuéntanos tus ideas para mejorar la interfaz, colores, disposición de elementos, etc..."
              maxLength="500"
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
            />
            <div className="char-count">
              {suggestions.length}/500
            </div>
          </div>

          <div className="survey-actions">
            <button className="btn-submit">Enviar respuesta</button>
          </div>

          <div className="survey-navigation">
            <button className="btn-prev-survey" onClick={onPrev}>
              ← Encuesta anterior
            </button>
            <button className="btn-next-survey" onClick={onNext}>
              Siguiente encuesta →
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default SurveyDesignSuggestions;
