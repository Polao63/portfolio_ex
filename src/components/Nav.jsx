function Nav({data, curId, onChangeMode}){
  console.log("curID: " + curId);
  const lists = data.map(work => (
    <li key={work.id} className={work.id === curId ? "active" : ""}>
      <button type="button"
         onClick={e => {
          e.preventDefault();
          onChangeMode(work.id);
        }
      }>
        {work.title}
      </button>
    </li>
  ))

  return (
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
  )
}

export default Nav