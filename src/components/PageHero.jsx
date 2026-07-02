function PageHero({ title, crumb }) {
  return (
    <section className="page-hero">
      <div className="container text-center">
        <h1>{title}</h1>
        <div className="breadcrumb-nav mt-2">
          <a href="/">Home</a> <span className="mx-1">/</span> <span>{crumb}</span>
        </div>
      </div>
    </section>
  )
}

export default PageHero
