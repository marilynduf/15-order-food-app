export default function Button({ children, textOnly, className, ...props }) {
    let cssClasse = textOnly ? "text-button" : "button";
    cssClasse += " " + className;
    return (
        <button className={cssClasse} {...props}>
            {children}
        </button>
    );
}
