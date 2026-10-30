// Hand-written examples for components whose props can't be inferred from types.
// Each key lists variants; a variant is { name, props } or { name, render, code }.
import { DataTable } from '@repo/src/components/table'
import { mock } from '@repo/src/mocks/data'

const columns = [
  { key: 'id', header: 'Order' },
  { key: 'customer', header: 'Customer', sortable: true },
  { key: 'product', header: 'Product' },
  { key: 'status', header: 'Status' },
  { key: 'amount', header: 'Amount', align: 'right', sortable: true, render: (r) => `CHF ${r.amount}` },
]
const base = { columns, rows: mock.orders, rowKey: (r) => r.id }

export default {
  DataTable: [
    { name: 'Default', render: () => <DataTable {...base} pageSize={5} />, code: '<DataTable columns={columns} rows={orders} rowKey={(r) => r.id} pageSize={5} />' },
    { name: 'searchable', render: () => <DataTable {...base} pageSize={5} searchable />, code: '<DataTable columns={columns} rows={orders} rowKey={(r) => r.id} searchable />' },
    { name: 'selectable', render: () => <DataTable {...base} pageSize={5} selectable />, code: '<DataTable columns={columns} rows={orders} rowKey={(r) => r.id} selectable />' },
  ],
}
