'use client';

import { useEffect } from 'react';

export function FixBackgroundText() {
  useEffect(() => {
    const blocks = document.querySelectorAll('.has-background');

    blocks.forEach((block) => {
      // If the block only has a text node (no child elements)
      if (
        block.childNodes.length === 1 &&
        block.firstChild?.nodeType === Node.TEXT_NODE
      ) {
        const wrapper = document.createElement('div');
        wrapper.className = 'inner-background-wrapper';
        wrapper.textContent = block.textContent || '';
        block.textContent = '';
        block.appendChild(wrapper);
      }
    });
  }, []);

  return null; // This component just runs JS on mount
}