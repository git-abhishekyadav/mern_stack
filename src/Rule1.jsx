
//Rule 1 
// can't have two different element should be wrapped into the parent component
//just like object wrapped into array
// returnin 2 or more object is not allowed so is react

// export const Parent = () => {
//     return (
//         <h1>Hello </h1>
//         <p>Hello</p>
//     )
// }


export const Fragment = () => {
    return (
        <React.Fragment>
            <h1>To avoid wrapper like div</h1>
            <p>which can interefere or duplicate in html</p>
            <p>we wrap it into React.Fragment</p>
        </React.Fragment>
    )
}

export const BetterWay = () => {
    return (
        <>
            <p>To ease we can remove the React.Fragment</p>
        </>
    )
}