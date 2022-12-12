export function renderSJDON(element) {
    let struct = document.createElement(element[0]);

    element.forEach(elem => {
        if (elem == element[0]){
            //if first element equals the program should just skip through here
        }
        else if (Array.isArray(elem)){
            let node = renderSJDON(elem)
            struct.appendChild(node)
        } else if (typeof elem === "string") {
            let txt = document.createTextNode(element)
            struct.appendChild(txt)
        } else if (typeof (elem) === "object" && !Array.isArray(elem)) {
            for (let attr in elem) {
                struct.setAttribute(attr, elem[attr])
            }
        }
    });
    return struct
}