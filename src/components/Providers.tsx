import { type FC } from "react";
import CartProvider from "../context/CartProvider";
import UserProvider from "../context/UserProvider";
import AlertProvider from "../context/AlertProvider";

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>
                <AlertProvider>{children}</AlertProvider>
            </CartProvider>
        </UserProvider>
    );
};

export default Providers;
