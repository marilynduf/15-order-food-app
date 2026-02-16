import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: "",
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export const UserProgressContextProvider = function ({ children }) {
    const [userProgress, setUserProgress] = useState("");

    const showCart = function () {
        setUserProgress("cart");
    };
    const hideCart = function () {
        setUserProgress("");
    };
    const showCheckout = function () {
        setUserProgress("checkout");
    };
    const hideCheckout = function () {
        setUserProgress("");
    };
    const UserProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };

    return (
        <UserProgressContext.Provider value={UserProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
};

export default UserProgressContext;
