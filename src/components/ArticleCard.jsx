const formatDate = (date) =>
  new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

function ArticleCard({ article, onCategoryClick, activeCategories }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden bg-stone-200">
        <img
          src={article.image}
          alt={article.titre}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {article.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryClick(cat)}
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold transition ${
                activeCategories.includes(cat)
                  ? 'bg-amber-500 text-white'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 className="font-display text-xl font-semibold leading-snug text-stone-900">
          {article.titre}
        </h2>

        <p className="line-clamp-3 text-sm leading-relaxed text-stone-600">{article.texte}</p>

        <div className="flex flex-wrap gap-1.5">
          {article.motsCles.map((mot) => (
            <span key={mot} className="text-xs text-stone-400">
              #{mot}
            </span>
          ))}
        </div>

        <footer className="mt-auto flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
          <span className="font-medium text-stone-700">{article.auteur}</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </footer>
      </div>
    </article>
  )
}

export default ArticleCard
