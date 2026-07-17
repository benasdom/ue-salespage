import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { useSearch } from './SearchContext';

const CATEGORIES = ['all', 'gadgets', 'cosmetics'];

export const SearchModal = () => {
  const { isOpen, closeSearch, items } = useSearch();
  const inputRef = useRef(null);
  const [rawQuery, setRawQuery] = useState('');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Debounce so filtering doesn't run on every single keystroke.
  useEffect(() => {
    const handle = setTimeout(() => setQuery(rawQuery), 200);
    return () => clearTimeout(handle);
  }, [rawQuery]);

  // Reset + focus + lock page scroll whenever the modal opens/closes.
  useEffect(() => {
    if (isOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    setRawQuery('');
    setQuery('');
    setActiveCategory('all');
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeSearch();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeSearch]);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((item) => activeCategory === 'all' || item.category === activeCategory)
      .filter((item) => !q || (item.title || '').toLowerCase().includes(q));
  }, [items, query, activeCategory]);

  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      onClick={closeSearch}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        zIndex: 10000,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.25s ease-in-out',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search catalogue"
        aria-hidden={!isOpen}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          maxWidth: 640,
          margin: '64px auto 0',
          borderRadius: 12,
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          maxHeight: isOpen ? '75vh' : 0,
          overflow: 'hidden',
          transform: isOpen ? 'translateY(0)' : 'translateY(-16px)',
          transition: 'max-height 0.3s ease-in-out, transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: '1px solid #eee' }}>
          <AiOutlineSearch size={20} color="#888" />
          <input
            ref={inputRef}
            type="text"
            value={rawQuery}
            onChange={(e) => setRawQuery(e.target.value)}
            placeholder="Search gadgets, cosmetics..."
            aria-label="Search catalogue"
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: 16 }}
          />
          <button
            onClick={closeSearch}
            aria-label="Close search"
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18, display: 'flex' }}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div style={{ display: 'flex', gap: 8, padding: '12px 20px' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              style={{
                border: '1px solid #ddd',
                borderRadius: 999,
                padding: '4px 14px',
                background: activeCategory === cat ? '#111' : '#fff',
                color: activeCategory === cat ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight:900,
                textTransform: 'capitalize',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul style={{ listStyle: 'none', margin: 0, padding: '0 12px 16px', overflowY: 'auto' }}>
          {filteredItems.length === 0 && (
            <li style={{ padding: '24px 8px', textAlign: 'center', color: '#888',fontWeight:900 }}>
              No items match your search.
            </li>
          )}
          {filteredItems.map((item, idx) => (
            <li key={`${item.url || item.title}-${idx}`}>
              <button
                onClick={closeSearch}
                onMouseDown={(e) => e.preventDefault()}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 8px',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                fontWeight:900,
                  cursor: 'pointer',
                  borderRadius: 8,
                }}
              >
                <img
                  src={item.thumbnail || 'imgs/profile.png'}
                  alt={item.title || 'Product thumbnail'}
                  onError={(e) => { e.target.src = 'imgs/profile.png'; }}
                  style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }}
                />
                <span style={{ flex: 1, fontSize: 14,color:"#555" }}>
                  {(item.title || 'Untitled item').slice(0, 60)}
                </span>
                <span style={{ fontSize: 13, color: '#555', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {item.price && item.price.current_price ? `${item.price.current_price} ${item.price.currency}` : ''}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
};