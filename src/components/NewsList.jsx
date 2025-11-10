const NewsList = (props) => { 

    return (
        <>
            {
                props.news.map(item => (
                    <div key={item.id}>

                        <h3>{item.title}</h3>
                        <p>{item.feed}</p> 
                    </div>
                ))
            }
        </>
    )
}

export default NewsList