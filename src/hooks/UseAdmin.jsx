// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

// const UseAdmin = () => {
//     const {user} = useContext(AuthContext)
//     const axiosSecure = useAxiosSecure()
//     const {data: isAdmin, isPending: isAdminLoading} = useQuery({
//         queryKey: [user?.email, 'isAdmin'],
//         queryFn: async() =>{
//             const res = await axiosSecure.get(`/users/admin/${user.email}`)
//             console.log(res.data);
//             return res.data?.admin;
//         }
//     })

//     return [isAdmin , isAdminLoading]
// };

// export default UseAdmin;


import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const UseAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading, isError, error } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            if (!user?.email) return false; // Skip query if user or email is not available
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log("Response data:", res.data);
            return res.data?.admin;
        },
        enabled: !!user?.email, // Only run query if user.email exists
        onError: (err) => {
            console.error("Error fetching admin status:", err);
        },
    });

    if (isError) {
        console.error("Query error:", error);
    }

    return [isAdmin, isAdminLoading];
};

export default UseAdmin;
