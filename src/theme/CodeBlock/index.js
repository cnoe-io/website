// src/theme/CodeBlock/index.js
import React, { useState } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import styles from './styles.module.css';
import { index, text } from 'd3';

function ClipboardIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

export default function CodeBlockWrapper(props) {
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const isBash = props.className?.includes('language-bash');

  if (!isBash) {
    return <CodeBlock {...props} />;
  }

  // Parse commands and their line numbers
  const commands = props.children
    .split('\n')
    .map((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('$')) {
        return {
          index,
          command: trimmedLine.substring(1).trim(),
          raw: line
        };
      }
      return { index, raw: line };
    });

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(-1), 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
  };
  // Function to prepare the full block content for copying
  const getFullBlockContent = () => {
    return commands
      .map((item) => {
        if(item.command) {
          return item.command; // use the command without the $ prefix
        }
        return item.raw; // Use the raw line if not start with $ prefix
      })
      .join('\n'); // Join the lines with newline for the codeBlock
  }

  // Wrap each command line with copy button
  const enhancedContent = commands.map((item, idx) => {
    if (!item.command) {
      return item.raw + '\n';
    }

    return (
      <div 
        key={idx}
        className={styles.commandLine}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(-1)}
      >
        <span className={hoveredIndex === idx ? styles.commandHighlighted : ''}>
          {item.raw}
        </span>
        {hoveredIndex === idx && (
          <button
            className={styles.inlineCopyButton}
            onClick={() => handleCopy(item.command, idx)}
            aria-label="Copy command"
            data-copied={copiedIndex === idx}
          >
            {copiedIndex === idx ? <CheckIcon /> : <ClipboardIcon />}
          </button>
        )}
      </div>
    );
  });

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalControls}>
          <span className={styles.terminalButton}></span>
          <span className={styles.terminalButton}></span>
          <span className={styles.terminalButton}></span>
        </div>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(getFullBlockContent(), -2)}
          aria-label="Copy all commands"
          data-copied={copiedIndex === -2}
        >
          {copiedIndex === -2 ? <CheckIcon /> : <ClipboardIcon />}
        </button>
      </div>
      <div className={styles.terminalBody}>
        <pre className={styles.enhancedPre}>
          {enhancedContent}
        </pre>
      </div>
    </div>
  );
}