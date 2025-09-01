export function toCSV(rows) {
if (!rows.length) return 'id,type,amount,category,date,note\n';
const header = ['id', 'type', 'amount', 'category', 'date', 'note'];
const escape = (v) => {
if (v === null || v === undefined) return '';
const s = String(v).replace(/"/g, '""');
return /[",\n]/.test(s) ? `"${s}"` : s;
};
const lines = [header.join(',')];
for (const r of rows) {
lines.push([
escape(r._id),
escape(r.type),
escape(r.amount),
escape(r.category),
escape(new Date(r.date).toISOString().slice(0, 10)),
escape(r.note)
].join(','));
}
return lines.join('\n') + '\n';
}
