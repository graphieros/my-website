function add_gallery_component({
    size,
    contentIdentity,
    title,
    className,
    color,
    background,
    fontFamily,
    fontSize,
    parentId
}) {

    size = size || '200px';

    color = color || 'rgb(0,0,0)';
    background = background || 'transparent';
    fontFamily = fontFamily || "'Courier New', Courier, monospace";
    fontSize = fontSize || '1em';
    title = title || 'give me a title';

    let created_element = document.createElement("DIV");
    created_element.className = className;
    created_element.style.color = color;
    created_element.style.background = background;
    created_element.style.fontFamily = fontFamily;
    created_element.style.fontSize = fontSize;
    created_element.style.boxSizing = 'border-box';
    created_element.style.padding = "20px";
    created_element.style.height = size;
    created_element.style.width = size;
    created_element.style.display = "grid";
    created_element.style.justifyItems = "center";
    created_element.style.alignItems = "center";
    created_element.style.borderRadius = "2px";
    created_element.style.cursor = "pointer";

    let created_title = document.createElement("SPAN");
    created_title.innerHTML = title;
    created_title.style.display = 'block';
    created_title.style.marginTop = '-70px';
    created_title.style.width = '100%';
    created_title.style.textAlign = 'center';

    let content = document.createElement("DIV");
    content.id = contentIdentity;
    content.style.display = 'grid';
    content.style.alignItems = 'center';
    content.style.justifyItems = 'center';

    created_element.appendChild(created_title);
    created_element.appendChild(content);

    let target_parent = document.getElementById(parentId);
    target_parent.appendChild(created_element);

}

export { add_gallery_component };