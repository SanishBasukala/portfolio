import React, { useState, useEffect } from 'react';
import './TextAlternator.css'

const TextAlternator = ({ text1, text2 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentText, setCurrentText] = useState(text1);
  const [showingText1, setShowingText1] = useState(true);
  const [isTyping, setIsTyping] = useState(true); // To manage typing and deleting

  useEffect(() => {
    let i = 0;
    let typingInterval;
    let deletingInterval;
    var tempText = '';

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (i < currentText.length) {
          tempText = tempText + currentText[i];
          setDisplayText(tempText);
          i++;
        } else {
           clearInterval(typingInterval);
           setIsTyping(false);
          setTimeout(() => {
             startDeleting();
          }, 2000); // 2-second delay before starting to delete
        }
      }, 100); // Typing speed
    };

     const startDeleting = () => {
       deletingInterval = setInterval(() => {
         if (i > 0) {
           setDisplayText(prev => prev.slice(0, -1));
           i--;
         } else {
           clearInterval(deletingInterval);
           setIsTyping(true);
           setTimeout(() => {
             // Switch text after the delay
             setShowingText1(prev => !prev);
             setCurrentText(showingText1 ? text2 : text1);
             setDisplayText('');
             i = 0;
             startTyping();
           }, 2000); // 2-second delay before starting to type next text
         }
       }, 100); // Deleting speed
     };

     startTyping();

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [currentText, showingText1, text1, text2]);

  return (
    <span>
      <span className='displayText'>{displayText}</span>
      <span className="cursor">|</span>
    </span>
  );
};

export default TextAlternator;