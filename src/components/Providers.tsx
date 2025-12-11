import CartProvider from "../context/CartProvider";
import UserProvider from "../context/UserProvider";
import AlertProvider from "../context/AlertProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserProvider>
            <CartProvider>
                <AlertProvider>{children}</AlertProvider>
            </CartProvider>
        </UserProvider>
    );
};

export default Providers;
