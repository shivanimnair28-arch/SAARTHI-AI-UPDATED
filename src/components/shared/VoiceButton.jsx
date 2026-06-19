import React, { useState, useCallback } from 'react';
import voiceService from '../../services/voice';

export default function VoiceButton({ size = 60, persona = 'default', onTranscript }) {
  const [listening, setListening] = useState(false);

  const handleClick = useCallback(async () => {
    if (listening) return;
    setListening(true);
    try {
      const text = await voiceService.listen('en');
      if (onTranscript) onTranscript(text);
    } catch {
      // Speech not supported or user denied
    } finally {
      setListening(false);
    }
  }, [listening, onTranscript]);

  return (
    <button
      className={`voice-btn${listening ? ' listening' : ''}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      onClick={handleClick}
      aria-label={listening ? 'Listening…' : 'Talk to Saarthi'}
      title={listening ? 'Listening…' : 'Talk to Saarthi'}
    >
      {listening ? '🔴' : '🎤'}
    </button>
  );
}
