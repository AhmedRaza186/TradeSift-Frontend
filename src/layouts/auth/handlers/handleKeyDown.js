export const handleFormNavigation = (
    e,
    onLastElement
) => {
    const form = e.target.form;
    const elements = Array.from(form.elements).filter((el) => {
        if (el.disabled || el.tabIndex === -1) return false;

        // Inputs, selects and textareas
        if ((el.tagName === 'INPUT' && el.type !== 'checkbox') || (["SELECT", "TEXTAREA"].includes(el.tagName)))
            return true;


        // Only include submit button
        if (el.tagName === "BUTTON" && el.type === "submit")
            return true;

        return false;
    });

    const index = elements.indexOf(e.target);

    switch (e.key) {
        case "Enter":
        case "ArrowDown":
            e.preventDefault();
            if (index < elements.length - 1) {
                elements[index + 1].focus();
            } else {
                onLastElement();
            }
            break;

        case "ArrowUp":
            e.preventDefault();
            if (index > 0) {
                elements[index - 1].focus();
            }
            break;
    }
};