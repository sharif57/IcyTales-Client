/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Utility to fetch cart items
const fetchCartItems = async (email) => {
    const response = await axios.get(`https://icy-tales-backend.vercel.app/addCart/${email}`);
    return response.data;
};

// Reusable function to post an item to an endpoint
const postItem = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const { data: items = [], refetch } = useQuery({
        queryKey: ["cartItems", user?.email],
        queryFn: () => fetchCartItems(user?.email),
        enabled: !!user?.email,  // Only enable if user is logged in
    });

    // Handle adding item to cart
    const handlePost = (e, post) => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const title = post.title;
        const category = post.category || "General";
        const price = post.price;
        const currentTime = new Date();
        const photo = post.image || "";
        const description = post.description;
        const size = post.size || 'L';
        const quantity = post.quantity || 1;
        const color = post.color || 'white';

        const newPost = {
            name,
            email,
            size,
            image,
            quantity,
            color,
            title,
            category,
            price,
            currentTime,
            photo,
            description,
        };

        // Use reusable postItem function
        postItem("https://icy-tales-backend.vercel.app/addCart", newPost)
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Success!", "Item added to cart successfully", "success");
                    refetch();  // Refetch cart items after adding
                }
            })
            .catch((error) => {
                console.error("Error adding item to cart:", error);
                Swal.fire("Error!", "Failed to add item to cart", "error");
            });
    };

    // In CartContext.js
    // const handleDelete = (_id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     })
    //         .then((result) => {
    //             if (result.isConfirmed) {
    //                 axios
    //                     .delete(`https://icy-tales-backend.vercel.app/deleteItem/${_id}`)
    //                     .then((response) => {
    //                         if (response.data.deletedCount > 0) {
    //                             Swal.fire({
    //                                 title: "Deleted!",
    //                                 text: "Item deleted from cart. Happy shopping!",
    //                                 icon: "success"
    //                             });
    //                             refetch(); // Refetch cart items to update state
    //                         }
    //                     })
    //                     .catch((error) => {
    //                         console.error("Error deleting item from cart:", error);
    //                     });
    //             }
    //         });
    // };

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://icy-tales-backend.vercel.app/deleteItem/${_id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            refetch();
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting item:", error);
                        Swal.fire("Error!", "Failed to delete item.", "error");
                    });
            }
        });
    };


    return (
        <CartContext.Provider value={{ items, handlePost, handleDelete }}>
            {children}
        </CartContext.Provider>
    );
};
