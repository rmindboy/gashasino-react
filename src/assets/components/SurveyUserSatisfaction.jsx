import React, { useState } from "react";
import "../css/Survey.css";
import Header from "./Header";
import Footer from "./Footer";

function SurveyUserSatisfaction({ onMenuClick, onRegisterClick, onGamesClick, onNext }) {
  const [score, setScore] = useState(5);
  const [opinion, setOpinion] = useState("");

  return (
    <>
      <main className="survey-container survey-satisfaction">
        <div className="survey-content">
          <h1 className="survey-title">Encuesta de Satisfacción de Usuario</h1>
          
          <div className="survey-section">
            <label className="survey-label">
              ¿Cuál es tu nivel de satisfacción con nuestra plataforma?
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
            <label className="survey-label">Tu opinión (máximo 500 caracteres)</label>
            <textarea
              className="survey-textarea"
              placeholder="Cuéntanos tu experiencia, qué te agradó y qué podríamos mejorar..."
              maxLength="500"
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
            />
            <div className="char-count">
              {opinion.length}/500
            </div>
          </div>

          <div className="survey-actions">
            <button className="btn-submit">Enviar respuesta</button>
          </div>

          <button className="btn-next-survey" onClick={onNext}>
            → Siguiente encuesta
          </button>
        </div>
      </main>

    </>
  );
}

export default SurveyUserSatisfaction;
