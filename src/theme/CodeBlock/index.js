// src/theme/CodeBlock/index.js
import React, { useState } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import styles from './styles.module.css';

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

// List of common commands to highlight
const COMMON_COMMANDS = ['git', 'mv', 'mkdir', 'curl', 'ls', 'cat', 'cd','podman', 'echo', 'rm', 'cp', 'chmod', 'npx', 'yarn', 'npm', 'docker', 'kubectl', 'idpbuilder', 'vim', './', 'cnoe '];

// Function to highlight common commands
const highlightCommonCommands = (text) => {
  const commonCommandRegex = new RegExp(`\\b(${COMMON_COMMANDS.join('|')})\\b`, 'g');

  return text.split(commonCommandRegex).map((part, index) => {
    if (COMMON_COMMANDS.includes(part)) {
      // If part is a common command, wrap it in a span with the "common-command" class to allow styling
      return (
        <span key={index} className={styles.commonCommand}>
          {part}
        </span>
      );
    } else {
      return part;
    }
  });
};

export default function CodeBlockWrapper(props) {
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const isBash = props.className?.includes('language-bash');

  if (!isBash) {
    return <CodeBlock {...props} />;
  }

  // Parse commands and group multi-line commands
  const commands = [];
  let currentCommand = null;

  props.children.split('\n').forEach((line, index) => {
    // Remove leading and trailing whitespace
    line = line.trim();
    const trimmedLine = line.trim();
    // Start a new command
    if (trimmedLine.startsWith('$')) {
      if (currentCommand) {
        commands.push(currentCommand);
      }
      currentCommand = {
        index,
        command: trimmedLine.substring(1).replace(/\\$/, '').trim(), // Remove the $ prefix and trailing '\'
        raw: [line], // Store all lines of the command
        isMultiLine: trimmedLine.endsWith('\\'), // Check if the line ends with '\'
        isCommand: true, // Mark as a command line for styling
      };
    } else if (currentCommand && currentCommand.isMultiLine) {
      // Append to the current multi-line command
      currentCommand.raw.push(line);
      currentCommand.command += ' ' + trimmedLine.replace(/\\$/, '').trim(); // Remove the trailing '\'
      currentCommand.isMultiLine = trimmedLine.endsWith('\\'); // Update isMultiLine
    } else if (trimmedLine.startsWith('#')) {
      // Comment line; flip boolean for styling
      commands.push({ index, raw: [line], isComment: true });
    } else if (trimmedLine === '') {
      // Empty line flip boolean for styling
      commands.push({ index, raw: [line], isEmpty: true });
    } else {
      // Non-command line (not a comment or empty)
      commands.push({ index, raw: [line], isCommand: false });
    }
  });

  // Push the last command if it exists
  if (currentCommand) {
    commands.push(currentCommand);
  }
  
  // loop the commmands and print each command object with each of the properties


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
      .filter((item) => item.command) // Only include lines with commands
      .map((item) => item.command) // Extract the command text
      .join('\n'); // Join commands with newline
  };

  // Wrap each command line with copy button
  // make sure to maintain the order of the line from the original code using the index from the command
  const enhancedContent = commands.sort((a, b) => a.index - b.index).map((item, idx) => {
    const isHovered = hoveredIndex === idx && item.isCommand; // Only hover for command lines

    return (
      <div
        key={idx}
        className={styles.commandLine}
        onMouseEnter={() => item.isCommand && setHoveredIndex(idx)} // Only hover for command lines
        onMouseLeave={() => setHoveredIndex(-1)}
      >
        <div
          className={isHovered ? styles.commandHighlighted : ''}
          style={{ whiteSpace: 'pre-wrap' }} // Ensure line breaks are respected
        >
          {item.raw.map((line, lineIndex) => {
            if (item.isCommand) {
              return (
                <div key={lineIndex}>
                  {/* Only show the $ prompt on the first line of the command */}
                  {lineIndex === 0 && <span className={styles.prompt}>$</span>}
                  <span className={styles.command}>
                    {lineIndex === 0 ? (
                      // First line: show the command without indentation
                      highlightCommonCommands(line.substring(1).trim())
                    ) : (
                      // Subsequent lines: add indentation
                      <span style={{ marginLeft: '2ch' }}>
                        {highlightCommonCommands(line.trim())}
                      </span>
                    )}
                  </span>
                </div>
              );
            } else if (item.isComment) {
              return (
                <div key={lineIndex} className={styles.comment}>
                  {line}
                </div>
              );
            } else {
              return (
                <div key={lineIndex} className={styles.text}>
                  {line}
                </div>
              );
            }
          })}
        </div>
        {isHovered && item.isCommand && (
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