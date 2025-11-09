// JSX every tag must be closed for input break self closing tag should be used

// export const Rule2 = () => {
//     return (
//         <form>
//             <input type="text">

//             <br />
//             <input type="text">
//         </form>
//     )
// }

export const Rule2 = () => {
    return (
        <form>
            <input type="text" />
            <br />
            <input type="text" />
        </form>
    )
}


// class is reserved key in js so class is replaced to className
// for is also for loop so it is replaced with htmlFor
// tabindex is replaced with tabIndex
// In React, JSX looks like HTML — but it’s actually JavaScript under the hood.
// So attributes are written as JavaScript object properties, not HTML attributes.

// export const Rule3 = () => {
//     return(
//         <form class="container">
//             <label for="username">User Name</label>
//             <input type="text" id="username" class="form-input" />
//              <label for="email">Email</label>
//             <input type="text" id="email" class="form-input" tabindex="1" />
//         </form>
//     )
// }

//must be in camelCase
export const Rule3 = () => {
    return(
        <form class="container">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" className="form-input" />
             <label htmlFor="email">Email</label>
            <input type="text" id="email" className="form-input" tabIndex="1" />
        </form>
    )
}

//pass value from var to jsx rule 4
export const Rule4 = () => {
    const name = 'Abhishek Yadav';
    const yearOfExp = 5;
    const isAvailable = true;
    const func = () => 'Function can be called too';
    return (
        <>
            <p>The applied user is {name}</p>
            <p>he had {yearOfExp} of Experience</p>
            <p>is he { isAvailable ? "Available": "Not Available"} for interview</p>
            <p> {func()} </p>
        </>
    )
}