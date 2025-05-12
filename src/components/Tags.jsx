function Tags({ tags }){
    return (
        tags.map((tag, i) => (
            <span key={`tag-${i}`} className="bg-blue-600/15 text-[10px] text-blue-600 rounded-xs px-1.5 py-0.5">{tag}</span>
        ))   
    )
}

export default Tags;