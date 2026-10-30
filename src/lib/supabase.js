import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL_KEY = 'diylab_supabase_url';
const SUPABASE_KEY_KEY = 'diylab_supabase_key';

function getCredentials() {
  return {
    url: import.meta.env.VITE_SUPABASE_URL || localStorage.getItem(SUPABASE_URL_KEY) || '',
    key: import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem(SUPABASE_KEY_KEY) || '',
  };
}

export function saveCredentials(url, key) {
  localStorage.setItem(SUPABASE_URL_KEY, url);
  localStorage.setItem(SUPABASE_KEY_KEY, key);
}

export function getStoredCredentials() {
  return getCredentials();
}

function getClient() {
  const { url, key } = getCredentials();
  if (!url || !key) return null;
  try {
    return createClient(url, key);
  } catch {
    return null;
  }
}

export async function saveOrder(invoice) {
  const client = getClient();
  if (!client) throw new Error('Supabase not configured. Add credentials in Settings.');

  const { data, error } = await client.from('orders').insert([{
    invoice_id: invoice.invoiceId,
    customer_name: invoice.customerName || 'Walk-in',
    date: invoice.date,
    items: invoice.items,
    subtotal: invoice.subtotal,
    shipping_cost: invoice.shippingCost,
    shipping_label: invoice.shippingLabel,
    discount: invoice.discountAmount,
    grand_total: invoice.grandTotal,
    created_at: new Date().toISOString(),
  }]).select();

  if (error) throw error;
  return data;
}

export async function updateOrder(rowId, invoice) {
  const client = getClient();
  if (!client) throw new Error('Supabase not configured. Add credentials in Settings.');

  const { data, error } = await client.from('orders').update({
    customer_name: invoice.customerName || 'Walk-in',
    date: invoice.date,
    items: invoice.items,
    subtotal: invoice.subtotal,
    shipping_cost: invoice.shippingCost,
    shipping_label: invoice.shippingLabel,
    discount: invoice.discountAmount,
    grand_total: invoice.grandTotal,
    updated_at: new Date().toISOString(),
  }).eq('id', rowId).select();

  if (error) throw error;
  return data;
}


export async function getOrders() {
  const client = getClient();
  if (!client) throw new Error('Supabase not configured.');

  const { data, error } = await client
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) throw error;
  return data;
}

export function isConfigured() {
  const { url, key } = getCredentials();
  return !!(url && key);
}
