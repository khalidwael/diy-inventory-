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
  } catch {
    return null;
  }
  return null;
}

function saveDraft(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    return false;
  }
}

export function useInvoice() {
  const [draft] = useState(() => loadDraft());

  const [invoiceId, setInvoiceId] = useState(() => draft?.invoiceId || generateInvoiceId());
  const [date, setDate] = useState(() => draft?.date || getTodayDate());
  const [items, setItems] = useState(() => draft?.items || []);
  const [shipping, setShipping] = useState(() => draft?.shipping || 'standard'); // 'standard' | 'upper'
  const [discount, setDiscount] = useState(() => draft?.discount || 0);
  const [customerName, setCustomerName] = useState(() => draft?.customerName || '');

  // Track if we're editing an existing saved order (stores the Supabase row id)
  const [editingRowId, setEditingRowId] = useState(() => draft?.editingRowId || null);

  // Auto-save whenever state changes
  useEffect(() => {
    if (!invoiceId) return;
    saveDraft({ invoiceId, date, items, shipping, discount, customerName, editingRowId });
  }, [invoiceId, date, items, shipping, discount, customerName, editingRowId]);

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

  // Load an existing saved order into the active editor
  const loadOrder = useCallback((order) => {
    // Determine shipping mode from shipping_label or shipping_cost
    const shippingMode = order.shipping_cost === 100 || (order.shipping_label || '').toLowerCase().includes('upper')
      ? 'upper'
      : 'standard';

    setInvoiceId(order.invoice_id);
    setDate(order.date);
    setItems(order.items || []);
    setShipping(shippingMode);
    setDiscount(order.discount || 0);
    setCustomerName(order.customer_name || '');
    setEditingRowId(order.id); // Supabase row id
  }, []);

  // Import a parsed WhatsApp invoice (no Supabase row — treated as a new invoice)
  const importOrder = useCallback((parsed) => {
    setInvoiceId(parsed.invoiceId || generateInvoiceId());
    setDate(parsed.date || getTodayDate());
    setItems(parsed.items || []);
    setShipping(parsed.shipping || 'standard');
    setDiscount(parsed.discount || 0);
    setCustomerName(parsed.customerName || '');
    setEditingRowId(null); // imported invoices start fresh (no DB row yet)
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
    setEditingRowId(null);
    saveDraft({ invoiceId: newId, date: newDate, items: [], shipping: 'standard', discount: 0, customerName: '', editingRowId: null });
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
    loadOrder,
    importOrder,
    editingRowId,
    subtotal,
    shippingCost,
    discountAmount,
    grandTotal,
    shippingLabel: shipping === 'upper' ? 'Upper Egypt (100 EGP)' : 'Standard (80 EGP)',
  };
}
