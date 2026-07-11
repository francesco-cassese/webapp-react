import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAI from '../hooks/useAi.js';
import styles from './PorkInstein.module.css';
import predefinedQuestions from '../data/questionsData.js';

export function PorkInstein() {
    const [userMessage, setUserMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { sendMessage, data, loading, error, resetAI } = useAI('/ai/chat');

    useEffect(() => {

        if (data?.redirect) {
            console.log("Trovato redirect! Vado a:", data.redirect);
            navigate(data.redirect);
            setIsOpen(false);
            resetAI();
        }
    }, [data, navigate, resetAI]);

    const handleSend = () => {
        if (!userMessage.trim()) return;
        sendMessage(userMessage);
        setUserMessage('');
    };

    return (
        <>
            {isOpen && (
                <div className={styles.chatOverlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.porkinsteinChatBox}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>🎓 Chiedi a Pork-instein</h2>
                        <p><em>Il genio del gusto che ti salva la sessione di studio!</em></p>

                        <div className={styles.predefinedBox}>
                            <p className={styles.predefinedTitle}>Gli altri studenti chiedono:</p>
                            <div className={styles.predefinedButtons}>
                                {predefinedQuestions.map((question) => (
                                    <button
                                        key={question.id}
                                        className={styles.predefinedBtn}
                                        onClick={() => sendMessage(question.text)}
                                        disabled={loading}
                                    >
                                        {question.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.porkinsteinInputSection}>
                            <input
                                type="text"
                                value={userMessage}
                                onChange={(event) => setUserMessage(event.target.value)}
                                placeholder="Chiedi pure..."
                                disabled={loading}
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !userMessage}
                            >
                                Invia
                            </button>
                        </div>

                        <div className={styles.porkinsteinResponseBox}>
                            {loading ? (
                                <p><em>Pork-instein sta consultando i suoi appunti scientifici...</em></p>
                            ) : (
                                <p>
                                    {typeof data === 'object' && data !== null && data.message
                                        ? data.message
                                        : (data || "Hai qualche problema? Tranquillo ci penso io")}
                                </p>
                            )}
                        </div>

                        {error && (
                            <div className={styles.porkinsteinErrorBox}>
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <button
                className={styles.porkinsteinFab}
                onClick={() => setIsOpen(!isOpen)}
                title="Apri la chat con Pork-instein"
            >
                <img
                    src={'images/mascotte.png'}
                    alt="Pork-instein Mascot"
                />
            </button>
        </>
    );
}

export default PorkInstein;