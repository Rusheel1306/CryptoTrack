function Loader() {
  return (
    <div className="flex min-h-48 items-center justify-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-sky-500" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loader
