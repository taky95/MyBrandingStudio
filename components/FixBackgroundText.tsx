'use client';

import { useEffect } from 'react';

export function FixBackgroundText() {
  useEffect(() => {
    const blocks = document.querySelectorAll('.has-background');

    blocks.forEach((block) => {
      // Skip if it already contains our wrapper
      if (block.querySelector('.inner-background-wrapper')) return;

      // Create a wrapper and move all child nodes into it
      const wrapper = document.createElement('div');
      wrapper.className = 'inner-background-wrapper';

      // Move all children into the wrapper
      while (block.firstChild) {
        wrapper.appendChild(block.firstChild);
      }

      block.appendChild(wrapper);
    });
  }, []);

  return null;
}