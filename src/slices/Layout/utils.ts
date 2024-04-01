const changeBodyAttribute = (attribute: any, value: any) => {
    if (document.body) document.body.setAttribute(attribute, value);
    return true;
}

const manageBodyClass = (cssClass: string, action = "toggle") => {
    switch (action) {
        case "add":
            if (document.body) document.body.classList.add(cssClass)
            break
        case "remove":
            if (document.body) document.body.classList.remove(cssClass)
            break
        default:
            if (document.body) document.body.classList.toggle(cssClass)
            break
    }

    return true
}

const formatDecimals = (paylodObj: any) => {
    for (const [key, value] of Object.entries(paylodObj)) {
        if (typeof value == 'number' && value % 1 != 0) paylodObj[key] = value.toFixed(2)     
    }
    return paylodObj
}

export { changeBodyAttribute, manageBodyClass, formatDecimals };