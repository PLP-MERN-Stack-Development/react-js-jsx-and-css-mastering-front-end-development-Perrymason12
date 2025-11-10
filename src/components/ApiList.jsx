import React, { useEffect, useState } from 'react'
import Button from './Button'

const PER_PAGE = 8

const ApiList = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        if (mounted) setItems(data)
      })
      .catch((err) => {
        if (mounted) setError(err.message || 'Failed to fetch')
      })
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [])

  const filtered = items.filter((it) => it.title.toLowerCase().includes(query.toLowerCase()) || it.body.toLowerCase().includes(query.toLowerCase()))
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  useEffect(() => {
    if (page > totalPages) setPage(1)
  }, [totalPages, page])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">API Data (Posts)</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
        <Button variant="secondary" onClick={() => { setQuery(''); setPage(1) }}>Clear</Button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          <ul className="space-y-3">
            {pageItems.map((post) => (
              <li key={post.id} className="border rounded p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">Page {page} of {totalPages}</p>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
              <Button variant="primary" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ApiList
