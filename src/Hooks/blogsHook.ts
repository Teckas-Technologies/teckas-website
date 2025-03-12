import { useState } from "react";
import axios, { AxiosError } from "axios";

export interface Blog {
    _id?: string;
    title: string;
    imageUrl: string;
    subTitle: string;
    content: string;
    uploadedAt?: string;
    blogType: string;
    readTime?: number;
}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);

    const fetchBlogs = async ({
        page = 1,
        limit = 9,
        search,
        blogType,
    }: {
        page?: number;
        limit?: number;
        search?: string;
        blogType?: string;
    }) => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString(),
            });

            if (search) queryParams.append("search", search);
            if (blogType) queryParams.append("blogType", blogType);

            const { data } = await axios.get(`https://teckas-website-backend.vercel.app/api/blogs?${queryParams.toString()}`);

            setBlogs((prevBlogs) => {
                const newBlogs = data.blogs.filter(
                    (newBlog: Blog) => !prevBlogs.some((prevBlog) => prevBlog._id === newBlog._id)
                );
                return [...prevBlogs, ...newBlogs];
            });

            setTotalPages(data.totalPages);
            setError(null);
            return data;
        } catch (err) {
            setError((err as AxiosError).message);
        } finally {
            setLoading(false);
        }
    };

    const fetchBlogById = async (id: string) => {
        try {
            const { data } = await axios.get(`https://teckas-website-backend.vercel.app/api/blogs/${id}`);
            return data
        } catch (err) {
            setError((err as AxiosError).message);
            return { success: false, message: (err as AxiosError).message };
        }
    };

    const createBlog = async (blog: Blog) => {
        try {
            const { data } = await axios.post<Blog>("https://teckas-website-backend.vercel.app/api/blogs", blog);
            setBlogs((prev) => [...prev, data]);
            return { success: true, data, message: "Blog created successfully!" };
        } catch (err) {
            setError((err as AxiosError).message);
            return { success: false, message: (err as AxiosError).message };
        }
    };

    const updateBlog = async (id: string, updates: Partial<Blog>) => {
        try {
            const { data } = await axios.put<Blog>(`https://teckas-website-backend.vercel.app/api/blogs/${id}`, updates);
            setBlogs((prev) =>
                prev.map((blog) => (blog._id === id ? { ...blog, ...data } : blog))
            );
            return { success: true, data, message: "Blog updated successfully!" };
        } catch (err) {
            setError((err as AxiosError).message);
            return { success: false, message: (err as AxiosError).message };
        }
    };

    const deleteBlog = async (id: string) => {
        try {
            await axios.delete(`https://teckas-website-backend.vercel.app/api/blogs/${id}`);
            setBlogs((prev) => prev.filter((blog) => blog._id !== id));
            return { success: true, message: "Blog deleted successfully!" };
        } catch (err) {
            setError((err as AxiosError).message);
            return { success: false, message: (err as AxiosError).message };
        }
    };

    return { blogs, loading, error, createBlog, updateBlog, deleteBlog, fetchBlogs, fetchBlogById, totalPages, setBlogs };
};
