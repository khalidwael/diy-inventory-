import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'diylab_invoice_draft';

function generateInvoiceId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '#DL-';
  for (let i = 0; i < 4; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function getTodayDate() {
  return new Date().toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return null;
}

function saveDraft(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (_) {}
}

export function useInvoice() {
  const [invoiceId, setInvoiceId] = useState('');
  const [date, setDate] = useState('');
  const [items, setItems] = useState([]);
  const [shipping, setShipping] = useState('standard'); // 'standard' | 'upper'
  const [discount, setDiscount] = useState(0);
  const [customerName, setCustomerName] = useState('');

  // Load on mount
  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      setInvoiceId(draft.invoiceId || generateInvoiceId());
      setDate(draft.date || getTodayDate());
      setItems(draft.items || []);
      setShipping(draft.shipping || 'standard');
      setDiscount(draft.discount || 0);
      setCustomerName(draft.customerName || '');
    } else {
      setInvoiceId(generateInvoiceId());
      setDate(getTodayDate());
    }
  }, []);

  // Auto-save whenever state changes
  useEffect(() => {
    if (!invoiceId) return;
    saveDraft({ invoiceId, date, items, shipping, discount, customerName });
  }, [invoiceId, date, items, shipping, discount, customerName]);

  const addItem = useCallback((product, quantity) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        quantity,
      }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const qty = Math.max(1, parseInt(quantity) || 1);
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const reset = useCallback(() => {
    const newId = generateInvoiceId();
    const newDate = getTodayDate();
    setInvoiceId(newId);
    setDate(newDate);
    setItems([]);
    setShipping('standard');
    setDiscount(0);
    setCustomerName('');
    saveDraft({ invoiceId: newId, date: newDate, items: [], shipping: 'standard', discount: 0, customerName: '' });
  }, []);

  // Calculations
  const shippingCost = shipping === 'upper' ? 100 : 80;
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discountAmount = parseFloat(discount) || 0;
  const grandTotal = subtotal + shippingCost - discountAmount;

  return {
    invoiceId,
    date,
    items,
    shipping,
    setShipping,
    discount,
    setDiscount,
    customerName,
    setCustomerName,
    addItem,
    removeItem,
    updateQuantity,
    reset,
    subtotal,
    shippingCost,
    discountAmount,
    grandTotal,
    shippingLabel: shipping === 'upper' ? 'Upper Egypt (100 EGP)' : 'Standard (80 EGP)',
  };
}
