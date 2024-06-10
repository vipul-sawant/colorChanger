const addToContainer = (container, colors, createButtonFunc) =>{
    // console.log(c)
    colors.forEach((color)=>{
        createButtonFunc(container, color);
    });
};

export { addToContainer };